const btnUser = document.getElementById('btnUsers');
const usersList = document.getElementById('usersList');

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

        li.textContent = `
        Nome: ${user.name} 
        Email: ${user.email}
        Cidade: ${user.address.city}
        `
        usersList.appendChild(li)
        })
        

    } catch(error) {
        usersList.innerHTML = `Erro ao carregar os users: ${error.message}`
    }


})
