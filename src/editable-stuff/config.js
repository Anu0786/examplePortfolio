// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Anurag ",
  middleName: "",
  lastName: "Rawat",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Anu0786",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/anurag.rawat.3386",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/anurag_rawat_786/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/anurag-rawat-84a204193/",
    },
  ],
  
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/pic2.jpg"),
  imageSize: 375,
  message:
    "My name is Anurag Rawat, and I am pursuing a Master Of Computer Application from Banaras Hindu University. I am a Full Stack Web Developer. I wish to begin my career as a Software Engineer by working on challenging projects. I like the challenge of finding a way and discovering solutions, further want to deal with every aspect and work related to Computer Science. Part of Chegg India as  QA Expert. Apart from work I love to take part in Sports. Teamwork is a valuable life skill they can learn through participating in sports",
  resume:  require("../editable-stuff/anuResume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Anu0786", 
  reposLength: 4,
  specificRepos: [],
};


//Education Section
const education = {
  show: true,
  heading: "Education",
  data: [
    { name: 'Banaras Hindu University',
      degree: 'Master of Computer Application',// Here Add Company Name
      collegelogo: require('../assets/img/bhu.jpg'),
      date: 'July 2019 – Present',
    },
    { name: 'Mahatma Gandhi Kashi Vidyapith',
      degree: 'Bachelor of Science (Mathematics)',
      collegelogo: require('../assets/img/mgkvp.jpg'),
      date: 'June-2016 – June 2019',
    },
    { name: 'Bal Vidyalaya Madhyamik School',
      degree: 'Higher Secondary School (PCM)',
      collegelogo: require('../assets/img/bvms.png'),
      date: 'June 2015 – May 2016',
    },
    { name: 'Bal Vidyalaya Madhyamik School',
      degree: 'Matriculation',
      collegelogo: require('../assets/img/bvms.png'),
      date: 'June 2013 – May 2014',
    },
  ]
};


// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/pic2.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/pic2.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JAVA", value: 75 },
    { name: "MySql", value: 65 },
    { name: "Data Structures", value: 70 },
    { name: "Python", value: 50 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 70 },
    { name: "Git/Github", value: 80 },
    {name:"Node.js", value:70 },
    {name:"Express", value:65 },
    {name:"MongoDB", value:65 },
    {name:"Heroku", value: 70},
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Communication", value: 80 },
    { name: "Time Management", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Work Ethic", value: 90 },
    { name: "Leadership", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Full Stack Web Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to contact me",
    email: "rawatanurag67@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dummy.jpg'),
      date: '',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/dummy.jpg'),
      date: '',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, education, leadership, getInTouch, experiences };
