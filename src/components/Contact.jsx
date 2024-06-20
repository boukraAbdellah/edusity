import Title from "./Title";
import msg_icon from "../assets/msg-icon.png";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5f991a8f-7a65-488d-a37b-c3173abef9ea");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className=" container">
      <Title title="Get in Touch" subtitle="contanct us" />

      <div className=" grid grid-cols-1 md:grid-cols-2 ">
        <div className=" text-gray-500 p-16">
          <p className=" text-2xl font-medium  text-[#000f38] mb-4 flex items-start">
            Send us a message {""}
            <img src={msg_icon} alt="" className=" w-8 h-8 mx-4 " />
          </p>
          <p className=" text-gray-500">
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <p className="flex items-center gap-3 my-4">
            <img src={mail_icon} alt="" className="w-7   inline-block " />
            boukra.abdellah0@gmail.com
          </p>
          <p className="flex items-center gap-3 mb-4">
            <img src={phone_icon} alt="" className="w-7   inline-block " />
            +213 6 00 00 00 00
          </p>
          <p className="flex items-center gap-3 mb-4">
            <img src={location_icon} alt="" className="w-7   inline-block " />
            123 Main Street, New York, NY 10001
          </p>
        </div>
        <div>
          <form className=" p-16 " onSubmit={onSubmit}>
            <div className=" grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className=" p-3 border bg-[#ebecfe] rounded-md w-full"
                required
              />
              <input
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                className=" p-3 border bg-[#ebecfe] rounded-md w-full"
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className=" p-3 border bg-[#ebecfe] rounded-md w-full"
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Enter your message"
                className=" p-3 border bg-[#ebecfe] rounded-md w-full"
                required
              ></textarea>
              <button
                type="submit"
                className=" bg-[#212ea0] text-white py-3 px-6 rounded-full text-lg"
              >
                Submit now
              </button>
            </div>
            <span>{result}</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
