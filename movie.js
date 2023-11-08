
// //test run \
//TEST DATA
// let data= {
//  movie:"test",
//  minutes:5,
//  ratings:4
// }
// console.log(data.movie)


// const getData = (fetchData) =>{


// const Data = () =>{

// console.log("test")
// }
// getData(Data)
// }

let datas= document.getElementById("ROOT")
let one= document.getElementById("first")
let two= document.getElementById("second")
let three= document.getElementById("third")
let four= document.getElementById("fourth")

//for the first element


//try to fetch the data individually
function fetchData(callback) {
    setTimeout(() => {
      const data = 'http://192.168.247.38:8088/api/movie/901';
      callback(data);
      
    }, 1000);
  }
  
  function processData(data) {
  
    console.log('Data received: ' + data);
  }
  one.innerHTML=fetchData(processData)

  function fetchData(callback) {
    setTimeout(() => {
      const data1 = 'http://192.168.247.38:8088/api/movie/902';
      callback(data1);
    }, 2000);
  }
  
  function processData(data1) {
  
    console.log('Data received: ' + data1);
  }
  two.innerHTML=fetchData(processData)

  function fetchData(callback) {
    setTimeout(() => {
      const data2 = 'http://192.168.247.38:8088/api/movie/903';
      callback(data2);
    }, 3000);
  }
  
  function processData(data2) {
  
    console.log('Data received: ' + data2);
  }
  three.innerHTML=fetchData(processData)
  
  
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = 'http://192.168.247.38:8088/movies/all';
//         resolve(data);
//       }, 1000);
//     });
//   }
  
//   async function processData() {
//     try {
//       const data = await fetchData();
//       console.log('Data received: ' + data);
//     } catch (error) {
//       console.error('Error: ' + error);
//     }
//   }
  
//   processData();
  

  
//   fetchData(processData);
// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {        
//         const data = 'http://192.168.247.38:8088/api/movies';
//         resolve(data);
//       }, 1000);
//       //mo show ang data after 1sec
//     });
//   }
  
//   fetchData()
//     .then(data => {
//       console.log('Data received: ' + data);
//     })
//     .catch(error => {
//       console.error('Error: ' + error);
//     });
//     fetch()
//     .then(response)
