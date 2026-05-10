export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          A/B Test Prompt Templates.<br />
          <span className="text-[#58a6ff]">Rank What Actually Works.</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Send the same query through multiple prompt templates across AI providers, compare outputs side-by-side, and surface the highest-performing variants with custom scoring.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Testing Prompts — $39/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card lock-in.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-6 mb-24">
        {[
          { icon: "⚡", title: "Parallel Runs", desc: "Fire the same query through all templates simultaneously and collect results in seconds." },
          { icon: "📊", title: "Custom Scoring", desc: "Define your own rubric — relevance, tone, length, accuracy — and auto-rank every variant." },
          { icon: "📈", title: "Performance History", desc: "Track which templates win over time and spot regressions before they reach production." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited prompt templates",
              "A/B tests across GPT-4, Claude, Gemini",
              "Custom scoring rubrics",
              "Performance history & trend charts",
              "CSV export of all results",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which AI providers are supported?",
              a: "PromptRanker works with OpenAI (GPT-4o, GPT-4), Anthropic (Claude 3.5), and Google (Gemini 1.5 Pro). You bring your own API keys — we never store them."
            },
            {
              q: "How does the scoring system work?",
              a: "You define weighted criteria (e.g. relevance 40%, conciseness 30%, tone 30%). Each output is scored automatically using an LLM judge, then ranked. You can override scores manually."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} PromptRanker. All rights reserved.
      </footer>
    </main>
  );
}
