(function () {

  const sidebar = document.querySelector('.c-sidebar');

  const container = sidebar.parentNode;

  const sideBarControls = document.querySelector('.c-sidebar__control');

  const mediaQuery = window.matchMedia('(max-width:800px)');



  function handleDeviceChange(e) {

    if (e.matches) {

      sidebar.classList.add('collapsed');


    } else {

      sidebar.classList.remove('collapsed');

    }

  }



  mediaQuery.addEventListener('change', handleDeviceChange);

  handleDeviceChange(mediaQuery);

    

  sideBarControls.addEventListener('click', () => {
    if(mediaQuery.matches) {
      sidebar.classList.toggle('collapsed');
    }else {
      return;
    }

  });

})();