const BASE_URL = 'http://localhost:3000';

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Falha ao buscar dados de ${endpoint}:`, error);
    return []; 
  }
}


async function carregarSidebar() {
  const container = document.getElementById("sidebar-nav");
  if (!container) return;

  const [artistas, albuns] = await Promise.all([
    fetchData('artistas'),
    fetchData('albunsDestaque')
  ]);

  let menuHome = `
    <li class="nav-item">
      <a href="index.html" class="sidebar-link">
        <i class="bi bi-house-fill me-2"></i> Home
      </a>
    </li>
  `;

  let artistasLinks = artistas.map(artista =>
    `<li><a class="dropdown-item" href="detalhes.html?id=${artista.id}">${artista.nome}</a></li>`
  ).join('');

  let menuArtistas = `
    <li class="nav-item">
      <a href="artistas.html" data-bs-toggle="collapse" data-bs-target="#menuArtistasSub" class="sidebar-link" aria-expanded="false">
        <i class="bi bi-people-fill me-2"></i> Artistas
      </a>
      <ul class="collapse list-unstyled" id="menuArtistasSub">
        <li><a class="dropdown-item fw-bold" href="cadastro_artista.html">Cadastrar Novo...</a></li>
        ${artistasLinks}
      </ul>
    </li>
  `;

  let albunsLinks = albuns.map(album =>
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

async function carregarDestaques() {
  const carouselInner = document.getElementById("carousel-inner");
  const carouselIndicators = document.getElementById("carousel-indicators");
  if (!carouselInner || !carouselIndicators) return;

  const artistasDestaque = await fetchData('artistas?destaque=true');

  carouselInner.innerHTML = ''; 
  carouselIndicators.innerHTML = ''; 

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

async function carregarArtistas(containerId, limite) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let endpoint = 'artistas';
  if (limite) {
    endpoint += `?_limit=${limite}`;
  }
  
  const artistasParaExibir = await fetchData(endpoint);
  container.innerHTML = ''; 

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

async function carregarAlbuns(containerId, limite) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let endpoint = 'albunsDestaque';
  if (limite) {
    endpoint += `?_limit=${limite}`;
  }

  const albunsParaExibir = await fetchData(endpoint);
  container.innerHTML = ''; 

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

async function carregarDetalhes() {
  const container = document.getElementById("detalhes-item");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  if (!id) {
    container.innerHTML = "<h2 class='text-center text-danger'>ID do artista não fornecido.</h2>";
    return;
  }

  const artista = await fetchData(`artistas/${id}`);

  if (!artista || Object.keys(artista).length === 0) {
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
        ${(artista.albuns && artista.albuns.length > 0) ? artista.albuns.map(album => `
          <div class="col-md-4 col-sm-6">
            <div class="card h-100 text-center shadow-sm border-0">
              <img src="${album.imagem}" class="card-img-top" alt="${album.nome}">
              <div class="card-body">
                <h5 class="card-title">${album.nome}</h5>
                <p class="card-text text-muted">${album.ano}</p>
              </div>
            </div>
          </div>
        `).join('') : '<p>Nenhum álbum cadastrado para este artista.</p>'}
      </div>
    </section>
  `;

  container.innerHTML = secao1 + secao2;

  document.getElementById("btn-editar").href = `cadastro_artista.html?id=${artista.id}`;
  document.getElementById("btn-excluir").addEventListener('click', () => handleExcluir(artista.id));
}


async function preencherFormularioParaEdicao() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  if (id) {
    const artista = await fetchData(`artistas/${id}`);
    if (artista) {
      document.getElementById('form-titulo').textContent = `Editar Artista: ${artista.nome}`;
      document.getElementById('nome').value = artista.nome;
      document.getElementById('descricao').value = artista.descricao;
      document.getElementById('conteudo').value = artista.conteudo;
      document.getElementById('categoria').value = artista.categoria;
      document.getElementById('origem').value = artista.origem;
      document.getElementById('anos_atividade').value = artista.anos_atividade;
      document.getElementById('gravadora').value = artista.gravadora;
      document.getElementById('imagem_principal').value = artista.imagem_principal;
      document.getElementById('destaque').checked = artista.destaque;
    }
  }
}


async function handleFormSubmit(event) {
  event.preventDefault();

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const dadosArtista = {
    nome: document.getElementById('nome').value,
    descricao: document.getElementById('descricao').value,
    conteudo: document.getElementById('conteudo').value,
    categoria: document.getElementById('categoria').value,
    origem: document.getElementById('origem').value,
    anos_atividade: document.getElementById('anos_atividade').value,
    gravadora: document.getElementById('gravadora').value,
    imagem_principal: document.getElementById('imagem_principal').value,
    destaque: document.getElementById('destaque').checked,
    albuns: id ? (await fetchData(`artistas/${id}`)).albuns : [] 
  };

  let metodo = 'POST';
  let endpoint = 'artistas';
  if (id) {
    metodo = 'PUT';
    endpoint = `artistas/${id}`;
  }

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: metodo,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosArtista),
    });

    if (!response.ok) {
      throw new Error(`Erro ao salvar: ${response.statusText}`);
    }

    const artistaSalvo = await response.json();
    
    const feedback = document.getElementById('feedback-message');
    feedback.textContent = `Artista ${id ? 'atualizado' : 'cadastrado'} com sucesso! Redirecionando...`;
    feedback.className = 'alert alert-success d-block';

    setTimeout(() => {
      window.location.href = `detalhes.html?id=${artistaSalvo.id}`;
    }, 2000);

  } catch (error) {
    console.error('Erro ao salvar artista:', error);
    const feedback = document.getElementById('feedback-message');
    feedback.textContent = 'Erro ao salvar artista. Tente novamente.';
    feedback.className = 'alert alert-danger d-block';
  }
}


async function handleExcluir(id) {
  if (!confirm(`Tem certeza que deseja excluir este artista? Esta ação não pode ser desfeita.`)) {
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/artistas/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Erro ao excluir: ${response.statusText}`);
    }

    alert('Artista excluído com sucesso!');
    window.location.href = 'artistas.html';

  } catch (error) {
    console.error('Erro ao excluir artista:', error);
    alert('Ocorreu um erro ao excluir o artista. Tente novamente.');
  }
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

  const artistaForm = document.getElementById("artista-form");
  if (artistaForm) {
    preencherFormularioParaEdicao(); 
    artistaForm.addEventListener('submit', handleFormSubmit); 
  }
});