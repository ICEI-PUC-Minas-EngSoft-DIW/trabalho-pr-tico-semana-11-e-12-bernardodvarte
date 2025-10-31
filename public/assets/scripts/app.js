const dados = {
  "artistas": [
    {
      "id": 1,
      "nome": "Kendrick Lamar",
      "descricao": "Rapper e compositor vencedor do Pulitzer, de Compton, CA.",
      "conteudo": "Kendrick Lamar é aclamado por suas letras profundas, narrativas complexas e fusão de gêneros como jazz, funk e soul em seu som. Seus álbuns são frequentemente citados como clássicos modernos, abordando temas como identidade racial, crítica social e crescimento pessoal.",
      "categoria": "Rap Internacional",
      "origem": "Compton, EUA",
      "destaque": true,
      "anos_atividade": "2004-presente", 
      "gravadora": "TDE, Aftermath",   
      "imagem_principal": "https://picsum.photos/id/103/1200/500",
      "albuns": [
        { "id": 1, "nome": "good kid, m.A.A.d city", "ano": 2012, "imagem": "https://picsum.photos/id/111/400/400" },
        { "id": 2, "nome": "To Pimp a Butterfly", "ano": 2015, "imagem": "https://picsum.photos/id/121/400/400" },
        { "id": 3, "nome": "DAMN.", "ano": 2017, "imagem": "https://picsum.photos/id/129/400/400" }
      ]
    },
    {
      "id": 2,
      "nome": "Djonga",
      "descricao": "Uma das vozes mais potentes e influentes do rap nacional.",
      "conteudo": "Original de Belo Horizonte, Djonga ganhou notoriedade por suas letras afiadas, performances energéticas e uma sequência de álbuns aclamados. Ele é conhecido por abordar pautas sociais, raciais e a realidade brasileira com uma perspectiva única e contundente.",
      "categoria": "Rap Nacional",
      "origem": "Belo Horizonte, BR",
      "destaque": true,
      "anos_atividade": "2015-presente", 
      "gravadora": "Ceia, Som Livre",  
      "imagem_principal": "https://picsum.photos/id/117/1200/500",
      "albuns": [
        { "id": 1, "nome": "Heresia", "ano": 2017, "imagem": "https://picsum.photos/id/145/400/400" },
        { "id": 2, "nome": "O Menino que Queria ser Deus", "ano": 2018, "imagem": "https://picsum.photos/id/160/400/400" },
        { "id": 3, "nome": "Ladrão", "ano": 2019, "imagem": "https://picsum.photos/id/163/400/400" }
      ]
    },
    {
      "id": 4,
      "nome": "BK'",
      "descricao": "Rapper carioca conhecido por suas letras poéticas e flow marcante.",
      "conteudo": "Líder do grupo Nectar Gang, BK' consolidou sua carreira solo com álbuns que são verdadeiros retratos geracionais. Suas músicas exploram a vida no Rio de Janeiro, ambição, relacionamentos e questões existenciais, com uma produção sonora sofisticada.",
      "categoria": "Rap Nacional",
      "origem": "Rio de Janeiro, BR",
      "destaque": false,
      "anos_atividade": "2015-presente",
      "gravadora": "Pirâmide Perdida",  
      "imagem_principal": "https://picsum.photos/id/1062/1200/500",
      "albuns": [
        { "id": 1, "nome": "Castelos & Ruínas", "ano": 2016, "imagem": "https://picsum.photos/id/183/400/400" },
        { "id": 2, "nome": "O Líder em Movimento", "ano": 2020, "imagem": "https://picsum.photos/id/191/400/400" }
      ]
    },
    {
      "id": 7,
      "nome": "Filipe Ret",
      "descricao": "Rapper carioca, um dos maiores nomes do trap nacional.",
      "conteudo": "Filipe Ret é conhecido por seu estilo de vida 'vivido', letras sobre superação e uma sonoridade que mescla rap com funk. É um fenômeno de popularidade, com álbuns que batem recordes de streaming.",
      "categoria": "Rap Nacional",
      "origem": "Rio de Janeiro, BR",
      "destaque": true,
      "anos_atividade": "2009-presente", 
      "gravadora": "Nadamal, Som Livre",   
      "imagem_principal": "https://picsum.photos/id/234/1200/500",
      "albuns": [
        { "id": 1, "nome": "Vivaz", "ano": 2012, "imagem": "https://picsum.photos/id/235/400/400" },
        { "id": 2, "nome": "Revel", "ano": 2015, "imagem": "https://picsum.photos/id/236/400/400" }
      ]
    },
    {
      "id": 8,
      "nome": "Leall",
      "descricao": "Rapper carioca conhecido pelas crônicas afiadas do cotidiano.",
      "conteudo": "Leall se destaca por sua narrativa cinematográfica e letras que retratam a realidade das favelas do Rio de Janeiro. Seu álbum 'Esculpido a Machado' foi aclamado pela crítica.",
      "categoria": "Rap Nacional",
      "origem": "Rio de Janeiro, BR",
      "destaque": false,
      "anos_atividade": "2018-presente", 
      "gravadora": "Rock Danger",   
      "imagem_principal": "https://picsum.photos/id/238/1200/500",
      "albuns": [
        { "id": 1, "nome": "Esculpido a Machado", "ano": 2021, "imagem": "https://picsum.photos/id/239/400/400" }
      ]
    },
    {
      "id": 11,
      "nome": "Tupac Shakur",
      "descricao": "Lenda icônica e poeta do rap da Costa Oeste.",
      "conteudo": "2Pac é uma das figuras mais reverenciadas da história do hip-hop. Suas letras sobre desigualdade social, violência e esperança, combinadas com sua personalidade carismática, o tornaram um mártir cultural.",
      "categoria": "Rap Internacional",
      "origem": "Nova Iorque, EUA",
      "destaque": false,
      "anos_atividade": "1989-1996",     
      "gravadora": "Interscope, Death Row", 
      "imagem_principal": "https://picsum.photos/id/248/1200/500",
      "albuns": [
        { "id": 1, "nome": "All Eyez on Me", "ano": 1996, "imagem": "https://picsum.photos/id/249/400/400" },
        { "id": 2, "nome": "Me Against the World", "ano": 1995, "imagem": "https://picsum.photos/id/250/400/400" }
      ]
    },
    {
      "id": 12,
      "nome": "Kanye West",
      "descricao": "Produtor e rapper visionário e controverso de Chicago.",
      "conteudo": "Kanye West (Ye) moldou o som do hip-hop por décadas. De 'The College Dropout' a 'My Beautiful Dark Twisted Fantasy', sua discografia é marcada por inovação, ego e uma produção musical inigualável.",
      "categoria": "Rap Internacional",
      "origem": "Chicago, EUA",
      "destaque": true,
      "anos_atividade": "1996-presente",     
      "gravadora": "Roc-A-Fella, GOOD Music", 
      "imagem_principal": "https://picsum.photos/id/251/1200/500",
      "albuns": [
        { "id": 1, "nome": "MBDTF", "ano": 2010, "imagem": "https://picsum.photos/id/252/400/400" },
        { "id": 2, "nome": "The College Dropout", "ano": 2004, "imagem": "https://picsum.photos/id/253/400/400" }
      ]
    },
    {
      "id": 14,
      "nome": "Drake",
      "descricao": "Superastro global de Toronto que define tendências.",
      "conteudo": "Drake é inegavelmente o artista mais dominante comercialmente da era do streaming. Ele mescla rap com pop e R&B, criando hits que definem a cultura popular ano após ano.",
      "categoria": "Rap Internacional",
      "origem": "Toronto, CAN",
      "destaque": true,
      "anos_atividade": "2006-presente",     
      "gravadora": "OVO Sound, Republic",
      "imagem_principal": "https://picsum.photos/id/257/1200/500",
      "albuns": [
        { "id": 1, "nome": "Take Care", "ano": 2011, "imagem": "https://picsum.photos/id/258/400/400" },
        { "id": 2, "nome": "Nothing Was the Same", "ano": 2013, "imagem": "https://picsum.photos/id/259/400/400" }
      ]
    },
    {
      "id": 17,
      "nome": "Travis Scott",
      "descricao": "Artista de Houston conhecido por sua energia e produção.",
      "conteudo": "Travis Scott é famoso por seus shows caóticos e álbuns super produzidos como 'Astroworld' e 'Utopia'. Ele é uma força cultural, influenciando música, moda e até mesmo o mundo dos games.",
      "categoria": "Rap Internacional",
      "origem": "Houston, EUA",
      "destaque": true,
      "anos_atividade": "2013-presente",     
      "gravadora": "Cactus Jack, Epic", 
      "imagem_principal": "https://picsum.photos/id/263/1200/500",
      "albuns": [
        { "id": 1, "nome": "UTOPIA", "ano": 2023, "imagem": "https://picsum.photos/id/26/400/400" },
        { "id": 2, "nome": "ASTROWORLD", "ano": 2018, "imagem": "https://picsum.photos/id/264/400/400" },
        { "id": 3, "nome": "Birds in the Trap Sing McKnight", "ano": 2016, "imagem": "https://picsum.photos/id/265/400/400" }
      ]
    }
  ],
  "albunsDestaque": [
    { "id": 1, "nome": "good kid, m.A.A.d city", "artista": "Kendrick Lamar", "ano": 2012, "imagem": "https://picsum.photos/id/111/400/400", "artistaId": 1 },
    { "id": 2, "nome": "Heresia", "artista": "Djonga", "ano": 2017, "imagem": "https://picsum.photos/id/145/400/400", "artistaId": 2 },
    { "id": 3, "nome": "Castelos & Ruínas", "artista": "BK'", "ano": 2016, "imagem": "https://picsum.photos/id/183/400/400", "artistaId": 4 },
    { "id": 4, "nome": "Vivaz", "artista": "Filipe Ret", "ano": 2012, "imagem": "https://picsum.photos/id/236/400/400", "artistaId": 7 },
    { "id": 5, "nome": "Esculpido a Machado", "artista": "Leall", "ano": 2021, "imagem": "https://picsum.photos/id/239/400/400", "artistaId": 8 },
    { "id": 6, "nome": "All Eyez on Me", "artista": "Tupac Shakur", "ano": 1996, "imagem": "https://picsum.photos/id/249/400/400", "artistaId": 11 },
    { "id": 7, "nome": "MBDTF", "artista": "Kanye West", "ano": 2010, "imagem": "https://picsum.photos/id/252/400/400", "artistaId": 12 },
    { "id": 9, "nome": "Take Care", "artista": "Drake", "ano": 2011, "imagem": "https://picsum.photos/id/258/400/400", "artistaId": 14 },
    { "id": 11, "nome": "ASTROWORLD", "artista": "Travis Scott", "ano": 2018, "imagem": "https://picsum.photos/id/26/400/400", "artistaId": 17 }
  ]
};


function carregarSidebar() {
  const container = document.getElementById("sidebar-nav");
  if (!container) return;

  let menuHome = `
    <li class="nav-item">
      <a href="index.html" class="sidebar-link">
        <i class="bi bi-house-fill me-2"></i> Home
      </a>
    </li>
  `;

  let artistasLinks = dados.artistas.map(artista => 
    `<li><a class="dropdown-item" href="detalhes.html?id=${artista.id}">${artista.nome}</a></li>`
  ).join('');

  let menuArtistas = `
    <li class="nav-item">
      <a href="artistas.html" data-bs-toggle="collapse" data-bs-target="#menuArtistasSub" class="sidebar-link" aria-expanded="false">
        <i class="bi bi-people-fill me-2"></i> Artistas
      </a>
      <ul class="collapse list-unstyled" id="menuArtistasSub">
        ${artistasLinks}
      </ul>
    </li>
  `;

  let albunsLinks = dados.albunsDestaque.map(album => 
    `<li><a class="dropdown-item" href="detalhes.html?id=${album.artistaId}">${album.nome} - ${album.artista}</a></li>`
  ).join('');

  let menuAlbuns = `
    <li class="nav-item">
      <a href="albuns.html" data-bs-toggle="collapse" data-bs-target="#menuAlbunsSub" class="sidebar-link" aria-expanded="false">
        <i class="bi bi-disc-fill me-2"></i> Álbuns
      </a>
      <ul class="collapse list-unstyled" id="menuAlbunsSub">
        ${albunsLinks}
      </ul>
    </li>
  `;

  let menuContato = `
    <li class="nav-item">
      <a href="contato.html" class="sidebar-link">
        <i class="bi bi-envelope-fill me-2"></i> Contato
      </a>
    </li>
  `;

  container.innerHTML = menuHome + menuArtistas + menuAlbuns + menuContato;
}



function carregarDestaques() {
  const artistasDestaque = dados.artistas.filter(artista => artista.destaque === true);
  const carouselInner = document.getElementById("carousel-inner");
  const carouselIndicators = document.getElementById("carousel-indicators");

  if (!carouselInner || !carouselIndicators) return;

  artistasDestaque.forEach((artista, index) => {
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.dataset.bsTarget = "#carouselDestaques";
    indicator.dataset.bsSlideTo = index;
    if (index === 0) indicator.className = "active";
    indicator.ariaLabel = `Slide ${index + 1}`;
    carouselIndicators.appendChild(indicator);

    const item = document.createElement("div");
    item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    item.innerHTML = `
      <img src="${artista.imagem_principal}" class="d-block w-100 carousel-img" alt="${artista.nome}">
      <div class="carousel-caption">
        <h5>${artista.nome}</h5>
        <p>${artista.descricao}</p>
        <a href="detalhes.html?id=${artista.id}" class="btn btn-outline-light">Ver mais</a>
      </div>
    `;
    carouselInner.appendChild(item);
  });
}


function carregarArtistas(containerId, limite) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const artistasParaExibir = limite ? dados.artistas.slice(0, limite) : dados.artistas;

  artistasParaExibir.forEach(artista => {
    const card = document.createElement("div");
    card.className = "col-lg-4 col-md-6 col-sm-12";
    card.innerHTML = `
      <div class="card h-100 shadow-sm border-0">
        <img src="${artista.imagem_principal}" class="card-img-top" alt="${artista.nome}">
        <div class="card-body">
          <h5 class="card-title">${artista.nome}</h5>
          <p class="card-text">${artista.descricao}</p>
        </div>
        <div class="card-footer bg-transparent border-0 pb-3">
          <a href="detalhes.html?id=${artista.id}" class="btn btn-dark w-100">Ver mais</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}


function carregarAlbuns(containerId, limite) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const albunsParaExibir = limite ? dados.albunsDestaque.slice(0, limite) : dados.albunsDestaque;

  albunsParaExibir.forEach(album => {
    const card = document.createElement("div");
    card.className = "col-lg-3 col-md-4 col-sm-6"; 
    card.innerHTML = `
      <div class="card h-100 shadow-sm border-0 text-center">
        <img src="${album.imagem}" class="card-img-top" alt="${album.nome}">
        <div class="card-body">
          <h5 class="card-title">${album.nome}</h5>
          <p class="card-text text-muted">${album.artista} (${album.ano})</p>
        </div>
        <div class="card-footer bg-transparent border-0 pb-3">
           <a href="detalhes.html?id=${album.artistaId}" class="btn btn-outline-dark btn-sm">Ver Artista</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}




function carregarDetalhes() {
  const container = document.getElementById("detalhes-item");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const artista = dados.artistas.find(a => a.id === id);

  if (!artista) {
    container.innerHTML = "<h2 class='text-center text-danger'>Artista não encontrado.</h2>";
    return;
  }

  let secao1 = `
    <section class="mb-5">
      <div class="row g-5">
        <div class="col-md-6">
          <img src="${artista.imagem_principal}" class="img-fluid rounded shadow-lg" alt="${artista.nome}">
        </div>
        <div class="col-md-6">
          <h1 class="display-4 fw-bold">${artista.nome}</h1>
          <p class="lead">${artista.conteudo}</p>
          <ul class="list-group list-group-flush fs-5">
            <li class="list-group-item"><strong>Categoria:</strong> ${artista.categoria}</li>
            <li class="list-group-item"><strong>Origem:</strong> ${artista.origem}</li>
            <li class="list-group-item"><strong>Anos em Atividade:</strong> ${artista.anos_atividade}</li>
            <li class="list-group-item"><strong>Gravadora(s):</strong> ${artista.gravadora}</li>
            <li class="list-group-item"><strong>Destaque:</strong> ${artista.destaque ? 'Sim' : 'Não'}</li>
          </ul>
        </div>
      </div>
    </section>
  `;

  let secao2 = `
    <section class="pt-5 border-top">
      <h2 class="display-6 fw-bold mb-4">Principais Trabalhos</h2>
      <div class="row g-4">
        ${artista.albuns.map(album => `
          <div class="col-md-4 col-sm-6">
            <div class="card h-100 text-center shadow-sm border-0">
              <img src="${album.imagem}" class="card-img-top" alt="${album.nome}">
              <div class="card-body">
                <h5 class="card-title">${album.nome}</h5>
                <p class="card-text text-muted">${album.ano}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  
  container.innerHTML = secao1 + secao2;
}


function atualizarNavAtiva() {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll("#menuPrincipal .nav-link");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
}


document.addEventListener("DOMContentLoaded", () => {
  carregarSidebar();
  atualizarNavAtiva();

  const sidebarCollapseBtn = document.getElementById("sidebarCollapse");
  if (sidebarCollapseBtn) {
    sidebarCollapseBtn.addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("active");
      document.getElementById("main-content").classList.toggle("active");
    });
  }


  if (document.getElementById("lista-artistas-home")) {
    carregarDestaques();
    carregarArtistas("lista-artistas-home", 6); 
    carregarAlbuns("lista-albuns-home", 8);     
  }

  if (document.getElementById("lista-todos-artistas")) {
    carregarArtistas("lista-todos-artistas"); 
  }

  if (document.getElementById("lista-todos-albuns")) {
    carregarAlbuns("lista-todos-albuns"); 
  }

  if (document.getElementById("detalhes-item")) {
    carregarDetalhes();
  }
});