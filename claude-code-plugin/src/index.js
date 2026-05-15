#!/usr/bin/env node

console.log("Claude Code plugin skeleton loaded.");

export function activate(context = {}) {
  return {
    name: "example-plugin",
    context
  };
}
