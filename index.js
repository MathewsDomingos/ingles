const elementoResposta = document.querySelector("#resposta")

const respostas = [
  "What are your responsibilities at work?",
  "What's your phone number?",
  "Is your company a retail one?",
  "Where's your head office?",
  "Where are the other offices?",
  "Who's responsible for the R&D department?",
  "Who are the main customers of your company?",
  "Do you work on your own? ",
  "Does your company export to Eastern countries?",
  "What do you do?",
  "What does aretail company do?",
  "Where do the employees have their meals?",
  "Where does the HR manager work?",
  "What products do you sell?",
  "What products does your department design?",
  "What services do energy companies provide?",
  "What services does your company provide?",
  "Are there office assistants in your department?",
  "How many departments are there in your company?",
  "Is there any energy company where you live?",
]

// clicar em fazer pergunta
function gerarTexto() {

  if(active == ""){
    removerDisplay.classList.remove('glassmorphism')
  }

  const removerDisplay = document.getElementById('active')
  removerDisplay.classList.add('glassmorphism')

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;
}

//Compartilhar no WhatsApp
document.addEventListener("DOMContentLoaded", function() {
  //conteúdo que será compartilhado: Título da página + URL
  const conteudo = encodeURIComponent(document.title + " " + window.location.href);
  //altera a URL do botão
  document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
}, false);

//Compartilhar no Facebook
document.addEventListener("DOMContentLoaded", function() {            
  //altera a URL do botão
  document.getElementById("facebook-share-btt").href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
}, false);

//Compartilhar no twitter     
document.addEventListener("DOMContentLoaded", function() {
  var url = encodeURIComponent(window.location.href);
  var titulo = encodeURIComponent(document.title);
  //var via = encodeURIComponent("usuario-twitter"); //nome de usuário do twitter do seu site
  //altera a URL do botão
  document.getElementById("twitter-share-btt").href = "https://twitter.com/intent/tweet?url="+url+"&text="+titulo;
}, false);

//Compartilhar no Linkedin
document.addEventListener("DOMContentLoaded", function() {
  var url = encodeURIComponent(window.location.href); //url
  var titulo = encodeURIComponent(document.title); //título
  var linkedinLink = "https://www.linkedin.com/shareArticle?mini=true&url="+url+"&title="+titulo;
  
  //tenta obter o conteúdo da meta tag description
  var summary = document.querySelector("meta[name='description']");
  summary = (!!summary)? summary.getAttribute("content") : null;
  
  //se a meta tag description estiver ausente...
  if(!summary){
      //...tenta obter o conteúdo da meta tag og:description
      summary = document.querySelector("meta[property='og:description']");
      summary = (!!summary)? summary.getAttribute("content") : null;
  }
  //altera o link do botão
  linkedinLink = (!!summary)? linkedinLink + "&summary=" + encodeURIComponent(summary) : linkedinLink;
  document.getElementById("linkedin-share-btt").href = linkedinLink;
}, false);