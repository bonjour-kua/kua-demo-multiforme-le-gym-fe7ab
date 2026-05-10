import type { Metadata } from 'next'
import './globals.css'

async function getTitle(): Promise<string> {
  try {
    const fs = await import('node:fs')
    const path = await import('node:path')
    const file = path.join(process.cwd(), '_inputs', 'lead.json')
    if (!fs.existsSync(file)) return 'Site démo'
    const data = JSON.parse(fs.readFileSync(file, 'utf-8')) as { company_name?: string }
    return data.company_name || 'Site démo'
  } catch {
    return 'Site démo'
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const title = await getTitle()
  return { title, description: 'Site généré par Küa' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
