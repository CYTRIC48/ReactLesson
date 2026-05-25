export default function MyBtn({text = "Click me", myClick}) {
  return <button onClick={() => myClick()}>{text}</button>;
}
