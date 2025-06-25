import List from "./components/List/List";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  return (
    <div className="min-h-screen bg-slate-700 flex flex-col items-center justify-center gap-8 p-4">
      <ProfileCard
        name={"Juelson Pinto Balanga"}
        age={19}
        location={"Portugal"}
      />
      <List />
    </div>
  );
}
export default App;
