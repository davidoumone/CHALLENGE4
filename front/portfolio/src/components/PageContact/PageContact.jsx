import React from "react";
import avatar from "../../images/avatar.jpeg"
import "./PageContact.css";

const PageContact = () => {
  return (
    <div className="loginbox">
      <img src={avatar} className="avatar" alt=""/>
      <h1>Login Administrator</h1>
      <form>
        <p>E-mail adress</p>
        <input type="text" name="" placeholder="vous@exemple.com"/>
        <p>Password</p>
        <input type="text" name="" placeholder="Enter password"/>
        <input type="submit" name="" value="Send"/>
      </form>
    </div>
  );
};

export default PageContact;
