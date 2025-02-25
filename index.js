//Light-Dark Theme
var islight = 1;
var submit = document.getElementById('search-btn');
var inputfield = document.getElementById('search-input');
var userInfoCard = document.getElementById('user-info-card');
var searchicon = document.getElementById('search-icon-img');
var profileName = document.getElementById('user-name');
var loginName = document.getElementById('user-login-name');
var joinDate = document.getElementById('join-date');
var userImage = document.getElementById('user-avatar');
var repoCount = document.getElementById('user-repos');
var followersCount = document.getElementById('user-followers');
var followingCount = document.getElementById('user-following');
var userBio = document.getElementById('user-bio');

document.getElementById('theme-switch').addEventListener('click', () =>{
    const element = document.getElementById('body-theme');
    var button = document.getElementById('theme-switch');
    

    if(islight){
        element.classList.add('dark-theme');
        button.innerText = 'Light';
        button.style.backgroundColor='black';
        submit.style.backgroundColor='black';
        submit.style.color='white';
        button.style.color = 'white';
        inputfield.style.backgroundColor='#1e2a47';
        userInfoCard.style.backgroundColor='#1e2a47';
        islight = 0;
    }else{
        element.classList.remove('dark-theme');
        button.innerText = 'Dark';
        button.style.backgroundColor='white';
        button.style.color = 'black';
        submit.style.backgroundColor='white';
        submit.style.color='black';
        inputfield.style.backgroundColor='white';
        userInfoCard.style.backgroundColor='white';
        islight = 1;
    }
});

//Fetch API Key
submit.addEventListener('click', async() => {
    userInfoCard.style.display = 'flex';


    var username = inputfield.value;
    var url =`https://api.github.com/users/${username}`;
    var data = await fetch(url);
    var data = await data.json();
    
    profileName.innerText = data.name;
    userImage.src= data.avatar_url;
  
     // Original date string from API
     const apiDate = `${data.created_at}`;

    // Convert the date string to a Date object
    const date = new Date(apiDate);

   // Define an array of month names
    const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // Extract the day, month, and year
    const day = date.getDate().toString().padStart(2, '0'); // Ensure 2 digits
    const month = monthNames[date.getMonth()]; // Month name
    const year = date.getFullYear().toString().slice(-2); // Last two digits of year

   // Format the date as DD Month YY
   const formattedDate = `${day} ${month} ${year}`;
   //Display Date
   joinDate.innerText = formattedDate;

   loginName.innerText = data.login;
   repoCount.innerText = data.public_repos;
   followersCount.innerText = data.followers;
   followingCount.innerText = data.following;
   userBio.innerText = data.bio;
    });



//Geting datafrom API
//https://api.github.com/users/{username}