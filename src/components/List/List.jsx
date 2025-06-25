import ButtonLink from "../ButtoLink/ButtoLink";

function List() {
  return (
    <div className="flex flex-col gap- w-full max-w-md mx-auto">
      <ul className="flex flex-col gap-4">
        <ButtonLink
          className="bg-purple-600"
          href="https://www.instagram.com/jpb.dev"
        >
          Instagram
        </ButtonLink>
        <ButtonLink
          className="bg-blue-500/80"
          href="https://github.com/Juels0nB"
        >
          Github
        </ButtonLink>
        <ButtonLink
          className="bg-blue-500/80"
          href="https://www.linkedin.com/in/juelson-balanga-219496349/"
        >
          Linkdin
        </ButtonLink>
      </ul>
    </div>
  );
}
export default List;
