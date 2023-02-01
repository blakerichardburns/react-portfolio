import Project from './Project';

export default function Portfolio() {
  const projects = [
    {
      name: 'Tech Blog',
      description:
        "Blogging website for tech geeks to come together and geek out on all things tech. Designed to test the developer's skills related to the Model-View-Controller pattern.",
      deployedLink: 'https://bburns-tech-blog.herokuapp.com/',
      repository: 'https://github.com/blakerichardburns/tech-blog',
      image: 'tech-blog-screenshot.JPG',
    },
    {
      name: 'Weather Dashboard',
      description:
        'This app will allow the user to input a city name, and a five day weather forecast will pull from a separate weather applications API and display using dynamically updated HTML and CSS.',
      deployedLink: 'https://blakerichardburns.github.io/weather-dashboard/',
      repository: 'https://github.com/blakerichardburns/weather-dashboard',
      image: 'weather-dashboard-screenshot.JPG',
    },
    {
      name: 'Subscription Tracks',
      description:
        'Website for managing online subscriptions. Built as part of a group project to test back end skills.',
      deployedLink: 'https://subscription-tracks.herokuapp.com/',
      repository: 'https://github.com/TerryBoufis/Subscription-Tracks',
      image: 'subscription-tracks-screenshot.JPG',
    },
    {
      name: 'Marvel Reddit Finder',
      description:
        'Website that pulls comics and subreddit pages for selected Marvel characters. Built as part of a group project to test front end skills and API pulls.',
      deployedLink: 'https://hayek23.github.io/Marvel-Reddit-Finder/',
      repository: 'https://github.com/Hayek23/Marvel-Reddit-Finder',
      image: 'marvel-reddit-finder-screenshot.JPG',
    },
    {
      name: 'Note Taker',
      description:
        "Note-taking app designed to test the developer's ability to implement back-end code to a pre-existing front-end codebase, and show off their Express.js and Heroku deployment skills.",
      deployedLink: 'https://bburns-note-taker.herokuapp.com/',
      repository: 'https://github.com/blakerichardburns/note-taker',
      image: 'note-taker-screenshot.JPG',
    },
    {
      name: 'Workday Scheduler',
      description:
        'Code refactor to add interactive functionality to professional day planner utilizating Third Party APIs and saving to local storage.',
      deployedLink: 'https://blakerichardburns.github.io/workday-scheduler/',
      repository: 'https://github.com/blakerichardburns/workday-scheduler',
      image: 'workday-scheduler-screenshot.JPG',
    },
  ];
  return (
    <div>
      <div className="d-flex flex-wrap portfolio">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
}
