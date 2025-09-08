import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7a.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";

export const HERO_CONTENT = `I am a Full-Stack Developer with 3+ years of experience in building and deploying scalable enterprise web applications, specializing in Angular (Advanced) and .NET Core with additional expertise in React, Node.js, FastAPI, and MySQL. I have successfully delivered projects such as PCMA (Project Cost Management Application) for role-based cost monitoring, HVMS (Heavy Vehicle Management System) with GenAI chatbot and automated inspections, ABMS (Accommodation Booking Management System) with Google Maps integration and third-party APIs, and the CVC Dashboard featuring advanced data visualizations using Chart.js, ApexCharts, ECharts, and Plotly.js. Skilled in designing interactive dashboards, workflow automation tools, and data-driven applications, I focus on enhancing business efficiency and decision-making while working effectively in Agile teams using Jira, Bitbucket, and GitHub.`;

export const ABOUT_TEXT = `I am a results-driven Full-Stack Web Developer with 3+ years of experience in designing and delivering scalable enterprise applications. Specialized in Angular (Advanced) and .NET Core, with additional expertise in React, Node.js, FastAPI, and MySQL, I excel at building interactive dashboards, workflow automation tools, and data-driven solutions that improve business efficiency. My portfolio includes key projects such as PCMA (Project Cost Management Application) for cost monitoring, HVMS (Heavy Vehicle Management System) with GenAI chatbot and automated inspections, ABMS (Accommodation Booking Management System) with Google Maps and third-party integrations, and the CVC Dashboard featuring real-time analytics with advanced visualization libraries like Chart.js, ApexCharts, ECharts, and Plotly.js. I thrive in agile team environments, leveraging GitHub, Bitbucket, and Jira to streamline development workflows, and I am passionate about exploring emerging technologies, solving complex challenges, and driving innovation through clean, efficient, and user-focused applications.`;

export const EXPERIENCES = [
  {
    year: "Apr 2024 - Present",
    role: "Project Engineer 2",
    company: "Oges Solutions",
    description: `Led a team in developing and maintaining web applications using JavaScript, TypeScript, Angular, React.js, and Node.js, Python, FastAPI. Implemented RESTful APIs and integrated with MySQL and MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["HTML", "CSS", "Javascript", "TypeScript", "Angular", "React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
  },
  {
    year: "July 2023 - Mar 2024",
    role: "Project Engineer",
    company: "Oges Solutions",
    description: `Designed, developed and maintained web applications using Angular and TypeScript, ensuring dynamic and responsive user interfaces. Utilized HTML and CSS to create visually appealing and user-friendly designs. Integrated FastAPI backend services with MySQL databases for efficient data handling. Optimized frontend performance with JavaScript best practices.`,
    technologies: ["HTML", "CSS", "Javascript", "TypeScript", "Angular", "BootStrap", "Python(FastAPI)", "JSON", "Jquery", "MySQL"],
  },
  {
    year: "Mar 2022 - Mar 2023",
    role: "Software Engineer",
    company: "Coforge",
    description: `Developed and maintained web applications using JavaScript, React.js, and Python. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "MySQL"],
  },
  {
    year: "Aug 2021 - Oct 2021",
    role: "Frontend Developer Intern",
    company: "Bolt IOT",
    description: `Leveraged HTML, CSS, JavaScript, and Bootstrap to develop a visually appealing and user-friendly UI for the online car rental service. Designed and implemented a captivating home page and customer login page to provide a seamless onboarding experience.`,
    technologies: ["HTML", "CSS", "JavaScript", "BootStrap"],
  },
];

export const PROJECTS = [
  {
    title: "Travel Mitra",
    image: project9,
    description: "TravelMitra is a modern, responsive travel assistance web application built using Next.js 15. It offers features such as secure authentication, session management, and a sleek UI design with Tailwind CSS and Radix UI. The platform is optimized for performance using React 18 and TypeScript, with state management via React Hook Form and Zod validation. It also integrates Firebase for real-time backend services and Genkit for AI-powered enhancements. With dark/light mode support, animated transitions, and dynamic charts via Recharts, TravelMitra ensures a seamless and elegant user experience across devices.",
    technologies: ["Next.js 15", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Firebase", "Genkit AI", "Zod", "React Hook Form", "Lucide React", "Recharts", "Radix UI", "Next Themes"]
  },
  {
    title: "User Dashboard",
    image: project8,
    description: "User Dashboard is a feature-rich dashboard application built using Angular 18. It showcases a dynamic user management interface with tabular grids, status indicators, tags, and progress bars. The UI supports sorting, filtering, inline editing, and deletion with modal confirmations. For data visualization, it integrates popular charting libraries like ApexCharts, Highcharts, Chart.js, and FusionCharts to display interactive graphs. Designed for performance and responsiveness, the app includes custom components, responsive table layouts, and reusable SCSS styles.",
    technologies: ["Angular 18", "RxJS", "SCSS", "Chart.js", "ApexCharts", "Highcharts", "FusionCharts", "ng-apexcharts", "ng2-charts", "Lucide Angular", "TypeScript"]
  },
  {
    title: "Snappy",
    image: project7,
    description: "The Chat App is a real-time messaging application built with a React frontend and Node.js backend. The frontend utilizes React to provide a responsive and dynamic UI, while the backend is powered by Express.js and communicates with the frontend using Socket.io for real-time updates. The application allows users to send and receive messages instantly, with support for emojis via the emoji-picker-react library. It is designed to provide a seamless, interactive chat experience. The backend integrates MongoDB (via Mongoose) for data storage, including user authentication and message history management. Socket.io is used to handle real-time communication, allowing users to join rooms and send/receive messages in real-time. The app also features user authentication and password encryption via bcrypt.",
    technologies: ["React", "React Router", "React Toastify", "Socket.io-client", "Axios", "Node.js", "Express.js", "Socket.io", "MongoDB", "bcrypt", "dotenv", "CORS"],
  },
  {
    title: "Nik Travels",
    image: project6,
    description: "Built a dynamic and interactive Travel Booking platform with an engaging user experience, designed for travelers to explore various destinations, book tours, and get detailed information about their travel options. This project integrates smooth animations, a responsive layout, and modern features to help users find and book their dream vacations easily.",
    technologies: ["React", "Tailwind CSS", "React Slick", "React Hook Form", "React Router DOM", "React Icons", "Framer Motion", "Clerk", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project5,
    description: "Created a sleek and interactive Portfolio website to showcase my skills, projects, and achievements. Built using Next.js, React, and Tailwind CSS, this website provides a modern, fast, and responsive user experience. The site features smooth animations, a clean design, and easy navigation to highlight my work across various technologies.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "PostCSS & Autoprefixer", "React Icons", "React Tooltip"],
  },
  {
    title: "Bhoomi Properties",
    image: project4,
    description: "Developed a comprehensive Real Estate Property Application using Angular, Python (FastAPI), and MySQL, offering users a platform to browse properties, view detailed information, track ongoing projects, read real estate blogs, and explore testimonials. This application caters to property seekers and real estate professionals, delivering an engaging and informative experience.",
    technologies: ["Angular", "RxJS", "Angular Material", "Leaflet", "Bootstrap", "Tailwind CSS", "Python", "FastAPI", "MySQL"],
  },
  {
    title: "Gemini Clone",
    image: project3,
    description: "Built a Google Gemini Clone leveraging React.js for the frontend and the Google Generative AI API to generate responses. The application mimics the core functionalities of Google Gemini, allowing users to interact with a sophisticated AI model for content generation and intelligent conversations",
    technologies: ["React", "Vite", "TypeScript", "Google Generative AI API"],
  },
  {
    title: "New Travel",
    image: project2,
    description: "New Travel is a travel blogging platform designed for users to create, edit, and publish rich content about their travel experiences. It features a user-friendly interface with support for rich text formatting, media uploads, and interactive comment sections. Each user has a dedicated profile to manage their blog posts and engage with other travelers. The platform is fully responsive and styled with Bootstrap to ensure a seamless experience across devices.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "My Todo's List",
    image: project1,
    description: "Developed a full-stack To-Do List Application using React.js for the frontend and Node.js with MySQL for the backend. The application allows users to create, update, delete, and manage tasks efficiently with a clean and responsive UI.",
    technologies: ["JavaScript", "SCSS", "React", "Node.js", "MySQL"],
  }
];

export const CONTACT = {
  address: "Sector 51, Gurgaon HR, 122005",
  phoneNo: "+91 9818713013",
  email: "krisnas9792@gmail.com",
};
