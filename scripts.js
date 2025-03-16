function collapse(){
    const headers = document.querySelectorAll('h1');
    headers.forEach(header => {
      header.style.cursor = 'pointer';
      header.addEventListener('click', () => {
        header.nextElementSibling.classList.toggle('collapsed');
      });
    });
  }

  function zoom(){
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
      photo.style.cursor = 'zoom-in';
      photo.addEventListener('click', () => {
        photo.classList.toggle('zoomed-in');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', collapse);
  document.addEventListener('DOMContentLoaded', zoom);