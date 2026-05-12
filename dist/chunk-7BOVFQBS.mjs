// lib/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export {
  cn
};
//# sourceMappingURL=chunk-7BOVFQBS.mjs.map