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
      name: 'Tuff Lead',
      description:
        'As developers of this food-flavored pencil subscription app, our goal is to create a convenient and customizable service that delivers high-quality, food-flavored pencils to customers\' doors every month. The app will feature a user-friendly design, with clear calls-to-action and simple, intuitive menus. Customers will be able to choose from a range of charcoal pencils that all have a unique food-inspired flavor. The app will also include a secure and reliable payment processing system to make it easy for customers to subscribe and manage their accounts. With this app, we aim to provide a user-friendly and engaging experience for customers, making it easy for them to sign up and enjoy their monthly deliveries of food-flavored pencils.',
      deployedLink: 'https://tuff-lead.herokuapp.com/',
      repository: 'https://github.com/blakerichardburns/tuff-lead',
      image: 'tuff-lead-screenshot.JPG',
    },
    {
      name: 'Subscription Tracks',
      description:
        'Website for managing online subscriptions. Built as part of a group project to test back end skills.',
      deployedLink: 'https://blakerichardburns.github.io/react-portfolio',
      repository: 'https://github.com/blakerichardburns/react-portfolio',
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
