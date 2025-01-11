const mainPageWalletsElem = document.querySelector('.main-page__wallets');

if (mainPageWalletsElem) {
  const openWalletsDropdown = () => {
    if (mainPageWalletsElem) mainPageWalletsElem.classList.add('active');
  };

  const closeWalletsDropdown = () => {
    if (mainPageWalletsElem) mainPageWalletsElem.classList.remove('active');
  };

  mainPageWalletsElem.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isWalletElem = event.target.classList.contains('main-page__wallets-menu-wallet');
    const isAddBtn = event.target.classList.contains('main-page__wallets-menu-add');
    const isCurrentWalletElem = event.target.classList.contains('main-page__wallets-current');

    if (isCurrentWalletElem) openWalletsDropdown();
    if (isLayout || isWalletElem || isAddBtn) closeWalletsDropdown();
  });
}

/////

function openModal(modal) {
  if (modal) modal.classList.add('active');
}

function closeModal(modal) {
  if (modal) modal.classList.remove('active');
}

const modals = document.querySelectorAll('.modal');

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isCloseElem = event.target.classList.contains('modal__close');

    if (isLayout || isCloseElem) closeModal(event.currentTarget);
  });
});

/////

const points = document.querySelectorAll('.points');

points.forEach((pointsElem) => {
  pointsElem.addEventListener('click', (event) => {
    const pointsModal = event.currentTarget.querySelector('.points__modal');
    const isInfoBtn = event.target.classList.contains('points__info-button');

    if (isInfoBtn && pointsModal) openModal(pointsModal);
  });
});
