## Aplicación de Librería
Esta es una aplicación de una librería en la que puedes seleccionar tu lista de lectura. La gestión del estado entre los componentes se realiza de diferentes maneras en las distintas ramas del proyecto.
El proyecto está desplegado en la siguiente url: https://library-list-ee214thke-pedro-gramckos-projects.vercel.app/

## Ramas del Proyecto
### Master
En la rama master, todos los componentes están en bookcard.jsx. Aquí, la lógica y los elementos visuales están juntos en un solo archivo, lo que puede ser conveniente para proyectos pequeños o para desarrolladores que prefieren tener todo en un solo lugar.

### EstadoEnElPadre
En la rama EstadoEnElPadre, el padre gestiona el estado, separando la lógica de los elementos visuales. Esto significa que los componentes hijos son responsables únicamente de la presentación, mientras que el componente padre maneja la lógica y el estado. Esta separación puede facilitar el mantenimiento y la escalabilidad de la aplicación.

### Contexto
En la rama contexto, se utiliza un Context para gestionar el estado de los componentes. El uso de Context permite compartir el estado de manera eficiente entre múltiples componentes sin necesidad de pasar propiedades manualmente a través de cada nivel del árbol de componentes. Esta técnica es útil para aplicaciones más grandes y complejas donde el estado global debe ser accesible por muchos componentes.



## Beneficios de Cada Enfoque
- Master: Mantiene todo en un solo archivo, lo que puede ser más fácil de manejar para proyectos pequeños.
- EstadoEnElPadre: Separa la lógica de la presentación, facilitando el mantenimiento y la escalabilidad.
- Contexto: Permite compartir el estado global entre múltiples componentes sin necesidad de pasar propiedades manualmente, ideal para aplicaciones grandes y complejas.
