import { recommended } from "@effect/tsgo/oxlint-presets";
import { defineConfig, FileTypes } from "@michaelhelvey/vite-config";

export default await defineConfig({
  lint: {
    extends: [recommended],
    // tsrs does the type check in the `validate:types` task. Type-aware rules stay on.
    options: { typeAware: true, typeCheck: false },
    rules: {
      complexity: ["error", { max: 4 }],
    },
    overrides: [
      {
        files: FileTypes.JS_SOURCE,
        rules: { "effecttsgo/unstable-api-usage": "off" },
      },
      {
        files: FileTypes.TEST_SOURCE,
        rules: {
          "vitest/no-standalone-expect": [
            "error",
            {
              additionalTestBlockFunctions: [
                "it.effect",
                "it.effect.each",
                "it.live",
                "it.scoped",
                "it.layer",
              ],
            },
          ],
        },
      },
    ],
  },
  run: {
    tasks: {
      "validate:check": "vp check",
      "validate:types": "tsrs --noEmit",
      "validate:test": {
        command: "vp test run --passWithNoTests",
        cache: {
          // Vite and Vitest read and write their own caches on each run.
          input: [
            { auto: true },
            "!node_modules/.vite/vitest/**",
            "!node_modules/.vitest-cache/**",
            "!node_modules/.vite-temp/**",
          ],
        },
      },
      "validate-task": {
        // A task must have a command. The real work is in the parallel `dependsOn` tasks.
        command: "true",
        dependsOn: ["validate:check", "validate:types", "validate:test"],
      },
    },
  },
  test: {
    // Effect should make this safe
    isolate: false,
  },
});
