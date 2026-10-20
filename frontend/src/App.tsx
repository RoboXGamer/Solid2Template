import { Title } from "@solidjs/meta";
import { Loading } from "solid-js";
import Nav from "./components/Nav";
import { Router } from "./router";
import "./styles.css";

export default function App() {
  return (
    <Router>
      {(props) => (
        <>
          <Title>T2 — Solid 2 Counter</Title>
          {/* <Nav /> */}
          <Loading fallback={<main>Loading…</main>}>{props.children}</Loading>
        </>
      )}
    </Router>
  );
}