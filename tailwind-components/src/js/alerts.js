const closeElements = document.querySelectorAll('.alert-close');
closeElements.forEach(function(element) {
    element.addEventListener('click', function() {
     
        element.parentElement.classList.add('scale-0');
    })
})