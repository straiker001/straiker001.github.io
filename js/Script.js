document.addEventListener('DOMContentLoaded', function() {
    const postContents = document.querySelectorAll('.post-content p');

    postContents.forEach(content => {
        content.addEventListener('click', function() {
            let newText = prompt('Ingrese el nuevo contenido:', this.textContent);
            if (newText !== null) {
                this.textContent = newText;
            }
        });
    });
});

function likePost(button) {
    button.classList.add('highlighted');
    button.parentElement.querySelector('.dislike-button').classList.remove('highlighted');
}

function dislikePost(button) {
    button.classList.add('highlighted');
    button.parentElement.querySelector('.like-button').classList.remove('highlighted');
}
