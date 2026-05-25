import { Gi3dHammer } from "react-icons/gi";

export default function MyBtn({text = "Click me", myClick}) {
  return <button onClick={() => myClick()}>
    <Gi3dHammer />
    {text}
    </button>;
}
