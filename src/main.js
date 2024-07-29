
import { fetchImages } from '../js/pixabay-api.js';
import { renderImages } from '../js/render-function.js';


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#search-form');
    const searchInput = document.querySelector('#search-input');
    const loadingIndicator = document.querySelector('#loading-indicator');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const query = searchInput.value.trim();
        if (query === '') {
            iziToast.error({
                title: 'Error',
                message: 'Please enter a search term.',
                position: 'topRight'
            });
            return;
        }

        showLoadingIndicator();

        fetchImages(query)
            .then(images => {
                renderImages(images);
            })
            .catch(error => {
                iziToast.error({
                    title: 'Error',
                    message: 'An error occurred while fetching images.',
                    position: 'topRight'
                });
            })
            .finally(() => {
                hideLoadingIndicator();
            });
    });

    function showLoadingIndicator() {
        loadingIndicator.style.display = 'flex'; 
    }

    function hideLoadingIndicator() {
        loadingIndicator.style.display = 'none'; 
    }
});