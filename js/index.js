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
