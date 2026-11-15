function Header() {
  return (
    <header>
      <h1>My Portfolio</h1>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <p>© 2026 My Portfolio</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <p>Welcome to my page.</p>
      </main>
      <Footer />
    </>
  );
}
