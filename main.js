let currentGenerator = "estimate";

function setGenerator(name, longname){ 
  currentGenerator = name;
  document.getElementById('current-generator').textContent = longname;
  generate();
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
