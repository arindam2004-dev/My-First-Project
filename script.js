const blogForm = document.getElementById('blogForm');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const blogList = document.getElementById('blogList');
const noBlogText = document.getElementById('noBlogText');

blogForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const titleText = titleInput.value;
    const contentText = contentInput.value;

    if (noBlogText) {
        noBlogText.style.display = 'none';
    }

    const newBlog = document.createElement('div');
    newBlog.className = 'blog-card';

    newBlog.innerHTML = `
        <h3>${titleText}</h3>
        <p>${contentText}</p>
        <small style="color: #666;">Published on: ${new Date().toLocaleDateString()}</small>
    `;

    blogList.prepend(newBlog);
    blogForm.reset();
});
