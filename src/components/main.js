import Landing from "./Pages/landing/landing";
import Login from "./Pages/Login/login";
import Form from "./Pages/form/form";
import User from "./Pages/User/user";
import Message from "./Pages/messages/message.js";

export default function Main() {
  return (
    <>
      <Landing />
      <Login />
      <Form />
      <User />
      <Message />
    </>
  );
}
