import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
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

  );
}
