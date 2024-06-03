import React from "react";
import { Container, Row, Col } from "react-bootstrap";
  
  
  function Contact() {
    return (
      <div className="container">
        <h1 className="display-2 p-5"><strong> Contact Us </strong></h1>
        <div className="col bg-secondary">
        <form>
          <div className="mb-3">
          <label className="form-label"> First Name </label>
          <input type="text"  className="form-control" placeholder="Enter Your Name"></input>
          <label className="form-label"> Last Name </label>
          <input type="text" className="form-control" placeholder="Enter Second Name"></input>
          <label className="form-label"> Email Address </label>
          <input type="email" className="form-control" placeholder="example@email.com"></input>
          <label className="form-label"> Your Message </label>
          <textarea className="form-control" rows="4" cols="50"></textarea>
          <input type="submit" value="Submit" className="btn btn-success mt-3"></input>
          </div>
        </form>
        </div>
      </div>
    );
  }
  
  export default Contact;