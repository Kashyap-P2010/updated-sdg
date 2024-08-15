document.querySelectorAll('.orbit-img').forEach(img => {
    img.addEventListener('mouseover', function(event) {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.display = 'block';
        tooltip.style.left = event.pageX + 10 + 'px';
        tooltip.style.top = event.pageY + 10 + 'px';
        // Customize tooltip content based on data attributes or other properties
        tooltip.querySelector('h3').innerText = 'SDG GOAL'; // Dynamic title
        tooltip.querySelector('p').innerText = 'Click to know more about what I want to achieve'; // Dynamic description
    });

    img.addEventListener('mousemove', function(event) {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.left = event.pageX + 10 + 'px';
        tooltip.style.top = event.pageY + 10 + 'px';
    });

    img.addEventListener('mouseout', function() {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.display = 'none';
    });

    img.addEventListener('click', function() {
        const url = img.getAttribute('data-url');
        window.location.href = url;
    });
});
