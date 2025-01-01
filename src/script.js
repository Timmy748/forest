class MenuMobile{
  constructor(mobileButton, MobileMenu){
    this.mobileButton = document.querySelector(mobileButton);
    this.mobileMenu = document.querySelector(MobileMenu);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.fecharMenu = this.fecharMenu.bind(this);
  };

  toggleMenu(){
    this.mobileMenu.classList.toggle("hidden");
    this.mobileMenu.classList.toggle("flex");
  };
  
  fecharMenu(){
    this.mobileMenu.classList.add("hidden");
    this.mobileMenu.classList.remove("flex");
  };

  addEvents(){
    this.mobileButton.addEventListener("click", this.toggleMenu);
    this.mobileMenu.addEventListener("click", this.fecharMenu);
  };

  Init(){
    if(this.mobileButton && this.mobileMenu){
      this.addEvents();
    };
    return this;
  };
};

class MudarClima{
  constructor(video,dia,temperatura,tempo){
    this.video = document.querySelector(video);
    this.dia = document.querySelector(dia);
    this.temperatura = document.querySelector(temperatura);
    this.tempo = document.querySelector(tempo);
    this.random = +sessionStorage.getItem("graus");
    this.date = sessionStorage.getItem("dia");
  };

  buscarDados(){
    if(!(sessionStorage.getItem("graus"))){
      this.random = Math.floor(Math.random() * 10) + 20;
    };
    if(!(sessionStorage.getItem("dia"))){
      this.date = new Date();
      this.date = this.date.toLocaleDateString("pt-BR", {weekday: "long"});
    };
    this.armazenarDados();
  };


  armazenarDados(){
    sessionStorage.setItem("graus", this.random);
    sessionStorage.setItem("dia", this.date);
  };

  atualizarDados(){
    this.buscarDados();
    this.temperatura.innerText = `${this.random}°`;
    this.video.src = this.random < 25 ? "./img/video_chuva.mp4" : "./img/video_sol.mp4";
    this.tempo.innerText = this.random < 25 ? `🌦️ ${this.random+15}%` : "☀️";
    this.dia.innerText = this.date;
  };

  Init(){
    if(this.video && this.dia && this.temperatura && this.tempo){
      this.atualizarDados();
    };
    return this;
  };
};

const menuMobile = new MenuMobile("#mobile-button","#mobile-menu");
menuMobile.Init()
const mudarClima = new MudarClima("#video","#dia","#temperatura","#tempo");
mudarClima.Init()


