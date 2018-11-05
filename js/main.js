const menuToggle = document.querySelector('#menu-toggle'),
      menuItems = document.querySelector('#menu-items'),
      header = document.querySelector('header');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuItems.classList.toggle('active');
    header.classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
});
