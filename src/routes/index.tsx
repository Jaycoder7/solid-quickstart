import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>The Entrepreneurial Hour Zoom</Title>
      <h1>The Entrepreneurial Hour</h1>
       <head>
    <title>Title of the document</title>
    <style>
      .button {
        display: inline-block;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        color: #ffffff;
        background-color: #7aa8b7;
        border-radius: 6px;
        outline: none;
        transition: 0.3s;
      }
      .button:hover {
        background-color: #c2c7c7;
      }
    </style>
  </head>
  <body>
    <a class="button" href="https://us06web.zoom.us/j/99801555269">Zoom</a>
  </body>
      
      <p>
        We meet every Wednesday at 8 AM. You can attend in person at Tech Alpharetta • 2972 Webb Bridge Road, Alpharetta, GA 30009
        OR
        <a href="https://us06web.zoom.us/j/99801555269" target="_blank">
        Attend meeting using this zoom link
        </a>{" "}
        *This links is active at 7:45AM*
      </p>
    </main>
  );
}
