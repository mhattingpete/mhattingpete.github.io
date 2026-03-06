export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  repoUrl: string;
  iconColor: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "building-claude-skills-marketplace",
    title: "Building a Claude Code Plugin Marketplace",
    description:
      "A curated marketplace of Claude Code plugins for software engineering workflows — engineering, code operations, and document skills.",
    date: "2025-10-15",
    readTime: "8 min read",
    repoUrl: "https://github.com/mhattingpete/claude-skills-marketplace",
    iconColor: "text-neon-cyan",
    content: `
## The Problem

Claude Code is powerful out of the box, but every developer's workflow is different. Some teams need structured feature planning before writing code. Others need bulk refactoring across hundreds of files. Some want to generate architecture diagrams from their codebase. The challenge: how do you extend Claude Code's capabilities in a way that's **reusable, composable, and natural to invoke**?

## What Are Skills?

Skills are model-invoked capabilities — unlike slash commands that require explicit user activation, Skills are automatically triggered by Claude based on context. Say "fix the failing tests" and the \`test-fixing\` skill activates. Say "push these changes" and \`git-pushing\` handles it.

Each Skill consists of a \`SKILL.md\` file with YAML frontmatter and detailed instructions. Skills can also include reference materials and helper scripts. The key insight is that **the description is the activation trigger** — write it like you'd describe the scenario to a colleague, and Claude will activate the skill when those scenarios arise naturally.

## Architecture

The marketplace is organized as a collection of plugins, each containing related skills:

\`\`\`
claude-skills-marketplace/
├── engineering-workflow-plugin/     # Git, testing, planning, code review
├── visual-documentation-plugin/    # Diagrams, dashboards, flowcharts
├── productivity-skills-plugin/      # Auditing, documentation, bootstrapping
├── code-operations-plugin/          # Bulk refactoring, file analysis
└── execution-runtime/               # Local Python execution for token savings
\`\`\`

Skills and Agents work together: the \`feature-planning\` skill creates a detailed implementation plan, then hands off each task to the \`plan-implementer\` agent for execution. This separation means planning uses the full Opus model for strategic thinking, while implementation runs on Haiku for cost efficiency.

## The Execution Runtime: 97% Token Savings

The most impactful addition was the execution runtime, implementing Anthropic's code execution pattern. Instead of Claude reading and editing 50 files through the context window (burning ~25,000 tokens), it writes a Python script that runs locally and returns a summary (~600 tokens).

The runtime provides a sandboxed API that scripts can import:

- File discovery and pattern matching
- AST-based code transformations
- Bulk search and replace with rollback
- PII/secret masking for safety

This turned operations that were impractical (refactoring 100+ files) into routine tasks.

## Lessons Learned

**1. Description quality determines activation quality.** A vague description like "helps with code" won't activate reliably. "Activates when users want to fix failing tests, mentions test failures, or runs test suite and failures occur" gives Claude clear signals.

**2. Progressive disclosure works.** SKILL.md files under 500 lines load faster. Move detailed reference material to separate files that skills load on demand.

**3. Skills compose better than monoliths.** Five focused skills that integrate cleanly beat one mega-skill that tries to do everything. The engineering workflow plugin demonstrates this — each skill has a clear boundary, but they chain naturally in a development flow.

**4. Test across models.** Skills behave differently on Opus, Sonnet, and Haiku. The plan-implementer agent specifically uses Haiku because implementation tasks benefit more from speed than reasoning depth.

## Impact

The marketplace has grown to 439+ stars, with the community contributing new plugins. The most popular skills are \`feature-planning\` (for its structured approach to complex features) and \`code-execution\` (for the dramatic token savings on bulk operations).

The plugin architecture means teams can fork individual plugins, customize them for their stack, and still pull updates from upstream — a pattern that's worked well for enterprise adoption.
`,
  },
  {
    slug: "designing-personal-ai-os",
    title: "Designing a Personal AI Operating System",
    description:
      "Automate your digital life with natural language. Create automations by describing what you want in plain English.",
    date: "2025-11-20",
    readTime: "7 min read",
    repoUrl: "https://github.com/mhattingpete/personal-ai-os",
    iconColor: "text-neon-purple",
    content: `
## The Vision

What if you could tell your computer "when a client emails me with an invoice, save it to their folder" and it just... worked? No IFTTT recipes, no Zapier flows, no code. Just describe what you want in plain English.

PAI (Personal AI OS) is my attempt at building this. It's a CLI tool that parses natural language into automation specifications, connects to your services via MCP (Model Context Protocol), and executes automations on your behalf.

## Architecture

PAI follows a deliberately flat architecture — one level of nesting max, with each module having a clear responsibility:

\`\`\`
User (CLI) → Intent Engine → Automation spec
                                    ↓
Watcher (poll triggers) → Executor → MCP Manager → MCP Servers → External APIs
                              ↓
                          Database (results, state)
\`\`\`

The **Intent Engine** is the core innovation. It takes a natural language string and produces a structured automation spec through a three-stage pipeline:

1. **Parse** — Extract trigger, conditions, and actions from the intent
2. **Clarify** — Ask follow-up questions if the intent is ambiguous
3. **Plan** — Generate a full automation specification with error handling

For LLM calls, PAI supports both Claude (cloud) and llama.cpp (local). Sensitive domains like health and finance can be routed to the local model automatically — your data never leaves your machine.

## MCP as the Integration Layer

Instead of building direct API integrations, PAI connects to external services through MCP servers. This means:

- **Gmail** is an MCP server that exposes search, label, and archive tools
- **Outlook** connects through a separate MCP server with email and calendar tools
- **GitHub** provides PR listing, review fetching, and formatting tools

The MCP manager handles server lifecycle, tool discovery, and routing. When an automation's action says "label email as Important", the executor finds the right MCP server and calls the appropriate tool.

This architecture is inherently extensible — adding a new service means writing an MCP server, not modifying PAI core. The \`mcp.json\` config file maps server names to commands:

\`\`\`json
{
  "servers": {
    "gmail": {
      "command": "uv",
      "args": ["run", "pai-gmail-mcp"]
    }
  }
}
\`\`\`

## Entity Discovery

One feature I'm particularly proud of is entity discovery. Run \`pai entities --discover\` and PAI scans your recent emails, extracting entities (clients, people, projects) using LLM analysis. These entities become building blocks for automations — "when **Acme Corp** emails me" works because PAI knows Acme Corp sends from \`@acme.com\`.

## Local-First LLM Support

Not everything needs to go through Claude's API. PAI supports local LLMs via llama.cpp's OpenAI-compatible API. The routing configuration lets you:

- Force local processing for sensitive domains
- Use Claude for complex intent parsing
- Fall back to local when offline

\`\`\`yaml
llm:
  routing:
    force_local: false
    sensitive_domains:
      - health
      - finance
\`\`\`

## What's Next

The current focus is on the **watcher system** — background processes that poll triggers (new emails, PR reviews) and fire automations when conditions match. The GitHub PR watcher already works, monitoring for review activity and formatting updates for Claude Code consumption.

The longer-term vision is a fully autonomous personal assistant that manages your digital life proactively, not just reactively. Entity discovery was the first step toward PAI understanding your world, not just responding to commands.
`,
  },
  {
    slug: "multi-agent-ai-system-design",
    title: "Multi-Agent AI System Design",
    description:
      "A local-first platform for designing and interacting with multi-agent AI systems using the Agno framework and AG-UI protocol.",
    date: "2025-12-05",
    readTime: "6 min read",
    repoUrl: "https://github.com/mhattingpete/agent-composer",
    iconColor: "text-neon-pink",
    content: `
## Why Multi-Agent?

Single-agent systems hit a ceiling. A general-purpose assistant can help with many things but excels at none. Multi-agent systems solve this by letting specialized agents collaborate — a coding agent writes code, a review agent checks it, a planning agent orchestrates the workflow.

Agent Composer is a local-first platform for designing these multi-agent systems. It combines the [Agno](https://docs.agno.com) framework for agent orchestration with the [AG-UI](https://docs.ag-ui.com) protocol for real-time streaming interactions.

## The Stack

The platform is split into a Python backend and a TypeScript frontend:

**Backend (Python 3.12+ / FastAPI)**
- Agno framework with AgentOS for agent lifecycle management
- OpenRouter for LLM access (supports any model, including free tiers)
- SQLite for session persistence (auto-managed by Agno)
- MCP integration for extensible tool capabilities

**Frontend (Next.js / React 18)**
- Agno Agent UI for the chat interface
- Real-time streaming via AG-UI protocol
- Bun as the JavaScript runtime

## Agent Configuration

Agents are defined as JSON configurations, making them easy to create, share, and version:

\`\`\`json
{
  "name": "Coding Assistant",
  "model_id": "mistralai/devstral-2512:free",
  "instructions": "You are a senior software engineer..."
}
\`\`\`

Each agent gets access to a Python interpreter with sandboxed capabilities: web search, HTTP requests, shell commands, and file operations. This means agents can actually *do things* — fetch documentation, run tests, write files — not just generate text.

## Teams: Coordinated Multi-Agent Collaboration

The real power comes from teams. A team definition specifies:

- **Members** — which agents participate and their roles
- **Coordination** — how agents hand off work to each other
- **Session** — shared conversation history across agents

When you send a message to a team, the lead agent decides which specialist to invoke. The coding agent might write a function, then the review agent checks it for bugs, then the lead summarizes the result. All of this streams in real-time through AG-UI.

## MCP Integration

Agents can connect to MCP (Model Context Protocol) servers for external capabilities:

\`\`\`json
{
  "servers": [
    {
      "name": "filesystem",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/tmp"],
      "enabled": true
    }
  ]
}
\`\`\`

This means agents can access databases, APIs, file systems, or any other service that has an MCP server — without modifying the agent code.

## Local-First Philosophy

Everything runs on your machine. No cloud dependencies beyond the LLM API (and even that can be local via llama.cpp). Your conversations, agent configurations, and session history stay in a local SQLite database.

The platform supports free-tier models from OpenRouter, so you can experiment with multi-agent systems without any API costs. The default model (\`xiaomi/mimo-v2-flash:free\`) is surprisingly capable for agent tasks.

## Design Decisions

**Why Agno?** It handles the hard parts of agent orchestration — session management, tool registration, streaming, and multi-agent coordination — so I could focus on the UX and configuration layer.

**Why AG-UI?** It provides a standard protocol for streaming agent interactions to a frontend. The Agno Agent UI implements this protocol out of the box, giving us a polished chat interface without building one from scratch.

**Why JSON configs?** Agents should be data, not code. JSON configurations can be version-controlled, shared between team members, and modified without restarting the server. The config API (\`POST /config/agents\`) lets you create agents programmatically.

## Getting Started

The entire platform starts with one command:

\`\`\`bash
make dev
\`\`\`

This launches the backend on port 7777 and the frontend on port 3000. Create your first agent through the UI or the API, and start exploring multi-agent collaboration locally.
`,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
