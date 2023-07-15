import React from "react";
import { useHistory } from "react-router-dom";
import locationIcon from "./location.png";
import phoneIcon from "./phone.png";
import emailIcon from "./email.png";

function ContactUs() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/contact-us");
  };

  return (
    <div className="container mx-auto py-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex items-center space-x-4">
          <img src={phoneIcon} alt="Phone Icon" className="w-8 h-8" />
          <p className="text-lg">Phone: +91 88728-88871</p>
        </div>
        <div className="flex items-center space-x-4">
          <img src={emailIcon} alt="Email Icon" className="w-8 h-8" />
          <p className="text-lg">Email: info@agriconnect.com</p>
        </div>
        <div className="flex items-center space-x-4">
          <img src={locationIcon} alt="Location Icon" className="w-8 h-8" />
          <p className="text-lg">102 Farm Lane, Nabha, India</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
