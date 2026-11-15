import "./ProfileCard.css";

function ProfileCard({ profile }) {
  return (
    <div className="card" style={{ borderLeftColor: profile.avatarColor }}>
      <div className="avatar" style={{ backgroundColor: profile.avatarColor }}>
        {profile.name.charAt(0)}
      </div>
      <h3>{profile.name}</h3>
      <p className="role">{profile.role}</p>
      <p className="bio">{profile.bio}</p>
    </div>
  );
}

export default function App() {
  const profiles = [
    {
      id: 1,
      name: "Maria Aziz",
      role: "Frontend Developer",
      bio: "Passionate about React and UI design.",
     
    },
    {
      id: 2,
      name: "Iram Yaseen",
      role: "UI/UX Designer",
      bio: "Loves to create clean and simple interfaces.",
      
    },
    {
      id: 3,
      name: "Miral",
      role: "Backend Developer",
      bio: "Expert in Node.js and databases.",
      
    },
    {
      id: 4,
      name: "Zimal",
      role: "Full Stack Learner",
      bio: "Learning MERN stack development.",
      
    },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Profile Card Gallery</h1>
      <div className="gallery">
        {profiles.map((p) => (
          <ProfileCard key={p.id} profile={p} />
        ))}
      </div>
    </>
  );
}
