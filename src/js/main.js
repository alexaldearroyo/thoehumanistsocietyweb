import '../styles/styles.css';

const app = document.getElementById('app');

const sections = {
    Entity: "Información sobre la entidad.",
    Vision: "La visión de nuestra empresa.",
    Projection: "Lo que esperamos para el futuro.",
    Activity: "Nuestras principales actividades."
};

const menu = document.createElement('div');
menu.classList.add('menu');

for (let title in sections) {
    const menuItem = document.createElement('span');
    menuItem.textContent = title;
    menuItem.addEventListener('click', function() {
        contentContainer.innerHTML = ''; // Limpia el contenido anterior

        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        
        h2.textContent = title;
        p.textContent = sections[title];

        // contentContainer.appendChild(h2); 
        contentContainer.appendChild(p);
    });
    menu.appendChild(menuItem);
}

app.appendChild(menu);

const contentContainer = document.createElement('div');
contentContainer.classList.add('content');
app.appendChild(contentContainer);

// Automáticamente muestra el contenido de "Entity" al inicio.
document.querySelector('.menu span').click();
