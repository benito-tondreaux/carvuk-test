
## Ejecución:

Para poder ejecutar este proyecto es necesario tener instalado npm.

Luego, es necesario ejecutar `npm install` para instalar todas las dependencias necesarias.

Finalmente, se debe ejecutar `npm run dev` para poder visitar la aplicación.

## Código:

El proyecto está hecho en VueJs con Typescript junto con `vue-router`. La idea es que en un inicio debes loguearte en el componente `Login` para poder ingresar a la siguiente vista que se encuentra en el componente `Serivices`. 

Luego, en el componente `Services` puedes crear un nuevo servicio, el cual te redirige a través de `vue-router` al componente `ServicesCreate`, en donde existe un form para poder crear un nuevo servicio. Además, puedes hacer click en el ícono a la derecha del nombre de los servicios para poder ver más detalles del servicio seleccionado.

## Por hacer:

Estas son las features que por tiempo no pude lograr pero tenía pensado hacer:

* Poder bloquear las vistas de `Services` si no estaba el usuario logueado.
* Poder eliminar un servicio ya creado.
* Poder realizar la paginación luego de 5 servicios creados.
* En reemplazo de una vista aparte para crear un servicio, poder abrir un modal para crear un servicio y este se visualice directamente en el componente principal de `Services`.


# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
