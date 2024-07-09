document.getElementById('jokeBtn').addEventListener('click', generateJoke);

async function generateJoke() {
    const jokeEl = document.getElementById('joke');

    const jokeRes = await fetch('https://v2.jokeapi.dev/joke/Any');
    const jokeData = await jokeRes.json();

    if (jokeData.type === 'single') {
        jokeEl.innerHTML = jokeData.joke;
    } else {
        jokeEl.innerHTML = `${jokeData.setup} <br> ${jokeData.delivery}`;
    }
}