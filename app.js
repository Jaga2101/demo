const form = document.getElementById('myForm');

const firebaseConfig = {
    apiKey: "AIzaSyDmY6Bgyr35XuRg-iE_0nn6RwXFNeJdkp0",
    authDomain: "contactform-3b33d.firebaseapp.com",
    databaseURL: "https://contactform-3b33d-default-rtdb.firebaseio.com",
    projectId: "contactform-3b33d",
    storageBucket: "contactform-3b33d.appspot.com",
    messagingSenderId: "162700616708",
    appId: "1:162700616708:web:26c52971d5be968f0e8151",
    measurementId: "G-D4JD7LVK7V"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const database = firebase.database();

  const ref = database.ref("people")

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    ref.push({
        name:name,
        email:email,
        phone:phone
    })
    
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    // console.log(name,email,message);
    window.location.href = "pay.html";
    //  form.reset();

})