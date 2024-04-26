const backButton = document.querySelector('#back');
const userContainer = document.getElementById('saved-info');
const blogContainer = document.createElement('div');

const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || []

//Function for adding elements and class names
function writeData () {
    //for loop for creating variables with js inside html
    for (let i = 0; i < savedBlogs.length; i++) {
    const blogContainer = document.createElement('div');
    const savedTitle = document.createElement('h3');
    const savedContent = document.createElement('p');
    const createPost = document.createElement('p');
    const userSavedName = document.createElement('p');
    
    // Apply styling
    blogContainer.classList.add('blog-entry');
    createPost.classList.add('posted-by');
    userSavedName.classList.add('username');
    savedTitle.classList.add('blog-title');
    savedContent.classList.add('blog-content');
    
    
    userSavedName.textContent = savedBlogs[i].username;
    savedTitle.textContent = savedBlogs[i].title;
    savedContent.textContent = savedBlogs[i].content;
    createPost.textContent = "Posted By:";
    
    //Apppend the infomation
    userContainer.append(blogContainer);
    blogContainer.append(savedTitle);
    blogContainer.append(savedContent);
    blogContainer.append(createPost);
    createPost.append(userSavedName);
    
    
      };}

// Event listener to call the function
document.addEventListener('DOMContentLoaded', (event) => {
    writeData();
    });

// Back button event listener
backButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'index.html';
});