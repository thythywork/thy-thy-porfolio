import React, { useState } from "react";
import Title from "../title/Title";
import Input from "../input/Input";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
      });

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="py-8 h-screen">
      <Title title="contact" />
      <div className="flex flex-col items-center gap-12 move-bottom-to-top h-full justify-center">
        <p className="text-white text-center align-middle w-2/3 md:text-base text-sm">
          I would love to hear about your project and how I can help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
        <form onSubmit={sendEmail} className="w-1/2 flex flex-col gap-4">
          <Input
            title="Name"
            type="text"
            name="name"
            value={form.name}
            func={handleChange}
          />
          <Input
            title="Email"
            type="email"
            name="email"
            value={form.email}
            func={handleChange}
          />
          <Input
            title="Message"
            type="textarea"
            name="message"
            value={form.message}
            func={handleChange}
          />
          <button type="submit" className="mt-8 p-4 rounded-xl bg-[#D0D4FE] text-[#211F1F] hover:bg-gray-500">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
