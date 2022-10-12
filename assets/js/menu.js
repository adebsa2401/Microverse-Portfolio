// open menu popup
document.getElementById('menu-icon').addEventListener('click', () => {
  document.getElementById('mobile-menu').style.display = 'block';
});

// close menu popup
Array.from(document.getElementsByClassName('menu-item')).forEach((element) => {
  element.addEventListener('click', () => {
    document.getElementById('mobile-menu').style.display = 'none';
  });
});
