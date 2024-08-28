<template>
  <div class="wrapper">
  <div class="content-items">
    <video :src="rrtsbgv" autoplay loop muted disablePictureInPicture></video>
  </div>  
  <div class="main">
      

      <div id="scroll-text">
        Time shown is estimated travel time only, Passengers are advised to keep extra time to travel.
    </div>
      <div class="container">
        <div class="content">
          <h2>Welcome to DELHI-MEERUT RRTS</h2>
          <p>Discover the charm of the city with our reliable metro network</p>
          <form id="routeForm" class="search-box" @submit.prevent="findRoute">
            <div class="mm">
              <input type="text" id="source" name="source" v-model="source" placeholder="From Station" required>
            </div>
            <div class="mm">
              <input type="text" id="destination" name="destination" v-model="destination" placeholder="To Station" required>
            </div>
        <div class="but">
            <button type="submit">Find Route</button>
            <button id="clearButton" @click="clearAll">Clear All</button>
        </div>
          </form>
          <ol class="ro">
            <li v-for="item in totalstation" :key="item.station">
              {{ item.station }}
            </li>
          </ol>
          <p>Total Time Taken: {{time}}</p>

          
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import rrtsbgv from '@/assets/rrtsbgv.mp4';
  import axios from 'axios';
  
  // Reactive data properties
  const source = ref('');
const destination = ref('');
let time=ref(0);
const totalstation = ref([]);
  
  // Method to find the route
  const findRoute = async () => {
    try {
      const response = await axios.post('https://ncrtc-metro-route-finder-backend-api-2.onrender.com/findRoute', {
        source: source.value,
        destination: destination.value
      });
    totalstation.value = []; // Clear previous results
    totalstation.value.push({ station: response.data.source.toUpperCase() });
    totalstation.value.push(...response.data.intermediateStations);
    totalstation.value.push({ station: response.data.destination.toUpperCase() });
      time=response.data.totalTime
    } catch (error) {
        console.error(error);        
    }
  };
  
  // Method to clear all input fields and results
  const clearAll = () => {
    source.value = '';
    destination.value = '';
    totalstation.value = [];
    time=0;
  };
  </script>


  
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Be+Vietnam+Pro:wght@300&display=swap");
*{
  overflow: hidden;
}
.wrapper{
  width: 100vw;
  height:calc(100vh - 75px);
  overflow: hidden;
}
.but{
    margin: 20px 0px;
    width: 100%;
    display: flex;
    justify-content: space-around
}

#scroll-text {
    margin-top: 80px;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 1.5rem;
    width: 100%;
    height: 30px;
    color:red;  
    transform: translateX(100%);
    animation: my-animation 25s linear infinite;
    z-index: 20;
}

@keyframes my-animation {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}

.main{
    position: relative;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
}

.ro{
    max-height: 150px;
overflow: auto;
}
.content-items {
    width: 100%;
    height: calc(100vh - 75px);
    position: absolute;
    z-index: 1;
}


.content-items video {
    width: 100%;
    height: 100%;
    object-fit:cover; 
}

.container {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(47,79,173,0.76234243697479) 21%, rgba(0,212,255,1) 100%);
    border: 10px solid rgba(255, 255, 255, 0.572);
    border-radius: 50px;
    padding: 1% 4% 0% 4%;
    text-align: center;
    color: white;
    margin-bottom: 100px;
    background-color: aqua;
    z-index: 2;
}

.search-box {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}
.mm {
    padding: 8px;
}

.search-box input {
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    margin-right: 3px;
    z-index: 20;
}

.search-box button {
    padding: 10px;
    font-size: 16px;
    background-color: forestgreen;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100px;
}

.search-box button:active {
    transform: scale(0.95);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.result{
         margin-top: 20px;
         max-height: 18vh;
}
.hello{
    margin-top: 10px;
    border: 5px solid #9DD7F0;
    border-radius: 10px;
    justify-content:start;
    max-height: 20vh;
}  

.head{
    color: black;
    font-weight: bolder;
}
::-webkit-scrollbar {
    width: 20px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(200, 158, 168);
    border-radius: 10px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background:grey;
  }

  @media screen and (min-width: 480px){


  
 }





    


</style>
