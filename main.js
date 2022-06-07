//taking button
document.getElementById('myBtn').addEventListener('click', getData);

function getData() {
    //console.log('test');

    //GET API RandomUser
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        let author = data.results;
        //console.log(author);

        //Geting Data values
        let output = "<h2><center>Dados do Usuário</center></h2>";

        //get data loop through
        author.forEach(function(lists){
            output += `
            <div class= "container">
                <div class="card mt-4 bg-light">
                    <ul class= "list-group">
                        <li class = "list-group-item"><h2>Nome: ${lists.name.first} </h2></li>
                        <li class = "list-group-item"><img src = "${lists.picture.large}" </h2></li>
                        <li class="list-group-item">Número Telefônico: ${lists.cell}</li>
                        <li class="list-group-item">Data de nascimento: ${lists.dob.date}</li>
                        <li class="list-group-item">Idade: ${lists.dob.age}</li>
                        <li class="list-group-item">Email : ${lists.email}</li>
                        <li class="list-group-item">Gênero: ${lists.gender}</li>
                        <li class="list-group-item">Cidade: ${lists.location.city}</li>
                        <li class="list-group-item">País: ${lists.location.country}</li>
                        <li class="list-group-item">Código Postal: ${lists.location.postcode}</li>
                    </ul>
                </div>
            </div> `;
        });

        //Show On Our Screen All Data
        document.getElementById('output').innerHTML = output;


    });
};