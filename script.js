// Mensajes personalizados para cada servicio/producto
const customMessages = {
    // Servicios
    'Optimización de Perfil de Redes': 'Transformo tu perfil en un imán de oportunidades: más claro, más profesional y más tú. ¿List@ para atraer a tus clientes ideales? Hablemos en Telegram.',
    
    'Página Web / Landing Page': 'Diseñamos una landing que convierte en ventas, no solo se ve bonita. Tu puerta de entrada al éxito digital empieza aquí. ¿La construimos junt@s? Escríbeme en Telegram.',
    
    'Automatización por Redes': 'Automatizo lo repetitivo para que tú te enfoques en lo estratégico. Más tiempo, menos estrés, mismos o mejores resultados. ¿Quieres escalar sin saturarte? Conversemos en Telegram',
    
    'Tu Avatar digital': 'Creamos tu clon visual con IA para que tengas contenido ilimitado sin vivir pegad@ a la cámara. ¿List@ para producir más y mejor? Conectemos en Telegram.',
    
    'BOT Asistente por Telegram': 'Un BOT que organiza tu negocio 24/7 es paz mental y crecimiento real. Deja de hacerlo todo a mano. ¿Automatizamos tu éxito? Te espero en Telegram.',
    
    // Productos Premium
    
    'Asesoría 1:1': 'Una sesión 1:1 para ordenar tu negocio, priorizar qué automatizar y crear tu propio sistema con IA. ¿Diseñamos tu estrategia ganadora junt@s? Agendemos en Telegram.',
};

// Función para mostrar alertas personalizadas con opción de Telegram
function showCustomAlert(message, telegramLink = null, buttonText = 'close') {
    // Crear el overlay (fondo oscuro)
    const overlay = document.createElement('div');
    overlay.className = 'custom-alert-overlay';
    
    // Crear el cuadro de alerta
    const alertBox = document.createElement('div');
    alertBox.className = 'custom-alert-box';
    
    // Botones según el tipo
    let buttons = '';
    if (telegramLink) {
        buttons = `
            <button class="custom-alert-btn custom-alert-cancel">Quizás después</button>
            <a href="${telegramLink}" target="_blank" class="custom-alert-btn custom-alert-telegram">💜 Ir a Telegram</a>
        `;
    } else if (buttonText === 'close') {
        buttons = `<button class="custom-alert-btn">¡Entendido!</button>`;
    }
    
    // Contenido del cuadro
    alertBox.innerHTML = `
        <div class="custom-alert-content">
            <p>${message}</p>
            <div class="custom-alert-buttons">
                ${buttons}
            </div>
        </div>
    `;
    
    // Agregar al DOM
    overlay.appendChild(alertBox);
    document.body.appendChild(overlay);
    
    // Animación de entrada
    setTimeout(() => {
        overlay.classList.add('show');
    }, 10);
    
    // Cerrar con cualquier botón
    alertBox.querySelectorAll('.custom-alert-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (!this.classList.contains('custom-alert-telegram')) {
                e.preventDefault();
            }
            overlay.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(overlay);
            }, 300);
        });
    });
    
    // Cerrar al hacer clic fuera del cuadro
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(overlay);
            }, 300);
        }
    });
}

// Interceptar clics en botones de servicios
document.querySelectorAll('.btn-service').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const telegramLink = this.getAttribute('href');
        const serviceTitle = this.closest('.service-card').querySelector('h3');
        // Extraer solo el texto sin el emoji
        const serviceName = serviceTitle.textContent.replace(/[^\w\sáéíóúñÁÉÍÓÚÑ]/g, '').trim();
        
        const message = customMessages[serviceName] || `Te ayudo a crear un sistema con IA adaptado a tu negocio. Cuéntame qué necesitas y lo vemos por aquí en Telegram.`;
        
        showCustomAlert(message, telegramLink);
    });
});

// Interceptar clics en botones de productos
document.querySelectorAll('.btn-primary').forEach(button => {
    // Solo para los que son enlaces a Telegram (no el del formulario)
    if (button.tagName === 'A' && button.getAttribute('href').includes('t.me')) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const telegramLink = this.getAttribute('href');
            const productTitle = this.closest('.product-card').querySelector('h3');
            const productName = productTitle.textContent.trim();
            
            const message = customMessages[productName];
            
            showCustomAlert(message, telegramLink);
        });
    }
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
const WEBHOOK_URL = "https://hook.us2.make.com/1ud2kegnqxc2nnbtll8b2zsuugxvd9o4";

const guideForm = document.getElementById("guideForm");

if (guideForm) {
  guideForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const name  = document.getElementById("name").value;

    const data = {
      email,
      name,
      source: "https://leonelarodri.github.io/tapiasmarketing/?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
    };

    console.log("Enviando al webhook...", data);

    try {
  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-make-apikey": "Tapias0212$." // tu clave exacta
    },
    body: JSON.stringify(data)
  });

  console.log("Respuesta webhook", res.status);
} catch (err) {
  console.error("Error enviando al webhook:", err);
}


    // Mensaje de éxito
    showCustomAlert(
      `✨ ¡Perfecto ${name}! Tu guía está en camino. Revisa tu email (y la carpeta de spam por si acaso) 💜`,
      null,
      "close"
    );

    // Limpiar formulario
    guideForm.reset();
  });
}

