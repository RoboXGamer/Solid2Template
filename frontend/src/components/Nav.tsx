import { paths } from "../router";

export default function Nav() {
  return (
    <nav>
      <a href={paths()}>Home</a>
    </nav>
  );
}