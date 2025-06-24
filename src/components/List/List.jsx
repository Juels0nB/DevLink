import ButtonLink from "../ButtoLink/ButtoLink";

function List() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <ul>
        <ButtonLink
          className="bg-purple-500"href="https://www.instagram.com/jpb.dev">Instagram</ButtonLink>
        <ButtonLink className="bg-blue-500"href="https://github.com/Juels0nB">Github</ButtonLink>
        <ButtonLink className="bg-blue-500"href="https://www.linkedin.com/in/juelson-balanga-219496349/">Linkdin</ButtonLink>
      </ul>
    </div>
  );
}
export default List;
