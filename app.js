// const input = document.querySelector("#input1");
// const output = document.querySelector(".container");

// function add() {
//     fetch(`https://api.github.com/users/${input.value}`)
// .then((res) => res.json())
// .then((res) => {
//     console.log(res);
//     output.innerHTML = ""
//     output.innerHTML += `
//     <img src = "${res.avatar_url}">
//     <h2>${res.name}</h2>
//     <h3>User Name: ${res.login}</h3>
//     <h3>Followers: ${res.followers}</h3>
//     <h3>Repositories: ${res.public_repos}</h3>
//     <h3>Location:${res.location}</h3>
//     <h3>ID: ${res.id}</h3>`
    
// })
// .catch((res) => {
//     output.innerHTML += `<h2>Error 404</h2>`
// })
// }




// const input = document.querySelector("#input1");
// const output = document.querySelector(".container");

// function add() {
//     if (!input.value) {
//         output.innerHTML = "<h2>Please enter a valid username</h2>";
//         return;
//     }

//     fetch(`https://api.github.com/users/${input.value}`)
//     .then((res) => res.json())
//     .then((res) => {
//         console.log(res);
//         output.innerHTML = "";

//         if (res.message === "Not Found") {
//             output.innerHTML = "<h2>User not found</h2>";
//             return;
//         }

//         output.innerHTML += `
//             <img src="${res.avatar_url}">
//             <h2>${res.name}</h2>
//             <h3>User Name: ${res.login}</h3>
//             <h3>Followers: ${res.followers}</h3>
//             <h3>Repositories: ${res.public_repos}</h3>
//             <h3>Location: ${res.location}</h3>
//             <h3>ID: ${res.id}</h3>`;
//     })
//     .catch((err) => {
//         output.innerHTML = "<h2>Error occurred</h2>";
//     });
// }
const input = document.querySelector("#input1");
const output = document.querySelector(".user-info");

function add() {
    if (!input.value) {
        output.innerHTML = "<p class='error'>Please enter a valid username</p>";
        return;
    }

    fetch(`https://api.github.com/users/${input.value}`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        output.innerHTML = "";
        
        if (res.message === "Not Found") {
            output.innerHTML = "<p class='no-user'>User not found</p>";
            return;
        }

        output.innerHTML = `
            <img src="${res.avatar_url}" alt="Avatar">
            <h2><b>${res.name}</b></h2>
            <h3>User Name: ${res.login}</h3>
            <h3>Followers: ${res.followers}</h3>
            <h3>Repositories: ${res.public_repos}</h3>
            <h3>Location: ${res.location}</h3>
            <h3>ID: ${res.id}</h3>`;
    })
    .catch((err) => {
        output.innerHTML = "<p class='error'>Error 404/p>";
    });
}

