import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import ButtonLink from "../ButtoLink/ButtoLink";

function List() {
  return (
    <div className="flex flex-col gap- w-full max-w-md mx-auto">
      <ul className="flex flex-col gap-4">
        <ButtonLink
          className="bg-purple-600/80"
          href="https://www.instagram.com/jpb.dev"
        >
          <FaInstagram className="mr-2" />
          Instagram
        </ButtonLink>
        <ButtonLink
          className="bg-blue-700/80"
          href="https://github.com/Juels0nB"
        >
          <FaGithub className="mr-2" />
          Github
        </ButtonLink>
        <ButtonLink
          className="bg-blue-500/80"
          href="https://www.linkedin.com/in/juelson-balanga-219496349/"
        >
          <FaLinkedin className="mr-2" />
          Linkdin
        </ButtonLink>
      </ul>
    </div>
  );
}
export default List;
