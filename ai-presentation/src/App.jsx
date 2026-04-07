import { useState, useEffect } from 'react'
import './App.css'

const tabs = [
  { id: 'cheat-sheet', label: 'Cheat Sheet', icon: '📄' },
  { id: 'deep-dive', label: 'Deep Dive', icon: '🔑' },
  { id: 'use-cases', label: 'Use Cases', icon: '💼' },
  { id: 'meeting-intel', label: 'Meeting Intel', icon: '❗' },
  { id: 'smart-questions', label: 'Smart Questions', icon: '❓' },
  { id: 'talking-points', label: 'Talking Points', icon: '🗣️' },
  { id: 'qa', label: 'Q&A', icon: '🎯' },
  { id: 'challenge', label: 'Challenge', icon: '🚨' }
]

function App() {
  const [activeTab, setActiveTab] = useState('cheat-sheet')
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('light', isLight)
  }, [isLight])

  return (
    <div className="min-h-screen bg-obsidian text-pearl font-body">
      {/* Subtle gradient orbs background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-1/3 w-[500px] h-[500px] bg-neon-lime opacity-[0.018] rounded-full blur-[150px]"></div>
        <div className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] bg-neon-cyan opacity-[0.015] rounded-full blur-[130px]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-slate-mid/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between animate-slide-up">
            <div>
              <h1 className="font-display text-3xl sm:text-5xl font-normal text-ivory tracking-tight italic">
                AI Strategy <span className="text-neon-lime">Playbook</span>
              </h1>
              <p className="text-silver text-sm mt-1.5 font-light tracking-wide">
                Speed • Scale • Revenue
              </p>
            </div>
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsLight(!isLight)}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-mid/40 bg-slate-dark/50 hover:bg-slate-dark transition-all duration-300 text-lg cursor-pointer"
                title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {isLight ? '🌙' : '☀️'}
              </button>
              <div className="px-3 sm:px-4 py-2 bg-neon-lime-dim border border-neon-lime/20 rounded-lg">
                <span className="font-mono text-xs text-neon-lime font-medium">CONFIDENTIAL</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="relative z-10 border-b border-slate-mid/30 backdrop-blur-sm sticky top-0 bg-obsidian/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex gap-0.5 overflow-x-auto scrollbar-hide animate-fade-in delay-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative px-3 sm:px-5 py-3.5 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 whitespace-nowrap flex-shrink-0
                  ${activeTab === tab.id
                    ? 'text-neon-lime'
                    : 'text-silver hover:text-ivory'
                  }
                `}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="text-base sm:text-lg">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-lime to-transparent"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {activeTab === 'cheat-sheet' && <CheatSheet />}
        {activeTab === 'deep-dive' && <DeepDive />}
        {activeTab === 'use-cases' && <UseCases />}
        {activeTab === 'meeting-intel' && <MeetingIntel />}
        {activeTab === 'smart-questions' && <SmartQuestions />}
        {activeTab === 'talking-points' && <TalkingPoints />}
        {activeTab === 'qa' && <QASection />}
        {activeTab === 'challenge' && <ChallengePoints />}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto border-t border-slate-mid/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
          <p className="text-steel text-xs text-center font-mono">
            Generated {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </footer>
    </div>
  )
}

/* ============================================
   CHEAT SHEET TAB
============================================ */
function CheatSheet() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Core Message */}
      <Section title="Core Message" accentColor="lime">
        <Card>
          <div className="space-y-4">
            <BulletItem accent="lime">
              AI = <strong className="text-neon-lime">speed + scale + revenue</strong>
            </BulletItem>
            <BulletItem accent="lime">
              Not a tool upgrade → <strong className="text-neon-lime">workflow + business model upgrade</strong>
            </BulletItem>
          </div>
        </Card>
      </Section>

      {/* Key Stats */}
      <Section title="Key Stats / Talking Points" accentColor="cyan">
        <Card>
          <div className="grid sm:grid-cols-3 gap-6">
            <StatBox stat="73%" description="save 3+ hours per content piece" />
            <StatBox stat="3d → 4h" description="Production timeline" />
            <StatBox stat="8-12" description="videos before converting" />
          </div>
        </Card>
      </Section>

      {/* AI Workflow */}
      <Section title="AI Workflow (Must Be End-to-End)" accentColor="amber">
        <Card>
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {['Ideate', 'Shoot', 'Edit', 'Optimize', 'Post'].map((step, i) => (
                <div key={step} className="flex items-center gap-3 sm:gap-4">
                  <div className="px-3 sm:px-4 py-2 bg-slate-dark border border-warm-amber/20 rounded-lg">
                    <span className="font-mono text-xs sm:text-sm text-warm-amber font-medium">{i + 1}. {step}</span>
                  </div>
                  {i < 4 && <span className="text-warm-amber hidden sm:inline">→</span>}
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-mid/30">
              <CalloutBox type="weak" text="Weak teams: use AI in 1 step" />
              <CalloutBox type="strong" text="Strong teams: use AI in ALL steps" />
            </div>
          </div>
        </Card>
      </Section>

      {/* Tool Stack */}
      <Section title="Core Tool Stack (~$140/mo)" accentColor="violet">
        <Card>
          <div className="space-y-4">
            <ToolCategory title="Creation" tools={['ChatGPT', 'Claude', 'HeyGen']} />
            <ToolCategory title="Editing" tools={['Descript', 'CapCut', 'Opus']} />
            <ToolCategory title="Distribution" tools={['Metricool', 'VidIQ', 'Buffer']} />
            <div className="mt-6 pt-4 border-t border-slate-mid/30">
              <BulletItem accent="violet">ROI: 1 client pays for everything</BulletItem>
            </div>
          </div>
        </Card>
      </Section>

      {/* High-Value Use Cases */}
      <Section title="High-Value Use Cases" accentColor="coral">
        <Card>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Personalized prospect videos',
              'Testimonial → 30 clips',
              'FDD explainer videos',
              'Hyper-local content',
              'Objection-handling series',
              'ROI-based sales videos'
            ].map((useCase) => (
              <div key={useCase} className="px-4 py-3 bg-slate-dark border border-hot-coral/15 rounded-lg hover:border-hot-coral/30 transition-colors">
                <span className="text-hot-coral text-sm">▸</span> <span className="text-sm">{useCase}</span>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* 90-Day Plan */}
      <Section title="90-Day Plan" accentColor="cyan">
        <div className="grid sm:grid-cols-3 gap-6">
          <PlanCard phase="0–30d" title="Free tools, test workflow" />
          <PlanCard phase="30–60d" title="Add paid tools" />
          <PlanCard phase="60–90d" title="Automate + sell AI services" />
        </div>
      </Section>

      {/* Risks */}
      <Section title="Risks / Reality" accentColor="coral">
        <Card>
          <div className="space-y-3">
            <BulletItem accent="coral">40% of jobs disrupted</BulletItem>
            <BulletItem accent="coral">Editing, copywriting, posting = automatable</BulletItem>
            <BulletItem accent="coral">Strategy, storytelling, workflow = safe</BulletItem>
          </div>
        </Card>
      </Section>

      {/* Skills That Win */}
      <Section title="Skills That Win" accentColor="lime">
        <Card>
          <div className="grid sm:grid-cols-2 gap-3">
            {['Prompting', 'Workflow building', 'Creative direction', 'Niche expertise (franchise sales)'].map((skill) => (
              <div key={skill} className="px-4 py-3 bg-neon-lime-dim border border-neon-lime/20 rounded-lg">
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* Bottom Line */}
      <Section title="Bottom Line" accentColor="amber">
        <Card>
          <div className="space-y-3">
            <BulletItem accent="amber">Speed + volume + personalization = competitive edge</BulletItem>
            <BulletItem accent="amber"><strong>Move NOW or fall behind</strong></BulletItem>
          </div>
        </Card>
      </Section>
    </div>
  )
}

/* ============================================
   DEEP DIVE TAB
============================================ */
function DeepDive() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Executive Summary */}
      <Section title="Executive Summary" accentColor="lime">
        <Card>
          <p className="text-silver text-sm uppercase tracking-widest mb-5 font-medium">What this is REALLY about</p>
          <div className="space-y-4 mb-6">
            <BulletItem accent="lime">
              Turning Franchise Filming into an <strong className="text-neon-lime">AI-powered content machine</strong>
            </BulletItem>
            <BulletItem accent="lime">
              Increasing <strong className="text-neon-lime">speed, output, and revenue</strong>
            </BulletItem>
            <BulletItem accent="lime">
              Moving from "editing videos" → <strong className="text-neon-lime">strategic, high-value content services</strong>
            </BulletItem>
          </div>
          <QuoteBlock>
            Teams that integrate AI into their FULL workflow will dominate in the next 12–18 months
          </QuoteBlock>
        </Card>
      </Section>

      {/* Big Idea 1 */}
      <Section title="1. AI = Massive Efficiency Gain" accentColor="cyan">
        <Card>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <StatBox stat="73%" description="of marketers save 3+ hours per content piece" />
            <StatBox stat="3d → 4h" description="Production time reduction" />
          </div>
          <HighlightCallout accent="cyan">
            This is about <strong>scale + speed</strong>, not just convenience.
          </HighlightCallout>
        </Card>
      </Section>

      {/* Big Idea 2 */}
      <Section title="2. AI Must Be End-to-End" accentColor="amber">
        <Card>
          <p className="text-silver mb-4 text-sm">Winning teams use AI across:</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {['Ideation', 'Shooting', 'Editing', 'Optimization', 'Posting'].map((step) => (
              <span key={step} className="px-4 py-2 bg-warm-amber-dim border border-warm-amber/20 rounded-lg text-warm-amber font-mono text-sm font-medium">
                {step}
              </span>
            ))}
          </div>
          <HighlightCallout accent="amber">
            Biggest mistake: using AI in only <strong>ONE</strong> step.
          </HighlightCallout>
        </Card>
      </Section>

      {/* Big Idea 3 */}
      <Section title="3. Revenue Opportunity (Not Just Cost Saving)" accentColor="lime">
        <Card>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-charcoal border border-neon-lime/15 rounded-lg text-center">
              <div className="font-mono text-2xl font-bold text-neon-lime mb-1">8–12</div>
              <p className="text-xs text-silver">videos before buyer converts</p>
            </div>
            <div className="p-4 bg-charcoal border border-neon-lime/15 rounded-lg text-center">
              <div className="text-sm text-ivory font-medium mb-1">More content</div>
              <p className="text-xs text-silver">at faster delivery</p>
            </div>
            <div className="p-4 bg-charcoal border border-neon-lime/15 rounded-lg text-center">
              <div className="text-sm text-ivory font-medium mb-1">Personalized</div>
              <p className="text-xs text-silver">videos at scale</p>
            </div>
          </div>
          <HighlightCallout accent="lime">
            Translation: <strong>more clients + premium pricing</strong>
          </HighlightCallout>
        </Card>
      </Section>

      {/* Big Idea 4 */}
      <Section title="4. The Full AI Stack is Cheap" accentColor="violet">
        <Card>
          <div className="flex items-center gap-6 mb-4">
            <div className="p-5 bg-charcoal border border-electric-violet/20 rounded-xl text-center">
              <div className="font-mono text-4xl font-bold text-electric-violet">$140</div>
              <p className="text-xs text-silver mt-1">/month entire system</p>
            </div>
            <div className="flex-1">
              <BulletItem accent="violet">One client can pay for it for a year</BulletItem>
            </div>
          </div>
          <HighlightCallout accent="violet">
            Low barrier → <strong>high ROI</strong>
          </HighlightCallout>
        </Card>
      </Section>

      {/* Big Idea 5 */}
      <Section title="5. Distribution is HALF the Game" accentColor="cyan">
        <Card>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-sm text-silver mb-3 font-medium">Most teams:</p>
              <div className="space-y-2">
                <div className="px-4 py-2.5 bg-hot-coral-dim border border-hot-coral/15 rounded-lg text-hot-coral text-sm">
                  Spend 80% on creation
                </div>
                <div className="px-4 py-2.5 bg-hot-coral-dim border border-hot-coral/15 rounded-lg text-hot-coral text-sm">
                  Neglect distribution
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-silver mb-3 font-medium">AI allows:</p>
              <div className="space-y-2">
                <div className="px-4 py-2.5 bg-neon-cyan-dim border border-neon-cyan/15 rounded-lg text-neon-cyan text-sm">
                  Automated posting
                </div>
                <div className="px-4 py-2.5 bg-neon-cyan-dim border border-neon-cyan/15 rounded-lg text-neon-cyan text-sm">
                  Multi-platform content
                </div>
                <div className="px-4 py-2.5 bg-neon-cyan-dim border border-neon-cyan/15 rounded-lg text-neon-cyan text-sm">
                  SEO optimization
                </div>
              </div>
            </div>
          </div>
          <HighlightCallout accent="cyan">
            Content without distribution = <strong>wasted effort</strong>
          </HighlightCallout>
        </Card>
      </Section>

      {/* Big Idea 6 */}
      <Section title="6. The Real Shift: Roles Are Changing" accentColor="coral">
        <Card>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-hot-coral mb-3 font-semibold uppercase tracking-wider">High-Risk Roles</p>
              <div className="space-y-2">
                {['Video editors (manual work)', 'Copywriters (templated content)', 'Social media managers (posting/scheduling)'].map((role) => (
                  <div key={role} className="px-4 py-2.5 bg-hot-coral-dim border border-hot-coral/15 rounded-lg text-sm flex items-center gap-2">
                    <span className="text-hot-coral">✕</span> {role}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-neon-lime mb-3 font-semibold uppercase tracking-wider">What Wins</p>
              <div className="space-y-2">
                {['AI operators', 'Workflow builders', 'Creative strategists'].map((role) => (
                  <div key={role} className="px-4 py-2.5 bg-neon-lime-dim border border-neon-lime/15 rounded-lg text-sm flex items-center gap-2">
                    <span className="text-neon-lime">✓</span> {role}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Big Idea 7 */}
      <Section title="7. Urgency: Move Now or Fall Behind" accentColor="amber">
        <Card>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <StatBox stat="~40%" description="of jobs disrupted in 4–5 years" />
            <div className="p-5 bg-charcoal border border-warm-amber/20 rounded-lg flex items-center justify-center">
              <p className="text-warm-amber font-medium text-center">First movers set the market standard</p>
            </div>
          </div>
          <HighlightCallout accent="amber">
            This presentation is pushing <strong>action NOW</strong>
          </HighlightCallout>
        </Card>
      </Section>

      {/* Core Strategy */}
      <Section title="The Core Strategy (Simple Version)" accentColor="lime">
        <Card>
          <div className="p-5 bg-charcoal border border-neon-lime/20 rounded-xl mb-6">
            <p className="font-mono text-neon-lime text-center text-sm sm:text-lg leading-relaxed">
              AI Tools + Workflow + Niche (Franchise Sales) = <strong>Competitive Advantage</strong>
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <PlanCard phase="0–30 days" title="Free tools, test workflow" />
            <PlanCard phase="30–60 days" title="Add paid tools, scale output" />
            <PlanCard phase="60–90 days" title="Full automation + sell AI as premium service" />
          </div>
        </Card>
      </Section>
    </div>
  )
}

/* ============================================
   USE CASES TAB
============================================ */
function UseCases() {
  return (
    <div className="space-y-10 animate-fade-in">
      <Section title="Key Use Cases — Where The Money Comes From" accentColor="amber">
        <p className="text-silver mb-8 text-sm">These are <strong className="text-ivory">service offerings</strong>, not just tactics.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <UseCaseCard
            icon="🎬"
            title="Personalized Prospect Videos"
            description="Use HeyGen to create personalized outreach at scale — each prospect gets a video that feels custom."
            accentColor="lime"
          />
          <UseCaseCard
            icon="✂️"
            title="Testimonial → 30 Clips"
            description="One long testimonial becomes 30 pieces of content. Immediately increases output without more shooting."
            accentColor="cyan"
          />
          <UseCaseCard
            icon="📑"
            title="FDD Explainer Videos"
            description="Unique niche value — complex franchise documents turned into digestible video content."
            accentColor="violet"
          />
          <UseCaseCard
            icon="📍"
            title="Hyper-Local Franchise Content"
            description="AI-generated content tailored to specific markets, locations, and demographics."
            accentColor="amber"
          />
          <UseCaseCard
            icon="🛡️"
            title="Objection-Handling Series"
            description="Pre-built video responses to common franchise buyer concerns and objections."
            accentColor="coral"
          />
          <UseCaseCard
            icon="📊"
            title="ROI-Driven Sales Videos"
            description="Data-backed videos showing franchise investment returns, customized per prospect."
            accentColor="lime"
          />
        </div>
      </Section>
    </div>
  )
}

/* ============================================
   MEETING INTEL TAB
============================================ */
function MeetingIntel() {
  return (
    <div className="space-y-10 animate-fade-in">
      <Section title="What to Pay Attention To" accentColor="coral">
        <p className="text-silver mb-8 text-sm">Watch for these signals during the meeting — they reveal the team's readiness.</p>

        <div className="space-y-6">
          <IntelCard
            number="01"
            title="Are they thinking TOOL or SYSTEM?"
            bad="Let's try ChatGPT"
            good="Let's redesign our workflow"
            accentColor="amber"
          />
          <IntelCard
            number="02"
            title="Who owns AI internally?"
            bad="No clear owner or champion"
            good='Assign an "AI Lead" to drive it'
            insight="If no owner = nothing happens"
            accentColor="violet"
          />
          <IntelCard
            number="03"
            title="Are they focused on cost or growth?"
            bad="Save editing time"
            good="Increase output + revenue"
            accentColor="lime"
          />
          <IntelCard
            number="04"
            title="Are they positioning AI as a service?"
            bad="Internal efficiency only"
            good="Sell AI-powered content as premium offering"
            accentColor="cyan"
          />
          <IntelCard
            number="05"
            title="How fast will they move?"
            bad="Let's revisit this next quarter"
            good="Immediate action (today / this week / 30 days)"
            insight="This doc strongly pushes immediate action"
            accentColor="coral"
          />
        </div>
      </Section>
    </div>
  )
}

/* ============================================
   SMART QUESTIONS TAB
============================================ */
function SmartQuestions() {
  return (
    <div className="space-y-10 animate-fade-in">
      <QuestionCategory
        icon="🎯"
        title="Strategy Questions"
        accentColor="lime"
        questions={[
          'Are we planning to integrate AI across the full workflow or just specific steps?',
          'What would our AI-powered service offering look like to clients?'
        ]}
      />
      <QuestionCategory
        icon="⚙️"
        title="Execution Questions"
        accentColor="cyan"
        questions={[
          'Who will own AI implementation internally?',
          "What's our 30-day pilot plan?"
        ]}
      />
      <QuestionCategory
        icon="💰"
        title="Revenue Questions"
        accentColor="amber"
        questions={[
          'How can we package AI into a premium upsell for franchise clients?',
          'Which use case should we monetize first?'
        ]}
      />
      <QuestionCategory
        icon="⏱️"
        title="Efficiency Questions"
        accentColor="violet"
        questions={[
          "What's currently our biggest bottleneck in production?",
          'How much time per project could we realistically save?'
        ]}
      />
      <QuestionCategory
        icon="🔮"
        title="Risk / Future Questions"
        accentColor="coral"
        questions={[
          'Which roles in our current process are most at risk?',
          'How do we upskill the team instead of replacing them?'
        ]}
      />

      {/* One-Liner */}
      <div className="mt-12 p-8 bg-gradient-to-br from-neon-lime-dim to-neon-cyan-dim border border-neon-lime/20 rounded-2xl">
        <div className="flex items-start gap-4">
          <span className="text-3xl">🧩</span>
          <div>
            <h3 className="font-display text-xl text-ivory italic mb-3">One-Liner To Sound Sharp</h3>
            <blockquote className="text-lg leading-relaxed text-pearl font-display italic">
              "It seems like the real opportunity isn't just using AI tools — it's <strong className="text-neon-lime">rebuilding our entire content workflow</strong> so we can produce faster, scale output, and actually <strong className="text-neon-lime">sell AI-powered services at a premium.</strong>"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ============================================
   TALKING POINTS TAB
============================================ */
function TalkingPoints() {
  return (
    <div className="space-y-10 animate-fade-in">
      <TalkingPointCard
        icon="🎤"
        title="Opening (if you speak early)"
        quote="From what I'm seeing, this isn't just about adopting tools — it's about redesigning our entire content workflow so we can produce faster, scale output, and actually increase revenue."
        accentColor="lime"
      />
      <TalkingPointCard
        icon="💡"
        title="If discussion is vague"
        quote="I think the key question is — where is our biggest bottleneck right now, and how do we apply AI there first?"
        accentColor="cyan"
      />
      <TalkingPointCard
        icon="💰"
        title="If they focus on cost"
        quote="I see this more as a revenue play than a cost-saving play — especially with personalized and high-volume content."
        accentColor="amber"
      />
      <TalkingPointCard
        icon="⚙️"
        title="If they talk tools only"
        quote="Should we be thinking tool-by-tool, or should we map a full AI-powered workflow end-to-end?"
        accentColor="violet"
      />
      <TalkingPointCard
        icon="🧑‍💼"
        title="If no ownership is clear"
        quote="Who would own this internally? I think without a dedicated AI lead, it might stall."
        accentColor="coral"
      />
      <TalkingPointCard
        icon="🚀"
        title="Strong closing statement"
        quote="If we move early and structure this right, we're not just improving efficiency — we're actually positioning ourselves ahead of competitors."
        accentColor="lime"
      />
    </div>
  )
}

/* ============================================
   Q&A TAB
============================================ */
function QASection() {
  return (
    <div className="space-y-8 animate-fade-in">
      <QACard
        question="Where should we start?"
        answer="Start with ChatGPT (scripts), CapCut (editing), and one simple workflow. Focus on one bottleneck first, not everything at once."
      />
      <QACard
        question="Is this going to replace people?"
        answer="Not replace — but roles will shift. The value moves from execution to strategy and direction."
      />
      <QACard
        question="What's the fastest ROI?"
        answer="Repurposing content — one video into 10–30 clips. That immediately increases output without more shooting."
      />
      <QACard
        question="What's the risk if we don't do this?"
        answer="Competitors will produce more content, faster, cheaper — and dominate visibility."
      />
      <QACard
        question="How do we sell this to clients?"
        answer="Position it as: Faster turnaround, More content per shoot, Personalized videos at scale."
      />
      <QACard
        question="How long to implement?"
        answer="You can see results in 30 days, full transformation in ~90 days."
      />
      <QACard
        question="What's the biggest mistake to avoid?"
        answer="Using AI as a one-off tool instead of integrating it into the full workflow."
      />

      {/* Final Edge */}
      <div className="mt-16 p-8 bg-gradient-to-br from-neon-lime-dim to-neon-cyan-dim border border-neon-lime/20 rounded-2xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🧠</span>
          <div>
            <h3 className="font-display text-2xl text-ivory italic mb-3">Final Edge</h3>
            <p className="text-lg leading-relaxed text-pearl font-display italic">
              "AI isn't replacing content teams — it's <strong className="text-neon-lime">rewarding the ones who can combine tools, workflow, and strategy faster</strong> than everyone else."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ============================================
   CHALLENGE POINTS TAB
============================================ */
function ChallengePoints() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="mb-8">
        <Section title="Potential Gaps / Things to Challenge" accentColor="coral">
          <p className="text-silver text-sm">Raising these makes you look sharp and thoughtful.</p>
        </Section>
      </div>

      <ChallengeCard
        number="01"
        title="Over-Reliance on Tools"
        problem="Tools ≠ strategy. Buying subscriptions without a system changes nothing."
        question="How do we maintain quality and brand voice?"
        accentColor="coral"
      />
      <ChallengeCard
        number="02"
        title="Learning Curve"
        problem="Not discussed much in the doc. Teams won't adopt what they don't understand."
        question="What training or onboarding is needed?"
        accentColor="amber"
      />
      <ChallengeCard
        number="03"
        title="Client Perception"
        problem="Some clients may resist AI-generated content or see it as lower quality."
        question="How do we position AI without reducing perceived value?"
        accentColor="violet"
      />
      <ChallengeCard
        number="04"
        title="Content Quality Risk"
        problem="Faster ≠ better. Volume without quality control damages the brand."
        question="What's our quality control process?"
        accentColor="cyan"
      />

      {/* Final Takeaway */}
      <div className="mt-16 p-8 bg-gradient-to-br from-warm-amber-dim to-hot-coral-dim border border-warm-amber/20 rounded-2xl">
        <div className="flex items-start gap-4">
          <span className="text-4xl">✅</span>
          <div>
            <h3 className="font-display text-2xl text-ivory italic mb-3">Final Takeaway</h3>
            <p className="text-lg leading-relaxed text-pearl font-display italic">
              This doc is pushing one main idea: <strong className="text-warm-amber">AI is not a tool upgrade — it's a business model upgrade.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ============================================
   REUSABLE COMPONENTS
============================================ */
function Section({ title, children, accentColor }) {
  const colors = {
    lime: 'text-neon-lime',
    cyan: 'text-neon-cyan',
    amber: 'text-warm-amber',
    coral: 'text-hot-coral',
    violet: 'text-electric-violet'
  }

  return (
    <section className="animate-slide-up">
      <h2 className={`font-display text-2xl sm:text-3xl font-normal italic mb-6 ${colors[accentColor]}`}>
        {title}
      </h2>
      {children}
    </section>
  )
}

function Card({ children }) {
  return (
    <div className="p-5 sm:p-6 bg-slate-dark/40 border border-slate-mid/30 rounded-xl backdrop-blur-sm hover:border-slate-mid/50 transition-colors">
      {children}
    </div>
  )
}

function BulletItem({ children, accent }) {
  const colors = {
    lime: 'text-neon-lime',
    cyan: 'text-neon-cyan',
    amber: 'text-warm-amber',
    coral: 'text-hot-coral',
    violet: 'text-electric-violet'
  }

  return (
    <div className="flex items-start gap-3">
      <span className={`mt-1 ${colors[accent]}`}>→</span>
      <p className="text-pearl leading-relaxed">{children}</p>
    </div>
  )
}

function StatBox({ stat, description }) {
  return (
    <div className="p-5 bg-charcoal border border-neon-cyan/20 rounded-lg text-center">
      <div className="font-mono text-3xl sm:text-4xl font-bold text-neon-cyan mb-2">{stat}</div>
      <p className="text-sm text-silver">{description}</p>
    </div>
  )
}

function CalloutBox({ type, text }) {
  const styles = type === 'weak'
    ? 'bg-hot-coral-dim border-hot-coral/20 text-hot-coral'
    : 'bg-neon-lime-dim border-neon-lime/20 text-neon-lime'

  return (
    <div className={`px-4 py-3 ${styles} border rounded-lg font-medium text-sm`}>
      {type === 'weak' ? '👎' : '👍'} {text}
    </div>
  )
}

function ToolCategory({ title, tools }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-steel font-medium text-sm w-24 sm:w-28">{title}:</span>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span key={tool} className="px-3 py-1.5 bg-electric-violet-dim border border-electric-violet/20 rounded-md text-electric-violet text-sm font-medium">
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}

function PlanCard({ phase, title }) {
  return (
    <div className="p-5 sm:p-6 bg-slate-dark border border-neon-cyan/20 rounded-xl hover:border-neon-cyan/40 transition-all hover:scale-105">
      <div className="font-mono text-neon-cyan text-sm font-bold mb-2">{phase}</div>
      <p className="text-pearl">{title}</p>
    </div>
  )
}

function TalkingPointCard({ icon, title, quote, accentColor }) {
  const borderColors = {
    lime: 'border-neon-lime/20 hover:border-neon-lime/40',
    cyan: 'border-neon-cyan/20 hover:border-neon-cyan/40',
    amber: 'border-warm-amber/20 hover:border-warm-amber/40',
    coral: 'border-hot-coral/20 hover:border-hot-coral/40',
    violet: 'border-electric-violet/20 hover:border-electric-violet/40'
  }

  return (
    <div className={`p-5 sm:p-6 bg-slate-dark/40 border ${borderColors[accentColor]} rounded-xl backdrop-blur-sm transition-all hover:scale-[1.01]`}>
      <div className="flex items-start gap-4">
        <span className="text-3xl">{icon}</span>
        <div className="flex-1">
          <h3 className="text-silver text-sm font-medium uppercase tracking-wider mb-3">{title}</h3>
          <blockquote className="font-display text-lg sm:text-xl text-ivory italic leading-relaxed">
            "{quote}"
          </blockquote>
        </div>
      </div>
    </div>
  )
}

function QACard({ question, answer }) {
  return (
    <div className="p-5 sm:p-6 bg-slate-dark/40 border border-slate-mid/30 rounded-xl backdrop-blur-sm hover:border-slate-mid/50 transition-colors">
      <h3 className="text-neon-lime text-lg font-semibold mb-3 flex items-center gap-2">
        <span>❓</span> {question}
      </h3>
      <p className="text-pearl leading-relaxed pl-7">
        <span className="text-steel mr-2">→</span>
        {answer}
      </p>
    </div>
  )
}

function QuoteBlock({ children }) {
  return (
    <div className="p-5 border-l-2 border-neon-lime/40 bg-neon-lime-dim rounded-r-lg">
      <p className="font-display text-lg text-ivory italic leading-relaxed">{children}</p>
    </div>
  )
}

function HighlightCallout({ children, accent }) {
  const styles = {
    lime: 'bg-neon-lime-dim border-neon-lime/20 text-neon-lime',
    cyan: 'bg-neon-cyan-dim border-neon-cyan/20 text-neon-cyan',
    amber: 'bg-warm-amber-dim border-warm-amber/20 text-warm-amber',
    coral: 'bg-hot-coral-dim border-hot-coral/20 text-hot-coral',
    violet: 'bg-electric-violet-dim border-electric-violet/20 text-electric-violet'
  }

  return (
    <div className={`px-5 py-3.5 ${styles[accent]} border rounded-lg text-sm font-medium flex items-center gap-2`}>
      <span>👉</span> <span>{children}</span>
    </div>
  )
}

function UseCaseCard({ icon, title, description, accentColor }) {
  const borderColors = {
    lime: 'border-neon-lime/15 hover:border-neon-lime/35',
    cyan: 'border-neon-cyan/15 hover:border-neon-cyan/35',
    amber: 'border-warm-amber/15 hover:border-warm-amber/35',
    coral: 'border-hot-coral/15 hover:border-hot-coral/35',
    violet: 'border-electric-violet/15 hover:border-electric-violet/35'
  }
  const titleColors = {
    lime: 'text-neon-lime',
    cyan: 'text-neon-cyan',
    amber: 'text-warm-amber',
    coral: 'text-hot-coral',
    violet: 'text-electric-violet'
  }

  return (
    <div className={`p-5 bg-slate-dark/60 border ${borderColors[accentColor]} rounded-xl transition-all hover:scale-[1.02]`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icon}</span>
        <div>
          <h3 className={`font-semibold text-base mb-1.5 ${titleColors[accentColor]}`}>{title}</h3>
          <p className="text-sm text-silver leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

function IntelCard({ number, title, bad, good, insight, accentColor }) {
  const borderColors = {
    lime: 'border-neon-lime/20',
    cyan: 'border-neon-cyan/20',
    amber: 'border-warm-amber/20',
    coral: 'border-hot-coral/20',
    violet: 'border-electric-violet/20'
  }
  const numColors = {
    lime: 'text-neon-lime',
    cyan: 'text-neon-cyan',
    amber: 'text-warm-amber',
    coral: 'text-hot-coral',
    violet: 'text-electric-violet'
  }

  return (
    <div className={`p-5 sm:p-6 bg-slate-dark/40 border ${borderColors[accentColor]} rounded-xl`}>
      <div className="flex items-start gap-4">
        <span className={`font-mono text-2xl font-bold ${numColors[accentColor]} opacity-40`}>{number}</span>
        <div className="flex-1">
          <h3 className="text-ivory font-semibold text-lg mb-4">{title}</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="px-4 py-3 bg-hot-coral-dim border border-hot-coral/15 rounded-lg">
              <span className="text-hot-coral text-xs font-mono font-bold uppercase tracking-wider">Bad Signal</span>
              <p className="text-sm mt-1 text-pearl">"{bad}"</p>
            </div>
            <div className="px-4 py-3 bg-neon-lime-dim border border-neon-lime/15 rounded-lg">
              <span className="text-neon-lime text-xs font-mono font-bold uppercase tracking-wider">Good Signal</span>
              <p className="text-sm mt-1 text-pearl">"{good}"</p>
            </div>
          </div>
          {insight && (
            <p className="text-silver text-sm mt-3 italic">👉 {insight}</p>
          )}
        </div>
      </div>
    </div>
  )
}

function QuestionCategory({ icon, title, accentColor, questions }) {
  const borderColors = {
    lime: 'border-neon-lime/20',
    cyan: 'border-neon-cyan/20',
    amber: 'border-warm-amber/20',
    coral: 'border-hot-coral/20',
    violet: 'border-electric-violet/20'
  }
  const titleColors = {
    lime: 'text-neon-lime',
    cyan: 'text-neon-cyan',
    amber: 'text-warm-amber',
    coral: 'text-hot-coral',
    violet: 'text-electric-violet'
  }
  const bgColors = {
    lime: 'bg-neon-lime-dim',
    cyan: 'bg-neon-cyan-dim',
    amber: 'bg-warm-amber-dim',
    coral: 'bg-hot-coral-dim',
    violet: 'bg-electric-violet-dim'
  }

  return (
    <Section title={title} accentColor={accentColor}>
      <div className="space-y-3">
        {questions.map((q) => (
          <div key={q} className={`p-4 ${bgColors[accentColor]} border ${borderColors[accentColor]} rounded-xl flex items-start gap-3`}>
            <span className="text-xl mt-0.5">{icon}</span>
            <p className="text-pearl leading-relaxed font-medium text-sm sm:text-base">"{q}"</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function ChallengeCard({ number, title, problem, question, accentColor }) {
  const borderColors = {
    lime: 'border-neon-lime/20',
    cyan: 'border-neon-cyan/20',
    amber: 'border-warm-amber/20',
    coral: 'border-hot-coral/20',
    violet: 'border-electric-violet/20'
  }
  const numColors = {
    lime: 'text-neon-lime',
    cyan: 'text-neon-cyan',
    amber: 'text-warm-amber',
    coral: 'text-hot-coral',
    violet: 'text-electric-violet'
  }

  return (
    <div className={`p-5 sm:p-6 bg-slate-dark/40 border ${borderColors[accentColor]} rounded-xl`}>
      <div className="flex items-start gap-4">
        <span className={`font-mono text-3xl font-bold ${numColors[accentColor]} opacity-30`}>{number}</span>
        <div className="flex-1">
          <h3 className="text-ivory font-semibold text-lg mb-2">{title}</h3>
          <p className="text-silver text-sm mb-4 leading-relaxed">{problem}</p>
          <div className="px-4 py-3 bg-neon-lime-dim border border-neon-lime/20 rounded-lg">
            <span className="text-neon-lime text-xs font-mono font-bold uppercase tracking-wider">Ask This</span>
            <p className="text-sm mt-1 text-pearl font-medium">"{question}"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
