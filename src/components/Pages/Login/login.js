export default function Login() {
  return (
    <div id="forms">
      <form id="signup">
        <div>
          <input type="text" placeholder="Your firstname" />
          <input type="text" placeholder="Your lastname" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Enter password" />
          <input type="password" placeholder="Confirm password" />
          <button>Join us</button>
        </div>
      </form>
      <form id="login">
        <div>
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your Password" />
          <button>Continue</button>
        </div>
      </form>
    </div>
  );
}
