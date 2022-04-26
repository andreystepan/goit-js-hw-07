import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageConteiner = document.querySelector('.gallery');
const imageMarkup = creatGalleryItemsMarkup(galleryItems);
let instance;


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

     instance = basicLightbox.create(`
    <img src="${even.target.dataset.source}">
     `, {
        onShow: () => imageConteiner.addEventListener("keydown", handleToggerKeydown),
        onClose: () => imageConteiner.removeEventListener("keydown", handleToggerKeydown ) });
    
    instance.show();
    
} 

function handleToggerKeydown(even) {
    if (even.key === "Escape") {
        instance.close()
    }
};

   