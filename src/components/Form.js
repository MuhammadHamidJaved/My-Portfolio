import "./FormStyles.css";

import React from "react";

const Form = () => {
  return <div className="form">
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name.." />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Your email.." />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" placeholder="Write something.."></textarea>
      <button className="btn">Submit</button>
    </form>
  </div>;
};

export default Form;
