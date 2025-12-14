import { Award, Shield, CheckCircle, TrendingUp } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Award,
      text: 'Certified Tax Advisor'
    },
    {
      icon: Shield,
      text: '20+ Years Experience'
    },
    {
      icon: CheckCircle,
      text: '98% Client Satisfaction'
    },
    {
      icon: TrendingUp,
      text: '$5M+ Savings Generated'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className="group relative bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg p-4 hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-slate-800/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative flex flex-col items-center text-center gap-2">
            <badge.icon className="w-8 h-8 text-lime-500 group-hover:scale-110 transition-transform" />
            <p className="text-xs font-semibold text-slate-700">{badge.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
