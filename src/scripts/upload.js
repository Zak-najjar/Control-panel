    (function (){
      const uploaders = document.querySelectorAll('.js-upload');
      Array.from(uploaders, (uploader) => {
        const placeholder = uploader.querySelector('.js-image-placeholder'),
              uploadINP = uploader.querySelector('.js-upload-value'),
              remove = uploader.querySelector('.js-upload-remove');
        uploadINP.addEventListener('change', (e) => {
          const img = uploadINP.files[0];
          let reader = new FileReader;
          reader.readAsDataURL(img);

          reader.onloadend = () => {
            uploader.classList.add('has-image');
            placeholder.src = reader.result;
          }
        });
        remove.addEventListener('click', () => {
          uploadINP.value = null;
          placeholder.src = '';
          uploader.classList.remove('has-image');
        });
      });
    })();
