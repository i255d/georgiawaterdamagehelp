export function getCallRailSwapSrc() {
  const raw = String(import.meta.env.PUBLIC_CALLRAIL_SWAP ?? "").trim();
  if (!raw) return null;

  const fromTag = raw.match(/src=["']([^"']+)["']/i);
  const src = (fromTag?.[1] ?? raw).trim();
  if (!src.includes("callrail.com") || !src.includes("swap.js")) return null;
  if (
    src.startsWith("//") ||
    src.startsWith("https://") ||
    src.startsWith("http://")
  ) {
    return src;
  }
  return `//${src.replace(/^\/+/, "")}`;
}
