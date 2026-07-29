function register() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("register here")
        reject("failed to login");// reject do not execute the another fn
      }, 10000)                   // if we write resolve at place of reject without any mssg passing then all the fn will execute
    })
  
}
function login() {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
           console.log("login here")
           reject("failed to fetch data");
         }, 5000)
    })
 
}
function getData() {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
           console.log("fetch data")
           reject("failed to display data");
         }, 4000)
    })
 
}
function displayData() {
  setTimeout(() => {
    console.log("display data");
  }, 6000);
}// display data is not calling any other fn so no need to give promise in that
//callback hell problem
//to solve callback hell problem we use ES6 feature i.e "promise"
// register()
//     .then(login)
//     .then(getData)
//     .then(displayData)
//     .catch((err)=>{

// })

async function test() {
    try{
        await register();
        await login();
        await getData();
        displayData();
    }
    catch(err){
        console.log("Error:" , err);
    }
    
}
test();

console.log("call another application");
