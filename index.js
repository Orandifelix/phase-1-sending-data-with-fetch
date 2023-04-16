// Add your code here
// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle",
//     }),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject);




// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// });




// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// // method: "POST" is missing from the object below
// const configurationObject = {
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   })
//   .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });


//makes a POST request to /users with a name and email:


// function submitData(name, email){
//   return fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       },
//       body: JSON.stringify({
//         name: "Steve",
//         email: "steve@steve.com",
//       }),
//     })


// }


// function submitData(name, email) {
//   return fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       name: name,
//       email: email,
//     }),
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
// }


// submitData("Steve", "steve@steve.com")



function submitData(name ="Steve", email ="steve@steve.com") {
  let formData = {
    name: name,
    email: email
  };
 
  

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let newId = object.id;
      document.body.innerHTML = newId;
    })
    .catch(function(error) {
      document.body.innerHTML = error.message;
    });
}




