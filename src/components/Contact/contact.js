import React, { useRef } from "react";
import l1 from "../../assets/l1.jpeg";
import l2 from "../../assets/l2.jpeg";
import l3 from "../../assets/l3.jpeg";
import l4 from "../../assets/l4.png";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'
import "./contact.css";


const Contact = () => {
const Alert =()=>{
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Email Sent Successfully",
    showConfirmButton: false,
    timer: 700
  });
}

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r7gua69",
        "template_gvic57b",
        form.current,
        "50tdAT-9dAjQpScbH"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          // alert('Email Sent !')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contacts">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="your_name"
        ></input>
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
        ></input>
        <textarea
          className="msg"
          name="message"
          rows={5}
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="send" className="submitBtn" onClick={Alert}>Submit</button>
        <div className="photos">
          <img src={l1} alt="" className="photo"></img>
          <img src={l2} alt="" className="photo"></img>
          <img src={l3} alt="" className="photo"></img>
          <img src={l4} alt="" className="photo"></img>
        </div>
      </form>
    </div>
  );
};

export default Contact;
