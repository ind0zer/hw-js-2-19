const e=async e=>{let t=await fetch("https://67b4bf82a9acbdb38ed03d48.mockapi.io/movie/movie",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,createdAt:new Date().toISOString()})});if(!t.ok)throw Error("Помилка додавання: "+t.statusText);return t.json()},t=async()=>{let e=await fetch("https://67b4bf82a9acbdb38ed03d48.mockapi.io/movie/movie");if(!e.ok)throw Error("Помилка завантаження даних");return e.json()},n=async()=>{let e=document.getElementById("movies-container");e.innerHTML="";try{(await t()).forEach(t=>{let n=`
          <div class="movie-card" data-id="${t.id}">
            <h3>${t.title} (${t.year})</h3>
            <p>\u{416}\u{430}\u{43D}\u{440}: ${t.genre}</p>
            <div class="card-actions">
              <button class="edit-btn">\u{417}\u{43C}\u{456}\u{43D}\u{438}\u{442}\u{438}</button>
              <button class="delete-btn">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
            </div>
          </div>
        `;e.insertAdjacentHTML("beforeend",n)})}catch(e){console.log(e.message,"error")}},o=async e=>{let t=await fetch(`https://67b4bf82a9acbdb38ed03d48.mockapi.io/movie/movie/${e}`,{method:"DELETE"});if(!t.ok)throw Error("Помилка видалення");return t.json()},a=()=>{document.getElementById("movies-container").addEventListener("click",async e=>{if(e.target.classList.contains("delete-btn")){let t=e.target.closest(".movie-card"),n=t.dataset.id;try{await o(n),t.remove(),console.log(`\u{424}\u{456}\u{43B}\u{44C}\u{43C} ID: ${n} \u{432}\u{438}\u{434}\u{430}\u{43B}\u{435}\u{43D}\u{438}\u{439}!`)}catch(e){console.log(e.message,"error")}}})},r=async(e,t)=>{let n=await fetch(`https://67b4bf82a9acbdb38ed03d48.mockapi.io/movie/movie/${e}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok)throw Error("Помилка редагування: "+n.statusText);return n.json()};let d=null;const l=()=>{let e=document.getElementById("edit-modal"),t=document.querySelector(".close");document.getElementById("movies-container").addEventListener("click",t=>{if(t.target.classList.contains("edit-btn")){let n=t.target.closest(".movie-card");d=n.dataset.id,document.getElementById("edit-title").value=n.querySelector("h3").textContent.split(" (")[0],document.getElementById("edit-year").value=n.querySelector("h3").textContent.match(/\((\d+)\)/)[1],document.getElementById("edit-genre").value=n.querySelector("p").textContent.replace("Жанр: ",""),e.style.display="block"}}),t.onclick=()=>e.style.display="none",window.onclick=t=>t.target===e?e.style.display="none":null,document.getElementById("save-changes").addEventListener("click",async()=>{let t=document.getElementById("edit-title").value,n=document.getElementById("edit-year").value,o=document.getElementById("edit-genre").value;if(!t||!n||!o){console.log("Заповніть всі поля!","error");return}try{await r(d,{title:t,year:parseInt(n),genre:o});let a=document.querySelector(`.movie-card[data-id="${d}"]`);a.querySelector("h3").textContent=`${t} (${n})`,a.querySelector("p").textContent=`\u{416}\u{430}\u{43D}\u{440}: ${o}`,e.style.display="none",console.log("Фільм успішнго оновленний!")}catch(e){console.log(e.message,"error")}})};document.addEventListener("DOMContentLoaded",()=>{n(),document.getElementById("add-btn").addEventListener("click",async t=>{t.preventDefault();let o=document.getElementById("title").value,a=document.getElementById("year").value,r=document.getElementById("genre").value;if(!o||!a||!r){console.log("Заповніть всі поля!","error");return}try{await e({title:o,year:parseInt(a),genre:r,createdAt:new Date().toISOString()}),document.getElementById("title").value="",document.getElementById("year").value="",document.getElementById("genre").value="",await n(),console.log(`\u{424}\u{456}\u{43B}\u{44C}\u{43C} "${o}" \u{443}\u{441}\u{43F}\u{456}\u{448}\u{43D}\u{43E} \u{434}\u{43E}\u{434}\u{430}\u{43D}\u{438}\u{439}!`)}catch(e){console.log(e.message,"error")}}),a(),l()});
//# sourceMappingURL=index.27d5f2b2.js.map
