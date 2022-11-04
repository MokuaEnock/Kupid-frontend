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
          <span id="user_info1">
            <p>Age: 27</p>
            <p>Location: Kenya</p>
            <p>Sex: Male</p>
          </span>
          <span id="user_info2">
            <button>Like</button>
            <button>Message</button>
            <button>View</button>
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
