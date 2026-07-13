/** Absolutní URL k souborům v public/materials/ (nezávislé na base SPA). */
export function materialUrl(url: string | undefined): string | undefined {
  if (!url) return url;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("./materials/")) return url.slice(1);
  if (url.startsWith("materials/")) return `/${url}`;
  return url;
}

export function isLocalMaterial(url: string | undefined): boolean {
  return !!url && materialUrl(url)?.startsWith("/materials/") === true;
}
