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
    console.log(data)
}