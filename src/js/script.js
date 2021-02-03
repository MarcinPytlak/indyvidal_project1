// eslint-disable-next-line no-unused-vars
function myFunction() {
  var element = document.getElementById('sidebar');
  element.classList.toggle('active');
  var elementTopBat = document.getElementById('sidebar-topbar');
  elementTopBat.classList.toggle('active');
  var content = document.getElementById('content');
  content.classList.toggle('active');
}