# Directives

El ejemplo hace lo mismo que el 06-forms. Un formulario guarda comentarios que son agregados a la tabla de comentarios.

Este ejemplo muestra cómo crear custom directives. Las directivas que se crean en este ejemplo son simples. Cada input del formulario se encapsula en una directiva. Además se muestra otra directiva llamada cent-message, un poco más compleja, que muestra mensajitos en pantalla con un fade-in y fade-out de Bootstrap.

En este ejemplo también se puede ver el uso de templates mediante la directiva ng-include.

## ¿Cómo ejecutar el ejemplo?

Si es la primera vez que se ejecuta, se deben bajar las dependencias con Bower:
> bower install

Luego, una vez obtenidas las dependencias de Bower, se deben bajar las dependencias con npm:
> npm install

Luego, una vez obtenidas las dependencias de NPM, ejecutar:
> node server.js

Abrir un navegador y acceder a http://localhost:3000

## ¿Cómo ejecutar los unit tests?

Si es la primera vez que se ejecutan, se deben bajar las dependencias con npm:
> npm install

Parado en el root del proyecto, ejecutar:
> karma start
