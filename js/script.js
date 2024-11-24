

const btn = document.getElementById("fetchJoke"); 
const cuerpo = document.getElementById("jokeList");
const api = `https://api.chucknorris.io/jokes/random`;


function jokes(api, cuerpo) {
    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            const jokeText = data.value; 

            
            const jokeElement = document.createElement("div");
            jokeElement.innerHTML = `
            <div class="davidNoHomo">
                <p>${jokeText}</p>
                <button class="eliminarBtn">Eliminar</button>
                </div>
            `;

            
            cuerpo.appendChild(jokeElement);

            
            const eliminarBtn = jokeElement.querySelector(".eliminarBtn");
            eliminarBtn.addEventListener("click", () => {
                jokeElement.remove(); 
            });
        })
        .catch((error) => {
            console.error("Error al obtener el chiste:", error);
        });
}


btn.addEventListener("click", () => jokes(api, cuerpo));

