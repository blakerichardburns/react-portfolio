import Project from "./Project"

export default function Portfolio() {
    const projects = [
        {
            name: 'Project Name',
            description: 'b;ljasl;d;ljk',
            deployedLink: 'https......',
            gitHub: 'https....',
            image: 'imagefilename.png'
        },
        {
            name: 'Project Name',
            description: 'b;ljasl;d;ljk',
            deployedLink: 'https......',
            gitHub: 'https....',
            image: 'imagefilename.png'
        },
        {
            name: 'Project Name',
            description: 'b;ljasl;d;ljk',
            deployedLink: 'https......',
            gitHub: 'https....',
            image: 'imagefilename.png'
        },
        {
            name: 'Project Name',
            description: 'b;ljasl;d;ljk',
            deployedLink: 'https......',
            gitHub: 'https....',
            image: 'imagefilename.png'
        },
        {
            name: 'Project Name',
            description: 'b;ljasl;d;ljk',
            deployedLink: 'https......',
            gitHub: 'https....',
            image: 'imagefilename.png'
        },
        {
            name: 'Project Name',
            description: 'b;ljasl;d;ljk',
            deployedLink: 'https......',
            gitHub: 'https....',
            image: 'imagefilename.png'
        }
    ]
    return (
        <div>
            <h2>
                Portfolio
            </h2>
            <div className='d-flex'>
                {projects.map((project) => (
                    <Project project={project} />
                ))}
            </div>
        </div>
    )
}