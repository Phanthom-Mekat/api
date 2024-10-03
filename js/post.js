
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


function postDelete(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}

function createAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function patchPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

postJson()
