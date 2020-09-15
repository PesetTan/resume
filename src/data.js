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
                {name: 'SQL', value: 4},
                {name: 'VBS', value: 3}
            ],
        },
        {
            type: 'Software',
            items: [
                // {name: 'MS Office', value: 5},
                {name: 'ASP.net', value: 5},
                {name: 'GIT', value: 4},
                {name: 'MS TFS', value: 4},
                {name: 'MS SQL DB', value: 4},
                {name: 'MySQL DB', value: 3},
                {name: 'Oracle DB', value: 3},
                {name: 'Visual Studio', value: 4},
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
                Used Angular and RXJS to allow users to operate the hospital-grade medication 
                dispensary. Key activities include; implementing UI design requirements to the 
                pixel and constructing UI components.
                `,
                `
                Backend developer for the enterprise-level application. 
                Built a connection from database to ASP.net RESTful API, created 
                new micro-services for the system, developed and publish new requirements, managed 
                database requirements, handled communications between legacy and current system 
                with queuing system
                `,
                `
                Implemented Active-Directory Sync feature, easing account management of hospital workers. 
                In effect, this allows an account manager to manage authentication on just the LDAP server.
                `,
                `
                Major player in migration and rewrite of library code and services from .Net Framework to .Net Core. 
                This allows the use of 80% smaller containers for each service reducing cloud storage costs.
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
            title: 'Data Analyst',
            bullets: [
                `
                Primary developer for desktop applications that filters large 
                amounts of flight radar, greatly increasing workflow among colleagues and 
                government clients. The program filters and aggregates data with an interface that is easy 
                to comprehend and manipulate. 
                `,
                `
                Database administrator for multiple NASA projects using MySQL. The 
                database integrated flight data and multiple FAA data sources into an 
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