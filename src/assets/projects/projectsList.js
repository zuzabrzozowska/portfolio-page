import CodeHouse from './codehouse/codehouse.png';
import CodeHouseBG from './codehouse/codehouse-bg.png';
import CodeHouse1 from './codehouse/codehouse1.png';
import WeTalProfile from './wetal-app/wetal-profile.png';
import WeTalApp from './wetal-app/bgapp.png';
import Jobs from './wetal.com/jobs.png';
import Swiping from './wetal.com/swiping.png';
import AppStore from './wetal-app/app-store.png';
import JobsGif from './wetal.com/jobs.gif';
import Mockup from './wetal.com/mockup.png';
import CompaniesGif from './wetal.com/companies.gif';
import DataTjejMe from './datatjejme.png';
import AppProfile from './wetal-app/app-profile.png';
import AppSearch from './wetal-app/app-search.png';
import CodehouseMockup from './codehouse/codehouse-mockup.png';
import MyTalk from './codehouse/my-talk.png';
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
		stack: [ 'React Native', 'Agora SDK', 'Node.js' ],
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
			'The WeTal app is a sister project of wetal.com. It offers an improved way of swiping as well as multiple fun features unavailable on web.',
		url: 'app',
		link: 'https://wetal.com/app',
		stack: [ 'React Native', 'CodePush', 'Node.js', 'JavaScript' ],
		gallery: [
			{
				title: 'My role',
				img: AppProfile,
				text:
					'I took care of the app myself from start to finish. We build it first with Expo and then decided to switch to bare React Native project.'
			},
			{
				title: 'Checking the best jobs in your area...',
				img: AppSearch,
				text: 'The algorithm checks what jobs suit you the most based on your pre-set filters.'
			},
			{
				title: 'Deployment and distribution to app stores',
				img: AppStore,
				text:
					'Check out the app on both App Store and Google Play.'
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
			'Mentioned by BestStartup.eu for being one of Swedens top startup companies, WeTal is matching developers with jobs since 2019. I joined this startup company in August 2020 as an intern and quickly grew into a mid-level role, delivering new features and bug fixing like a pro.',
		url: 'abc',
		stack: [ 'React', 'Express', 'Node.js', 'MongoDB', 'JavaScript' ],
		link: 'https://wetal.com',
		gallery: [
			{
				title: 'Tinder-like SaaS platform for job matching',
				img: Mockup,
				text:
					'SaaS platform targeted at software developers casually looking for a new job opportunity. Match, chat, book video calls, and get hired.'
			},
			{
				title: 'Look at all the cool companies',
				img: CompaniesGif,
				text:
					'WeTal tries to cherry-pick the most exciting companies in the Stockholm area to keep the job ads as attractive as possible.'
			},
			{
				title: 'This job looks good!',
				img: JobsGif,
				text:
					'Browse job page and apply to those that you find the most interesting.'
			},
			{
				title: 'Match or reject',
				img: Swiping,
				text:
					'Click the Nope or Yes buttons, and all that is left to do is wait for the comapany to match with you back.'
			}
		]
	},
	{
		category: 'mobile development',
		title: 'Sunrise Alarm App',
		image: Sunrise1,
		year: 'September 2021 - now',
		description:
			'Soon available on App Store and Google Play. Lets you set your alarm to wake you up every day, at sunrise, no matter your location. I made this app inspired by long winter nights living Sweden. I got tired of checking sunrise time in the wintertime, always wanting to wake up after the sun has risen. I decided to create an alarm that will wake me up everyday after sunrise.',
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
