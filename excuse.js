function generateExcuse() {

  const types = [
    "Retard", 
    "Bug", 
    "Problème technique", 
    "Oubli", 
    "Imprévu cosmique"
  ];

  const situations = [
    "Mon café a refusé de couler ce matin", 
    "Mon chat a décidé que mon clavier était son trône", 
    "Le Wi-Fi a pris un café et a oublié de revenir", 
    "Un trou noir temporel m’a aspiré", 
    "Mon ordinateur a fait grève"
  ];

  const détails = [
    "et je n’ai rien pu faire", 
    "et je me suis retrouvé à négocier avec lui", 
    "et tout mon planning a été recalibré", 
    "et j’ai dû attendre que l’univers se répare", 
    "ce qui a provoqué un chaos mineur sur mon écran"
  ];

  const conséquences = [
    "Tout le monde attend patiemment.", 
    "Le serveur pleure en silence.", 
    "Jira se sent seul et abandonné.", 
    "Mes post-its ont organisé une révolution.", 
    "Une dimension parallèle a légèrement ralenti"
  ];

  const emojis = ["☕","🐱","💻","🪐","⚡","📝","😅","⌛"];

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
return `
  <h2>${pick(emojis)} ${pick(intros)} :</h2>
  <p>${pick(sujets)} ${pick(actions)}. ${pick(anecdotes)}</p>
  <p>${pick(consequences)}</p>
`;
}
