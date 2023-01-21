import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param) => {
  return /^[1-3]$/.test(param);
}) satisfies ParamMatcher;
