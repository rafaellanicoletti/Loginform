
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBFUM969amA_yoxOy4wzBuoHJF3Kw4GDNs",
authDomain: "loginform2-6b2bb.firebaseapp.com",
databaseURL: "https://loginform2-6b2bb.firebaseio.com",
projectId: "loginform2-6b2bb",
storageBucket: "loginform2-6b2bb.appspot.com",
messagingSenderId: "351574340721",
appId: "1:351574340721:web:0842a607cd1fd5f3"
};
// Initialize Firebasex     
firebase.initializeApp(firebaseConfig);

var name= "";
var email = "";
var age = 0;
var comment = "";

$("#addUser").on("click",function(){
    event.preventDefault();
    name = $("#nameInput").val().trim();
    email = $("#emailInput").val().trim();
    age = $("#ageInput").val().trim();
    comment = $("#commentInput").val().trim();

    firebase.database().ref().set({
        name:name,
        email:email,
        age:age,
        comment:comment,

    })
})

firebase.database().ref().on("value",function(snapshot){
    $("#nameDisplay").html(snapshot.val().name);
    $("#emailDisplay").html(snapshot.val().email);
    $("#ageDisplay").html(snapshot.val().age);
    $("#commentDisplay").html(snapshot.val().comment);
})

