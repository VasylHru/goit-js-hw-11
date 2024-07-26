
const API_KEY = '45131715-e5faad2363c262c92b6a5cfbe';
const API_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  try {
    const response = await fetch(
      `${API_URL}?key=${API_KEY}&q=${encodeURIComponent(
        query
      )}&image_type=photo&orientation=horizontal&safesearch=true`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
