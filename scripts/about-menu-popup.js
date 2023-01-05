function closePopupWindow() {
  const popupWindow = document.querySelector('.popup-window');
  popupWindow.style.display = 'none';
}

function showPopupWindow() {
  const popupWindow = document.querySelector('.popup-window');
  popupWindow.style.display = 'block';
}

function createPopupWindow() {
  const popupWindow = document.createElement('div');
  popupWindow.classList.add('popup-window');

  const closeButton = document.createElement('img');
  closeButton.src = 'bg-icons/menu-cross-icon.svg';
  closeButton.alt = 'cross icon to close menu';
  closeButton.classList.add('menu-close-button');
  closeButton.onclick = function () {
    closePopupWindow();
    const popupButton = document.querySelector('.hamburger-icon');
    popupButton.style.display = 'block';
  };
  popupWindow.appendChild(closeButton);

  const controlList = document.createElement('ul');
  controlList.classList.add('popup-control-list');
  controlList.innerHTML = `<li class="popup-control-list-item"><a href="https://www.facebook.com" target="_blank" rel="noopener"><img class="popup-social-logo" src="bg-icons/facebook-icon.svg" alt="Facebook icon"></a></li>
  <li class="popup-control-list-item"><a href="https://www.twitter.com" target="_blank" rel="noopener"><img class="popup-social-logo" src="bg-icons/twitter-icon.svg" alt="Twitter icon"></a></li>
  <li class="popup-control-list-item"><a href="">English</a></li>
  <li class="popup-control-list-item"><a href="">MyPage</a></li>
  <li class="popup-control-list-item"><a href="">Logout</a></li>`;

  const navigationList = document.createElement('ul');
  navigationList.classList.add('popup-navigation-list');
  navigationList.innerHTML = `<li class="popup-navigation-list-item"><a class="orange-text" href="index.html">Main</a></li>
  <li class="popup-navigation-list-item"><a href="">Schedule</a></li>
  <li class="popup-navigation-list-item"><a href="">Venues</a></li>
  <li class="popup-navigation-list-item"><a href="">Partner</a></li>
  <li class="popup-navigation-list-item"><a href="">News</a></li>
  <li class="popup-navigation-list-item orange-box"><a href="">Tickets</a></li>`;

  popupWindow.appendChild(controlList);
  popupWindow.appendChild(navigationList);

  const header = document.getElementById('control-nav-bars');
  popupWindow.style.display = 'none';
  header.appendChild(popupWindow);
}

createPopupWindow();
const popupButton = document.querySelector('.hamburger-icon');
popupButton.onclick = function () {
  showPopupWindow();
};

const controlListItems = document.querySelectorAll('.popup-control-list-item');
const navigationListItems = document.querySelectorAll('.popup-navigation-list-item');

for (let i = 0; i < controlListItems.length; i += 1) {
  controlListItems[i].onclick = function () {
    closePopupWindow();
  }

}
for (let i = 0; i < navigationListItems.length; i += 1) {
  navigationListItems[i].onclick = function () {
    closePopupWindow();
  }
}

window.onresize = function () {
  if (window.innerWidth > 768) {
    closePopupWindow();
  }
}