# Instrucciones para correr el proyecto en local

Este proyecto usa la librería next-auth para manejar la sesión del usuario y
controlar los accesos a las rutas.

Seguir los siguientes pasos para que el proyecto funcione:

1. Crear hash openssl desde la terminal usando el comando

   ```jsx
   openssl rand -base64 32
   ```

2. Crear un archivo .env.local en el root del proyecto
3. Almacenar el hash generado con la variable de ambiente NEXTAUTH_SECRET

   ```jsx
   NEXTAUTH_SECRET = HASH_CREADO;
   ```

4. Agregar la variable de ambiente NEXTAUTH_URL con la url del proyecto

   ```jsx
   NEXTAUTH_URL=http://localhost:3000
   ```

5. Correr el proyecto
