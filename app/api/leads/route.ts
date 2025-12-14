import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

interface LeadData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  business_name?: string;
  business_size: string; // keep flexible unless you enforce exact values in UI
  city: string;
  state: string;
  service_interest: string;
  preferred_contact_method: string;
  preferred_time_window: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LeadData;

    // Validation
    const errors: string[] = [];

    if (!body.first_name?.trim()) errors.push("First name is required");
    if (!body.last_name?.trim()) errors.push("Last name is required");
    if (!body.email?.trim() || !isValidEmail(body.email)) errors.push("Valid email is required");
    if (!body.phone?.trim()) errors.push("Phone is required");
    if (!body.city?.trim()) errors.push("City is required");
    if (!body.state?.trim()) errors.push("State is required");
    if (!body.service_interest?.trim()) errors.push("Service interest is required");
    if (!body.preferred_contact_method?.trim()) errors.push("Preferred contact method is required");
    if (!body.preferred_time_window?.trim()) errors.push("Preferred time window is required");

    if (errors.length > 0) {
      return NextResponse.json({ error: "Validation failed", details: errors }, { status: 400 });
    }

    // ✅ Save to Supabase
    const { error } = await supabase.from("leads").insert([
      {
        first_name: body.first_name.trim(),
        last_name: body.last_name.trim(),
        email: body.email.trim(),
        phone: body.phone.trim(),
        business_name: body.business_name?.trim() || null,
        business_size: body.business_size,
        city: body.city.trim(),
        state: body.state.trim(),
        service_interest: body.service_interest.trim(),
        preferred_contact_method: body.preferred_contact_method.trim(),
        preferred_time_window: body.preferred_time_window.trim(),
        message: body.message?.trim() || null,
        source: "website",
        status: "new",
        // created_at is handled by default now() in DB
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save lead." }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: "Thank you for your submission. We will contact you shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
