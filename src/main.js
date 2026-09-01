import '/public/styles/styles.scss';
import 'normalize.css/normalize.css';


  const label = document.querySelectorAll('label[for="select-all"]');
  document.querySelectorAll('#select-all').forEach(selectAll => {
    selectAll.addEventListener('change', () => {
      document.querySelectorAll('#item-1').forEach(item => {
        item.checked = selectAll.checked;
      });
    });
  });