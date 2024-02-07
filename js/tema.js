document.getElementById('theme').addEventListener('click', function() {
    var currentTheme = document.body.getAttribute('data-theme');
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
});

