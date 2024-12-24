import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
          <div className="flex flex-col items-center justify-center ">
            <div className="flex space-x-4">
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} />
            </div>
            <div className="flex flex-col items-center pt-8 mt-8 border-t border-gray-700">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Susil</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
