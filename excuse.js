function generateExcuse() {
  const acteurs = {
    "mon chat": [
      "a décidé que mon clavier était son trône",
      "a supprimé un mail important en marchant sur Suppr",
      "dormait paisiblement sur mes genoux quand j'ai voulu me lever",
      "a fait tomber mon café sur le clavier",
    ],
    "le Wi‑Fi": [
      "a pris une pause syndicale non annoncée",
      "a fait semblant de fonctionner jusqu'au moment crucial",
      "a décidé de changer son code d'accès pour me faire une blague",
      "a décidé de ne reconnaître que les appareils qu'il apprécie",
    ],
    "mon réveil": [
      "a interprété 7h30 de façon très créative",
      "a sonné uniquement dans mon rêve",
      "a négocié cinq minutes qui ont duré une heure",
      "avait une panne de batterie au moment de sonner",
      "n'avait plus de voix pour me réveiller",
    ],
    "l'imprimante": [
      "a attendu le moment le plus inconvenant pour manquer d'encre",
      "a refusé de reconnaître le document pourtant identique au précédent",
      "a choisi ce matin pour explorer une nouvelle vocation",
    ],
    "le serveur": [
      "a décidé de faire une sieste non planifiée",
      "a eu une crise existentielle au mauvais moment",
      "a choisi de redémarrer pendant la démo",
    ],
    "mon écran": [
      "n'a pas apprécié la mise à jour récente",
      "a voulu rester noir pour faire une pause visuelle",
      "a choisi de ne pas afficher les fichiers importants",
    ],
    "mon clavier": [
      "a trié les touches de façon aléatoire pour me faire une surprise",
      "était rempli de miette qui ont causé des faux contacts",
      "a décidé de ne pas reconnaître les touches les plus utilisées",
    ],
  };

  const types = {
    "Retard": {
      accroches: [
        "Je suis en retard parce que",
        "Mon retard s'explique simplement :",
        "Je m'excuse pour ce retard, mais",
        "Pour être totalement transparent sur mon retard,",
      ],
      consequences: [
        "je suis arrivé à la fin de la journée",
        "je n'ai pas pu arriver avant la pause café",
        "j'ai raté les trois premiers points de la réunion",
        "tout le monde était déjà en train de partir quand je suis arrivé",
      ],
    },
    "Bug": {
      accroches: [
        "Le bug vient du fait que",
        "J'ai identifié le problème :",
        "Après analyse approfondie,",
        "Ce n'est pas que ca ne marche pas, c'est juste que"
      ],
      consequences: [
        "la fonctionnalité n'est pas implémentée",
        "ce n'est pas tout à fait comme c'était prévu",
        "le fichier existe dans une dimension parallèle",
        "ca rend un truc original meme si inutilisable",
      ],
    },
    "Absence": {
      accroches: [
        "Je serai absent parce que",
        "Mon absence est due au fait que",
        "Je ne pourrai pas être là car",
        "Pour expliquer mon absence,",
      ],
      consequences: [
        "j'ai dû attendre que la situation se stabilise",
        "le retour à la normale n'était pas prévu avant ce soir",
        "aucune issue raisonnable n'était envisageable avant demain",
        "j'ai préféré ne pas aggraver les choses",
      ],
    },
    "Deadline ratée": {
      accroches: [
        "La deadline a été manquée parce que",
        "Le livrable est en retard car",
        "Je dois décaler la livraison :",
        "Concernant le délai,",
      ],
      consequences: [
        "le temps s'est comporté de façon non linéaire",
        "les heures de l'après-midi ont disparu sans laisser de traces",
        "j'ai dû tout reprendre depuis le début",
        "la version finale a décidé de ne pas l'être",
      ],
    },
  };

  const formats = [
    (accroche, acteur, action, consequence) =>
      `${accroche} ${acteur} ${action}, ce qui fait que ${consequence}.`,
    (accroche, acteur, action, consequence) =>
      `${accroche} ${acteur} ${action}. Résultat : ${consequence}.`,
    (accroche, acteur, action, consequence) =>
      `${accroche} ${acteur} ${action}, et donc ${consequence}.`,
  ];

  const acteur = r(Object.keys(acteurs));
  const action = r(acteurs[acteur]);

  const type = r(Object.keys(types));
  const accroche = r(types[type].accroches);
  const consequence = r(types[type].consequences);
  const format = r(formats);

  return `
    <h2>${type}</h2>
    <p>${format(accroche, acteur, action, consequence)}</p>
  `;
}
