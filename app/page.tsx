export default function HomePage() {
  return (
    <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ maxWidth: 600, textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Site placeholder</h1>
        <p style={{ color: '#666', lineHeight: 1.6 }}>
          Replit Agent va remplacer ce fichier en lisant{' '}
          <code>_inputs/INSTRUCTIONS.md</code>.
        </p>
      </div>
    </main>
  )
}
