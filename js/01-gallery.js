import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageConteiner = document.querySelector('.gallery');
const imageMarkup = creatGalleryItemsMarkup(galleryItems);

imageConteiner.insertAdjacentHTML('beforeend', imageMarkup);

function creatGalleryItemsMarkup(items) {
    return items.map(({ preview, description }) => {
        return `
        <div class="gallery__item gallery__link">
    <img class = "gallery__image" src="${preview}"
    alt = "${description}" />
    </div>
      
  `
    }).join('');
    
}
