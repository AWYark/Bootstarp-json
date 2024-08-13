//fetch data usinf async/await
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json();

        //run our display the data func
        displayData(data);
    } 
    catch(error){
        console.error("Failed: ", error);
        document.getElementById("dataContainer").innerHTML = '<p class="alert alert-danger>Failed to load Data</p>';
    }
}

//function to display to html
function displayData(data){
    const container = document.getElementById("dataContainer");
    //clear any existing content
    container.innerHTML = '';

    //loop through any objects return via data
    data.forEach(
        item => {
            const card = `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.body}</p>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        }
    );
}

//fetch the data when the page loads
window.onload = fetchData;

// // Fetch data using Async/Await
// async function fetchData()
// {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();

//         // Run our Display Data function
//         displayData(data);
//     }
//     catch(error)
//     {
//         console.error("Error fetching data: ", error);
//         document.getElementById("dataContainer").innerHTML = '<p class="alert alert-danger">Failed to load data.</p>';
//     }
// }

// // Function to display the data in HTML
// function displayData(data)
// {
//     const container = document.getElementById("dataContainer");
//     // clear any existing content
//     container.innerHTML = '';

//     // loop through any objects return via data
//     data.forEach(
//         item => {
//             const card = `
//                 <div class="card mb-3">
//                     <div class="card-body">
//                         <h5 class="card-title">${item.title}</h5>
//                         <p class="card-text">${item.body}</p>
//                     </div>
//                 </div>
//             `;
//             container.innerHTML += card;
//         }
//     );
// }

// // fetch the data when the page loads
// window.onload = fetchData;