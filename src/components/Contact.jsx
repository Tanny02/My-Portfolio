import { useRef, useState } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_l15jvow",
        "template_g52fuv9",
        ref.current,
        "BfkENNHd8h6QA39TB"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false);
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <div
      id="Contact"
      className="flex flex-col items-center justify-center text-blue-800 w-[100vw] h-[100vh] sm:w-[80vw] md:w-[80vw]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 flex-1 w-[90%] mt-12">
        <div className="flex flex-col items-center justify-center gap-5 flex-1 p-2 lg:w-[90%]">
          <h1 className="text-3xl sm:text-5xl font-bold">Contact Me</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center">
            If you have any questions or need assistance with anything, feel
            free to reach out. I'm here to help.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 lg:w-[90%]">
          <form
            className="flex flex-col gap-2 w-full text-slate-300"
            onSubmit={sendEmail}
            ref={ref}
          >
            <input
              type="text"
              placeholder="Name"
              className="p-2 w-full border rounded-xl bg-transparent"
              required
              name="name"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 w-full border rounded-xl bg-transparent"
              required
              name="email"
            />
            <textarea
              placeholder="Message"
              className="p-2 w-full border rounded-xl h-48 bg-transparent"
              required
              name="message"
            ></textarea>
            <button
              type="submit"
              className="p-2 w-full bg-blue-800 text-white rounded-xl hover:bg-blue-500"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
          {success ? (
            <div className="text-center text-green-800 mt-4">
              Message sent successfully!
            </div>
          ) : error ? (
            <div className="text-center text-red-800 mt-4">
              There was an error sending the message. Please try again later.
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-blue-800 p-2 mb-2">
        <div className="flex items-center justify-center text-xs">
          &copy; {new Date().getFullYear()} Tanish Marick. All rights reserved.
        </div>
        <div className="flex items-center justify-center gap-2">
          <a
            className=""
            href="https://www.linkedin.com/in/tanish-marick-365a60270/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            className=""
            href="https://github.com/Tanny02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
