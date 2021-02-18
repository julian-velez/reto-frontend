// UI Variables
  const uiMenuOpen = document.querySelector('.open');
  const uiMenuClose = document.querySelector('.close');
  const uiWrapper = document.querySelector('.wrapper')
  const uiHeader = document.querySelector('header')
  const uiHeading = document.querySelector('.heading')


    uiMenuClose.addEventListener('click', () => {
      uiWrapper.classList.remove('active');
      uiHeading.innerHTML = '';
      const head1 = document.createElement('h1');
      head1.classList.add('main-head')
      head1.textContent = 'Immersive experiences that deliver';
      uiHeading.appendChild(head1);
      uiHeader.appendChild(uiHeading);
      })


  uiMenuOpen.addEventListener('click', () => {
    uiWrapper.classList.add('active');
    uiHeading.innerHTML = `
          <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Support</a></li>
          </ul>
    `;
    uiWrapper.appendChild(uiHeading);
    })