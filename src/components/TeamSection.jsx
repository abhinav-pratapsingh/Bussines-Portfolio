import { motion } from "framer-motion";

const team = [
  {
    name: "Aniket Kumar",
    course: "B-Tech CSE",
    specialization: "MERN Architect",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Abhinav Pratap",
    course: "B-Tech CSE",
    specialization: "Debugging Specialist",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Arjun Saini",
    course: "B-Tech CSE",
    specialization: "SEO, Content Planning & Website Deployment ",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Devam Saini",
    course: "B-Tech CSE",
    specialization: "Data Analyst",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Anushree Malik",
    course: "B-Tech CSE",
    specialization: "UI/UX Developer",
    photo: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_user_personalization&w=740&q=80",
  },
];

export default function TeamSection() {
  return (
    <section className="section">
      <h2>Team</h2>
      <div className="team-grid">
        {team.map((person, index) => (
          <motion.article
            key={person.name}
            className="team-card"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -7 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
          >
            <img src={person.photo} alt={person.name} loading="lazy" />
            <h3>{person.name}</h3>
            <h4>{person.course}</h4>
            <p>{person.specialization}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
