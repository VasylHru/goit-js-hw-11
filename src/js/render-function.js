import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function showLoadingIndicator() {
    document.getElementById('loading-indicator').classList.remove('hidden');
}

export function hideLoadingIndicator() {
    document.getElementById('loading-indicator').classList.add('hidden');
}

export function clearGallery() {
    document.getElementById('gallery').innerHTML = '';
}

export function renderImages(images) {
    const gallery = document.getElementById('gallery');

    if (images.length === 0) {
        iziToast.info({
            title: 'No Results',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
    }

    const imageElements = images.map(image => `
        <a class="gallery-item" href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" />
            <div class="info">
                <p>Likes: ${image.likes}</p>
                <p>Views: ${image.views}</p>
                <p>Comments: ${image.comments}</p>
                <p>Downloads: ${image.downloads}</p>
            </div>
        </a>
    `).join('');

    gallery.innerHTML = imageElements;

   
    if (lightbox) {
        lightbox.destroy();
    }
    lightbox = new SimpleLightbox('.gallery-item a', {
        captionsData: 'alt',
        captionDelay: 250
    });
}