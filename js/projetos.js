/* ==========================================================
   GALERIA DINÂMICA - KINGLION

   COMO ADICIONAR UMA FOTO NOVA:
   1) Converta a foto para WebP (recomendado: até 1400 px no lado maior).
   2) Coloque o arquivo em: assets/images/projetos/
   3) Copie UMA linha/objeto da lista GALERIA abaixo.
   4) Troque arquivo, categoria, titulo e projeto.

   CATEGORIAS ACEITAS:
   cozinhas | dormitorios | salas | banheiros | corporativo | outros
========================================================== */

const GALERIA = [
  {
    "arquivo": "corporativo-sala-reuniao-01.webp",
    "categoria": "corporativo",
    "titulo": "Sala de reunião planejada",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "cozinha-planejada-01.webp",
    "categoria": "cozinhas",
    "titulo": "Cozinha planejada com cristaleira iluminada",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "corporativo-painel-tv-01.webp",
    "categoria": "corporativo",
    "titulo": "Painel corporativo em amadeirado",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "cozinha-planejada-02.webp",
    "categoria": "cozinhas",
    "titulo": "Cozinha planejada em tons escuros",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "cozinha-planejada-03.webp",
    "categoria": "cozinhas",
    "titulo": "Cozinha planejada com bancada em L",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "dormitorio-armario-01.webp",
    "categoria": "dormitorios",
    "titulo": "Armário planejado com espelho",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "corporativo-escritorio-01.webp",
    "categoria": "corporativo",
    "titulo": "Escritório executivo planejado",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "sala-jantar-01.webp",
    "categoria": "salas",
    "titulo": "Sala de jantar com marcenaria e espelhos",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "dormitorio-criado-01.webp",
    "categoria": "dormitorios",
    "titulo": "Criado-mudo planejado branco",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "dormitorio-criado-02.webp",
    "categoria": "dormitorios",
    "titulo": "Criado-mudo planejado amadeirado",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "banheiro-lavabo-01.webp",
    "categoria": "banheiros",
    "titulo": "Gabinete planejado para lavabo",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "dormitorio-comoda-01.webp",
    "categoria": "dormitorios",
    "titulo": "Cômoda planejada amadeirada",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "banheiro-gabinete-01.webp",
    "categoria": "banheiros",
    "titulo": "Gabinete planejado com bancada em pedra",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "banheiro-gabinete-02.webp",
    "categoria": "banheiros",
    "titulo": "Gabinete planejado em acabamento escuro",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "corporativo-sala-reuniao-02.webp",
    "categoria": "corporativo",
    "titulo": "Mesa corporativa para sala de reunião",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "cozinha-planejada-04.webp",
    "categoria": "cozinhas",
    "titulo": "Cozinha integrada contemporânea",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "corporativo-operacional-01.webp",
    "categoria": "corporativo",
    "titulo": "Mobiliário para escritório corporativo",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "corporativo-operacional-02.webp",
    "categoria": "corporativo",
    "titulo": "Estações de trabalho corporativas",
    "projeto": "KingLion Móveis Planejados"
  },
  {
    "arquivo": "corporativo-recepcao-01.webp",
    "categoria": "corporativo",
    "titulo": "Recepção corporativa em marcenaria",
    "projeto": "KingLion Móveis Planejados"
  }
];

const galleryGrid = document.getElementById("galleryGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const modalClose = document.getElementById("modalClose");
const loadMoreBtn = document.getElementById("loadMoreBtn");

let filtroAtual = "todos";
let limite = 9;
const PASSO = 9;

function itensFiltrados() {
  return filtroAtual === "todos" ? GALERIA : GALERIA.filter(item => item.categoria === filtroAtual);
}

function renderGaleria() {
  if (!galleryGrid) return;
  const itens = itensFiltrados();
  galleryGrid.innerHTML = itens.slice(0, limite).map((item, index) => `
    <button class="gallery-card" type="button" data-index="${GALERIA.indexOf(item)}" aria-label="Abrir ${item.titulo}">
      <img src="assets/images/projetos/${item.arquivo}" alt="${item.titulo} - KingLion" loading="lazy" decoding="async" width="1080" height="1080">
      <span><small>${item.projeto}</small>${item.titulo}</span>
    </button>
  `).join("");

  if (loadMoreBtn) {
    loadMoreBtn.hidden = limite >= itens.length;
  }
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filtroAtual = button.dataset.filter;
    limite = 9;
    filterButtons.forEach(b => b.classList.toggle("active", b === button));
    renderGaleria();
  });
});

if (loadMoreBtn) loadMoreBtn.addEventListener("click", () => { limite += PASSO; renderGaleria(); });

if (galleryGrid) galleryGrid.addEventListener("click", event => {
  const card = event.target.closest(".gallery-card");
  if (!card) return;
  const item = GALERIA[Number(card.dataset.index)];
  modalImage.src = `assets/images/projetos/${item.arquivo}`;
  modalImage.alt = `${item.titulo} - KingLion`;
  modalCaption.textContent = item.titulo;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
});

function closeModal() {
  modal?.classList.remove("open");
  modal?.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (modalImage) modalImage.src = "";
}
modalClose?.addEventListener("click", closeModal);
modal?.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

renderGaleria();
