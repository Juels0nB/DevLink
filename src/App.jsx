import List from "./components/List/List";
import ProfileCard from "./components/ProfileCard/ProfileCard";
 

function App() {
  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col items-center justify-center gap-6">
      
      <ProfileCard name={"Juelson"} age={19} location={"Portugal"}/>
      <List />
    </div>
  );
}
export default App;
;