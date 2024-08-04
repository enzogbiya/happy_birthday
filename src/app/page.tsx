'use client'

import CountdownTimer from '@/components/stub/stub'

export default function Home() {
  if (new Date().toLocaleString() < new Date('2024-08-05').toLocaleString()) {
    // @ts-ignore
    return <CountdownTimer date={new Date('2024-08-05T00:00:00.000Z')} />
  }

  return (
    <main>
      <h1>no stub</h1>
    </main>
  )
}