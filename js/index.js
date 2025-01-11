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
    const pointsModal = event.currentTarget.querySelector('.points__modal > .modal');
    const isInfoBtn = event.target.classList.contains('points__info-button');

    if (isInfoBtn && pointsModal) openModal(pointsModal);
  });
});

////

const voteCardElems = document.querySelectorAll('.vote-page__card');

function updateVoteCardPannel(panelElem) {
  if (!panelElem) return;
  if (panelElem.style.maxHeight) {
    panelElem.style.maxHeight = null;
  } else {
    panelElem.style.maxHeight = panelElem.scrollHeight + 'px';
  }
}

voteCardElems.forEach((voteCard) => {
  const panel = voteCard.querySelector('.vote-page__card-panel');
  if (panel && voteCard.classList.contains('active')) updateVoteCardPannel(panel);

  voteCard.addEventListener('click', (event) => {
    const isToggler = event.target.classList.contains('vote-page__card-toggler');
    const isVoteBtn = event.target.classList.contains('vote-page__card-panel-vote-button');
    const panel = event.currentTarget.querySelector('.vote-page__card-panel');
    const modal = event.currentTarget.querySelector('.vote-page__card-modal .modal');

    if (panel && isToggler) {
      updateVoteCardPannel(panel);
      event.currentTarget.classList.toggle('active');
    }

    if (modal && isVoteBtn) {
      openModal(modal);
    }
  });
});

////

const connectWalletElem = document.querySelector('.connect-wallet');
const mainPageInfoConnectButton = document.querySelector('.main-page__info-connect-button');

if (mainPageInfoConnectButton) {
  mainPageInfoConnectButton.addEventListener('click', (event) => {
    const modal = document.querySelector('.main-page__info-connect-modal .modal');
    if (modal) openModal(modal);
  });
}

if (connectWalletElem) {
  connectWalletElem.addEventListener('click', (event) => {
    const isNextButton = event.target.classList.contains('connect-wallet__buttons-next');
    const isCheckButton = event.target.classList.contains('connect-wallet__buttons-check');
    const stepElem = event.currentTarget.querySelector('.connect-wallet__title-step');

    if (isNextButton) {
      event.currentTarget.classList.add('active');
      if (stepElem) stepElem.innerHTML = '2/2';
    }

    if (isCheckButton) {
      const mainPageInfoElem = document.querySelector('.main-page__info');
      if (mainPageInfoElem) mainPageInfoElem.classList.add('active');
    }
  });
}
