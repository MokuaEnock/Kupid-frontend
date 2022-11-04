import Aside from "./aside";

export default function User() {
  return (
    <section id="user">
      <Aside />
      <div id="users">
        <div id="user_title">Enock Mokua</div>
        <div id="user_image">
          <img src="#" alt="user" />
        </div>
        <div id="user_info">
          <span></span>
          <span id="user_info1"></span>
          <span id="user_info2">
            <button>Like</button>
            <button>Message</button>
          </span>
        </div>
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
