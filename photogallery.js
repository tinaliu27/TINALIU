let currentPhotoIndex = 0;

function showPhoto(index) {
    const photos = document.getElementsByClassName('photo');

    if (index >= photos.length) {
        currentPhotoIndex = 0;
    } else if (index < 0) {
        currentPhotoIndex = photos.length - 1;
    } else {
        currentPhotoIndex = index;
    }

    for (let i = 0; i < photos.length; i++) {
        photos[i].style.display = 'none';
    }

    photos[currentPhotoIndex].style.display = 'block';
}

function changePhoto(n) {
    showPhoto(currentPhotoIndex += n);
}

function autoChange() {
    changePhoto(1);
}

setInterval(autoChange, 10000);

showPhoto(currentPhotoIndex);
