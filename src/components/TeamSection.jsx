import { motion } from "framer-motion";

const team = [
  {
    name: "Aarav Mehta",
    specialization: "MERN Architect",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ira Sharma",
    specialization: "SEO & Content Strategy",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kabir Nair",
    specialization: "Data Analyst",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Nisha Rao",
    specialization: "Debugging Specialist",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
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
            <p>{person.specialization}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
