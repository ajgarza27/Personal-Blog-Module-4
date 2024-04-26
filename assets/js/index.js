const submitButton = document.querySelector('#button');
const usernameEl = document.getElementById('username');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');

// Event listener to the submit button
submitButton.addEventListener('click', function (event) {
    event.preventDefault(); 

    // Get the user's input values
    const username = usernameEl.value.trim();
    const title = titleEl.value.trim();
    const content = contentEl.value.trim();

    // Statement for user to not leave fields blank
    if (username === '' || title === '' || content === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Saves filled Blog post
    const blogPost = {
        username: username,
        title: title,
        content: content,
    };

    const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    savedBlogs.push(blogPost);
    localStorage.setItem('blogs', JSON.stringify(savedBlogs));
    window.location.href = 'blog.html';
});