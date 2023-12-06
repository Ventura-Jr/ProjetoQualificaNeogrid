// document
// .getElementById("formulario-cadastro")
// .addEventListener('submit', (event) => {
//     event.preventDefault();
//     const nome = document.getElementById("nome").value;
//     const user = document.getElementById("user").value;
//     const email = document.getElementById("email").value;
//     const senha = document.getElementById("senha").value;
//     const form = { nome, user, email, senha }

//     // alert(JSON.stringify(form, null, 2))

//     // fetch('http://localhost:8080', {
//     // method: 'POST' ,
//     // headers: {
//     //     'Content-Type': 'application/json'
//     // },
//     // body: JSON.stringify(form)
//     // })  
    
//     const arqCad = new Blob([JSON.stringify(form, null, 2)], { type: 'application/json' });
//     saveAs(arqCad, "Arquivo_Cadastro_Usuario.json");

//     // Limpar os campos do formulário após o envio
//     document.getElementById("nome").value = "";
//     document.getElementById("user").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("senha").value = "";
// })

// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('form');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Previne o comportamento padrão do formulário (enviar para a URL do atributo 'action')

//         // Redireciona para o site desejado ao clicar no botão de login
//         window.location.href = 'http://127.0.0.1:5500/HMTL/login.html'; 
//     });
// });
    


document.addEventListener("DOMContentLoaded", function() {
    const formcadastro = document.getElementById("formcadastro");
  
    formcadastro.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nome = document.getElementById("nome").value;
      const usuario = document.getElementById("user").value;
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
  
      // Carrega o arquivo JSON existente (se houver)
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "../users.json", true);
  
      xhr.onload = function() {
        let usersData = [];
        if (xhr.status === 200) {
          usersData = JSON.parse(xhr.responseText);
        }
  
        // Adiciona o novo usuário aos dados existentes
        usersData.push({ "name": nome, "user": usuario, 
                    "email": email, "password": senha  });
  
        // Salva os dados atualizados em um arquivo JSON
        const jsonBlob = new Blob([JSON.stringify(usersData)], { type: "application/json" });
        const jsonUrl = URL.createObjectURL(jsonBlob);
                
        // DOWNLOAD CONVENCIONAL
        const a = document.createElement("a");
        a.href = jsonUrl;
        a.download = "users.json";
        a.click();
        
      };
  
      xhr.send();
    });
  });
  