let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mercedes Benz is cool,' + myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storageName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mercedes Benz is very cool,'+ storageName; 
}
myButton.onclick = function(){
    setUserName();
}
