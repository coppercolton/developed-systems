import { Mic, Play, CheckCircle2, Shield, Calendar, Phone, ArrowRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-slate-900 text-white p-1.5 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M2 20h20" /><path d="M5 20V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15" /><path d="M10 9h4" /><path d="M10 13h4" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">DevelopedSystems</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors">How it works</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            </div>
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full font-medium hover:bg-slate-800 transition-colors">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-700">Live: AI Receptionists Active Now</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Never Miss a <br className="hidden md:block" />Customer Call Again
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              The 24/7 AI Receptionist that books appointments, answers questions, and captures leads while you focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-emerald-200 w-full sm:w-auto">
                <Mic className="w-5 h-5 animate-pulse" />
                Talk to AI Now
              </button>
              <button className="group flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-900 text-lg font-semibold px-8 py-4 rounded-full border border-slate-200 transition-all hover:border-slate-300 w-full sm:w-auto">
                <Play className="w-5 h-5 fill-current" />
                Watch Demo
              </button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-slate-400" /> Secure Data
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 5-Star Rated
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> GDPR Compliant
              </div>
            </div>
          </div>

          {/* Device Mockup */}
          <div className="relative mx-auto max-w-5xl">
            <div className="bg-slate-900 rounded-2xl p-2 sm:p-4 shadow-2xl ring-1 ring-slate-900/10">
              <div className="bg-slate-800 rounded-xl overflow-hidden aspect-[16/9] relative flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 to-transparent z-10"></div>
                {/* Dashboard UI Mockup Background */}
                <div className="absolute inset-0 grid grid-cols-4 gap-4 p-8 opacity-40">
                  <div className="bg-white/10 rounded-lg col-span-1 h-full"></div>
                  <div className="bg-white/5 rounded-lg col-span-3 h-full grid grid-rows-3 gap-4">
                    <div className="bg-white/10 rounded-lg row-span-2"></div>
                    <div className="bg-white/10 rounded-lg row-span-1"></div>
                  </div>
                </div>
                <div className="z-20 flex flex-col items-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform mb-4">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                  <span className="text-white font-medium">See how it works</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Empower Your Front Desk</h2>
            <p className="text-lg text-slate-600">Replaces the noise of a ringing phone with the quiet confidence of a completed booking.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-6 h-6 text-blue-600" />,
                title: "24/7 Availability",
                desc: "Never let a call go to voicemail. DevelopedSystems answers every call, day or night, ensuring you capture 100% of leads."
              },
              {
                icon: <Calendar className="w-6 h-6 text-emerald-500" />,
                title: "Instant Scheduling",
                desc: "The AI integrates directly with your calendar to book appointments in real-time while you work."
              },
              {
                icon: <Shield className="w-6 h-6 text-indigo-500" />,
                title: "Spam Filtering",
                desc: "Smart filtering screens out robocalls and solicitors so your phone only rings for paying customers."
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 border border-slate-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Setup is simpler than hiring</h2>
                <p className="text-lg text-slate-600">Get your AI receptionist running in minutes, not weeks.</p>
              </div>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Connect your number", desc: "Forward your existing business line or get a new smart number." },
                  { step: "02", title: "Train your agent", desc: "Upload your website or FAQ doc. The AI learns your business instantly." },
                  { step: "03", title: "Go Live", desc: "Start converting missed calls into booked revenue immediately." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl font-bold text-slate-200">{item.step}</span>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Start your setup <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="space-y-4">
                  {/* Chat Mockup */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs">👤</div>
                    <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-sm text-slate-600 max-w-[80%]">
                      Do you fulfill orders on weekends?
                    </div>
                  </div>
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white">AI</div>
                    <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none text-sm text-white max-w-[80%]">
                      Yes! We deliver 7 days a week. Would you like to check our availability for this Saturday?
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs">👤</div>
                    <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none text-sm text-slate-600 max-w-[80%]">
                      That would be great.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to install your system?</h2>
          <p className="text-xl text-slate-300 mb-10">Join 500+ businesses who have automated their front desk.</p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-emerald-900/20">
            Get Started Free
          </button>
          <p className="mt-6 text-sm text-slate-400">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 text-white p-1 rounded-md">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20h20" /><path d="M5 20V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15" /><path d="M10 9h4" /><path d="M10 13h4" />
              </svg>
            </div>
            <span className="font-bold text-slate-900">DevelopedSystems</span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2024 DevelopedSystems Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
