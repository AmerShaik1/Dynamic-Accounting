import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { Resend } from "resend";

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

const resend =
  process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LeadData;

    // Validation
    const errors: string[] = [];

    if (!body.first_name?.trim()) errors.push("First name is required");
    if (!body.last_name?.trim()) errors.push("Last name is required");
    if (!body.email?.trim() || !isValidEmail(body.email))
      errors.push("Valid email is required");
    if (!body.phone?.trim()) errors.push("Phone is required");
    if (!body.city?.trim()) errors.push("City is required");
    if (!body.state?.trim()) errors.push("State is required");
    if (!body.service_interest?.trim()) errors.push("Service interest is required");
    if (!body.preferred_contact_method?.trim())
      errors.push("Preferred contact method is required");
    if (!body.preferred_time_window?.trim())
      errors.push("Preferred time window is required");

    if (errors.length > 0) {
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      );
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
        // created_at handled by default now() in DB
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save lead." }, { status: 500 });
    }

    // ✅ Send notification email via Resend (do not fail the request if email fails)
    try {
      const notifyTo = process.env.NOTIFY_EMAIL;
      const fromEmail = process.env.FROM_EMAIL || "TaxPro360 <onboarding@resend.dev>";

      if (!resend) {
        console.warn("RESEND_API_KEY is not set. Skipping email notification.");
      } else if (!notifyTo) {
        console.warn("NOTIFY_EMAIL is not set. Skipping email notification.");
      } else {
        await resend.emails.send({
          from: fromEmail,
          to: ["sk@taxpro360.net"],
          subject: "New consultation request from TaxPro360 website",
          text: `
New lead from TaxPro360 website:

Name: ${body.first_name} ${body.last_name}
Email: ${body.email}
Phone: ${body.phone}

Business name: ${body.business_name || "-"}
Business size: ${body.business_size || "-"}

City/State: ${body.city || "-"}, ${body.state || "-"}

Service interest: ${body.service_interest || "-"}

Preferred contact: ${body.preferred_contact_method || "-"}
Preferred time: ${body.preferred_time_window || "-"}

Message:
${body.message || "-"}
          `.trim(),
        });
      }
    } catch (emailError) {
      console.error("Resend email error:", emailError);
      // Don't block the user response if email fails
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
