// codehouse
import CodeHouse from './codehouse/codehouse.png';
import CodeHouseBG from './codehouse/codehouse-bg.png';
import CodeHouse1 from './codehouse/codehouse1.png';
import CodehouseMockup from './codehouse/codehouse-mockup.png';
import MyTalk from './codehouse/my-talk.png';
// wetal app
import WeTalProfile from './wetal-app/wetal-profile.png';
import WeTalApp from './wetal-app/bgapp.png';
import App_Store from './wetal-app/app-store.png';
import AppProfile from './wetal-app/app-profile.jpg';
import AppDesign from './wetal-app/app-design.jpg';
// wetal.com
import Swiping from './wetal.com/swiping.png';
import JobsGif from './wetal.com/jobs.gif';
import Mockup from './wetal.com/mockup.png';
import CompaniesGif from './wetal.com/companies.gif';
// sunrise app
import Sunrise1 from './sunrise/sunrise1.png';
import Sunrise2 from './sunrise/sunrise2.png';

const projectsList = [
	{
		category: 'mobile development',
		title: 'codehouse by wetal',
		role: 'Full Stack Developer / Project Owner',
		image: CodeHouse,
		image2: CodehouseMockup,
		description: `CodeHouse is a virtual community where users can discuss anything and everything about coding and technology. Anyone can broadcast an audio event, share their knowledge, discuss or just listen and become inspired. Moreover, every week WeTal invites inspiring and knowledgeable guests to host a Tech Talk. Anyone from famous tech icons to developers discussing new frameworks, insights or other exciting topics related to tech.`,
		url: 'codehouse',
		year: 'August 2021 - now',
		stack: [ 'React Native', 'Agora SDK', 'Redux', 'Node.js' ],
		link: 'https://wetal.com/codehouse',
		gallery: [
			{
				img: CodeHouse1,
				title: 'Tech Talks',
				text:
					'CodeHouse is something between a phone call and a podcast. Developers who signed up to WeTal can listen to Tech Talks directly through the WeTal app. The project was meant to boost WeTal user sign ups and generate organic traffic.'
			},
			{
				title: 'How does it work?',
				img: CodeHouse,
				text:
					'There are speakers and audience that listens to the talk. One of the speakers is also the talk show host, so if you wanna say something, raise your hand! The hosts will be able to approve or deny your request to become a speaker.'
			},
			{
				title: 'Testing the feature in production, with my own tech talk!',
				img: MyTalk,
				text:
					"In a startup there isn't a better way of testing a feature then releasing it ASAP and hope for the best. That is why I was the star of a few of the first tech talks on CodeHouse."
			},

			{
				title: 'Rooms built with Agora.io',
				img: CodehouseMockup,
				text:
					'Anyone can create a room, share a link and invite their friends and hang out! If you created the event yourself, you are the boss. You can decide who else is invited to speak.'
			},
			{
				title: 'Push notification',
				img: CodeHouseBG,
				text:
					'Ten minutes before an event, you will get a notification that a talk is about to start. I built the push notification service using Firebase Cloud Messaging and backend in Node.js (Express).'
			}
		]
	},
	{
		category: 'mobile development',
		title: 'wetal native app',
		image: WeTalProfile,
		image2: WeTalApp,
		year: 'March 2021 - now',
		role: 'Full Stack Developer / Project Owner',
		description:
			'The WeTal app is a sister project of wetal.com. It offers an improved way of swiping as well as multiple fun features unavailable on web. The app in available for both developers and companies, but if you want to sign up as a company, you need to do it from the website, because of App Store\'s B2B rules. We are working on it!',
		url: 'app',
		link: 'https://wetal.com/app',
		stack: [ 'React Native', 'CodePush', 'Node.js', 'Redux', 'JavaScript' ],
		gallery: [
			{
				title: 'Not only coding...',
				img: AppDesign,
				text:
					'Since we did not have access to a UX designer at that moment, I took care of the app myself from start to finish. That means sometimes I had to work as a designer, myself!'
			},
			{
				title: 'A real adventure',
				img: AppProfile,
				text:
					'It was my first encounter with mobile development and as exciting as it was, there were of course some struggles in the beginning. For example, I built the app with Expo in the beginning and then - the horror! - I realised we need to make it a bare React Native project. It was a challenge but it feels like a good decision to this day and we never looked back!'
			},
			{
				title: 'Available in the store near you!',
				img: App_Store,
				text:
					'You are welcome to check out the app on both App Store and Google Play! Bug fixes come at least once a week, and I am always more than happy to hear some user feedback from anyone who is willing to share it. :-)'
			}
		]
	},
	{
		category: 'web development',
		title: 'wetal.com',
		image: Mockup,
		image2: Mockup,
		year: 'August 2020 - now',
		description:
			'Mentioned by BestStartup.eu as one of Sweden\'s top startups, WeTal has been successfully matching developers with jobs since 2019. I joined the company in August 2020 as an intern and the first employee, and quickly grew into a mid-level role, delivering new features and bug fixing in the speed of light. ⚡️',
		url: 'abc',
		stack: [ 'React', 'Express', 'Redux', 'Node.js', 'MongoDB', 'JavaScript', 'Sass', 'Twilio', 'Stripe API' ],
		link: 'https://wetal.com',
		gallery: [
			{
				title: 'Tinder-like SaaS platform for job matching',
				img: Mockup,
				text:
					'WeTal is a SaaS platform targeted at software developers casually looking for a new job opportunity. The functionality is simple and straight-forward: you can match, chat and eventually either hire a new rockstar developer or get hired by one of our cherry-picked coolest Stockholm companies.'
			},
			{
				title: 'Match or reject',
				img: Swiping,
				text:
					'The UI is inspired by the best dating websites. We meant to make it fun, simple and as easy as possible. No long application process, forms, and cover letters. Just click "Nope" or "Yes", and  just wait for the other person to match you back.'
			},
			{
				title: 'Look at all the cool companies...',
				img: CompaniesGif,
				text:
					'WeTal tries to pick the most exciting tech companies on the Stockholm scene, to keep the job ads as attractive as possible.'
			},
			{
				title: 'The tech stack',
				img: JobsGif,
				text:
					'WeTal\'s frontend is built entirely in React and Sass. We use Stripe to handle our subscription payments, and Twilio to handle the video call feature on our platform. Backend is built with Express.js (Node) and the database is MongoDB.'
			},
			
		]
	},
	{
		category: 'personal project',
		title: 'sunrise alarm app (work in progress)',
		image: Sunrise1,
		year: 'September 2021 - now',
		description:
			'Soon available on App Store and Google Play. The app lets you set your alarm to ring every day, at sunrise, no matter your location. I made this app inspired by long winter nights living Sweden. I got tired of checking sunrise time in the wintertime, always wanting to wake up after the sun has risen. I decided to create an alarm that will wake me up everyday after sunrise.',
		url: 'sunrise-alarm',
		stack: [ 'React Native', 'Expo (Bare Workflow)', 'JavaScript' ],
		link: 'https://github.com/zuzabrzozowska/sunrise-app',
		gallery: [
			{
				title: 'Getting sunrise times from API',
				img: Sunrise1,
				text:
					'I used the public free Sunrise Sunset API, getting the sunrise for every day, depending on my current location. You can choose between waking up at exactly at sunrise, 15 minutes before or 30 minutes after. Your choice!'
			},
			{
				title: 'Background timer',
				img: Sunrise2,
				text:
					'The timer is running in the background, also when the app is shut down, checking every minute if it is time to wake me up. Pick your favourite ringtone that really is just a local notification in disguise.'
			}
		]
	}
];

export default projectsList;
