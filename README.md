# CLEVERPY TEST


Esta es una app encargada de manejar post (ver, editar, eliminar) 
## Link de la app deployada: https://cleverpy-diego-estela.vercel.app/



## Herramientas:

En este proyecto se utilizaron las siguientes herramientas:

- ReactJs 18.
- TypeScript (tipado)
- CSS (con clases, puro, style component).
- React Router Dom (navegación).
- Axios (fetching)
- Redux Toolkit (manejo de datos)
- Context (persistencia de usuarios)
- Firebase Auth (Autenticación de usuario y ruta privada)
- Vercel (se alojo la app)

## Para comenzar

1. Debe clonar el repositorio utilizando :
**Git clone** https://github.com/DiegoEstela/cleverpy-diego.estelaa.git
2. Luego, deberá intalar todas las dependencias del proyecto ejecutando:
*yarn** 
3. Para finalizar, puede ejecutar el proyecto y realizar cualquier tipo de Prueba ejecutando:
**yarn start**
## Secciones del Proyecto

### Inicio de sesión
Para poder visualizar los post, como tambien administrarlos, el usuario deberá registrarse por única vez y, de esta menera, podrá acceder a todas las secciones de la web (en modo de prueba y evitando demoras la apis keys se encuentran hardcodeadas, no obstante es de mi conocimiento que no es una buena practica)

### Barra de Navegación
La misma le permitirá al usuario podra **resetear el fetch**, **iniciar sesion o cerrarla**, **llevar la cuenta de los posts**.

### Posts
En esta, podrás visualizar todos los posts, cada producto cuenta con un boton que te llevará a la sección **detalle del post** en la cual podras leerte mas codo el cuerpo del mismo.
### Back Card (editar y borrar)
Una vez hayas hecho un hover a la card, en la parte de atras encontraras los iconos de **Eliminar** que borrar de forma provisoria el post y **Editar** lo cual nos dejara cambiar el titulo como el cuerpo del mismo.


