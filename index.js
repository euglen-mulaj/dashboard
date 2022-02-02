$( document ).ready(function() {
    console.log( "ready!" );
});
console.log('Message from outside...');

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//Get the value of email and password
var emailAddress = document.getElementById('email').value;
var passw = document.getElementById('password').value;
var checkPass = document.getElementById('checkPass').value;



let users = [];
const addUser = (ev)=>{
  ev.preventDefault();   //to stop the form from submiting 
  let user = {
    id: Date.now(),
    emailAddress: document.getElementById('email').value,
    passw: document.getElementById('password').value,
    checkPass: document.getElementById('checkPass').value
  }
  users.push(user);
  document.forms[0].reset();
//check if we get the value from console
console.log(emailAddress);
console.log(passw);
console.log(checkPass);
  
  console.warn('added',{users});
  let pre = document.querySelector('#msg pre');
  pre.textContent = '\n' + JSON.stringify(users, '\t' ,2);

  //saving to localStorage
  localStorage.setItem('Users: ',JSON.stringify(users) );
}
//

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('signup').addEventListener('click', addUser)
});
  // $.get("test.php", function(data){
  //   alert("Data: " + data);
  //   console.log(JSON.stringify(data));
  //  });

// test how to pass data in DATABASE
