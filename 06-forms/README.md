# Forms

Este ejemplo muestra el uso de un Form en AngularJS. En el formulario se puede ver un input del tipo email, un combo y un textarea para comentarios. Sobre los campos hay validaciones. El botón Submit no se habilita hasta que el formulario no sea válido. A la derecha puede verse el comportamiento de las propiedades $valid y $pristine del form.

Una vez que se agrega un comentario, el mismo aparecerá en la tabla de más abajo.

## ¿Cómo ejecutar el ejemplo?

Si es la primera vez que se ejecuta, se deben bajar las dependencias con Bower:
> bower install

Luego, una vez obtenidas las dependencias de Bower, se puede abrir el index.html con un navegador web.

## ¿Cómo ejecutar los unit tests?

Si es la primera vez que se ejecutan, se deben bajar las dependencias con npm:
> npm install

Parado en el root del proyecto, ejecutar:
> karma start
