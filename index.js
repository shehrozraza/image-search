function fetchImages() {
    fetch('https://api.unsplash.com/photos/random?count=50&client_id=UIyiabS05Yr7L10K1YMVfqJBu_6-Mjpd-ACFOAdfx6k')
        .then(response => response.json())
        .then(data => {
            // Clear previous images
            document.getElementById('imageContainer').innerHTML = '';

            // Append new images
            data.forEach(imageData => {
                const imgElement = document.createElement('img');
                imgElement.src = imageData.urls.regular;
                imgElement.alt = imageData.alt_description;
                imgElement.classList.add('image');
                document.getElementById('imageContainer').appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
}


