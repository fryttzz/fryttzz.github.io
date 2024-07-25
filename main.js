
var photo = './public/matheus.jpg'
var linkedin = './public/linkedin.svg'
var github = './public/github.svg'
var instagram = './public/instagram.svg'
var email = './public/email.svg'

document.querySelector('#app').innerHTML = `
  <div class='main'>
    <section class='intro'>
      <p>Olá, sou <span><strong>Matheus Santos.</strong></span></p>
      <a id="main-title" href="" class="typewrite" data-period="2000" data-type='["Suporte Técnico", "Estudante de Ciência da Computação", "Desenvolvedor Web", "Entusiasta Tech" ]'>
        <span class="wrap"></span>
      </a>
      <div class='socials'>
        <a href="https://www.linkedin.com/in/matheus-santos-7a74a6178/" target='_blank' rel="noopener noreferrer">
          <img src="${linkedin}" alt="linkedin" />
        </a>
        <a href="https://github.com/fryttzz" target="_blank" rel="noopener noreferrer">
          <img src="${github}" alt="github" />
        </a>
        <a href="https://www.instagram.com/fryttzz" target="_blank" rel="noopener noreferrer"/>
          <img src="${instagram}" alt="instagram" >
        </a>
        <a href="mailto:matheusps0012@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="${email}" alt="email" />
        </a>
      </div>
      <a href="#about-me">
        <div id='scroll-down' class='bounce'></div>
      </a>
    </section>
    <section id='about-me'>
      <div class='photo'>
        <img src="${photo}" alt="foto matheus santos" />
      </div>
      <div id='info'>
        <p class='name'>Matheus Santos</p>
        <p class='city'>🌐 LAGES - SC</p>
      </div>
    </setion>
    <section class='content'>
      <h1>sobre mim</h1>
      <p>Apaixonado por tecnologia desde muito novo, brasileiro, nascido em Lages, SC, no ano de 2001. Comecei minha jornada no mundo TECH através do curso Técnico em Informática do Instituto Federal de Santa Catarina. Iniciei o ensino superior na gradução de Ciências da Computação no Centro Universitário Unifacvest em 2019, onde também tive minha primeira oportunidade de emprego como Suporte Técnico. Atualmente sou Técnico em Informática na empresa Profuzzy Consultoria e Projetos. Nas horas vagas estou arranhando meu violão ou rabiscando algum papel 🎸🎨</p>
    </section>
    <section id="career">
        <h1>experiência</h1>
        <div class="job">
            <div class="current-job-tick"></div>
            <h3>Técnico em Informática - <a href="https://www.profuzzy.com.br" target='_blank' rel="noopener noreferrer">Profuzzy Consultoria e Projetos Ltda</a></h3>
            <h4>Jan 2021 - Presente</h4>
            <p class="job-description">A <strong>Profuzzy</strong> é uma empresa de consultoria e projetos instituidade em 1988, voltada para as mais diversas áreas do setor público e privado. Possuí como carro chefe a Mobilidade Urbana (Transito, Transporte Coletivo, Estacionamento Rotativo, etc.) e os serviços funeários e cemiteriais. Atuo na equipe técnica, sendo responsável pelas atividades de: obtenção e aferição de dados espaciais. Modelagem de objetos para aplicações geográficas. Elaboração, edição e impressão de mapas temáticos/figuras georreferenciadas. Escrever scripts e rotinas para tratamento e visualização de dados. Suporte técnico.</p>
            <p class="tecnologies"><strong>Tecnologias:</strong> Javascript, Typescript, Python, HTML, CSS, Node.js, React, QGIS, Figma.</p>
        </div>
        <div class="job">
            <div class="previous-job-tick"></div>
            <h3>Suporte Técnico - <a href="https://www.unifacvest.edu.br" target='_blank' rel="noopener">Centro Universitário Facvest - Unifacvest</a></h3>
            <h4>Jul 2019 - Dez 2020</h4>
            <p class="job-description">A <strong>Unifacvest</strong> é um Instituto de Ensino Superior com fins lucrativos, possuindo graduações, pos-graduações e mestrados. Atuei na equipe de Suporte Técnico, realizando as atividades de: montagem e manutenção de computadores e outros aperelhos de informática. Prestar consultoria para aquisição de novos equipamentos e/ou peças para reposição. Responder chamados para auxílio ou correções do dia-a-dia.</p>
        </div>
    </section>
  </div>
`

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};