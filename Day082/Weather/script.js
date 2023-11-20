const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");

const userContainer = document.querySelector(".wrapper");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");

const laodingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".your-2");


//

let currentTab = userTab;

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

function switchTab(clickTab) {
    if (clickTab != currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickTab;
        currentTab.classList.add("current-tab");
    }

    if (!searchForm.classList.contains("active")) {
        userInfoContainer.classList.remove('active');
        grantAccessContainer.classList.remove('active');
        searchForm.classList.add('active');
    }

    else{
        searchForm.classList.remove('active');
        userInfoContainer.classList.remove('active');
        getfromSessionStorage();
    }
}

userTab.addEventListener("click", () => {
    switchTab(userTab);
})

searchTab.addEventListener("click", () => {
    switchTab(searchTab);
})

function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        grantAccessContainer.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}


async function fetchUserWeatherInfo(coordinates) {
    const {lat,lon} = coordinates;
    grantAccessContainer.classList.remove("active");
    laodingScreen.classList.classList.add("active");
    
    try{
       const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
       );
       const data = await response.json();
        
       laodingScreen.classList.remove("active");
       userInfoContainer.classList.add("active");
       renderWeatherInfo(data);
    }
    catch(err){
        laodingScreen.classList.remove("active");
    }
}

function renderWeatherInfo(data){
    
}