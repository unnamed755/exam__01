const ota = document.querySelector(".wraper");
const btn = document.querySelector(".submit");
const form = document.querySelector("#form1");
console.log(form);

const selekt = document.querySelector(".selekt");
const inp = document.querySelector(".inp");
const sortSelekt = document.querySelector(".sortSelekt"); // Sort uchun selector



function rendrForm(kino) {
  ota.innerHTML = "";
  kino.slice(0,20).forEach((film) => {
    const li = document.createElement("li");
    li.innerHTML = `
         <img src="images/1200x675mf.jpg (1).png">
         <h1>${film.Title}</h1>
         <h2>${film.imdb_rating} | ${film.movie_year} | ${film.ytid}</h2>
         <h2>${film.language}</h2>
         <button>More info</button>
    `;
    ota.appendChild(li);
  });
}

rendrForm(movies);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputQimat = inp.value.trim().toLowerCase();

  // Filter qilishdan oldin tekshiramiz
  if (!movies || !Array.isArray(movies)) {
    console.error("Xatolik: movies array emas yoki noto'g'ri ma'lumot bor.");
    return;
  }

  const filtirLangan = movies.filter((malumotlar) => {
    if (typeof malumotlar.Title === "string") {
      return malumotlar.Title.toLowerCase().includes(inputQimat);
    }
    return false;
  });

  rendrForm(filtirLangan);
});