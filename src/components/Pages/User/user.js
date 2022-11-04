import Aside from "./aside";

export default function User() {
  return (
    <section id="user">
      <Aside />
      <div id="users">
        <div id="user_title">Enock Mokua</div>
        <div id="user_image"></div>
        <div id="user_info"></div>
        <div id="user_buttons">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
      <div id="bio">
        <form>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </form>
      </div>
    </section>
  );
}
