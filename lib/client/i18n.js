i18n.map('en_US', {
  subscribeMessage: 'Get on the mailing list:',
  subscribeInvalidEmail: 'Invalid email address', 
  subscribeSubscribing: 'Subscribing...',
  subscribeSuccess: 'Check your inbox! :)',
  subscribeAlreadySubscribed: 'Already subscribed! O.o',
});

i18n.map('fr_FR', {
  subscribeMessage: 'Recevez notre Newsletter',
  subscribeInvalidEmail: 'Adresse email incorrect !', 
  subscribeSubscribing: 'Votre inscription est en cours…',
  subscribeSuccess: 'Inscription terminé ! Vous avez reçu un email :)',
  subscribeAlreadySubscribed: 'Vous êtes déjà inscrit à notre Newsletter !',
});

i18n.setDefaultLanguage('en_US');

console.log(i18n.getLanguage());