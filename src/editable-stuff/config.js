// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ulugbek",
  middleName: "",
  lastName: "Isroilov",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ulugbek989898",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/ulugbek989898",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ulugbek989898/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/ulugbek_9898",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ulugbek.jpg"),
  imageSize: 375,
  message:
    "My name is Ulugbek Isroilov. I graduated Inha University in Tashkent at 2021 with a bachelor degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "https://42abudhabi-my.sharepoint.com/personal/uisroilo_student_42abudhabi_ae/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fuisroilo%5Fstudent%5F42abudhabi%5Fae%2FDocuments%2FMinimal%5FCV%5FTemplate%2Epdf&parentview=1",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ulugbek989898", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Qualifications/Achievements",
  message:
    "As a recent graduate of Inha University in Tashkent with a Bachelor's degree in Computer Science, I bring a strong foundation in programming and problem-solving skills. Additionally, I have demonstrated my competitive spirit and strategic thinking through my participation in the 42 Abu Dhabi chess tournament, where I earned the 2nd place certificate. My diverse background in both academics and extracurricular activities has honed my ability to work effectively both independently and in team environments, and I am excited to bring these skills to any future opportunities.",
  images: [
    { 
      img: require("../assets/img/6.png"), 
      label: "Bachelor degree", 
      paragraph: ""
    },
    { 
		img: require("../assets/img/5.jpg"), 
      label: "Second place in chess tournament", 
      paragraph: "" 
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
    // { name: "Python", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "Database manegment", value: 30 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    // { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Decision making", value: 90 },
    { name: "Leadership", value: 30 },
    { name: "Attention to detail", value: 75 },
    { name: "Problem solving", value: 85 },
    { name: "Experimentation", value: 75 },
    { name: "Discipline", value: 90 },
    { name: "Optimisim", value: 60 },
    { name: "Interpersonal skills", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "uisroilo@student.42abudhabi.ae",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Front-End Developer',// Here Add Company Name
      companylogo: require('../assets/img/4.png'),
      date: 'March 2021 – 2022 January',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/3.png'),
      date: 'June 2018 – 2019 March',
    },
  ]
}

const qualifications = {
	show: true,
	heading: "Experiences",
	data: [
	  {
		role: 'Front-End Developer',// Here Add Company Name
		companylogo: require('../assets/img/4.png'),
		date: 'March 2021 – 2022 January',
	  },
	  {
		role: 'Front-End Developer',
		companylogo: require('../assets/img/3.png'),
		date: 'June 2018 – 2019 March',
	  },
	]
  }

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, qualifications };
