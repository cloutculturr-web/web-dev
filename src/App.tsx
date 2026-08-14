const contactLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/cloutculturr/' },
  { label: 'Email', href: 'mailto:cloutculturee@gmail.com' },
  { label: 'WhatsApp', href: 'https://wa.me/' },
];

function App() {
  return (
    <main className="coming-soon-page">
      <div className="ambient-glow ambient-glow-left" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-right" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="site-header">
        <a className="logo" href="/" aria-label="CloutCulturr. home">
          <span className="logo-line">clout</span>
          <span className="logo-line">culturr.</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="launch-title">
        <p className="eyebrow">A new chapter is taking shape</p>
        <h1 id="launch-title">Launching Soon</h1>
        <p className="hero-caption">Where brands meet the right talent.</p>
      </section>

      <footer className="site-footer">
        <p className="copyright">© 2026 CloutCulturr.</p>
        <p className="footer-note">Built for what comes next.</p>
        <nav className="contact-links" aria-label="Contact links">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.label === 'Email' ? undefined : '_blank'} rel={link.label === 'Email' ? undefined : 'noreferrer'}>
              {link.label}
            </a>
          ))}
        </nav>
      </footer>
    </main>
  );
}

export default App;
