import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import aniket from "../assets/aniket.png";
import abhinav from "../assets/abhinav.jpeg";
import arjun from "../assets/arjun.jpeg";
import devam from "../assets/devam.png";

const team = [
  {
    name: "Aniket Kumar",
    course: "B-Tech CSE",
    specialization: "MERN Architect",
    photo: aniket,
  },
  {
    name: "Abhinav Pratap",
    course: "B-Tech CSE",
    specialization: "Debugging Specialist",
    photo: abhinav,
  },
  {
    name: "Arjun Saini",
    course: "B-Tech CSE",
    specialization: "SEO, Content Planning & Website Deployment",
    photo: arjun,
  },
  {
    name: "Devam Saini",
    course: "B-Tech CSE",
    specialization: "Data Analyst",
    photo: devam,
  },
  {
    name: "Anushree Malik",
    course: "B-Tech CSE",
    specialization: "UI/UX Developer",
    photo:
      "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="section team-section">
      <h2>Team</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          680: { slidesPerView: 2 },
          980: { slidesPerView: 3 },
        }}
      >
        {team.map((person, index) => (
          <SwiperSlide key={person.name}>
            <motion.article
              className="team-card"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.35 }}
            >
              <img src={person.photo} alt={person.name} loading="lazy" />
              <h3>{person.name}</h3>
              <h4>{person.course}</h4>
              <p>{person.specialization}</p>
            </motion.article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}