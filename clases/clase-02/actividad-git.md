# Actividad Guiada: Taller de Git Masivo (Simulación en Vivo)
**Materia:** Desarrollo de Software para Plataformas Móviles  
**Clase 02:** Git Colaborativo y Resolución de Conflictos

En este taller trabajaremos las 5 computadoras del laboratorio sobre el **mismo repositorio remoto en GitHub** que creará el docente. Cada equipo (PC 1 a PC 5) tendrá tareas específicas asignadas paso a paso. Nos detendremos después de cada paso a evaluar qué ocurrió en la terminal.

---

## 📋 Asignación de Equipos y Roles
*   **PC 1:** Estructura Inicial (HTML5 Base)
*   **PC 2:** Header y Diseño Superior
*   **PC 3:** Contenido Principal (Opción A)
*   **PC 4:** Footer y Diseño Inferior
*   **PC 5:** Contenido Principal (Opción B - Conflicto)

---

## 🏁 Paso 0: Clonar el Repositorio Compartido
El docente creará el repositorio `desafio-git-grupal` y les dará acceso. Cada PC clonará la carpeta en su disco local `C:\Proyectos-Estudiantes\...`:
```bash
git clone [URL-DEL-REPO-COMPARTIDO]
cd desafio-git-grupal
```
*Configuren su firma local para este proyecto:*
```bash
git config user.name "PC [Número de PC]"
git config user.email "pc[N]@example.com"
```

---

## 🛣️ Fase 1: Creación y Sincronización en Paralelo (Paso a Paso)

### 🔹 Paso 1 (Solo PC 1)
1. **PC 1** crea el archivo `index.html` con una estructura básica HTML5 vacía.
2. Hace commit y push:
   ```bash
   git add index.html
   git commit -m "feat: crear estructura html base"
   git push
   ```
3. 🛑 **Pausa de la Clase:** El docente verifica que el archivo esté en GitHub. **Las PCs 2, 3, 4 y 5** ejecutan en su consola `git pull` para bajarse el archivo de la PC 1.

### 🔹 Paso 2 (PC 2 y PC 4 trabajando en simultáneo)
1. **PC 2** abre `index.html` y agrega un encabezado `<header>` con el título de la app dentro del `<body>`.
2. **PC 4** abre `index.html` y agrega un pie de página `<footer>` al final del `<body>`.
3. Ambos guardan, hacen `add` y `commit` en su máquina:
   ```bash
   git add index.html
   git commit -m "feat: agregar seccion"
   ```
4. **El Desafío:**
   * **PC 2** ejecuta `git push` primero. Sube con éxito.
   * **PC 4** ejecuta `git push` después. Será rebotado con error *[rejected]*.
5. 🛑 **Pausa de la Clase:** ¿Por qué rebotó a la PC 4 si escribieron cosas distintas? El docente lo explica en el pizarrón.
6. **Resolución de PC 4:** Ejecuta `git pull`. Git resolverá la fusión automáticamente (*Auto-merge*) porque modificaron partes distintas del archivo. Luego, PC 4 hace `git push`.
7. **Actualización:** Las demás PCs (1, 2, 3 y 5) hacen `git pull` para tener todo al día.

---

## 💥 Fase 2: Choque Frontal y Resolución de Conflictos

### 🔹 Paso 3 (PC 3 y PC 5 editando la misma línea)
1. Todas las PCs tienen el archivo actualizado.
2. En el archivo `index.html`, en el medio del `<body>` (por ejemplo, en la línea 12), hay una sección `<main>`.
3. **PC 3** agrega en la línea 12: `<p>Desarrollado con cariño por la PC 3</p>`. Guarda y hace commit.
4. **PC 5** agrega en la **misma línea 12**: `<p>Creado de forma colaborativa por la PC 5</p>`. Guarda y hace commit.
5. **El Choque:**
   * **PC 3** ejecuta `git push` primero. Sube limpio.
   * **PC 5** ejecuta `git push` y es rechazado.
6. **PC 5** ejecuta `git pull` para intentar solucionar el rechazo... y la terminal avisa:
   `CONFLICT (content): Merge conflict in index.html`
7. 🛑 **Pausa de la Clase:** Analizamos el conflicto en la pantalla de la PC 5 y en el pizarrón. ¿Qué significan `<<<<<<<`, `=======` y `>>>>>>>`?

### 🔹 Paso 4: Resolver el Conflicto (PC 5)
1. **PC 5** abre `index.html` en VS Code.
2. Combina el código para conservar las firmas de ambos equipos, borrando por completo las líneas inyectadas por Git. El resultado debe quedar limpio, por ejemplo:
   ```html
   <p>Desarrollado con cariño por la PC 3 y la PC 5</p>
   ```
3. Guarda el archivo.
4. Completa la fusión en la terminal:
   ```bash
   git add index.html
   git commit -m "resolve: unificar firmas de PC 3 y PC 5"
   git push
   ```
5. **Finalización:** El resto de las PCs ejecutan `git pull` y comprueban el resultado final.
