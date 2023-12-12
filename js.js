const comments = [
    {
        name: 'Denis',
        date: '2023-12-12T08:30:00Z',
        text: 'Skvělý článek!',
        image: 'aioni.jpg'
    },
    {
        name: 'Evžen',
        date: '2023-12-12 10:45:00',
        text: 'Díky za sdílení.',
        image: 'michael.jpg'
    },
    {
        name: ' Tomáš',
        date: '2023-12-12 12:15',
        text: 'Moc pěkné.',
        image: 'jan.jpg'
    }
];


function addComment(comment) {
    const container = document.getElementById('comments-container');

    const commentElement = document.createElement('div');
    const commentId = Date.now();
    commentElement.id = `comment-${commentId}`;
    commentElement.innerHTML = `
        <img src="${comment.image}" alt="${comment.name}" style="width: 50px; height: 50px; border-radius: 50%;object-fit: cover">
        <b>${comment.name}</b> (${new Date(comment.date).toLocaleDateString()})
        <p>${comment.text}</p>
       
        <hr> `;

    container.appendChild(commentElement);
}


function displayComments() {
    comments.forEach(comment => {
        addComment(comment);
    });
}





displayComments();