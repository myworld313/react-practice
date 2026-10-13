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
