export async function api(path: string) {
  const base = import.meta.env.VITE_API_URL || ''
  const res = await fetch(`${base}/api${path}`)
  if (!res.ok) throw new Error('Request failed')
  return res.json()
}
