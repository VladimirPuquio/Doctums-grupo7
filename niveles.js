// Datos de los niveles y retos, incluyendo imágenes relacionadas
const niveles = [
    {
      titulo: "Nivel 1: Organización Básica",
      descripcion: "Organiza tu escritorio y tu bandeja de entrada. El orden es clave para la productividad.",
      reto: "Limpia 10 correos electrónicos y organiza 5 documentos en carpetas.",
      imagen: "/imagenes/dashboard.png"
    },
    {
      titulo: "Nivel 2: Gestión de Tareas",
      descripcion: "Aprende a gestionar tareas diarias usando una lista de pendientes.",
      reto: "Completa 5 tareas importantes y marca 3 como prioridad alta.",
      imagen: "https://via.placeholder.com/300x300.png?text=Gestión+de+Tareas"
    },
    {
      titulo: "Nivel 3: Comunicación Efectiva",
      descripcion: "La comunicación es esencial en el trabajo en equipo.",
      reto: "Redacta 3 correos claros y directos a tus compañeros.",
      imagen: "https://via.placeholder.com/300x300.png?text=Comunicación+Efectiva"
    },
    {
      titulo: "Nivel 4: Planificación de Reuniones",
      descripcion: "Convoca una reunión y asegúrate de que sea productiva.",
      reto: "Elabora una agenda para una reunión de 30 minutos.",
      imagen: "https://via.placeholder.com/300x300.png?text=Planificación+de+Reuniones"
    },
    {
      titulo: "Nivel 5: Gestión de Proyectos",
      descripcion: "Coordina un pequeño proyecto de oficina.",
      reto: "Define objetivos y asigna tareas a 3 compañeros.",
      imagen: "https://via.placeholder.com/300x300.png?text=Gestión+de+Proyectos"
    },
    {
        titulo: "Nivel 5: Gestión de Proyectos",
        descripcion: "Coordina un pequeño proyecto de oficina.",
        reto: "Define objetivos y asigna tareas a 3 compañeros.",
        imagen: "https://via.placeholder.com/300x300.png?text=Gestión+de+Proyectos"
    },
    {
        titulo: "Nivel 6: Gestión de Proyectos",
        descripcion: "Coordina un pequeño proyecto de oficina.",
        reto: "Define objetivos y asigna tareas a 3 compañeros.",
        imagen: "https://via.placeholder.com/300x300.png?text=Gestión+de+Proyectos"
    },
    {
        titulo: "Nivel 7: Gestión de Proyectos",
        descripcion: "Coordina un pequeño proyecto de oficina.",
        reto: "Define objetivos y asigna tareas a 3 compañeros.",
        imagen: "https://via.placeholder.com/300x300.png?text=Gestión+de+Proyectos"
    },
    {
        titulo: "Nivel 8: Gestión de Proyectos",
        descripcion: "Coordina un pequeño proyecto de oficina.",
        reto: "Define objetivos y asigna tareas a 3 compañeros.",
        imagen: "https://via.placeholder.com/300x300.png?text=Gestión+de+Proyectos"
    },
    {
        titulo: "Nivel 9: Gestión de Proyectos",
        descripcion: "Coordina un pequeño proyecto de oficina.",
        reto: "Define objetivos y asigna tareas a 3 compañeros.",
        imagen: "https://via.placeholder.com/300x300.png?text=Gestión+de+Proyectos"
    },
    {
        titulo: "Nivel 10: Gestión de Proyectos",
        descripcion: "Coordina un pequeño proyecto de oficina.",
        reto: "Define objetivos y asigna tareas a 3 compañeros.",
        imagen: "https://via.placeholder.com/300x300.png?text=Gestión+de+Proyectos"
    },
    {
        titulo: "Nivel 11: Gestión de Proyectos",
        descripcion: "Coordina un pequeño proyecto de oficina.",
        reto: "Define objetivos y asigna tareas a 3 compañeros.",
        imagen: "https://via.placeholder.com/300x300.png?text=Gestión+de+Proyectos"
    },
    {
        titulo: "Nivel 12: Gestión de Proyectos",
        descripcion: "Coordina un pequeño proyecto de oficina.",
        reto: "Define objetivos y asigna tareas a 3 compañeros.",
        imagen: "https://via.placeholder.com/300x300.png?text=Gestión+de+Proyectos"
    }
    // Añadir más niveles según sea necesario...
  ];
  
  // Función para crear y mostrar los niveles
  function mostrarNiveles() {
    const container = document.getElementById('game-levels');
    const imageContainer = document.getElementById('level-image-container');
    const levelImage = document.getElementById('level-image');
  
    niveles.forEach((nivel, index) => {
      const nivelDiv = document.createElement('div');
      nivelDiv.classList.add('level');
  
      nivelDiv.innerHTML = `
        <h2>${nivel.titulo}</h2>
        <p><strong>Descripción:</strong> ${nivel.descripcion}</p>
        <p><strong>Reto:</strong> ${nivel.reto}</p>
      `;
  
      // Mostrar imagen al pasar el mouse
      nivelDiv.addEventListener('mouseenter', () => {
        levelImage.src = nivel.imagen;
        imageContainer.style.display = 'block';
      });
  
      // Ocultar imagen cuando el mouse sale
      nivelDiv.addEventListener('mouseleave', () => {
        imageContainer.style.display = 'none';
      });
  
      container.appendChild(nivelDiv);
    });
  }
  
  // Llamar a la función para mostrar los niveles al cargar la página
  window.onload = mostrarNiveles;
  