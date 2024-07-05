const expertise = [
    {
        id: 0,
        title: 'Web Development',
        desc: 'I am a front-end developer with extensive experience in building dynamic and efficient web applications using HTML, CSS, and JavaScript. I am also used to working with various technologies and frameworks such as Laravel, Next.js, Tailwind CSS, and Bootstrap. I have a strong understanding of server-side rendering, API integration, and responsive user interface design. With my expertise, I can provide customized web solutions to meet clients needs.',
    },
    {
        id: 1,
        title: 'Designing (UI/UX)',
        desc: 'I am proficient in using design software such as Figma. Designing is my passion, and it allows me to continue to develop my creative abilities and grow in this field.',
    },
    {
        id: 2,
        title: 'Scrum and Jira',
        desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
