let currentGenerator = "estimate";

function setGenerator(name, longname){ 
  currentGenerator = name;
  document.getElementById('current-generator').textContent = longname;
  
  // Retirer la classe active de tous les liens
  const menuLinks = document.querySelectorAll('.menu-bar a');
  menuLinks.forEach(link => link.classList.remove('active'));
  
  // Ajouter la classe active au lien cliqué
  const activeLink = document.getElementById('menu-' + name);
  if (activeLink) {
    activeLink.classList.add('active');
  }
  
  generate();
}

function toggleMenu() {
  const menuBar = document.querySelector('.menu-bar');
  menuBar.classList.toggle('open');
}
  function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  function r(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }
function generate(){

  let text = "";

  if(currentGenerator === "estimate"){
    text = generateEstimate();
  }

  if(currentGenerator === "timesheet"){
    text = generateTimesheet();
  }

  if(currentGenerator === "excuse"){
    text = generateExcuse();
  }

  if(currentGenerator === "bug"){
    text = generateBugReport();
  }

  if(currentGenerator === "meeting"){
    text = generateMeeting();
  }
  const result = document.getElementById('result');
  // Animate.css effect
  result.classList.remove('animate__animated','animate__fadeIn');
  void result.offsetWidth; // reset
  result.classList.add('animate__animated','animate__fadeIn');
  result.innerHTML  = text;
}

function copyResult(){

  const text = document.getElementById("result").innerText;

  if(!text) return;

  navigator.clipboard.writeText(text);
}

// Initialisation au chargement de la page
setGenerator('estimate', 'Chiffrage flou');
