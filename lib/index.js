// <define:STUDIO_PROJECT>
var define_STUDIO_PROJECT_default = { name: "\u5065\u8EAB\u8BB0\u5F55", icon: "\u{1F3CB}\uFE0F", description: "\u57FA\u7840\u7248\uFF1A\u8BB0\u5F55\u8BAD\u7EC3\u3001\u8FD0\u52A8\u65F6\u957F\u4E0E\u8BAD\u7EC3\u5BB9\u91CF" };

// packages/sdk/entry.ts
import { fileURLToPath } from "node:url";
var name = "dsh-studio-fitness";
var inject = ["studioProjects"];
function apply(ctx) {
  ctx.effect(() => ctx.studioProjects.register({ id: "fitness", ...define_STUDIO_PROJECT_default, root: fileURLToPath(new URL("../static/", import.meta.url)) }), "\u5DE5\u4F5C\u5BA4\uFF1Afitness");
}
export {
  apply,
  inject,
  name
};
