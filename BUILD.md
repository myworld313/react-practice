# Project Build

How this React practice project is put together and how to build it.

## Stack

| Tool | Version | Role |
| --- | --- | --- |
| React | 19 | UI library |
| React Router | 8 | Client-side routing |
| TypeScript | 6.0 | Type checking |
| Vite | 8 | Dev server and bundler |
| Tailwind CSS | 4 | Styling, via the `@tailwindcss/vite` plugin |
| ESLint | 10 | Linting (typescript-eslint, react-hooks, react-refresh) |

Fonts come from `@fontsource` packages (Fraunces and DM Sans).

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`), then bundle with `vite build` into `dist/` |
| `npm run lint` | Run ESLint on the whole project |
| `npm run preview` | Serve the built `dist/` locally |

There is no test script. Before committing, run these three:

```bash
npx tsc -b
npx eslint .
npm run build
```

## Structure

```text
practice/
├── index.html          # Vite entry HTML
├── .mcp.json           # MCP servers for Claude Code and VS Code chat
├── vite.config.ts      # React + Tailwind plugins
├── tsconfig*.json      # App and node TypeScript configs
├── eslint.config.js
├── dist/               # Build output (git-ignored)
└── src/
    ├── main.tsx        # Mounts <App />, imports fonts and index.css
    ├── App.tsx         # Router and route table
    ├── index.css       # Tailwind entry and global styles
    ├── layout/
    │   └── Layout.tsx  # Shared shell (navbar plus page outlet)
    ├── components/
    │   └── Navbar.tsx
    └── pages/
        ├── Home.tsx
        ├── About.tsx
        ├── Portfolio.tsx
        └── Contact.tsx
```

## Routes

All routes render inside `Layout`.

| Path | Page |
| --- | --- |
| `/` | `Home` |
| `/about` | `About` |
| `/portfolio` | `Portfolio` |
| `/contact` | `Contact` |

## GitHub

- **Repository:** [myworld313/react-practice](https://github.com/myworld313/react-practice)
- **Visibility:** public
- **Default branch:** `main`
- **Remote:** `origin` at `https://github.com/myworld313/react-practice.git`

### Branches

| Branch | Purpose | On GitHub | Protected |
| --- | --- | --- | --- |
| `main` | Stable. Changes only through pull requests. | Yes | Yes |
| `agents-and-coder` | Shared working branch for Marlon and Claude. | Yes | No |
| `coder` | Public contributions. Outside pull requests target this branch. | Yes | No |
| `agents` | Claude's branch for automated work. | No (local only) | No |

### Protection on `main`

- Pull requests are required before merging.
- Required approving reviews: 0.
- Rules apply to admins too.
- Force pushes are blocked.
- Deleting the branch is blocked.

### Workflow

1. Work happens on `agents-and-coder`.
2. Changes reach `main` only through a pull request (PR #1 was the first).
3. Public contributors fork the repo, branch from `coder`, and open pull requests against `coder`. See `CONTRIBUTING.md`.
4. Nobody pushes or merges to `main` directly.

## AI tools

Two chats in VS Code can work on this project, and both use the same tools.

| Chat | How to open | Runs on | Notes |
| --- | --- | --- | --- |
| Claude Code | Claude icon in the sidebar | Claude plan | Start a new conversation to pick up config changes. |
| VS Code Chat | Ctrl+Cmd+I | GitHub Copilot free tier | Keep the harness on **Local** and the model on **GPT-4.1**. Never start a "Copilot CLI Session". |

Tools come from MCP servers. The project ones are in `.mcp.json` and travel with the repo:

| Server | Gives the chat | Needs |
| --- | --- | --- |
| `playwright` | A real browser to open `localhost:5173` and read the page | `npm run dev` running |
| `context7` | Current React, Vite, and Tailwind docs | Nothing |
| `figma-local` | The design file open in the Figma desktop app | Figma open with a file loaded |

Machine-wide servers (GitHub, Notion, AWS) live in VS Code's user profile for VS Code Chat, and come from plugins for Claude Code. Claude Code stores its approval of the project servers in `.claude/settings.local.json`, which is git-ignored.

Typical prompts: "Open the Contact page at phone width and tell me what's broken." "Check the React docs with Context7 and explain `useEffect` cleanup." Approve each tool call when asked. Playwright writes snapshots to `.playwright-mcp/`, which is git-ignored.
