import React from 'react';
import JobCard from '../components/jobCard';

export default function Jobs() {
  const jobs = [
    {
      title: "React-JS Developer",
      description: "Develop and design the front-end of MERN applications using React-JS.",
      firm: "Tech Solutions Inc.",
      image: "https://blog.logrocket.com/wp-content/uploads/2023/08/best-feather-inspired-animated-icon-libraries-react.png",
      mode: "Remote",
          skills: ["React", "CSS", "JavaScript", "HTML"],

    },
    {
      title: "Flutter Developer",
      description: "Build scalable front-end services using Flutter.",
      firm: "Innovatech Ltd.",
      image: "https://media.licdn.com/dms/image/v2/D5612AQENHLGEQj4EAQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1727193342069?e=1758758400&v=beta&t=M-RSRR1LTX5mJG7M7lh0ztDUopBKCtxn4ttONS512i4",
      mode: "Onsite",
          skills: ["React", "CSS", "JavaScript"],

    },
    {
      title: "MERN Developer",
      description: "Work on both front-end and back-end development using the MERN stack.",
      firm: "Global Tech Corp.",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*GKIyAWHbKbANm7d9.png",
      mode: "Hybrid",
          skills: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Full Stack Developer",
      description: "Design and develop full-stack applications with a focus on user experience.",
      firm: "NextGen Solutions",
      image: "https://dianapps.com/blog/wp-content/uploads/2023/05/Untitled-design-75.png",
      mode: "Remote",
      skills: ["React", "CSS", "JavaScript"],

    }
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f0f4f8, #e2eafc)',
        padding: '40px 20px'
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '40px',
          fontSize: '2.5rem',
          color: '#333',
        }}
      >
        🔍 Explore Job Opportunities
      </h2>

      <JobCard jobs={jobs} />
    </div>
  );
}
