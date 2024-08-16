const result = document.getElementById("result");
let page = 1;
async function usersFn() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`
    );
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.log(error);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  
});



function toggleNext(func) {
  document.getElementById("prev").addEventListener("click", function () {
    if (page !== 1) {
      page--;
      func()
    }
  });
  document.getElementById("next").addEventListener("click", function () {
    page++;
    func()
  });
}



function displayUsers(users) {
  result.innerHTML = "";
  let table = document.createElement("table");
  table.classList.add("table", "table-hover", "table-bordered");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  toggleNext(usersFn)
  users.forEach((element, index) => {
    thead.innerHTML = `
    <tr class=" table table-active">
    <th>T/r</th>
    <th>Name</th>
    <th>Username</th>
    <th>Email</th>
    <th>Adres</th>
    <th>Phone</th>
    <th>Website</th>
    <th>Company</th>
    
    </tr>
    
    `;
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="table-primary">${index + 1}</td>
    <td class="table-secondary" >${element.name}</td>
    <td class="table-success">${element.username}</td>
    <td class="table-danger">${element.email}</td>
    <td class="table-warning">${element.address.street}</td>
    <td class="table-info">${element.phone}</td>
    <td class="table-light">${element.website}</td>
    <td">${element.company.name}</td>
    `;
    tbody.appendChild(tr);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  result.appendChild(table);
  console.log(table);
}

async function todosFn() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`
    );
    const todos = await response.json();
    displayTodos(todos);
  } catch (error) {
    console.log(error);
  }
}

function displayTodos(todos) {
  result.innerHTML = "";
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  toggleNext(todosFn)

  todos.forEach((element, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="table-secondary" >${element.id}: </td>
      <td class="table-success">${element.title}</td>
      <td class="table-danger">${element.completed}</td>
      `;
    thead.innerHTML = `
       <tr class=" table table-active">
      <th>id</th>
      <th>Title</th>
      <th>Completed</th>
      `;
    tbody.appendChild(tr);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  result.appendChild(table);
  let style = document.createElement("style");
  style.textContent = `
  .todo-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    text-align: left;
    border-radius: 8px; /* Rounded corners */
    overflow: hidden; /* Ensure rounded corners are visible */
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  }

  .todo-table th, .todo-table td {
    padding: 12px 15px; /* Improved padding */
    border: 1px solid #e0e0e0; /* Lighter border for softer look */
  }

  .todo-table th {
    background-color: #007bff; /* Primary color for headers */
    color: white;
    font-weight: bold;
  }

  .todo-table tr {
    transition: background-color 0.3s; /* Smooth background transition */
  }

  .todo-table tr:nth-child(even) {
    background-color: #f9f9f9; /* Light grey for even rows */
  }

  .todo-table tr:hover {
    background-color: #e0f7fa; /* Light blue on hover */
  }

  .table-secondary {
    color: #495057; /* Dark text color for ID */
  }

  .table-success {
    color: #28a745; /* Green color for titles */
  }

  .table-danger {
    color: #dc3545; /* Red color for completed status */
  }

`;
  document.head.appendChild(style);
}

async function photosFn() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
    );
    const photos = await response.json();
    displayPhotos(photos);
  } catch (error) {
    console.log(error);
  }
}

// function displayPhotos(photos) {
//   result.innerHTML = "";
//   let nums = document.createElement("div");

//   for (let i = 0; i < 100; i++) {
//     console.log(photos[i]);

//     let div = document.createElement("div");
//     div.style.width = "400px"
//     div.innerHTML += `
//         <img src="${photos[i].url}" width="300px">
//         <h4>${photos[i].title}</h4>
//       `;

//     nums.appendChild(div);
//   }
//   result.appendChild(nums);
// }
function displayPhotos(photos) {
  result.innerHTML = "";
  toggleNext(photosFn)

  const style = document.createElement("style");
  style.innerHTML = `
      body {
        font-family: 'Arial', sans-serif; /* Clean sans-serif font */
        background-color: #f4f4f4; /* Light background */
        margin: 0;
        padding: 20px;
        display: flex;
        justify-content: center; /* Center content horizontally */
        flex-wrap: wrap; /* Allow wrapping of cards */
      }
  
      .card-container {
        display: grid; /* Use grid layout for cards */
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive cards */
        gap: 20px; /* Space between cards */
        width: 100%;
        max-width: 1200px; /* Maximum width for container */
      }
  
      .photo-card {
        background-color: white; /* Card background */
        border-radius: 8px; /* Rounded corners */
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Card shadow */
        padding: 20px; /* Inner padding */
        text-align: center; /* Center content */
        transition: transform 0.3s, box-shadow 0.3s; /* Smooth transition for hover effect */
      }
  
      .photo-card:hover {
        transform: translateY(-5px); /* Lift effect on hover */
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
      }
  
      .photo-img {
        width: 100%; /* Image responsive */
        height: auto; /* Maintain aspect ratio */
        border-radius: 8px; /* Rounded corners for images */
      }
  
      .photo-title {
        font-size: 16px; /* Title font size */
        margin: 10px 0 0; /* Margin above title */
        color: #333; /* Darker color for title */
      }
    `;
  document.head.appendChild(style);

  let cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  photos.forEach((item) => {
    let card = document.createElement("div");
    card.className = "photo-card";

    card.innerHTML = `
        <img src="${item.url}" alt="${item.title}" class="photo-img">
        <h4 class="photo-title">${item.title}</h4>
      `;

    cardContainer.appendChild(card);
  });

  result.appendChild(cardContainer);
  console.log(cardContainer);
}

async function albomFn() {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=10`);
    const todos = await response.json();
    displayAlbom(todos);
  }catch(error){
    console.log(error);
    
  }
}
function displayAlbom(albom) {
  result.innerHTML = "";
  toggleNext(albomFn)

  let ul = document.createElement("ul");
  ul.style.listStyle = "none";
  ul.style.padding = "0";

  albom.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add("album-item");
    li.innerHTML = `${item.id} : ${item.title}`;
    ul.appendChild(li);
  });

  result.appendChild(ul);
}
async function commentFn() {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`);
    const todos = await response.json();
    displayComment(todos);
  }catch(error){
    console.log(error);
    
  }
}

function displayComment(comment) {
  result.innerHTML = "";
toggleNext(commentFn)
  comment.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
            <h2">${item.name.toUpperCase()}</h2>
            <h3">${item.email}</h3>
            <h4">${item.body}</h4>
          `;
    result.appendChild(div);
  });
}
async function postsFn() {
  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
    const todos = await response.json();
    displayPosts(todos);
  }catch(error){
    console.log(error);
    
  }

}

function displayPosts(posts) {
  result.innerHTML = "";
  toggleNext(postsFn)
  posts.forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
            <h2">${item.id}: ${item.title.toUpperCase()}</h2>
            <p">${item.body}</p>
          `;
    result.appendChild(div);
  });
}
