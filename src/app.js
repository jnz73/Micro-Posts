import { http } from './http';
import { ui } from './ui';

// Get post on download

document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add posts
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete post click
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// Listen for cancel button
document.querySelector('.card-form').addEventListener('click', cancelEdit);

function getPosts() {
    http
        .get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

function submitPost() {
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const id = document.querySelector('#id').value;
    const data = {
        title,
        body
    };
    if (title === '' || body === '') {
        ui.showAlert('Pleas fill in all fields', 'alert alert-danger');
    } else {
        if(id===''){
            //create post
            http
            .post('http://localhost:3000/posts', data)
            .then(data => {
                ui.showAlert('Post Added!', 'alert alert-success');
                ui.clearFields();
                getPosts();
            })
            .catch(err => console.log(err));

        }else{
            //update post
            http
            .put(`http://localhost:3000/posts/${id}`, data)
            .then(data => {
                ui.showAlert('Post Updated!', 'alert alert-success');
                ui.changeFormState('add');
                getPosts();
            })
            .catch(err => console.log(err));
        }

        // Create post


    }
}

function deletePost(e) {
    if (e.target.parentElement.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id;
        if (confirm('Are you sure?')) {
            http
                .delete(`http://localhost:3000/posts/${id}`)
                .then(data => {
                    ui.showAlert('Post Deleted!', 'alert alert-success');
                    setTimeout(() => {
                        getPosts();
                    }, 100);
                })
                .catch(err => console.log(err));
        }
    }
    e.preventDefault();
}

function enableEdit(e) {
    if (e.target.parentElement.classList.contains('edit')) {
        const id = e.target.parentElement.dataset.id;
        const body = e.target.parentElement.previousElementSibling.textContent;
        const title =
            e.target.parentElement.previousElementSibling.previousElementSibling
                .textContent;
        const data = {
            id,
            title,
            body
        };
        ui.fillForm(data);
    }
}

function cancelEdit(e) {
    if (e.target.classList.contains('post-cancel')) {
        ui.changeFormState('add');
    }
    e.preventDefault();
}
