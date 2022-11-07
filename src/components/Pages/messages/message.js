import Aside from "../User/aside.js";

export default function Message() {
  function changeColor() {
    let disp = document.querySelector("#message_display");
    if (disp.textContent === "") {
      disp.textContent = "hello world";
    } else {
      disp.textContent = "";
    }
  }

  function Item({ changeColor }) {
    return (
      <li onClick={changeColor}>
        <span id="message_image">
          <img src="#" alt="avatar" />
        </span>
        <span id="message_body">
          <div>Enock Mokua</div>
          <div>Jskjd wcjc woncei wjjnejn</div>
        </span>
      </li>
    );
  }

  return (
    <section id="message">
      <Aside />
      <section>
        <div id="message_list">
          <Item />
        </div>

        <div id="message_display"></div>
      </section>
    </section>
  );
}
