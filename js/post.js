
function postJson(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postGet(data))
}

function postGet(posts){
    const postContainer =document.getElementById('postContainer')
    for(let post of posts){
        console.log(post)
        const div = document.createElement('div')
        div.innerHTML=`
        <h3>Post id:${post.userID}</h3>
        <h4>Post Title: ${post.title}</h4>
        <p>Post body: ${post.body}</p>
        `
        postContainer.appendChild(div);
        div.classList.add('pain')
    }
}

postJson()