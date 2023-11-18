const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div");
  container.appendChild(pokemon);
  pokemon.classList.add("pokemon-allignment");
  pokemon.classList.add("border");
  const img = document.createElement("img");
  img.src = `${baseURL}${i}.png`;
  pokemon.appendChild(img);
  const pokemonNum = document.createElement("span");
  pokemonNum.innerText = i;
  pokemon.appendChild(pokemonNum);
}
