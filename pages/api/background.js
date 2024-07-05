const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Maranatha Christian University',
                degree: 'Bachelor of Informatics',
                detail: "Bachelor's degree in Informatics Engineering from Maranatha Christian University.",
                year: '2021-Present'
            },
            {
                id: 1,
                title: 'Senior High School at Yadika Kalijati',
                degree: 'Natural Science',
                detail: "Completed senior high school at Yadika Kalijati private school.",
                year: '2018-2021'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'WIT.ID',
                role: 'Front-end Developer',
                // url: 'https://jmm.ltd/',
                desc: 'As a frontend developer, I use Laravel, Vue, Next & JavaScript to build user interfaces for web applications.',
                year: 'July 2022 - July 2024',
                location: 'Bandung, Indonesia'
            },
            {
                id: 2,
                title: 'Laboratory Staff',
                role: 'Part-time on Campus',
                // url: 'no website',
                desc: 'Fulfill the role of a laboratory staff member, responsible for the maintenance, care and preparation of the laboratory environment. Ensure that all equipment and resources are in good working order, creating a conducive learning space for students to engage in practical exercises. Collaborate with the teaching team to ensure that laboratory sessions are aligned with the curriculum and provide students with hands-on experience in applying concepts learned in the web fundamentals course.',
                year: 'July 2022 - Present',
                location: 'Bandung, Indonesia'
            },
            {
                id: 3,
                title: 'Basic Web Course',
                role: 'Assistant Lecturer on Campus',
                // url: 'https://www.encoderbytes.com/',
                desc: "Serving as a teaching assistant for fundamental web courses, providing support and guidance to students facing challenges. Engaged as a teaching assistant for foundational web courses, offering assistance and mentorship to students who may encounter difficulties in their learning journey. Collaborating with the lead instructor to develop supplementary materials and interactive activities that cater to diverse learning needs. Providing one-on-one consultations and constructive feedback to address individual student concerns and enhance their comprehension of fundamental web concepts.",
                year: 'Sept 2022 - Jan 2023',
                location: 'Bandung, Indonesia'
            },
            {
                id: 3,
                title: 'Organization',
                role: 'Member of the Academic Division of the faculty organization SEMAFIT',
                // url: 'https://www.encoderbytes.com/',
                desc: "Coordinated educational events such as seminars, workshops, and training sessions aimed at improving understanding of academic and technical subjects within the Information Technology field. Extend invitations to specialists or professionals from specific fields to give lectures or speeches to members. Organize academic contests or competitions to motivate members to apply their skills in a competitive arena.",
                year: 'Feb 2022 - Sept 2023',
                location: 'Bandung, Indonesia'
            },
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
