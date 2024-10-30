
# Prueba Técnica - Información de Bandas Musicales

Este repositorio contiene una aplicación web que permite consultar canciones de una banda musical. La aplicación está desarrollada con **React** (TypeScript) para el frontend y **Flask** para el backend.
## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu máquina:

- [Python](https://www.python.org/downloads/) (3.10 o superior)
- [Node.js](https://nodejs.org/) (14 o superior)
- [npm](https://www.npmjs.com/get-npm) (se instala junto con Node.js)
## Instalación y Configuración del Backend

1. **Ingresa a la carpeta `backend` y abre una consola.**
   ```bash
   cd backend
   ```
2. **Crea la carpeta de entorno.**
   ```bash
   python -m venv ENV
   ```
3. **Activa el entorno virtual.**
En macOS/Linux:
   ```bash
   source ENV/bin/activate
   ```
En Windows:
   ```bash
   ENV\Scripts\activate
   ```
4. **Instala las librerías necesarias.**
   ```bash
   pip install -r requirements.txt
   ```
5. **Edita el archivo `.env.example` y renómbralo a `.env`.**

**(Pasos opcionales)**

6. **Genera una secret key.**
   ```bash
   python -c 'import secrets; print(secrets.token_hex())'
   ```
7. **Agrega la secret key generada en el archivo `.env`.**
8. **Configura la base de datos**
   ```bash
   # Esto generará una base de datos sqlite con las tablas ya creadas
   flask db init
   flask db migrate -m "Initial_db"
   flask db upgrade
   ```
9. **Finalmente, ejecuta Flask.**
   ```bash
   flask run --debug
   ```
Asegúrate de que Flask esté iniciado en el puerto 5000; si no, ejecútalo con:
   ```bash
   flask run --debug --port 5000
   ```
## Instalación del Frontend

1. **Ingresa a la carpeta frontend y abre una consola.**
   ```bash
   cd frontend
   ```
2. **Instala las librerías de React.**
   ```bash
   npm install
   ```
3. **Ejecuta el proyecto.**
   ```bash
   npm run dev
   ```
4. **Accede a la aplicación en tu navegador.**
* Visita `http://localhost:5173`
## Uso de la Aplicación
Al ingresar a la aplicación, verás un formulario donde puedes escribir el nombre de una banda o artista (asegúrate de que esté correctamente escrito; de lo contrario, verás una tabla vacía). Presiona el botón Buscar Banda, lo que cargará una tabla con las canciones y álbumes de la banda. Además, podrás escuchar una fracción de la canción pulsando en el icono de play y pause para detener.
## API Externa

La aplicación utiliza la API pública de iTunes para retornar información sobre productos asociados a bandas musicales. Puedes consultar la API en: 
* `https://itunes.apple.com/search?term=nombre_de_banda_a_buscar`
## Estructura de la API
* **GET** `/search_tracks?name={nombre_banda}`: Retorna información de canciones de una banda musical.
* **POST** `/favoritos`: Marca una canción como favorita.
## Entregable
Este repositorio contiene el código fuente de la aplicación y un archivo README con todo lo necesario para levantar las aplicaciones.
