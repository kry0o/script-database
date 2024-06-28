document.addEventListener('DOMContentLoaded', () => {
    const imageGallery = document.getElementById('imageGallery');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    fetch('/api/images')
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image.imagePath;
                imgElement.alt = image.scriptName;
                imgElement.addEventListener('click', () => {
                    document.getElementById('scriptName').innerText = image.scriptName;
                    document.getElementById('downloadButton').href = image.downloadLink;
                    document.getElementById('lastUpdate').innerText = `Last Update: ${image.lastUpdate}`;
                    document.getElementById('developer').innerText = `Developer: ${image.developer}`;
                    popup.classList.remove('hidden');
                });
                imageGallery.appendChild(imgElement);
            });
        });

    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    document.getElementById('loginButton').addEventListener('click', () => {
        window.location.href = 'admin.html';
    });
});
