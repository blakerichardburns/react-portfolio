import Project from './Project';

const styles = {
  portfolio: {
    display: 'flex',
    padding: '2.5rem',
    flexGrow: '1',
  },
};

export default function Portfolio() {
  const projects = [
    {
      name: 'Tech Blog',
      description: 'Blah blah blah',
      deployedLink: 'https://bburns-tech-blog.herokuapp.com/',
      repository: 'https://github.com/blakerichardburns/tech-blog',
      image: 'tech-blog-screenshot.jpeg',
    },
    {
      name: 'Weather Dashboard',
      description: 'Blah blah blah',
      deployedLink: 'https://blakerichardburns.github.io/weather-dashboard/',
      repository: 'https://github.com/blakerichardburns/weather-dashboard',
      image: 'weather-dashboard-screenshot.jpeg',
    },
    {
      name: 'Subscription Tracks',
      description: 'Blah blah blah',
      deployedLink: 'https://subscription-tracks.herokuapp.com/',
      repository: 'https://github.com/TerryBoufis/Subscription-Tracks',
      image: 'subscription-tracks-screenshot.jpeg',
    },
    {
      name: 'Marvel Reddit Finder',
      description: 'Blah blah blah',
      deployedLink: 'https://hayek23.github.io/Marvel-Reddit-Finder/',
      repository: 'https://github.com/Hayek23/Marvel-Reddit-Finder',
      image: 'marvel-reddit-finder-screenshot.jpeg',
    },
    {
      name: 'Note Taker',
      description: 'Blah blah blah',
      deployedLink: 'https://note-taker-code-refactor.herokuapp.com/',
      repository: 'https://github.com/blakerichardburns/note-taker',
      image: 'note-taker-screenshot.jpeg',
    },
    {
      name: 'Workday Scheduler',
      description: 'Blah blah blah',
      deployedLink: 'https://blakerichardburns.github.io/workday-scheduler/',
      repository: 'https://github.com/blakerichardburns/workday-scheduler',
      image: 'workday-scheduler-screenshot.jpeg',
    },
  ];
  return (
    <div style={styles.portfolio}>
      <div className="d-flex">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
}
