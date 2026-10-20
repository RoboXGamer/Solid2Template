import { Title } from "@solidjs/meta";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Home — T2</Title>
      <h1>Solid 2 Counter</h1>
      <Counter />
    </main>
  );
}