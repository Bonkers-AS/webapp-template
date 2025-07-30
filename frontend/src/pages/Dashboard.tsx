import { useEffect, useState } from 'react'
import { api } from '../lib/api'

export default function Dashboard() {
  const [ping, setPing] = useState<string>('Loading...')

  useEffect(() => {
    api('/ping')
      .then((res) => setPing(JSON.stringify(res)))
      .catch(() => setPing('Error'))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <p data-testid="ping-result">{ping}</p>
    </div>
  )
}
