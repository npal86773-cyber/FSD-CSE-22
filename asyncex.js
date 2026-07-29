function register() {
  setTimeout(()=>{
     console.log("register here")

  },10000)
  
}
function login() {
  setTimeout(()=>{
 console.log("login here")
  },5000)
 
}
function getData() {
  setTimeout(()=>{
     console.log("fetch data")
  },4000)
  
}
function displayData() {
  setTimeout(() => {
    console.log("display data");
},6000)
  
  
}


register();
login();
getData();
displayData();
console.log("call another application");
