const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDowMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function() {
  dropDowMenu.classList.toggle('open');
  const isOpen = dropDowMenu.classList.contains('open');
  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
};
