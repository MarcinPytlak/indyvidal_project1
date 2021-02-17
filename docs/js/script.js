/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-lets
function myFunction() {
  let element = document.getElementById('sidebar');
  element.classList.toggle('active');
  let elementTopBat = document.getElementById('sidebar-topbar');
  elementTopBat.classList.toggle('active');
  let content = document.getElementById('content');
  content.classList.toggle('active');
}

// eslint-disable-next-line no-unused-vars
function openPopup() {
// Get the modal
  let modal = document.getElementById('myModal');

  // Get the button that opens the modal
  let btn = document.getElementById('myBtn');
  console.log(btn);

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName('close')[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = 'block';
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}

const clickHandler = function(event){

  event.preventDefault();
  const clickedElement = this;
  console.log(clickedElement);

  const activeLinks = document.querySelectorAll('.sidebar-field a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  clickedElement.classList.add('active');

  const activePosts = document.querySelectorAll('.post');
  for(let activePost of activePosts){
    activePost.classList.add('inactive');
  }
  const linkAttribute = clickedElement.getAttribute('href');
  const targetPost = document.querySelector(linkAttribute, '.container-fluid');
  targetPost.classList.remove('inactive');
};

const links = document.querySelectorAll('.sidebar-field a');
console.log(links);

for(let link of links){
  link.addEventListener('click', clickHandler);
}

var ctx = document.getElementById('myChart').getContext('2d');

// eslint-disable-next-line no-undef
var chart = new Chart(ctx, {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: true,
    }]
  },
});