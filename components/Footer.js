import {
  FaGithubSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row font-kanit">
      <a
        href="#"
        className="text-xl font-extralight text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 uppercase"
      >
        Up-Next
      </a>

      <p className="py-2 text-gray-800 dark:text-white sm:py-0">
        2022 All rights reserved.
      </p>

      <div className="flex -mx-2">
        <a
          href="#"
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
          aria-label="Facebook"
        >
          <FaFacebookSquare className="text-4xl hover:text-purple-600" />
        </a>

        <a
          href="#"
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
          aria-label="Instagram"
        >
          <FaInstagramSquare className="text-4xl hover:text-purple-600" />
        </a>

        <a
          href="#"
          className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
          aria-label="Github"
        >
          <FaGithubSquare className="text-4xl hover:text-purple-600" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
