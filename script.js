// Mensajes personalizados para cada servicio/producto
const customMessages = {
    // Servicios
    'Optimización de Perfil de Redes': '⭐ La abundancia fluye cuando te muestras auténtic@ y atractiv@. ¿Estás preparad@ para transformar tu perfil en un imán de oportunidades? Hablemos por Telegram.',
    
    'Página Web / Landing Page': '🌐 Una landing page que convierte es tu activo digital más valioso. El dinero fluye cuando tienes claridad y presencia profesional. ¿Construimos juntos tu puerta de entrada al éxito? Conversemos en Telegram.',
    
    'Automatización por Redes': '⚙️ La abundancia se multiplica cuando automatizas lo repetitivo y te enfocas en lo estratégico. Libera tu tiempo para crear más valor. ¿Quieres escalar sin saturarte? Escríbeme en Telegram.',
    
    'Tu Avatar digital': '🎭 La IA es tu aliada para crear contenido ilimitado. En la era digital, quien crea más, conecta más y monetiza más. ¿List@ para producir contenido sin límites? Conectemos en Telegram.',
    
    'BOT Asistente por Telegram': '🤖 La mentalidad de abundancia necesita herramientas inteligentes. Un BOT que organiza tu negocio 24/7 es invertir en tu paz mental y crecimiento. ¿Automatizamos tu éxito? Te espero en Telegram.',
    
    // Productos Premium
    'Academia Tapias Marketing': '📚 La inversión en conocimiento siempre paga los mejores dividendos. Esta academia es tu atajo hacia la mentalidad y estrategias que generan ingresos reales. ¿List@ para tu transformación completa? Hablemos en Telegram.',
    
    'Asesoría 1:1': '👥 El acompañamiento personalizado acelera tu camino al éxito. Cuando inviertes en ti, el universo conspira a tu favor. ¿Diseñamos tu estrategia ganadora juntos? Agendemos en Telegram.',
    
    'Grupo Tapias Pro': '🔥 La abundancia se multiplica en comunidad. Rodearte de emprendedores que piensan en grande, eleva tu energía y resultados. ¿List@ para ser parte de Tapias PRO? Únete desde Telegram.',
    
    'Curso Negocio Digital': '🎓 Construir un negocio digital es tu puerta a la libertad financiera y de tiempo. El momento perfecto es AHORA. ¿Comenzamos tu imperio digital? Conversemos en Telegram.'
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
        
        const message = customMessages[serviceName] || `🚀 Para continuar con este servicio, conversemos por Telegram. ¿Estás list@ para el siguiente paso?`;
        
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
            
            const message = customMessages[productName] || `✨ Para acceder a este recurso premium, sigamos la conversación en Telegram. ¿Te animas?`;
            
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
      `✨ ¡Perfecto ${name}! Tu Infografía de Daniel Dínez está en camino. Revisa tu email (y la carpeta de spam por si acaso) 💜`,
      null,
      "close"
    );

    // Limpiar formulario
    guideForm.reset();
  });
}

