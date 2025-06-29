import List from "./components/List/List";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  return (
    <div className="min-h-screen bg-slate-700 flex flex-col items-center justify-center gap-8 p-4">
      <ProfileCard
        name={"@jpb.dev"}
        description={"Front-end Developer, passionate about technology and programming."}
      />
      <List />
    </div>
  );
}
export default App;
