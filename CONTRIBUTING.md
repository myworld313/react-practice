# Contributing

Thanks for taking a look. This is a React practice project, and suggestions are welcome.

## How to contribute

1. **Fork** this repository to your own GitHub account.
2. **Clone** your fork and create a branch from `coder`:
   ```bash
   git switch -c my-change origin/coder
   ```
3. **Make your change** and test it locally:
   ```bash
   npm install
   npm run dev
   ```
4. **Commit** with a short, clear message that says what changed and why.
5. **Open a pull request against the `coder` branch**, not `main`.

## Branches

| Branch | Purpose |
|---|---|
| `coder` | Where public contributions land. Open your pull request here. |
| `main` | Stable. Protected, and it only changes through reviewed pull requests. |

Pull requests aimed at `main` will be asked to retarget `coder`.

## Guidelines

- Keep each pull request small and focused on one change.
- Follow the style of the surrounding code.
- Use TypeScript and function components with hooks, as the rest of the project does.
- Explain your change in the pull request description. If it's visual, include a screenshot.

## Review

Every pull request is read before it's merged. Changes may be requested, and some may be declined. That's normal and not personal.
