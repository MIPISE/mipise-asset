// Clipboard
// Sélectionner tous les boutons et ajouter un gestionnaire d'événements
document.querySelectorAll('.copyButton').forEach((button) => {
  button.addEventListener('click', function () {
    const textToCopy = this.previousElementSibling.innerText; // Texte situé avant le bouton
    const icon = this.querySelector('i'); // Icône du bouton

    // Copier le texte
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Succès : changer l'icône et la classe
      icon.className = 'fi fi-rs-check';
      this.className = 'btn btn-success-link btn-xs btn-square ms-1';

      // Réinitialiser après 2 secondes
      setTimeout(() => {
        icon.className = 'fi fi-rs-copy';
        this.className = 'btn btn-dark-link btn-xs btn-square ms-1';
      }, 2000);
    }).catch((err) => {
      // Échec : changer l'icône et la classe
      console.error('Erreur de copie : ', err);
      icon.className = 'fi fi-rs-cross';
      this.className = 'btn btn-danger-link btn-xs btn-square ms-1';

      // Réinitialiser après 2 secondes
      setTimeout(() => {
        icon.className = 'fi fi-rs-copy';
        this.className = 'btn btn-dark-link btn-xs btn-square ms-1';
      }, 2000);
    });
  });
});
