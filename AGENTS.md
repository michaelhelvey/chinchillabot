# chinchillabot

Some sort of self-hostable cloud agent product, I'm not sure yet.

## Toolchains

- Use `tsrs` for type checks (`pnpm run typecheck`). `vp check` does not do the type check.
- Use Vite+ (`vp`) for linting, formatting, and testing. Configure it in `vite.config.ts`.
  (https://viteplus.dev/llms.txt)
- Use pnpm for package management and Node.js for runtime code (https://pnpm.io/llms.txt)
- This is a pnpm workspace. Packages are in `packages/*`. The root `vite.config.ts` holds the shared
  lint, format, test, and task config. Run `pnpm exec vp` commands from the root.

## General Rules

- Always validate your work via all relevant checks (`pnpm run validate`) before declaring your work
  done.
- Keep relevant documentation up-to-date when you change code. This does _not_ mean you must _add_
  documentation for every change, it just means that if there is existing documentation affected by
  your change, then you should update it.
- Ensure that your changes have reasonable logging and tracing integrated from the start.
- Every package/crate should have a short user-focused README describing what it does and how to use
  it. The README should be directed at other crate/package authors who want to use the crate to do
  something, not focused on internals.
- Add doc comments to all public exports from a module. Avoid non-doc comments within code unless
  overwhelmingly necessary to explain an otherwise odd decision that would strike the reader as
  wrong at first glance (e.g. a lint ignore).
- Actively push against adding complexity. Before handling a vanishingly rare edge case, race
  condition, or other factor that would not normally ever happen in practice, explain the problem
  and trade-offs and get buy-in from the user before continuing.

## Typescript Rules

- All documentation and code comments should use ASD-STE100 Simplified Technical English.
- Always use Effect to express dependencies, errors, etc. This is a 100% effect-native project.
- Use blank lines to separate the logical steps in a function body. Put a blank line before the
  `return`, around logs, and between setup, work, and result. Do not write a long body as one dense
  block. In tests, separate the setup, the action, and the assertions with blank lines.

## Effect

- We use effect (version 4) for everything in this project.
- The complete source code for effect is checked out at ~/dev/thirdparty/effect. The entrypoint to
  the agent-facing documentation there is at `LLMS.md` at the root of the effect repository.
- Effect package versions are in the workspace catalog in the root `package.json`. In a package,
  refer to them with `"catalog:"`.
- `@effect/tsgo` patches TypeScript and the Vite+ Oxlint on `pnpm install`. `vp check` reports the
  Effect diagnostics as lint errors.

## Testing Rules

- Do not write tautological tests. Tests must assert something meaningful about the system that they
  test which cannot be trivially derived from the literal tokens in the code.
- Do not write code that requires module mocks in order to test -- use proper dependency injection
  using effect. Creating `mock` functions from `vitest` in order to assert how they are called is
  allowed.
- Use `@effect/vitest` for writing tests that require effect.

## Github / Collaboration Rules

- Don't make git commits unless you're in a worktree or I ask you to. If you're not in a worktree,
  that means that you are working collaboratively with me and other agents.
- Outside of a worktree, other agents and humans will be working with you in the same working tree.
  Do not change unrelated files or step on their work.
