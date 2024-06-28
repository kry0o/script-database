document.getElementById('imageUploadForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('/upload-image', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert('Bild erfolgreich hochgeladen!');
            event.target.reset();
        })
        .catch(error => {
            console.error('Fehler:', error);
        });
});

document.getElementById('scriptUploadForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('/upload-script', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert('Skript erfolgreich hochgeladen!');
            event.target.reset();
        })
        .catch(error => {
            console.error('Fehler:', error);
        });
});
