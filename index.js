function fetchImages() {
    fetch('https://api.unsplash.com/photos/random?count=32&client_id=UIyiabS05Yr7L10K1YMVfqJBu_6-Mjpd-ACFOAdfx6k')
        .then(response => response.json())
        .then(data => {
        console.log(data)    
            document.getElementById('imageContainer').innerHTML = '';

            data.forEach(imageData => {
                const imgElement = document.createElement('img');
                imgElement.src = imageData.urls.regular;
                imgElement.classList.add('image');
                document.getElementById('imageContainer').appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
}


