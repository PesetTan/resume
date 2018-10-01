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
                {name: 'C#', value: 4},
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
            title: 'Software Engineer',
            bullets: [
                `
                Frontend developer for an enterprise-level application. 
                This application uses Angular and allows users to operate/administer the 
                hospital-grade medication dispensary. Key activities include; implementing UI 
                design requirements to the pixel and constructing UI componennts.
                `,
                `Backend developer for the enterprise-level application. Cultivate 
                partnerships with backend team: built a connection from database to frontend 
                using ASP.net, developed micro-service to allow user to log click events from 
                the front end, developed and publish new requirements.
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
            title: 'Web Application Developer',
            bullets: [
                `
                Frontend developer for ongoing research-level Angular-application for NASA, 
                illustrated knowledge in interface design and large data mining proficiency. 
                The application compared different data sets using interactive charts, diagrams 
                and animated ground traffic using the D3.js API.        
                `,
                `
                Lead frontend developer for Angular-application at an International 
                Airport, demonstrated knowledge in interface design and large data mining 
                proficiency. The application animated flights across airspace using D3.js 
                over the Google Maps.
                `
            ]
        },
        {
            company: 'ATAC',
            location: 'Santa Clara, CA',
            date: '2007 - 2015',
            title: 'Aviation Data Analyst',
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