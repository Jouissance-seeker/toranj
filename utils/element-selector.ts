export function $(el: string): any {
  if (typeof document === 'undefined') return null;
  return document.querySelector(el);
}
