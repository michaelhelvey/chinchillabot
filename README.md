# chinchillabot

I'm honestly not sure yet.

## Packages

- [`@michaelhelvey/chinchillabot`](packages/chinchillabot): the application entrypoint.

## Development

```sh
pnpm install
pnpm run dev
pnpm run validate
```

`pnpm run validate` runs the format and lint check, the type check, and the tests in parallel. Vite+
caches each task, so a task is skipped when its inputs did not change.
