// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


function fetching(){

    const url ='https://jsonplaceholder.typicode.com/todos/1';

    fetch(url)
    .then(r=> r.json())
    .then(json => console.log(json))
}


function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display(data))
}

function display(data){
    const ul = document.getElementById('userList');
    for(let dat of data ){
        console.log(dat)
        const li = document.createElement('li');
        li.innerText= dat.email;
        ul.appendChild(li)
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