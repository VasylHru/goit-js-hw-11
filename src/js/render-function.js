
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; 

    if (images.length === 0) {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight'
        });
        return;
    }

    const imageElements = images.map(image => {
        return `
            <a href="${image.largeImageURL}" class="gallery-link">
                <div class="photo-card">
                    <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
                    <div class="info">
                        <p class="info-item">
                            <b>Likes</b> ${image.likes}
                        </p>
                        <p class="info-item">
                            <b>Views</b> ${image.views}
                        </p>
                        <p class="info-item">
                            <b>Comments</b> ${image.comments}
                        </p>
                        <p class="info-item">
                            <b>Downloads</b> ${image.downloads}
                        </p>
                    </div>
                </div>
            </a>
        `;
    }).join('');

    gallery.innerHTML = imageElements;


    if (lightbox) {
        lightbox.refresh();
    } else {
        lightbox = new SimpleLightbox('.gallery a', {
            captions: true,
            captionsData: 'alt',
            captionDelay: 250,
            fadeSpeed: 600
        });
    }
}