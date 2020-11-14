const jokes = document.querySelector('#jokes');
const btn = document.querySelector('#Mainbtn');

const AddNewJokes = async () => {
    const JokeText = await GetDadJoke();
    const newLI = document.createElement('li');
    newLI.append(JokeText);
    jokes.append(newLI);
}

const GetDadJoke = async () => {
    try {
        const Config = {headers : {Accept:'application/json'}};
        const res = await axios.get('https://icanhazdadjoke.com/', Config);
        return res.data.joke;
    }
    catch (e) {
       return 'No Jokes Available :(', e;
    } 
}

btn.addEventListener('click',AddNewJokes);


