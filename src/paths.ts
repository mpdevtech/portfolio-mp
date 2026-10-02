/** Resolve application links and public assets under Vite's deployment base. */
export const withBase = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export function routePath(pathname: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const path = pathname === base ? '/' : pathname.startsWith(`${base}/`) ? pathname.slice(base.length) : pathname
  return path.replace(/\/$/, '') || '/'
}
