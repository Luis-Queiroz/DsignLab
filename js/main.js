// Dsign Lab — interações do site
(function () {
  var servicos = {
    identidade: {
      nome: 'Identidade',
      texto: 'Muito além de um símbolo: uma identidade que traduz, comunica e permanece.',
      itens: ['Logotipo e variações', 'Paleta de cores e tipografia', 'Manual da marca', 'Papelaria e aplicações'],
      temProjetos: true
    },
    artes: {
      nome: 'Artes',
      texto: 'Peças gráficas para divulgar, vender e marcar presença — no impresso e no digital.',
      itens: ['Cartazes e flyers', 'Cardápios e embalagens', 'Banners e fachadas', 'Convites e materiais de evento'],
      temProjetos: true
    },
    conteudo: {
      nome: 'Conteúdo',
      texto: 'Redes sociais com constância e com a cara da marca, sem perder a identidade no dia a dia.',
      itens: ['Posts e carrosséis', 'Stories e capas de destaque', 'Templates editáveis', 'Planejamento visual do feed'],
      temProjetos: false // mude para true quando houver projetos de Conteúdo no portfólio
    }
  };
  var ordem = ['identidade', 'artes', 'conteudo'];
  var atual = 'identidade';

  var botoesServico = document.querySelectorAll('.servico');
  var titulo = document.getElementById('painel-titulo');
  var pos = document.getElementById('painel-pos');
  var texto = document.getElementById('painel-texto');
  var itens = document.getElementById('painel-itens');
  var link = document.getElementById('painel-link');

  function mostrarServico(id) {
    var s = servicos[id];
    if (!s) return;
    atual = id;
    botoesServico.forEach(function (b) {
      var ativo = b.dataset.servico === id;
      b.classList.toggle('is-ativo', ativo);
      b.setAttribute('aria-pressed', ativo ? 'true' : 'false');
    });
    titulo.textContent = s.nome;
    pos.textContent = (ordem.indexOf(id) + 1) + ' de 3';
    texto.textContent = s.texto;
    itens.innerHTML = '';
    s.itens.forEach(function (t) {
      var li = document.createElement('li');
      li.textContent = t;
      itens.appendChild(li);
    });
    if (s.temProjetos) {
      link.href = '#portfolio';
      link.textContent = 'Ver projetos de ' + s.nome;
    } else {
      link.href = '#contato';
      link.textContent = 'Pedir um orçamento de ' + s.nome;
    }
  }

  botoesServico.forEach(function (b) {
    b.addEventListener('click', function () { mostrarServico(b.dataset.servico); });
  });

  // Filtro do portfólio
  var filtros = document.querySelectorAll('.filtro');
  var projetos = document.querySelectorAll('.projeto');

  function filtrar(cat) {
    filtros.forEach(function (f) {
      var ativo = f.dataset.filtro === cat;
      f.classList.toggle('is-ativo', ativo);
      f.setAttribute('aria-pressed', ativo ? 'true' : 'false');
    });
    projetos.forEach(function (p) {
      p.classList.toggle('is-apagado', cat !== 'todos' && p.dataset.cat !== cat);
    });
  }

  filtros.forEach(function (f) {
    f.addEventListener('click', function () { filtrar(f.dataset.filtro); });
  });

  link.addEventListener('click', function () {
    if (servicos[atual].temProjetos) filtrar(atual);
  });

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
