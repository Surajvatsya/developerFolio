/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Suraj Kumar",
  title: "Hi all, I'm Suraj",
  subTitle: emoji(
    "A passionate competitive programmer and Full Stack Web Developer 🚀 having an experience of building Web  applications with JavaScript / Reactjs / Nodejs / Express js and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1QP0Hyjp-wg9lIuH3LcxphAwBp4bpQRJq/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Surajvatsya",
  linkedin: "https://www.linkedin.com/in/suraj-kumar-49b466191/",
  gmail: "surajkumar742494@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/profile.php?id=100010302857590",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/14767181/suraj-kumar-030",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Techno Main Salt Lake",
      logo: require("./assets/images/collegePic.jpg"),
      subHeader: "Bechlors of Technology in Computer Science",
      duration: "July 2019 - July 2023",
      desc: "Participated in Tech Fest INTRA 2019 ,Youth Parliament 2019, White Collar under E-Weekend 3.0 organised by JADHAVPUR UNIVERSITY West Bengal",
      descBullets: [
        "Winner at FIVE FEET Drop organised by Eclectica TMSL",
        "Participate in Toys and Game Virtual Hackathon organised by TECHNO INDIA UNIVERSITY kolkata",
        "Successfully completed project in Vihan 4.0 organised by IEEE COMPUTER SOCIETY DTU",
        "Participated in largest student-level entrepreneurial summit in India Entrepreneurship Awareness Drive organised by IIT KHARAGPUR"
      ]
    },
    {
      schoolName: "Saraswati Vidya Mandir ",
      logo: require("./assets/images/Schoolpic.jpg"),
      subHeader: "Senior High School",
      duration: "April 2006 - April 2016",
      desc: "Ranked 10 CGPA in 10th class from CBSE Board.",
      descBullets: ["Participated in N.S.A.T 2015 and secured 95% got 1st rank in this examination.",
    "Grab 15th position in TALASH under THE QUALIFIER in 2016 and got 50% scholarship.",
    "Participated in PROVINCIAL ENGLISH QUIZ COMPETITION 2010 and got CERTIFICATE OF FELICATION by LOK SHIKSHA SAMITI BIHAR sponsored by SARASWATI VIDYA MANDIR SITAMARHI",
    "Project Leader in Science Fair in 2013 under Vidya Bharti and got 2nd rank"
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROGRAMS AND COMPETITIONS THAT I HAVE PARTICIPATED IN TO BUILD THESE PROJECTS",
  projects: [
    {
      image: require("./assets/images/todo.jpg"),
      projectName: "Custom To-Do-List",
      projectDesc: "Custom list of tasks you need to complete, or things that you want to do",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://infinite-peak-71433.herokuapp.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/blog2.jpg"),
      projectName: "Blog Website",
      projectDesc: "a beautiful personal blog website, Now when you head over to the home page, this is going to have all of your blog posts on here listed",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pure-shelf-88929.herokuapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Vihaan 4.0 Hackathon  IEEE COMPUTER SOCIETY DTU",
      subtitle:
        "grateful to IEEE COMPUTER SOCIETY for having us precious opportunities. Hackathon was full enlightened by gems, it was a great experience to participate in VIHAAN 4.0",
      image: require("./assets/images/Teciss.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:6795596519564300288/"
        }
      ]
    },
    {
      title: "Toys and  Game Virtual hackathon 2021",
      subtitle:
        "Participated in toys & virtual hackathon created a Javascript Car Racing Game.",
      image: require("./assets/images/racing.jpg"),
      footerLink: [
        {
          name: "Play Game",
          url: "https://car-racing-app-surajvatsya.herokuapp.com/"
        }
      ]
    },

    {
      title: "Drum kit",
      subtitle: "A Drum Kit for versatile pleasant sounds",
      image: require("./assets/images/drumKit.jpg"),
      footerLink: [
        {
          name: "Play Drum Kit",
          url: "https://surajvatsya.github.io/Drum-Kit/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for narration , I love to write and think creative.",

  blogs: [
    {
      url: "https://www.blogger.com/blog/post/edit/9084113457878913388/423896853357105823",
      title: "A short Film :- ROTATION",
      description:
        " Love Story during college life"
    },
    {
      url: "https://www.blogger.com/blog/post/edit/9084113457878913388/1718775683052218906",
      title: "EXTRACTION",
      description:
        "This movie runs around two big drug dealer.First one is from  India and second  is present in Bangladesh. The famous Indian drug dealer who is in jail right now, has a kid OVI under guidance of special agent SAJU"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED  KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "First Day Of My college",
      subtitle: "Five Feet Drop organised by literacy club of TMSL, ECLECTICA",
      slides_url: "https://www.facebook.com/watch/live/?v=2975091382747522&ref=search",
      event_url: "https://www.instagram.com/p/B9ZT-cfpHuT4KYSiC1DolyhWYmRleZDy12qA-w0/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+917424948001",
  email_address: "surajkumar742494@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "SurajVatsya", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
