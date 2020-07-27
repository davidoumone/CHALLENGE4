import React from "react";
import "./PageContact.css";

const PageContact = () => {
  return (
    <div className="loginbox">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yVywVC6PkiDZlRHhE37OcwAAAA%26pid%3DApi&f=1" className="avatar" alt=""/>
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
