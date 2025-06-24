import perfil from "../../assets/perfil.jpg";
function ProfileCard({ name, age, location }) {
  return (
    <div className="profile-card bg-slate-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
      <img src={perfil} alt="Perfil" className="w-32 h-32 rounded-full object-cover mx-auto" />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}
export default ProfileCard;