function Card({ title = "Untitled", children }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
export default function App() {
  const sayHi = () => alert("Hi!");
  return (
    <Card title="Notice">
      <p>This is card content passed as children.</p>
      <button onClick={sayHi}>Click me</button>
    </Card>
  );
}
