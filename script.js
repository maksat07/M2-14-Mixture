let btn = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-list');

btn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  btn.classList.toggle('close');
});

navMenu.addEventListener('click', (event) => {
  console.log(event)
  if (event.target.classList.contains('page-nav__link')) {
    navMenu.classList.remove('show');
    btn.classList.toggle('close')
  }
})