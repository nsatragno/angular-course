# Scopes

Este ejemplo muestra cómo funciona una jerarquía de scopes en AngularJS. Hay un controller padre, dos controller hijos y cuatro nietos, dos hijos de cada hijo. En la aplicación web se puede ver cómo entre los controllers familiares se pueden mandar regalos. La comunicación se hace entre eventos haciendo uso y abuso de $scope.$broadcast y $scope.$emit.

## ¿Cómo ejecutar el ejemplo?

Si es la primera vez que se ejecuta, se deben bajar las dependencias con NPM:
> npm install

Luego, una vez obtenidas las dependencias, ejecutar:
> grunt

Abrir un navegador y acceder a http://localhost:3000

## ¿Cómo ejecutar los unit tests?

Si es la primera vez que se ejecutan, se deben bajar las dependencias con npm:
> npm install

Parado en el root del proyecto, ejecutar:
> grunt test
