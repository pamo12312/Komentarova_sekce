const comments = [
    {
        name: 'Denisa',
        date: '2023-12-12T08:30:00Z',
        text: 'Skvělý článek!',
        image: 'aioni.jpg'
    },
    {
        name: 'Aneta',
        date: '2023-12-12T10:45:00Z',
        text: 'Díky za sdílení.',
        image: 'michael.jpg'
    },
    {
        name: 'Denis',
        date: '2023-12-12T12:15:00Z',
        text: 'Moc pěkné.',
        image: 'jan.jpg'
    }
];

const container = document.getElementById('comments-container');

const addComment = (comment, index) => {
    const commentElement = document.createElement('div');
    commentElement.id = `comment-${index}`;
    commentElement.innerHTML = `
    <img src="${comment.image}" alt="${comment.name}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover">
    <b>${comment.name}</b> (${new Date(comment.date).toLocaleDateString()})
    <p>${comment.text}</p>
    <button class="delete-button">Smazat</button>
    <hr> `;

    container.appendChild(commentElement);
};

const deleteComment = (index) => {
    comments.splice(index, 1);
    displayComments();
};

const displayComments = () => {
    container.innerHTML = '';
    comments.forEach((comment, index) => {
        addComment(comment, index);
    });


    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => deleteComment(index));
    });
};

document.addEventListener('DOMContentLoaded', displayComments);
