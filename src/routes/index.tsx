import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>The Entrepreneurial Hour Zoom</Title>
      <h1>The Entrepreneurial Hour</h1>
      <Counter />
      <p>
        We meet every Wednesday at 8 AM. You can attend in person at Tech Alpharetta • 2972 Webb Bridge Road, Alpharetta, GA 30009{"\n"}
        OR
        <a href="https://us06web.zoom.us/j/99801555269" target="_blank">
        Attend meeting using this zoom link{"\n"} 
        *This links is active at 7:45AM*
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
