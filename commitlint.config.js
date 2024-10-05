export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refact", // i prefer refact
        "refactor",
        "revert",
        "style",
        "test"
      ]
    ]
  }
}
