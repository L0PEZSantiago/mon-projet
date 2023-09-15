// Attend que le document HTML soit complètement chargé
document.addEventListener('DOMContentLoaded', function () {
  // Sélectionnez tous les éléments <li> du menu
  const menus = document.querySelectorAll('header li');

  // Ajoutez un gestionnaire d'événement au survol de chaque élément <li>
  menus.forEach((menu) => {
    menu.addEventListener('mouseover', () => {
      // Changez la couleur d'arrière-plan des menus au survol
      menu.style.backgroundColor = 'black';
      menu.style.color = 'white';
    });

    // Rétablissez la couleur d'arrière-plan d'origine lorsque le curseur quitte l'élément
    menu.addEventListener('mouseout', () => {
      menu.style.backgroundColor = ''; // Vide la couleur pour revenir à la valeur par défaut
      menu.style.color = '';
    });
  });

  // Sélectionnez le bouton "READ MORE"
  const boutonReadMore = document.querySelector('button');

  // Ajoutez un gestionnaire d'événement au survol du bouton
  boutonReadMore.addEventListener('mouseover', () => {
    // Changez la couleur de la police du bouton au survol
    boutonReadMore.style.color = 'white';
  });

  // Rétablissez la couleur de la police d'origine lorsque le curseur quitte le bouton
  boutonReadMore.addEventListener('mouseout', () => {
    boutonReadMore.style.color = ''; // Vide la couleur pour revenir à la valeur par défaut
  });
});
console.log