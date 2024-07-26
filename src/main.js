

import { fetchImages } from './js/pixabay-api.js';
import { showLoadingIndicator, hideLoadingIndicator, clearGallery, renderImages } from './js/render-function.js';

document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = document.getElementById('search-query').value.trim();

    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Search field cannot be empty',
        });
        return;
    }

    showLoadingIndicator();

    try {
        const data = await fetchImages(query);
        clearGallery();
        renderImages(data.hits);
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching data.',
        });
    } finally {
        hideLoadingIndicator();
    }
});