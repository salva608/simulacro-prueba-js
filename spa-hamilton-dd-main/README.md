# Hamilton

Aplicación web con enrutamiento dinámico, autenticación y servidor API JSON.(basica, solo lo visto en clase)

## Clonar el Proyecto

```bash
git clone <URL_DEL_REPOSITORIO>
cd hamilton
```

## Instalación de Dependencias

Instala todas las dependencias necesarias del proyecto:

```bash
npm i
```

## Iniciar el Servidor de Desarrollo

Inicia el servidor de desarrollo con Vite en `http://localhost:5173`:

```bash
npm run dev
```

## Iniciar el Servidor API

En otra terminal, inicia el servidor JSON Server en `http://localhost:3001`:

```bash
npm run api
```

## Uso

1. Ejecuta `npm i` para instalar las dependencias
2. Abre dos terminales:
   - En la primera: ejecuta `npm run dev` para iniciar la aplicación
   - En la segunda: ejecuta `npm run api` para iniciar el servidor API
3. Accede a `http://localhost:5173` en tu navegador

## Estructura del Proyecto

```
.
├── app.js              # Punto de entrada principal
├── db.json             # Base de datos JSON
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS
├── package.json        # Dependencias del proyecto
├── router/
│   └── routes.js       # Configuración de rutas
├── services/
│   └── users.js        # Servicios de usuario
├── templates/
│   ├── home.html       # Template de inicio
│   └── login.html      # Template de login
└── views/
    ├── home.js         # Lógica de la vista home
    └── login.js        # Lógica de la vista login
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run api` - Inicia el servidor API JSON en puerto 3001
