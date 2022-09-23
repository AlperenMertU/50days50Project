const Joker = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')

btn.addEventListener('click', getJoke)

getJoke()


function getJoke() {
    const config = {
            headers: {
                Accept: 'application/json',
            },
    }
            fetch('https://icanhazdadjoke.com',config).then(gel => gel.json())
            .then(data => {
                Joker.innerHTML = data.joke
            })
}
