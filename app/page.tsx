import Image from "next/image";

function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="OhMyToken"
    >
      <rect x="10" y="10" width="13" height="13" rx="2" fill="#22d3ee" opacity="0.3" />
      <rect x="25.5" y="10" width="13" height="13" rx="2" fill="#3b82f6" opacity="0.55" />
      <rect x="41" y="10" width="13" height="13" rx="2" fill="#6366f1" opacity="0.75" />
      <rect x="10" y="25.5" width="13" height="13" rx="2" fill="#3b82f6" opacity="0.6" />
      <rect x="25.5" y="25.5" width="13" height="13" rx="2" fill="#a78bfa" opacity="1" />
      <rect x="41" y="25.5" width="13" height="13" rx="2" fill="#8b5cf6" opacity="0.85" />
      <rect x="10" y="41" width="13" height="13" rx="2" fill="#22d3ee" opacity="0.4" />
      <rect x="25.5" y="41" width="13" height="13" rx="2" fill="#6366f1" opacity="0.65" />
      <rect x="41" y="41" width="13" height="13" rx="2" fill="#a78bfa" opacity="0.5" />
    </svg>
  );
}

const REPO_URL = "https://github.com/mercleodev/ohmytoken";

export default function HomePage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <LogoMark size={28} />
            <span className="font-bold text-white tracking-tight">OhMyToken</span>
          </a>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#why" className="hover:text-white transition">Why</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#install" className="hover:text-white transition">Install</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href={REPO_URL} className="hover:text-white transition flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.65-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12 12 0 0024 12C24 5.37 18.63 0 12 0z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-24 grid-pattern overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mono text-xs text-gray-400 mb-6">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-400" />
              </span>
              v0.1.0 · macOS · Apache-2.0
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.05]">
              Track AI coding agents
              <br />
              <span className="gradient-text">locally — no account needed.</span>
            </h1>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              A privacy-first usage monitor for Claude, Codex, and Gemini.
              Starts tracking the moment you run a CLI session. No login, no OAuth, no cloud sync.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#install"
                className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition shadow-lg shadow-white/10"
              >
                Download for macOS
              </a>
              <a
                href={REPO_URL}
                className="px-6 py-3 rounded-lg border border-white/15 hover:bg-white/5 transition flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.65-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12 12 0 0024 12C24 5.37 18.63 0 12 0z" />
                </svg>
                View on GitHub
              </a>
            </div>
            <p className="mt-6 text-xs text-gray-500 mono">free · open source · Node 22 + Electron 28</p>
          </div>

          <div className="mt-20 mx-auto max-w-5xl">
            <div className="relative rounded-xl border border-white/10 bg-gray-950/50 backdrop-blur-sm overflow-hidden glow">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/40">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="ml-4 text-xs text-gray-500 mono">OhMyToken — Dashboard</div>
              </div>
              <div className="placeholder-screenshot aspect-[16/9]">
                [ HERO SCREENSHOT ]<br />
                Dashboard main — 3-provider unified view (dark)
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mono text-xs text-blue-400 mb-3 tracking-wider">/ WHY</div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Built differently from the start.</h2>
            <p className="text-gray-400">Three things that set it apart.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="surface-card p-8">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Start tracking in one step</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Watches your provider&apos;s local session logs as you work. No account hookup needed to see cost, context, and prompt history.</p>
            </div>
            <div className="surface-card p-8">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Local-only by default</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Every byte stays on your machine. SQLite on disk, no telemetry, no remote sync. Connect a provider account later if you want plan quotas.</p>
            </div>
            <div className="surface-card p-8">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Three providers, one view</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Claude, Codex, and Gemini — side by side. Cost, context, cache growth, and prompt heatmap, unified.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mono text-xs text-purple-400 mb-3 tracking-wider">/ FEATURES</div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">A complete picture of every prompt.</h2>
            <p className="text-gray-400">Where your tokens went, when, and what they cost.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="surface-card overflow-hidden">
              <div className="placeholder-screenshot aspect-[4/3]">[ Cost cards — today / 30d ]</div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Cost breakdown</h3>
                <p className="text-sm text-gray-400">Today and rolling 30-day cost in USD, broken down per provider.</p>
              </div>
            </div>
            <div className="surface-card overflow-hidden">
              <div className="placeholder-screenshot aspect-[4/3]">[ 365-day prompt heatmap ]</div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Prompt heatmap</h3>
                <p className="text-sm text-gray-400">365-day calendar of every prompt you sent, color-graded by intensity.</p>
              </div>
            </div>
            <div className="surface-card overflow-hidden">
              <div className="placeholder-screenshot aspect-[4/3]">[ Cache growth chart with compaction markers ]</div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Cache growth chart</h3>
                <p className="text-sm text-gray-400">Cache-read vs cache-create over time. Compaction events marked inline.</p>
              </div>
            </div>
            <div className="surface-card overflow-hidden">
              <div className="placeholder-screenshot aspect-[4/3]">[ Cost treemap by prompt ]</div>
              <div className="p-6">
                <h3 className="font-semibold mb-2">Cost treemap</h3>
                <p className="text-sm text-gray-400">Visual breakdown of where your tokens went, prompt by prompt.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {[
              { title: "MCP insights", body: "Tool-call analysis per session." },
              { title: "Session alerts", body: "Cache explosion, low efficiency, long-session warnings." },
              { title: "Guardrail scoring", body: "Evidence-based assessment of prompt quality." },
              { title: "Backfill engine", body: "Recover historical usage from session logs." },
              { title: "Token composition", body: "Cache-read / cache-create / input / output split." },
              { title: "Tray quick view", body: "Live status from the menu bar — never leaves your eye." },
            ].map((card) => (
              <div key={card.title} className="surface-card p-5">
                <h4 className="font-semibold text-sm mb-1.5">{card.title}</h4>
                <p className="text-xs text-gray-500">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mono text-xs text-green-400 mb-3 tracking-wider">/ HOW IT WORKS</div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">From cold install to live data.</h2>
            <p className="text-gray-400">Three tracking states. No account required for any of them.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-gray-700 via-blue-400 to-green-400" />
            {[
              { step: 1, color: "bg-gray-700", state: "not_enabled", body: "App is installed. Pick a provider on the onboarding screen." },
              { step: 2, color: "bg-blue-500", state: "waiting_for_activity", body: "Watcher is up. Run any prompt in the CLI to seed the dashboard." },
              { step: 3, color: "bg-green-500", state: "active", body: "Live tracking. Cost, context, history, analytics — all populated." },
            ].map((item) => (
              <div key={item.step} className="surface-card p-6 text-center relative">
                <div className={`w-8 h-8 rounded-full ${item.color} mx-auto mb-4 flex items-center justify-center text-xs mono font-bold relative z-10`}>{item.step}</div>
                <h3 className="font-semibold mb-2 mono text-sm">{item.state}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 mt-8">
            Connect a provider account later from <span className="mono text-gray-400">Settings → Connections</span> to add plan quotas, weekly windows, and credit balance on top.
          </p>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mono text-xs text-orange-400 mb-3 tracking-wider">/ PROVIDERS</div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Deep tracking for the three CLIs you actually use.</h2>
            <p className="text-gray-400">Not 16 providers shallow — three deep.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="surface-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mono text-orange-400 text-lg">✺</div>
                <div>
                  <h3 className="font-semibold">Claude</h3>
                  <p className="text-xs text-gray-500 mono">Anthropic</p>
                </div>
              </div>
              <ul className="text-xs text-gray-400 space-y-1.5 mono">
                <li className="text-green-400">✓ Session log watcher</li>
                <li className="text-green-400">✓ Proxy capture</li>
                <li className="text-gray-500">○ Plan quota (optional)</li>
                <li className="text-gray-500">○ Credit balance (optional)</li>
              </ul>
            </div>
            <div className="surface-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mono text-blue-400 text-lg">◎</div>
                <div>
                  <h3 className="font-semibold">Codex</h3>
                  <p className="text-xs text-gray-500 mono">OpenAI</p>
                </div>
              </div>
              <ul className="text-xs text-gray-400 space-y-1.5 mono">
                <li className="text-green-400">✓ Session log watcher</li>
                <li className="text-green-400">✓ Proxy capture</li>
                <li className="text-gray-500">○ Plan quota (optional)</li>
                <li className="text-gray-500">○ Credit balance (optional)</li>
              </ul>
            </div>
            <div className="surface-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mono text-purple-400 text-lg">◆</div>
                <div>
                  <h3 className="font-semibold">Gemini</h3>
                  <p className="text-xs text-gray-500 mono">Google</p>
                </div>
              </div>
              <ul className="text-xs text-gray-400 space-y-1.5 mono">
                <li className="text-yellow-400">~ Session watcher (planned)</li>
                <li className="text-green-400">✓ Proxy capture</li>
                <li className="text-gray-500">○ Plan quota (optional)</li>
                <li className="text-gray-500">○ Credit balance (optional)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block mono text-xs text-green-400 mb-3 tracking-wider">/ PRIVACY</div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Privacy by design, not by promise.</h2>
            <p className="text-gray-400">Auditable. Local. Zero telemetry.</p>
          </div>
          <div className="surface-card p-8 space-y-6">
            {[
              { title: "Local SQLite, no remote sync", body: "All usage data lands in a local DB on your machine. Nothing is sent to any external server." },
              { title: "Zero telemetry", body: "No analytics, no event beacons, no anonymous metrics. The app does not phone home." },
              { title: "Reads only known paths", body: "Watches ~/.claude, ~/.codex/sessions, and provider auth files. No filesystem crawl." },
              { title: "Loopback proxy only", body: "The proxy lives on localhost:8780. Off-machine traffic is never inspected." },
            ].map((row) => (
              <div key={row.title} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{row.title}</h3>
                  <p className="text-sm text-gray-400">{row.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="install" className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block mono text-xs text-blue-400 mb-3 tracking-wider">/ INSTALL</div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Pick the path that matches your setup.</h2>
            <p className="text-gray-400">macOS 12+, Node 22 if building from source.</p>
          </div>
          <div className="space-y-4">
            <div className="surface-card p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">macOS DMG</h3>
                <span className="text-xs mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">recommended</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Latest signed DMG from GitHub Releases.</p>
              <a
                href={`${REPO_URL}/releases/latest`}
                className="block bg-black/40 border border-white/5 rounded p-3 mono text-sm text-blue-400 hover:bg-black/60 transition"
              >
                ↓ {REPO_URL.replace("https://", "")}/releases/latest
              </a>
            </div>
            <div className="surface-card p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Homebrew (QA channel)</h3>
                <span className="text-xs mono px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">pre-release</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">QA-grade tap, refreshed alongside pre-releases. Stable cask coming with v1.0.</p>
              <div className="bg-black/40 border border-white/5 rounded p-3 mono text-sm text-gray-300">
                <span className="text-gray-500">$</span> brew tap mercleodev/tap &amp;&amp; brew install --cask ohmytoken
              </div>
            </div>
            <div className="surface-card p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Build from source</h3>
                <span className="text-xs mono px-2 py-0.5 rounded-full bg-gray-500/10 text-gray-400 border border-gray-500/20">Node 22+</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">Clone the repo and run an Electron dev session.</p>
              <div className="bg-black/40 border border-white/5 rounded p-4 mono text-sm text-gray-300 space-y-1.5">
                <div><span className="text-gray-500">$</span> git clone {REPO_URL}.git</div>
                <div><span className="text-gray-500">$</span> cd ohmytoken &amp;&amp; nvm use 22 &amp;&amp; npm install</div>
                <div><span className="text-gray-500">$</span> npm run electron:dev</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block mono text-xs text-pink-400 mb-3 tracking-wider">/ FAQ</div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Common questions.</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "Why local-only?", a: "Token usage data tells a lot about what you're working on. Sending it to a server you don't own is the wrong default. Local-first means you can audit every byte." },
              { q: "Do I have to connect a provider account?", a: "No. Runtime tracking starts the moment you run a CLI session — no auth, no OAuth. Account connection is optional and only adds plan-quota and credit-balance views on top." },
              { q: "Does it work without the proxy?", a: "Yes for Claude and Codex (session log watchers cover both). The proxy adds real-time SSE capture and is currently required to track Gemini." },
              { q: "How does this compare to ccusage / CodexBar?", a: "CodexBar is a thin menu-bar limit display across many providers. ccusage is a CLI usage scanner. OhMyToken is a full dashboard — heatmap, treemap, cache analysis, evidence scoring — focused on the three providers you spend most of your day in." },
              { q: "Why Apache-2.0 and not MIT?", a: "Apache-2.0 includes an explicit patent grant that better fits a tool that handles AI provider traffic. MIT works fine; Apache-2.0 is slightly stricter on attribution and provides patent clarity." },
              { q: "What's on the roadmap?", a: "Dedicated Gemini session watcher, terminal HUD plugin, broader provider coverage, and Windows/Linux ports based on community demand." },
            ].map((item) => (
              <details key={item.q} className="surface-card p-6 group">
                <summary className="font-semibold cursor-pointer flex items-center justify-between list-none">
                  {item.q}
                  <span className="text-gray-500 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="text-sm text-gray-400 mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5 grid-pattern">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to <span className="gradient-text">see where your tokens go?</span>
          </h2>
          <p className="text-gray-400 mb-8">Free. Open source. No account required.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href={`${REPO_URL}/releases/latest`} className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition shadow-lg shadow-white/10">
              Download for macOS
            </a>
            <a href={REPO_URL} className="px-6 py-3 rounded-lg border border-white/15 hover:bg-white/5 transition">
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/logo-mark.svg" alt="" width={32} height={32} />
              <div>
                <div className="font-semibold">OhMyToken</div>
                <div className="text-xs text-gray-500">Privacy-first AI usage monitor.</div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href={REPO_URL} className="hover:text-white">GitHub</a>
              <a href={`${REPO_URL}/releases`} className="hover:text-white">Releases</a>
              <a href={`${REPO_URL}/issues`} className="hover:text-white">Issues</a>
              <a href={`${REPO_URL}/blob/main/LICENSE`} className="hover:text-white">Apache-2.0</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-gray-600">
            <div>© 2026 mercleodev. Released under the Apache License 2.0.</div>
            <div>Inspired by ccusage &amp; CodexBar. Not affiliated with Anthropic, OpenAI, or Google.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
