
var firebaseConfig = {
    apiKey: "AIzaSyCXn9zvN0i5HK1gjstaGlj4Ns_pPDu2jFY",
    authDomain: "contact-us-ebb42.firebaseapp.com",
    databaseURL: "https://contact-us-ebb42.firebaseio.com",
    projectId: "contact-us-ebb42",
    storageBucket: "contact-us-ebb42.appspot.com",
    messagingSenderId: "611784371587",
    appId: "1:611784371587:web:2946b756e64cf07c0a1ab6",
    measurementId: "G-D8F2XKMN04"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
// Reference messages collection

var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var branch = getInputVal('branch');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, branch, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, branch, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    branch:branch,
    email:email,
    phone:phone,
    message:message
  });
}