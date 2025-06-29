import perfil from "../../assets/perfil.jpg";
function ProfileCard({ name, description }) {
  return (
    <div className="profile-card bg-slate-500/25 text-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-4 transition hover:scale-105 active:scale-95">
      <img src={perfil} alt="Perfil" className="w-32 h-32 rounded-full object-cover mx-auto" />
      <h2>{name}</h2>
      <p className="text-center">{description}</p>
     
    </div>
  );
}
export default ProfileCard;