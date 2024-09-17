document.querySelector('.join-button').addEventListener('click', function() {
    alert('Join Now button clicked!');
});

document.querySelectorAll('.product').forEach(item => {
    item.addEventListener('click', function() {
        alert('Product selected: ' + this.textContent);
    });
});