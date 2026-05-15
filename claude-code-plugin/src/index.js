import { pathToFileURL } from "node:url";

export function activate(context = {}) {
  console.log("Claude Code plugin skeleton loaded.");
  return {
    name: "claude-code-plugin-skeleton",
    context
  };
}

const isCliRun =
  // ESM equivalent of "run as main module" detection.
  Boolean(process.argv[1]) && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isCliRun) {
  activate();
}
