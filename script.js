// Formulario de guía gratuita
document.getElementById('guideForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    
    // Aquí irá la integración con Make.com
    console.log('Formulario enviado:', { email, name });
    
    // Mensaje de éxito (temporal)
    alert(`¡Gracias ${name}! Revisa tu email para descargar la guía.`);
    
    // Limpiar formulario
    this.reset();
});

// Botones de servicios
document.querySelectorAll('.btn-service').forEach(button => {
    button.addEventListener('click', function() {
        alert('Pronto tendremos más detalles. Contáctanos en Telegram: @Leonelatapias');
    });
});

// Botones de productos
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        if(this.textContent.includes('Telegram') || this.textContent.includes('Telegram')) {
            window.open('https://t.me/Leonelatapias', '_blank');
        } else {
            alert('Contáctanos en Telegram para más información: @Leonelatapias');
        }
    });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
