# Guía Básica de Git y GitHub
**Materia:** Desarrollo de Software para Plataformas Móviles  
**Clase 01:** Introducción y Trabajo Colaborativo

Git es un sistema de control de versiones que registra los cambios realizados sobre los archivos de un proyecto, y GitHub es la plataforma en la nube donde almacenamos esos repositorios para trabajar en equipo y entregar las tareas.

---

## 1. El Ciclo de Trabajo Básico (Paso a Paso)

Cada vez que quieras resolver una consigna y subirla a internet, seguirás este flujo en tu terminal de comandos:

### Paso 1: Clonar el repositorio (Solo la primera vez)
Para descargar una copia de tu proyecto desde GitHub a la computadora de la escuela:
```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
```

### Paso 2: Entrar a la carpeta del proyecto
Antes de ejecutar cualquier comando de Git, la terminal debe estar posicionada dentro de la carpeta del proyecto:
```bash
cd nombre-del-repo
```

### Paso 3: Ver el estado del proyecto
Para saber si modificaste archivos, creaste nuevos o si tenés cosas listas para guardar:
```bash
git status
```
*   Los archivos en **rojo** son cambios locales que Git aún no está siguiendo.
*   Los archivos en **verde** son cambios listos para ser guardados en un commit.

### Paso 4: Preparar los cambios (Staging)
Le indicamos a Git qué archivos modificados queremos incluir en el próximo "guardado":
```bash
# Para agregar un archivo específico:
git add ruta/al/archivo.md

# Para agregar TODOS los archivos modificados a la vez:
git add .
```

### Paso 5: Guardar los cambios (Commit)
Creamos una "foto" o versión guardada de los cambios con un mensaje breve y descriptivo de lo que hicimos:
```bash
git commit -m "feat: crear carpeta clase-01 y responder consignas"
```

### Paso 6: Subir el trabajo a GitHub (Push)
Enviamos todos nuestros commits locales a la nube en GitHub para que el docente pueda verlos y calificarlos:
```bash
git push
```

---

## 2. Comandos Útiles de Consola

*   `pwd`: Muestra la ruta de la carpeta donde estás parado actualmente en la terminal.
*   `ls` (o `dir` en Windows): Muestra la lista de archivos y carpetas dentro de tu directorio actual.
*   `cd ..`: Retrocede un nivel de carpeta (sale de la carpeta actual hacia su carpeta contenedora).
*   `git diff`: Muestra exactamente qué líneas agregaste o borraste en tus archivos antes de hacer un `git add`.

---

## ⚠️ Recordatorio Importante para Aulas Compartidas

Recordá que al terminar la clase, debés cerrar tu sesión en GitHub CLI para proteger tu cuenta y evitar que el grupo del día siguiente sobreescriba tu repositorio:
```bash
gh auth logout
```
*(Confirmar presionando `y` y luego `Enter`)*.
