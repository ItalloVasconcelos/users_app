const btnUser = document.getElementById('btnUsers');
const usersList = document.getElementById('usersList');
const showUserDetail = document.getElementById('showUserDetail');

btnUser.addEventListener('click', async ()  => {
    usersList.innerHTML = `<li>Carregando lista...</li>`;
    

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok) {
            throw new Error(`Erro no HTTP: ${response.status}`)
        }

        const users = await response.json()
        
        usersList.innerHTML = '';

        users.forEach((user) => {
        const li = document.createElement('li')
        const btbDetail = document.createElement('button');

        li.textContent = `
        Nome: ${user.name} 
        Email: ${user.email}
       
        `
        btbDetail.textContent = "Ver detalhes"
        
        usersList.appendChild(li)
        li.appendChild(btbDetail)

        btbDetail.addEventListener('click', async () => {
            showUserDetail.innerHTML = '<p>Carregando detalhes</p>'

            try {    
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
                
                console.log(response)
                if(!response.ok) {
                    throw new Error(`Erro no HTTP: ${response.status}`)
                }
    
                const details = await response.json()
    
                showUserDetail.innerHTML = '';
    
                
                    showUserDetail.innerHTML = `
                    <h3>Detalhes</h3>
                        Telefone: ${details.phone} </br>
                        Empresa: ${details.company.name} </br>
                        Endereço: ${details.address.street}, ${details.address.suite}
                        
                    `
             
                
            } catch(error) {
                showUserDetail.innerHTML = `Erro http: ${error.message}`
            }
       
        }) 
        })

    } catch(error) {
        usersList.innerHTML = `Erro ao carregar os users: ${error.message}`
    }


})
