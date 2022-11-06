import Aside from "../User/aside.js";

export default function Message() {
  return (
    <section id="message">
      <Aside />
      <section>
        <div id="message_list"></div>

        <div id="message_display"></div>
      </section>
    </section>
  );
}
