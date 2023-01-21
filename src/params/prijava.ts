import type { ParamMatcher } from "@sveltejs/kit";

export const match = ((param) => {
  return /^(prijava|registracija)$/.test(param);
}) satisfies ParamMatcher;
