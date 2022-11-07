import Aside from "../User/aside.js";

export default function Message() {
  function changeColor() {
    let disp = document.querySelector("#message_display");
    if (disp.style.background === "white") {
      disp.style.background = "red";
    } else {
      disp.style.background = "white";
    }
  }

  return (
    <section id="message">
      <Aside />
      <section>
        <div id="message_list">
          <li onClick={changeColor}>helllo wwjjwjwjwjjw</li>
          <li>Message 1</li>
          <li>Message 1</li>
          <li>Message 1</li>
          <li>Message 1</li>
          <li>Message 1</li>
        </div>

        <div id="message_display"></div>
      </section>
    </section>
  );
}
