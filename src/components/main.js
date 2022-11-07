import react, { useEffect, useState } from "react";
import Landing from "./Pages/landing/landing";
import Login from "./Pages/Login/login";
import Form from "./Pages/form/form";
import User from "./Pages/User/user";
import Message from "./Pages/messages/message.js";

export default function Main() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/users")
      .then((r) => r.json())
      .then((r) => setUsers(r));
  }, []);

  console.log(users);
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
