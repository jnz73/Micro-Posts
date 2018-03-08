class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.postSubmit = document.querySelector('.post-submit');
        this.formState = 'add';
    }

    showPosts(posts) {
        let output = '';
        posts.forEach(post => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id=${post -
                            id}><i class="fa fa-pencil"></i></a>
                        <a href="#" class="delete card-link" data-id=${post -
                            id}><i class="fa fa-remove"></i></a>
                    </div>
                </div>
            `;
        });
        this.post.innerHTML = output;
    }
    showAlert(message, className) {
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.postsContainer');
        const posts = document.querySelector('#posts');
        // insert alert
        container.insertBefore(div, posts);
        // Delete after 3 secs
        // setTimeout(() => {
        //     this.clearAlert()
        // }, 3000);
    }
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert){
            currentAlert.remove();
        }
    }
    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }
}

export const ui = new UI();
