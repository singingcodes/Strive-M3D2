fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
  .then((response) => response.json())
  .then((songs) => {
    console.log(songs);
    let albums = songs.data;
    for (let i = 0; i < albums.length; i++) {
      let album = albums[i];
      const row = document.querySelector(".row");
      const col = document.createElement("div");
      col.classList.add("col-sm-3");
      col.innerHTML = `
    <div class="card">
      
        <div class="card-body">
            <p class="card-title">${album.album.title}</p>
            <img src=${album.album.cover} class="card-img-top" alt="...">
            
        </div>
    </div>
`;

      row.appendChild(col);
    }
  })
  .catch((err) => console.error(err));
