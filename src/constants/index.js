import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Website Developer",
    company_name: "Chhillar Homes",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2022 - September 2022",
    points: [
      "As a web developer specializing in React.js and related technologies, I am dedicated to the seamless development and maintenance of web applications.",
      "Leveraging the power of React.js, I strive to create dynamic and user-friendly interfaces that enhance the overall user experience.",
      "By staying updated with the latest trends and best practices in web development",
      "I ensure that our applications remain at the forefront of innovation and technological advancement.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Lapcompute.com",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Collaboration lies at the heart of my work ethic. Working closely with cross-functional teams comprising designers, product managers, and fellow developers",
      "I foster an environment of creativity and synergy. By actively participating in brainstorming sessions and design reviews",
      "I contribute valuable insights and perspectives that enrich the project's overall vision.",
      "Together, we work towards the common goal of delivering high-quality products that exceed user expectations.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Skrolled Pvt Ltd",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "A cornerstone of my development process is the implementation of responsive design principles",
      "Recognizing the importance of accessibility across various devices and screen sizes, I prioritize creating interfaces that adapt seamlessly to different viewing contexts.",
      "Through thorough testing and optimization",
      "I ensure that our applications maintain consistency and functionality across all major browsers and platforms.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "WASFA",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Samyak proved me wrong.",
    name: "Tushar Shukla",
    designation: "CFO",
    company: "WASFA Pay",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Samyak does.",
    name: "Nandini Chopta",
    designation: "CEO",
    company: "Skrolled Pvt Ltd",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "After Samyak optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Aadarsh Kumar",
    designation: "CTO",
    company: "Lapcompute",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

const projects = [
  {
    name: "Ekum Homes",
    description:
      "Discover your dream home with our meticulously crafted real estate website. Explore a vast array of properties, from cozy starter homes to luxurious estates.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.ekumhomes.com/",
  },
  {
    name: "Lil Program",
    description:
      "Empower your learning journey with our dynamic education platform. Explore diverse courses, expertly curated for your success. Dive into a world of knowledge with intuitive tools and resources. Let's learn, together.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://lilprogram.com/",
  },
  {
    name: "In Joy Living",
    description:
      "Step into a world of timeless elegance with our antique-focused website, where joy and nostalgia intertwine. Explore a curated collection of exquisite treasures that tell stories of bygone eras.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.injoyliving.in/",
  },
];

export { services, technologies, experiences, testimonials, projects };
