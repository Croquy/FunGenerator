function generateMeeting() {

  const types = [
    "Réunion de crise",
    "Point hebdomadaire",
    "Réunion de cadrage",
    "Atelier de réflexion",
    "Comité de décision",
    "Réunion de suivi",
    "Réunion d'urgence",
    "Session de travail",
  ];

  const sujets = {
    "choisir la couleur de fond du tableau Jira": {
      objectif: "choisir la couleur de fond du tableau Jira",
      points: [
        "Présentation des options : bleu, gris, ou gris légèrement plus foncé",
        "Retour de l'équipe sur la version précédente : il préférait l'ancienne couleur",
        "Vote : couleur unique ou image ?",
        "Qui a l'autorité finale sur la couleur ?",
        "Impact de la couleur sur la lisibilité des tickets",
        "Faut-il consulter l'équipe UX pour un fond de Jira ?",
        "Proposition : tester les deux couleurs pendant une semaine",
        "Renommage des statuts tant qu'on est dans Jira de toute façon",
        "Qui est responsable des tickets orphelins sans couleur assignée ?",
        "Action : créer un ticket Jira pour tracker le choix de couleur de Jira",
      ]
    },
    "statuer sur la police du template de mail": {
      objectif: "statuer sur la police du template de mail",
      points: [
        "Arial vs Calibri : présentation des arguments",
        "Le client a demandé du Times New Roman, débat ouvert",
        "Taille 11 ou taille 12 : impact sur la lisibilité",
        "Faut-il une police différente pour les mails internes et externes ?",
        "Validation de la signature mail v4 suite aux retours sur la v3",
        "Faut-il une majuscule au nom du projet dans les mails ?",
        "Couleur du texte : noir strict ou gris #333333 ?",
        "Interligne : simple ou 1,15 ?",
        "Qui valide le template final avant diffusion ?",
        "Action : envoyer un mail test à toute l'équipe pour validation",
      ]
    },
    "décider si les réunions du lundi matin sont vraiment utiles": {
      objectif: "décider si les réunions du lundi matin sont vraiment utiles",
      points: [
        "Historique : depuis quand fait-on des réunions le lundi matin ?",
        "Sondage informel : qui est vraiment réveillé à 9h le lundi ?",
        "Proposition de décalage à 16h, débat ouvert",
        "Faut-il un ordre du jour obligatoire ou laisser libre ?",
        "Durée : 15 minutes ou 30 minutes ?",
        "Caméra obligatoire : retour d'expérience",
        "Qui prend les notes et rédige le compte-rendu ?",
        "Faut il faire l'appel ?",
        "Action : planifier une réunion pour reparler de cette réunion",
      ]
    },
    "aligner tout le monde sur la définition du mot urgent": {
      objectif: "aligner tout le monde sur la définition du mot 'urgent'",
      points: [
        "Constat : tout le monde a une définition différente d'urgent",
        "Cas pratique : ce ticket ouvert depuis 3 mois est-il urgent ?",
        "Proposition d'une échelle de priorité en 4 niveaux",
        "Débat : urgent vs critique vs bloquant",
        "Faut-il un délai maximum associé à chaque niveau ?",
        "Qui décide qu'un ticket est urgent : le client ou le chef de projet ?",
        "Retour d'expérience : les urgences du mois dernier étaient-elles vraiment urgentes ?",
        "Création d'un groupe de travail pour définir 'très urgent'",
        "Action : mettre à jour la documentation projet avec les nouvelles définitions",
        "Action : informer le client de la nouvelle politique d'urgence sans le braquer",
      ]
    },
    "compte rendu, utilité et format": {
      objectif: "compte rendu, utilité et format",
      points: [
          "Retour sur les retours des retours du compte-rendu de la dernière réunion",
          "Faut-il un résumé d'un document qui fait déjà une demi-page ?",
          "Débat : bullet points ou texte rédigé — le débat dure depuis la v1",
          "Qui rédige le compte-rendu de la réunion sur les compte-rendu ?",
          "Le format est-il compatible avec les destinataires qui ne lisent pas les CRs ?",
          "Faut-il un compte-rendu pour les réunions qui décident s'il faut faire des comptes-rendus ?",
          "Longueur maximale : la dernière version faisait 4 pages pour 20 minutes de réunion",
          "Au bout de combien de minute de réunion faut il faire un CR ?",
          "Est ce necessaire de faire un CR pour dire qu'on c'est rien dit",
          "Validation du template v4 suite aux retours sur le template v3 jamais appliqué",
          "Faut-il envoyer le CR aux personnes absentes qui ne le liront pas non plus ?",
          "Action : rédiger le compte-rendu de cette réunion avant la prochaine réunion sur le même sujet",
        ]
    },
    "SharePoint : arborescence et organisation": {
      objectif: "SharePoint : arborescence et organisation",
      points: [
        "Constat : personne ne retrouve rien depuis la migration de l'année dernière",
        "La migration de l'année dernière n'est pas terminée, réfléchissons déjà à la suivante",
        "Faut-il renommer le dossier 'Divers' en 'Sûrement inutile' ?",
        "Proposition : suppression automatique de tout document mal classé sous 48h",
        "Arborescence par client ou par type de document : ce débat existe depuis 2 migrations",
        "Convention de nommage : date en préfixe, suffixe, ou dans le nom du dossier parent ?",
        "Versions : v1, v2, vFinal, vFinalVrai, vFinalVrai2 — on standardise ?",
        "Qui est responsable des 47 doublons identifiés le mois dernier et jamais traités ?",
        "Qui a les droits d'admin ? La personne qui les avait est partie.",
        "Action : ne rien toucher avant que tout le monde soit d'accord, comme la dernière fois",
      ]
    },
    "Gestion du planning : outil et méthode": {
      objectif: "Gestion du planning : outil et méthode",
      points: [
        "Constat : le planning actuel n'a jamais été respecté, cherchons un meilleur outil",
        "Excel fait déjà tout, mais personne ne sait où est le fichier Excel",
        "Démo d'un outil dédié : plus complexe qu'Excel, aussi peu respecté",
        "Quel outil utiliser pour le planning de déploiement de l'outil de planning ?",
        "Qui sera administrateur de l'outil ? La même personne qui gère le SharePoint ?",
        "Faut-il former toute l'équipe à un outil que la moitié n'utilisera pas ?",
        "Le client a son propre outil de planning, faut-il en avoir deux ?",
        "Période de test : le temps que tout le monde retourne sur Excel",
        "Un planning non respecté dans un bel outil reste un planning non respecté",
        "Action : créer un planning de déploiement du nouvel outil de planning",
      ]
    },
    "Congés et absences : protocole et bonnes pratiques": {
      objectif: "Congés et absences : protocole et bonnes pratiques",
      points: [
        "Les absences le lundi sont-elles une coïncidence ?",
        "Proposition : interdire les congés le lundi pour préserver le point hebdomadaire",
        "Repousser les arrêts maladie du lundi pour préserver le point hebdomadaire ?",
        "Règle de télétravail : maximum un jour, non mitoyen à un jour non travaillé, et jamais le mercredi",
        "Interdiction formelle d'être en congé en même temps que son voisin de bureau",
        "Le bureau se sent seul : seuil minimum de présence physique à définir",
        "Télétravail le vendredi : quel est le meilleur programme TV ?",
        "Faut-il un backup désigné ou juste espérer que ça se passe bien ?",
        "Mise en place d'une roulette russe pour valider les congés",
        "Action : rédiger une procédure lisible par tous, que personne ne lira",
      ]
    },
  "Mails client : procédure de gestion et de non-réponse": {
    objectif: "Mails client : procédure de gestion et de non-réponse",
    points: [
      "Constat : les clients écrivent à tout le monde, personne ne se sent concerné",
      "Règle officielle : si on est en copie, on n'est pas responsable de répondre",
      "Stratégie avancée : multiplier les destinataires pour diluer la responsabilité",
      "Mise en place d'une réponse automatique permanente sans être absent",
      "À partir de combien de relances peut-on légitimement ignorer un mail ?",
      "Suppression automatique des mails sans objet structuré : proposition de règle Outlook",
      "Que faire quand le client écrit directement à la direction, cf modèle de lettre de démission",
      "Délai de réponse des mails urgents : en jours ou en semaines ?",
      "Répondre 'bien noté' : est-ce encore une réponse acceptable ?",
      "Action : tester la procédure sur un projet pilote, idéalement un client patient",
    ]
  },
    "Café et thé : approvisionnement et gouvernance": {
      objectif: "Café et thé : approvisionnement et gouvernance",
      points: [
        "Dosettes vs grain : ouverture du débat, tout le monde a un avis",
        "Le thé est-il légitime dans une machine à café ? Vote à main levée",
        "Qui a le droit de toucher aux réglages de la machine et pourquoi tout le monde le fait quand même ?",
        "Procédure officielle pour signaler qu'il faut faire un détartrage : mail, ou post-it sur la machine ?",
        "Le décaféiné compte-il vraiment comme café ?",
        "Blacklister les goûts impopulaires : procédure de vote et droit de veto",
        "Instaurer un budget café par personne par semaine et tableau de suivi des consommations",
        "Analyse ROI : coût des dosettes vs gain de productivité estimé, présentation des résultats Q3",
        "Le café de 10h est-il un droit acquis ou un privilège révocable ?",
        "Le café après 16h toujours autorisé?",
        "Retirer le café et mettre de la camomille à la place",
      ]
    },
  };

  const participants = [
    "l'équipe projet, le client, et quelqu'un qui ne sait pas pourquoi il est là",
    "les chefs de projet, un stagiaire pris en otage, et deux personnes en mode métro",
    "toute l'équipe plus trois personnes invitées par erreur qui sont restées quand même",
    "les décideurs, les non-décideurs, et un manager qui a une autre réunion dans 10 minutes",
    "l'équipe technique, le commercial, et quelqu'un qui répond à ses mails pendant toute la réunion",
    "les parties prenantes et un inconnu ajouté à l'invitation sans explication",
    "l'équipe, le client, et quelqu'un qui n'a pas lu le compte-rendu de la dernière fois",
    "tout le monde sauf la personne qui aurait pu trancher",
    "les chefs de projet et un manager qui dit 'on en reparle' à chaque point",
    "l'équipe restreinte, plus quelqu'un qui demande 'on en est où ?' toutes les 10 minutes",
  ];

  const conclusions = [
    "Aucune décision prise, une nouvelle réunion planifiée pour décider.",
    "Décision reportée en attente d'un arbitrage de la direction.",
    "Consensus trouvé, immédiatement remis en question par un mail post-réunion.",
    "Action créée dans Jira, assignée à personne, sans deadline.",
    "Tout le monde est aligné sur le fait que rien n'est aligné.",
    "Décision prise à l'unanimité des personnes encore présentes à la fin.",
    "Compte-rendu à rédiger par le dernier arrivé.",
    "La réunion suivante est déjà planifiée avant la fin de celle-ci.",
    "Trois actions ouvertes, aucun responsable désigné, deadline : dès que possible.",
    "La décision sera prise par mail. Le mail n'a pas encore été envoyé.",
  ];

  const linkedinConclusions = [
    "Très fier d'avoir participé à cette réunion transformative. Les synergies dégagées vont propulser notre roadmap vers de nouveaux horizons. #Leadership #Innovation",
    "Quelle session inspirante. Ensemble nous avons repoussé les limites du possible. La disruption commence ici. #TeamWork #Vision",
    "Moment clé pour notre croissance collective. Des décisions audacieuses, une équipe soudée. #Business #Success",
    "Une réunion mémorable. Nous avons posé les fondations de notre transformation digitale. Fier de cette équipe. #CorporateCulture #Excellence",
    "Des idées brillantes ont émergé aujourd'hui. Notre agilité organisationnelle n'a jamais été aussi forte. #Innovation #Growth",
    "Échanges riches, vision commune renforcée, détermination intacte. On avance. #Leadership #TeamSpirit",
    "Réunion stratégique majeure. Les bases de notre succès futur sont posées. Fier de faire partie de cette aventure. #Strategy #Success",
    "Une heure ensemble pour changer les choses. C'est ça, la vraie culture d'entreprise. #Innovation #Creativity",
  ];

  const emojis = ["📅", "👥", "💼", "🗣️", "⏰", "📊", "🤝", "🎯"];

  // Tirage du sujet
  const sujetKeys = Object.keys(sujets);
  const chosenSujet = sujets[r(sujetKeys)];

  // Tirage de 3 points sans doublon
  const shuffledPoints = [...chosenSujet.points].sort(() => Math.random() - 0.5);
  const selectedPoints = shuffledPoints.slice(0, 3);

  return `
    <h2>${r(emojis)} Réunion Absurde :</h2>
    <p><strong>Type :</strong> ${r(types)}</p>
    <p><strong>Objectif :</strong> ${chosenSujet.objectif}</p>
    <p><strong>Participants :</strong> ${r(participants)}</p>
    <h3>Ordre du Jour :</h3>
    <ul>
      <li>${selectedPoints[0]}</li>
      <li>${selectedPoints[1]}</li>
      <li>${selectedPoints[2]}</li>
    </ul>
    <p><strong>Conclusion :</strong> ${r(conclusions)}</p>
    <p><em>Version LinkedIn :</em> ${r(linkedinConclusions)}</p>
  `;
}