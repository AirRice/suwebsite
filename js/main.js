const menuToggle = document.querySelector('#menu-toggle'),
      menuItems = document.querySelector('#menu-items');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuItems.classList.toggle('active');
});
