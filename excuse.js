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

  const details = [
    "et je n’ai rien pu faire", 
    "et je me suis retrouvé à négocier avec lui", 
    "et tout mon planning a été recalibré", 
    "et j’ai dû attendre que l’univers se répare", 
    "ce qui a provoqué un chaos mineur sur mon écran"
  ];

  const consequences = [
    "Tout le monde attend patiemment.", 
    "Le serveur pleure en silence.", 
    "Jira se sent seul et abandonné.", 
    "Mes post-its ont organisé une révolution.", 
    "Une dimension parallèle a légèrement ralenti"
  ];

  const emojis = ["☕","🐱","💻","🪐","⚡","📝","😅","⌛"];


return `
  <h2>${r(emojis)} ${r(types)} :</h2>
  <p>${r(situations)}, ${r(details)}.</p>
  <p>${r(consequences)}</p>
`;
}
