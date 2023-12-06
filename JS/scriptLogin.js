// function login() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Verificação simples de credenciais (isso não é seguro para autenticação real)
//     if (username === 'usuario' && password === '001122') {
//         window.location.href = 'http://127.0.0.1:5500/HMTL/index.html'; // Substitua pela URL desejada
//     } else {
//         alert('Usuário e/ou senha, inválidas. Tente novamente.');
//     }
// }



// document.addEventListener("DOMContentLoaded", function() {
//     const loginFrom = document.getElementById("loginForm");

//     loginForm.addEventListener("submit", function(event){
//         event.preventDefault();

//         const xhr = new XMLHttpRequest();
//         xhr.open("GET", "data.json", true);

//         xhr.onload = function() {
//             if (xhr.status === 200) {
//                 const responseData = JSON.parse(xhr.responseText);
//                 const username = document.getElementById("username").value;
//                 const password = document.getElementById("password").value;

//                 const users = responseData.users;

//                 const foundUser = user.find(user => user.username === username && user.password === password);

//                 if(foundUser !== undefined) {
//                     alert("Login com sucesso");
//                     window.location.href = "../HTML/index.html";
//                 } else {
//                     alert("Usuário e/ou senha inválidos, tente novamente!");
//                 }
//             }
//         };
//         xhr.send();
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "../users.json", true);
  
      xhr.onload = function() {
        if (xhr.status === 200) {
          const responseData = JSON.parse(xhr.responseText);
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;
  
          const users = responseData;
  
          const foundUser = users.find(user => user.user === username && user.password === password);
  
          if (foundUser !== undefined) {
            alert("Login com sucesso!!!");
            // Redirecionar para outra página após o login bem-sucedido
            window.location.href = "../HTML/index2.html";
          } else {
            alert("Usuário e/ou senha inválidos, tente novamente!");
          }
        }
      };
  
      xhr.send();
    });
  });