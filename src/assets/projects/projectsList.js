import CodeHouse from "./codehouse/codehouse.png";
import CodeHouseBG from "./codehouse/codehouse-bg.png";
import CodeHouse1 from "./codehouse/codehouse1.png"
import WeTalProfile from "./wetal-app/wetal-profile.png";
import WeTalApp from "./wetal-app/bgapp.png"
import Jobs from "./wetal.com/jobs.png"
import Swiping from "./wetal.com/swiping.png"
import AppStore from "./wetal-app/app-store.png"
import JobsGif from "./wetal.com/jobs.gif"
import CompaniesGif from "./wetal.com/companies.gif"
import DataTjejMe from "./datatjejme.png"


const projectsList = [
  {
    category: "mobile development",
    title: "codehouse by wetal",
    role: "Full Stack Developer / Project Owner",
    image: CodeHouse,
    image2: CodeHouseBG,
    description:
`CodeHouse is a virtual community where users can discuss anything and everything about coding and technology. Anyone can broadcast an audio event, share their knowledge, discuss or just listen and become inspired. Moreover, every week WeTal invites inspiring and knowledgeable guests to host a Tech Talk. Anyone from famous tech icons to developers discussing new frameworks, insights or other exciting topics related to tech.`,
    url: "codehouse",
    stack: ["React Native", "Agora SDK", "Node.js"],
    link: 'https://wetal.com/codehouse',
    gallery: [
      {
        img: CodeHouse1,
        title: "Tech Talks",
        text: "CodeHouse is something between a phone call and a podcast. Developers who signed up to WeTal can listen to Tech Talks directly through the WeTal app. The project was meant to boost WeTal user sign ups and generate organic traffic.",
      },
      {
        title: "How does it work?",
        img: CodeHouse,
        text: "There are speakers and audience that listens to the talk. One of the speakers is also the talk show host, so if you wanna say something, raise your hand! The hosts will be able to approve or deny your request to become a speaker.",
      },

      {
        title: "Rooms built with Agora.io",
        img: CodeHouseBG,
        text: "Anyone can create a room, share a link and invite their friends and hang out! If you created the event yourself, you are the boss. You can decide who else is invited to speak.",
      },
      {
        title: "Push notification",
        img: "https://media.wired.com/photos/59335d87a4b3d04a47189eb5/master/pass/120329-SNAPGUIDE-017edit-1.jpeg",
        text: "Ten minutes before an event, you will get a notification that a talk is about to start. I built the push notification service using Firebase Cloud Messaging and backend in Node.js (Express).",
      },
    ],
  },
  {
    category: "mobile development",
    title: "wetal native app",
    image: WeTalApp,
    description: "The WeTal app is a sister project of wetal.com. It offers an improved way of swiping as well as multiple fun features unavailable on web.",
    url: "app",
    link: '',
    stack: ["React Native", "Expo", "Node.js"],
    gallery: [
      {
        title: "My role",
        img: "https://mockupden.com/wp-content/uploads/2021/01/Free-App-Mockup-PSD-Template.jpg",
        text: "I was a project owner and took care of the app myself from start to finish. We build it first with Expo and then decided to switch to bare React Native project.",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        img: "https://img.freepik.com/free-psd/app-interface-mock-up-phone-screen_23-2148963444.jpg?size=626&ext=jpg&ga=GA1.2.959066255.1624579200",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },

      {
        title: "Lorem ipsum dolor sit amet",
        img: "https://graphicburger.com/wp-content/uploads/2014/01/App-Screens-Perspective-MockUp-full.jpg",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        title: "Deployment and distribution in app stores",
        img: AppStore,
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    category: "web development",
    title: "wetal.com",
    image: Swiping,
    description:
      "WeTal is matching developers with jobs since 2019. I joined this startup company in August 2020 as an intern and quickly grew into a mid-level role, delivering new features and bug fixing like a pro.",
    url: "abc",
    stack: ["React", "Express", "Node.js", "MongoDB"],
    link: '',
    gallery: [
      {
        title: "Lorem ipsum dolor sit amet",
        img: WeTalProfile,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Look at all the cool companies",
        img: CompaniesGif,
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },

      {
        title: "This job looks good!",
        img: JobsGif,
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        img: "https://media.wired.com/photos/59335d87a4b3d04a47189eb5/master/pass/120329-SNAPGUIDE-017edit-1.jpeg",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  // {
  //   category: "volunteer work",
  //   title: "DataTjej Tech Conference 2020",
  //   image: '',
  //   description:
  //     "This is something really cool. Text and more text and look, here comes more text for you.",
  //   url: "hello",
  //   link: '',
  //   gallery: [
  //     {
  //       title: "Lorem ipsum dolor sit amet",
  //       img: DataTjejMe,
  //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     },
  //     {
  //       title: "Lorem ipsum dolor sit amet",
  //       img: "https://img.freepik.com/free-psd/app-interface-mock-up-phone-screen_23-2148963444.jpg?size=626&ext=jpg&ga=GA1.2.959066255.1624579200",
  //       text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     },

  //     {
  //       title: "Lorem ipsum dolor sit amet",
  //       img: "https://graphicburger.com/wp-content/uploads/2014/01/App-Screens-Perspective-MockUp-full.jpg",
  //       text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //     },
  //     {
  //       title: "Lorem ipsum dolor sit amet",
  //       img: "https://media.wired.com/photos/59335d87a4b3d04a47189eb5/master/pass/120329-SNAPGUIDE-017edit-1.jpeg",
  //       text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     },
  //   ],
  // },
  {
    category: "mobile development",
    title: "Sunrise Alarm App",
    image: "https://c0.wallpaperflare.com/preview/633/625/255/laptop-macbook-computer-work.jpg",
    description:
      "Available on App Store and Google Play. Lets you set your alarm to wake you up every day, at sunrise, no matter your location.",
    url: "sunrise-alarm",
    link: '',
    gallery: [
      {
        title: "Lorem ipsum dolor sit amet",
        img: "https://mockupden.com/wp-content/uploads/2021/01/Free-App-Mockup-PSD-Template.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        img: "https://img.freepik.com/free-psd/app-interface-mock-up-phone-screen_23-2148963444.jpg?size=626&ext=jpg&ga=GA1.2.959066255.1624579200",
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },

      {
        title: "Lorem ipsum dolor sit amet",
        img: "https://graphicburger.com/wp-content/uploads/2014/01/App-Screens-Perspective-MockUp-full.jpg",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        img: "https://media.wired.com/photos/59335d87a4b3d04a47189eb5/master/pass/120329-SNAPGUIDE-017edit-1.jpeg",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
];

export default projectsList;
