import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Divyadharshana5", name: "GitHub" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/divyadharshana5", name: "LinkedIn" },
  { icon: <SiGmail />, path: "mailto:divyadharshana3@gmail.com", name: "Email" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
            aria-label={item.name}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;