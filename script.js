// 1. Activar desplazamiento suave (Smooth Scroll) para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 2. Lógica para el Selector Dinámico de Proyectos y el Formulario
document.addEventListener("DOMContentLoaded", function() {
    const selector = document.getElementById("tipo-proyecto");
    const titulo = document.getElementById("preview-titulo");
    const descripcion = document.getElementById("preview-descripcion");
    const caracteristicas = document.getElementById("preview-caracteristicas");
    const campoAsunto = document.getElementById("campo-asunto");
    const campoMensaje = document.getElementById("campo-mensaje");

    // Base de datos de opciones de proyectos
    const proyectosInfo = {
        ropa: {
            titulo: "Solución para Tiendas de Ropa & Moda (E-commerce)",
            descripcion: "Diseño visual enfocado en exhibir prendas de vestir, catálogo interactivo, integración con redes sociales, carrito de compras y pasarela de pagos.",
            caracteristicas: [
                "Catálogo de productos organizado por categorías (Hombre, Mujer, Ofertas).",
                "Integración con pasarelas de pago y envíos.",
                "Filtros avanzados por talla, color y precio."
            ],
            asunto: "Proyecto Seleccionado: Tienda de Ropa / E-commerce",
            placeholder: "Cuéntanos más sobre tu tienda de ropa (ej. qué tipo de prendas vendes, si ya tienes catálogo)..."
        },
        corporativa: {
            titulo: "Página Web Corporativa / Marca Personal",
            descripcion: "Sitio web elegante y de alta velocidad diseñado para transmitir confianza, presentar tus servicios profesionales y captar clientes potenciales.",
            caracteristicas: [
                "Sección de servicios detallada y presentación de marca.",
                "Formularios de contacto directos y enlace a WhatsApp.",
                "Optimizada para aparecer en motores de búsqueda (SEO)."
            ],
            asunto: "Proyecto Seleccionado: Página Web Corporativa",
            placeholder: "Cuéntanos sobre tu empresa o servicios profesionales..."
        },
        software: {
            titulo: "Software a Medida & Sistemas de Gestión",
            descripcion: "Desarrollo de sistemas personalizados para control de inventarios, facturación, bases de datos o automatización de procesos internos.",
            caracteristicas: [
                "Arquitectura robusta con bases de datos optimizadas.",
                "Módulos de administración de usuarios y reportes.",
                "Interfaces ágiles y personalizadas según la operativa de tu negocio."
            ],
            asunto: "Proyecto Seleccionado: Software a Medida",
            placeholder: "Describe la necesidad o proceso que deseas automatizar con software..."
        },
        otro: {
            titulo: "Proyecto Personalizado KODI-LOGIC",
            descripcion: "Diseñamos y desarrollamos cualquier solución tecnológica que se adapte a tus requerimientos específicos.",
            caracteristicas: [
                "Asesoría técnica inicial sin costo.",
                "Propuesta visual y arquitectura modular a medida."
            ],
            asunto: "Proyecto Seleccionado: Personalizado",
            placeholder: "Describe tu idea o proyecto tecnológico..."
        }
    };

    // Cambiar la vista previa al cambiar el selector
    if (selector) {
        selector.addEventListener("change", function() {
            const opcion = selector.value;
            const info = proyectosInfo[opcion];

            if (info) {
                titulo.textContent = info.titulo;
                descripcion.textContent = info.descripcion;
                
                caracteristicas.innerHTML = "";
                info.caracteristicas.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item;
                    caracteristicas.appendChild(li);
                });

                campoAsunto.value = info.asunto;
                campoMensaje.placeholder = info.placeholder;
            }
        });
    }

    // 3. Lógica para capturar datos y mostrar el resumen personalizado al enviar
    const formulario = document.querySelector(".contact-form");
    const seccionContacto = document.getElementById("contacto");
    const seccionResumen = document.getElementById("resumen-propuesta");
    
    const spanNombre = document.getElementById("resumen-nombre");
    const spanCorreo = document.getElementById("resumen-correo");
    const tituloProyectoResumen = document.getElementById("resumen-titulo-proyecto");
    const mensajeClienteResumen = document.getElementById("resumen-mensaje-cliente");
    const btnReiniciar = document.getElementById("btn-reiniciar");

    if (formulario) {
        formulario.addEventListener("submit", function(e) {
            e.preventDefault(); // Evita que la página se recargue

            const inputNombre = formulario.querySelector("input[type='text']").value;
            const inputCorreo = formulario.querySelector("input[type='email']").value;
            const inputMensaje = document.getElementById("campo-mensaje").value;
            const textoProyectoSeleccionado = selector.options[selector.selectedIndex].text;

            spanNombre.textContent = inputNombre;
            spanCorreo.textContent = inputCorreo;
            tituloProyectoResumen.textContent = "Servicio: " + textoProyectoSeleccionado;
            mensajeClienteResumen.textContent = inputMensaje;

            seccionContacto.style.display = "none";
            seccionResumen.style.display = "block";
            seccionResumen.scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (btnReiniciar) {
        btnReiniciar.addEventListener("click", function() {
            seccionResumen.style.display = "none";
            seccionContacto.style.display = "block";
            formulario.reset();
            seccionContacto.scrollIntoView({ behavior: 'smooth' });
        });
    }
});