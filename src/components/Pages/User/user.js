import Aside from "./aside";

export default function User() {
  return (
    <section id="user">
      <Aside />
      <div id="users"></div>
      <div id="bio">
        <form>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </form>
      </div>
    </section>
  );
}
