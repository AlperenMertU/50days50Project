const joker = document.getElementById('getJoke')

joker.addEventListener('click',espri)
espri()

async function espri() {
   const config = { 
         headers:{
            Accept:'application/json',
         },    
    }
   const gel =  await fetch('https://icanhazdadjoke.com',config)
     const data = await gel.json()
    document.getElementById('joke').innerHTML = data.joke
}
