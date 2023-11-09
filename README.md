# FelicidadEmpleado

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Requisitos Prueba Senior

Tomar en consideracion:
- Todas las bibliotecas o marcos de JavaScript están a su disposicion
- Solo para navegadores mas recientes
- Utilice TypeScript y ES6
- SCSS
- Puntos extra:
    -Calidad del codigo
    -Soporte movil
    -Estructura de la aplicacion
    Unit test
    Experiencia de usuario
    Optimizacion (tiempos de carga y rendimiento de renderizado)

Empecemos:
Le presentamos la "Herramienta de seguimiento de la felicidad del empleado" o HSFE, para acelerar las cosas.
HSFE ayuda al usuario a realizar un seguimiento del nivel de felicidad de las personas relacionadas con su empresa

Cada persona tendra:
- Nombre
- Categoria (Empleado o gerente)
- nombre de empresa
- nivel de felicidad

Queremos que enumere a las personas y permita buscarlas por su nombre o categoria. Los resultados deben incluir la posibilidad de ordenarlos por nivel de felicidad, categoria o empresa en orden ascendente y descendente.
Tambien queremos que los usuarios seleccionen a que personas rastrear, como una lista de favoritos, para comprobar como evolucionan. Recomendamos mostrar la lista de favoritos dentro de un modal al que se pueda acceder facilmente mediante la barra de navegacion.
En el modal de favoritos, quiero poder buscar por nombre, categoria y empresa y tener la posibilidad de eliminar a las personas de la lista de favoritos, sin tener que cerrarla.
Paginacion.
No se requiere persistencia

