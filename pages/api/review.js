const review = [
    {
        id: 0,
        clientName: '****i',
        clientLocation: 'Bandung',
        clientSource: 'Community',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does.'
    },
    {
        id: 2,
        clientName: '****n',
        clientLocation: 'Bandung',
        clientSource: 'Community',
        clientReview: 'He is very good with communication and experienced website developer, great experience to work with him. '
    },
    {
        id: 3,
        clientName: '***a',
        clientLocation: 'Bandung',
        clientSource: 'Community',
        clientReview: "Arthur is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive."
    },
    {
        id: 4,
        clientName: '****s',
        clientLocation: 'Bandung',
        clientSource: 'Community',
        clientReview: 'He is very professional and an excellent web developer. He is quite fast in completing the development and the quality of his work when given the task.'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
