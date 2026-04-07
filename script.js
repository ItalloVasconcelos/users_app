// const btnUser = document.getElementById('btnUsers');
// const usersList = document.getElementById('usersList');
// const showUserDetail = document.getElementById('showUserDetail');

// btnUser.addEventListener('click', async () => {
//     usersList.innerHTML = `<li>Carregando lista...</li>`;


//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         if (!response.ok) {
//             throw new Error(`Erro no HTTP: ${response.status}`)
//         }

//         const users = await response.json()

//         usersList.innerHTML = '';

//         users.forEach((user) => {
//             const li = document.createElement('li')
//             const btbDetail = document.createElement('button');

//             li.textContent = `
//         Nome: ${user.name} 
//         Email: ${user.email}
       
//         `
//             btbDetail.textContent = "Ver detalhes"

//             usersList.appendChild(li)
//             li.appendChild(btbDetail)

//             btbDetail.addEventListener('click', async () => {
//                 showUserDetail.innerHTML = '<p>Carregando detalhes</p>'

//                 try {
//                     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)

//                     console.log(response)
//                     if (!response.ok) {
//                         throw new Error(`Erro no HTTP: ${response.status}`)
//                     }

//                     const details = await response.json()

//                     showUserDetail.innerHTML = '';


//                     showUserDetail.innerHTML = `
//                     <h3>Detalhes</h3>
//                         Telefone: ${details.phone} </br>
//                         Empresa: ${details.company.name} </br>
//                         Endereço: ${details.address.street}, ${details.address.suite}
                        
//                     `


//                 } catch (error) {
//                     showUserDetail.innerHTML = `Erro http: ${error.message}`
//                 }

//             })
//         })

//     } catch (error) {
//         usersList.innerHTML = `Erro ao carregar os users: ${error.message}`
//     }


    //Multiplier:
    function multiplier(x) {
        return function (n) {
            let result = x * n
            return result
        }
    }
    multiplier(2)(3)
    // Once code

   function once(fn) { //Função once, com fn de callback
    let called = false; // Transforma called em false (p/ ser chamada uma vez)
    let result;

    return function(...args) { // Cria uma função com rest, para funcionar com funções que tenham até argumentos
        if(!called) {
            called = true; //Não chama de novo
            result = fn(...args) // fn pega os args da função externa
            return result
        }
    }
   }
   const double = once((n) => n * 2)
   console.log(double(2)) 
   console.log(double(2)) // Ao ser chamado de novo, retorna undefined

// })
// Memoize(fn) -> Cache de resultado

function memoize(fn) {
    const cache = {}

    return function (...args) {
        const key = JSON.stringify(args)

        if(cache[key]) {
            return cache[key]
        }
        const result = fn(...args)
        cache[key] = result

        return result
    }
}

const sum =(a, b) =>{
    console.log("Calculando")
    return a + b
}

const memoSum = memoize(sum)

console.log(memoSum(2 , 3))
console.log(memoSum(2 , 3))


// Two sum
function twoSum(nums, target) { // Cria função e variavel
    nums = [2, 7, 11, 15] // Faz a array com os valores
    target = 9 // Declara o target

    for(let i = 0; i < nums.length; i++) { // Lógica para percorrer array 1
        for(let j = i + 1; j < nums.length; j++) { // Lógica para percorrer array 2
          if (nums[i] + nums[j] === target) { // Se algum indice das array for igual ao target
            return [i , j] // Retornar os indeces deles
          }
        }
    }

}
console.log(twoSum()) // Mostrar o código




function twoSums(nums, target) {
    nums = [1, 2, 7, 2, 8, 1, 5, 4]
    target = 9
    const result = []
    for (let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) {
                return [i, j]

            }
        }
    }
}

console.log(twoSums())



function mapTwoSums(nums, target) {
    nums = [1, 2, 7, 2, 8, 1, 5, 4]
    target = 9

    const seen = new Map()
    const result = [];

    for(let i = 0; i < nums.length; i++) {
        const current = nums[i]
        const complement = target - current
    
        if(seen.has(complement)) {
            seen.get(complement).forEach(prevIndex => {
                result.push([prevIndex, i])
            })
        }

        if(!seen.has(current)) {
            seen.set(current, [])
        }
        
        seen.get(current).push(i)
    }
    return result
}

console.log(mapTwoSums())
