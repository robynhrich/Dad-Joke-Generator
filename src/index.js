function displayJoke(response) {
  console.log(response.data.answer);

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generateJoke(event) {
  event.preventDefault();
  let apiKey = "1o334f343ac7e4f31b2ae638t364b007";
  let context =
    "Your are a funny AI Assistant that tells jokes. The joke must be provided in HTML format. Example: <p>this is a joke</p>";
  let prompt = "Generate a random joke about animals.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");

  jokeElement.innerHTML = "Dad joke loading...please wait";

  console.log("called the AI api");
  axios.get(apiUrl).then(displayJoke);
}

let generatorButton = document.querySelector("#joke-button");
generatorButton.addEventListener("click", generateJoke);
