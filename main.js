let currentGenerator = "estimate";

function setGenerator(name, longname){ 
  currentGenerator = name;
  document.getElementById('current-generator').textContent = longname;
  generate();
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

  document.getElementById("result").innerHTML  = text;
}

function copyResult(){

  const text = document.getElementById("result").innerText;

  if(!text) return;

  navigator.clipboard.writeText(text);
}
