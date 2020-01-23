const data = {
    personal: {
        name: 'Sam (Peset) Tan',
        title: 'Software Engineer',
        github: 'https://github.com/PesetTan/resume',
        contact: {
            address: '4558 Lodovico CT.',
            city: 'Fremont',
            state: 'CA',
            zipcode: '94555',
            cell: '510-862-8179',
            email: 'pesettan@gmail.com'
        },
    },
    skills: [
        {
            type: 'Languages',
            items: [ 
                {name: 'C#', value: 5},
                {name: 'Javascript', value: 3},
                {name: 'Typescript', value: 4},
                {name: 'SQL', value: 3},
                {name: 'VBS', value: 5}
            ],
        },
        {
            type: 'Software',
            items: [
                // {name: 'MS Office', value: 5},
                {name: 'ASP.net', value: 2},
                {name: 'GIT', value: 3},
                {name: 'MS TFS', value: 3},
                {name: 'MS SQL DB', value: 3},
                {name: 'MySQL DB', value: 3},
                {name: 'Oracle DB', value: 3},
                {name: 'Visual Studio', value: 3},
                {name: 'VS Code', value: 4},
                {name: 'D3.js', value: 4},
                {name: 'Node.js', value: 2},
                {name: 'Angular', value: 4},
                {name: 'React.js', value: 1}
            ],
        }
    ],
    experience: [
        {
            company: 'Omnicell',
            location: 'Mountain View, CA',
            date: '2018 - Now',
            title: 'Software Engineer III',
            bullets: [
                `
                Frontend developer for an enterprise-level application. 
                This application uses Angular and allows users to operate/administer the 
                hospital-grade medication dispensary. Key activities include; implementing UI 
                design requirements to the pixel and constructing UI components.
                `,
                `Backend developer for the enterprise-level application. Cultivate 
                partnerships with backend team, built a connection from database to frontend 
                using ASP.net, developed new micro-services, developed and publish new requirements,
                managed database requirements, handled communications between legacy and current system
                with queuing system
                `,
                `Worked with architects to implement new patterns in code and update and evolve
                the common library used by all services.
                `,
                `
                Foster partnerships with product managers and technical program managers 
                to execute project plans, while following the team’s mature agile process.
                `,

            ]
        },
        {
            company: 'ATAC',
            location: 'Santa Clara, CA',
            date: '2015 - 2018',
            title: 'Web Application Developer / Senior Data Analyst',
            bullets: [
                `
                Frontend developer for ongoing research-level Angular-application for NASA, 
                illustrated knowledge in interface design and proficiency in handling large
                data sets. The application compared different data sets using interactive charts, 
                diagrams and animated ground traffic using the D3.js API.        
                `
            ]
        },
        {
            company: 'ATAC',
            location: 'Santa Clara, CA',
            date: '2007 - 2015',
            title: 'Senior Data Analyst',
            bullets: [
                `
                Primary developer for various desktop applications that filters large 
                amounts of flight radar, greatly increasing workflow among colleagues and 
                government clients. The program mines data with an interface that is easy 
                to comprehend and manipulate. 
                `,
                `
                Database administrator for multiple NASA projects using MySQL. The 
                database integrated Sherlock data and multiple FAA data sources into an 
                accessible format that is easy to consolidate into different aggregations.
                `
            ]
        }
    ],
    education: [
        {
            degree: 'Masters, Software Engineering',
            school: 'Penn State University',
            address: 'University Park, PA'
        },
        {
            degree: 'Bachelors, Electrical Engineering',
            school: 'San Jose State University',
            address: 'San Jose, CA'
        }
    ]
}

export default data