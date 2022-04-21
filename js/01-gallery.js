import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageConteiner = document.querySelector('.gallery');
const imageMarkup = creatGalleryItemsMarkup(galleryItems);


imageConteiner.insertAdjacentHTML('beforeend', imageMarkup);
imageConteiner.addEventListener('click', handleGalleryItemClick )

function creatGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img class = "gallery__image" src="${preview}"
    data-source="${original}"
    alt = "${description}" /></a>
    </div>    
  `
    }).join('');
    
}

function handleGalleryItemClick(even) {
    if (!even.target.classList.contains('gallery__image')) {
        return;
    }
   
    even.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${even.target.dataset.source}">
     `);
    
    instance.show();
    
} 

   