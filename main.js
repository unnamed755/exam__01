const ota = document.querySelector(".wraper");
const form = document.querySelector("#form1");
const inp = document.querySelector(".inp");
const sortSelekt = document.querySelector(".sortSelekt");

// Filmlarni ekranga chiqarish funksiyasi
function rendrForm(kino) {
  ota.innerHTML = "";
  kino.slice(0, 20).forEach((film) => {
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

// Dastlab barcha filmlarni chiqarish
rendrForm(movies);

// **Qidiruv va saralash funksiyasi**
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputQimat = inp.value.trim().toLowerCase();
  const selectedSort = sortSelekt.value; // Sortlashni olish

  if (!movies || !Array.isArray(movies)) {
    console.error("Xatolik: movies array emas yoki noto'g'ri ma'lumot bor.");
    return;
  }

  // **Qidirish**
  let filtirLangan = movies.filter((malumotlar) => {
    if (typeof malumotlar.Title === "string") {
      return malumotlar.Title.toLowerCase().includes(inputQimat);
    }
    return false;
  });

  // **Tartiblash (A-Z yoki Z-A)**
  if (selectedSort === "A-Z") {
    filtirLangan.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (selectedSort === "Z-A") {
    filtirLangan.sort((a, b) => b.Title.localeCompare(a.Title));
  }

  // Natijani chiqarish
  rendrForm(filtirLangan);
});
