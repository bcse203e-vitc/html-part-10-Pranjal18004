function bringToFront(element) {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => img.style.zIndex = '2');
    element.style.zIndex = '2';
}