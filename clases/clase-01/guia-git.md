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

## 2. Glosario de comandos de Git (¿Para qué sirve cada uno?)

Para entender a fondo qué hace la terminal cuando ejecutás cada instrucción, acá tenés la explicación técnica de cada comando de Git:

*   **`git clone [URL]`**: Descarga por primera vez un repositorio existente desde GitHub a tu computadora local. Crea una carpeta con todos los archivos y la configuración de Git ya vinculada.
*   **`git status`**: Te muestra el estado actual de tu directorio de trabajo. Te avisa qué archivos fueron modificados, cuáles se crearon nuevos (sin seguimiento) y cuáles ya están preparados en el área de espera (*staging*) listos para confirmarse. **Es el comando que más tenés que usar para evitar subir archivos no deseados.**
*   **`git add [archivo]`** (o `git add .`): Mueve tus cambios del directorio de trabajo al área de espera (*Staging Area*). Es como preparar las cartas dentro de un sobre antes de cerrarlo y enviarlo. El punto `.` indica "agregar todo lo que haya cambiado".
*   **`git commit -m "[mensaje]"`**: Registra permanentemente los cambios que preparaste con `git add` en el historial local del proyecto. Guarda una versión (un "commit") con una etiqueta descriptiva (el mensaje) para saber qué se hizo en ese paso.
*   **`git push`**: Sube todos los commits locales confirmados desde tu computadora a la rama correspondiente en el servidor remoto de GitHub. Es el paso final que publica tu código en la nube.
*   **`git pull`**: Trae y fusiona los últimos cambios que estén en el servidor de GitHub a tu copia local. Sirve para actualizar tu computadora si vos u otra persona subieron cambios desde otro lado.
*   **`git log`**: Muestra el historial completo de commits (versiones guardadas) en orden cronológico inverso, detallando autor, fecha, código identificador y mensaje de cada commit.
*   **`git diff`**: Compara tus archivos actuales con la última versión guardada. Te muestra línea por línea qué agregaste (en verde con un `+`) o qué borraste (en rojo con un `-`) antes de hacer `git add`.

---

## 3. Comandos Útiles de Navegación de Consola

Antes de usar Git, necesitás saber moverte por las carpetas en la terminal:

*   **`pwd`**: Muestra la ruta completa de la carpeta actual donde estás parado en la terminal (ej: `/c/Proyectos-Estudiantes/Grupo-Jueves/mi-repo`).
*   **`ls`** (o `dir` en Windows): Muestra la lista de todos los archivos y carpetas que están adentro del directorio donde estás parado.
*   **`cd [carpeta]`**: Entra a la carpeta especificada (ej: `cd clases`).
*   **`cd ..`**: Retrocede un nivel de carpetas. Te saca de la carpeta actual y te deja en la carpeta de nivel superior.

---

## ⚠️ Recordatorio Importante para Aulas Compartidas

Al finalizar la clase, debés cerrar tu sesión en GitHub CLI para proteger tu cuenta de que otros estudiantes de otros grupos modifiquen tu repositorio:
```bash
gh auth logout
```
*(Confirmar presionando `y` y luego `Enter`)*.

