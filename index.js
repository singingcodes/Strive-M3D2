fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
  .then((response) => response.json())
  .then((songs) => {
    console.log(songs);
    let albums = songs.data;
    for (let i = 0; i < albums.length; i++) {
      let album = albums[i];
      const row = document.querySelector(".row.eminemAlbum");
      const col = document.createElement("div");
      col.classList.add("col-sm-4");
      col.innerHTML = `
    <div class="card mb-3">
        <div class="card-body">
            <p>${album.artist.name}</p> 
            <p class="card-title">${album.album.title}</p>
            <img src=${album.album.cover} class="card-img-top" alt="album-cover"> 
        </div>
    </div>
`;
      row.appendChild(col);
    }
  })
  .catch((err) => console.error(err));

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
  .then((response) => response.json())
  .then((songs) => {
    console.log(songs);
    let albums = songs.data;
    for (let i = 0; i < albums.length; i++) {
      let album = albums[i];
      const row = document.querySelector(".row.metallicaAlbum");
      const col = document.createElement("div");
      col.classList.add("col-sm-4");
      col.innerHTML = `
    <div class="card mb-3">
        <div class="card-body">
            <p>${album.artist.name}</p> 
            <p class="card-title">${album.album.title}</p>
            <img src=${album.album.cover} class="card-img-top" alt="album-cover"> 
        </div>
    </div>
`;
      row.appendChild(col);
    }
  })
  .catch((err) => console.error(err));

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
  .then((response) => response.json())
  .then((songs) => {
    console.log(songs);
    let albums = songs.data;
    for (let i = 0; i < albums.length; i++) {
      let album = albums[i];
      const row = document.querySelector(".row.behemothAlbum");
      const col = document.createElement("div");
      col.classList.add("col-sm-4");
      col.innerHTML = `
    <div class="card mb-3">
        <div class="card-body">
            <p>${album.artist.name}</p> 
            <p class="card-title">${album.album.title}</p>
            <img src=${album.album.cover} class="card-img-top" alt="album-cover"> 
        </div>
    </div>
`;
      row.appendChild(col);
    }
  })
  .catch((err) => console.error(err));
