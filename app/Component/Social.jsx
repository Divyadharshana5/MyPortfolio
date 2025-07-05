"use client";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Social() {
  return (
    <div className="flex gap-4">
      <a
        href="https://github.com/Divyadharshana5"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-white hover:text-green-400 transition-colors duration-300"
      >
        <FaGithub size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/divyadharshana5"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-white hover:text-green-400 transition-colors duration-300"
      >
        <FaLinkedinIn size={32} />
      </a>
      <a
        href="https://twitter.com/YOUR_TWITTER_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="text-white hover:text-green-400 transition-colors duration-300"
      >
        <FaTwitter size={32} />
      </a>
    </div>
  );
}
