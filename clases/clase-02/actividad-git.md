# Actividad Grupal: El Embotellamiento de Git (Tránsito en Main)
**Materia:** Desarrollo de Software para Plataformas Móviles  
**Clase 02:** Taller de Git Colaborativo y Resolución de Conflictos

En esta actividad práctica trabajaremos las 5 computadoras del laboratorio sobre un **mismo repositorio remoto en GitHub**. Aprenderemos a resolver los dos problemas más comunes del trabajo en equipo: la sincronización de archivos diferentes y el temido **conflicto de fusión (Merge Conflict)** cuando dos personas editan el mismo archivo al mismo tiempo.

---

## 📋 Requisitos Previos
1. El docente les compartirá el enlace al repositorio grupal de la clase (ej: `https://github.com/eest5-moviles-2026/desafio-git-grupal`).
2. Una sola persona por computadora abrirá la terminal Git Bash en la carpeta asignada a su grupo (en el disco local `C:\Proyectos-Estudiantes\...`).
3. Clonen el repositorio y entren a su carpeta:
   ```bash
   git clone [URL-DEL-REPO-COMPARTIDO]
   cd desafio-git-grupal
   ```
4. Configuren su firma de commit local (no global):
   ```bash
   git config user.name "PC [Número de PC] - Grupo [Día]"
   git config user.email "alumno-pc[N]@example.com"
   ```

---

## 🕹️ Fase 1: Sincronización en Paralelo (Aprender a usar `git pull`)

En esta fase, cada computadora tiene asignada una línea específica en el archivo `equipo.md`.

1. Abran el archivo `equipo.md` en VS Code.
2. Modifiquen **únicamente la línea asignada a su computadora** reemplazando el texto `(Esperando conexión...)` por el nombre de los integrantes sentados en esa máquina. **No toquen las líneas de las demás PCs.**
3. Guarden el archivo.
4. En la terminal preparen y confirmen el cambio:
   ```bash
   git add equipo.md
   git commit -m "feat: registrar integrantes de la PC [Número de tu PC]"
   ```
5. **El Embotellamiento:** A la cuenta de 3 del docente, **todas las computadoras deben intentar hacer `git push` a la vez**.
6. **¿Qué va a pasar?**
   * Solo una PC logrará subir sus cambios. Las otras 4 recibirán un mensaje de rechazo de GitHub (*[rejected] - non-fast-forward*).
7. **La Solución:** Las PCs rechazadas deben ejecutar:
   ```bash
   git pull
   ```
   * *Nota:* Como cada PC editó una línea diferente, Git fusionará los cambios automáticamente. Si se abre un editor de texto en consola (Vim) pidiendo un mensaje de fusión, guarden y salgan (presionen `Esc`, escriban `:wq` y den `Enter`).
8. Una vez hecho el `pull` con éxito, vuelvan a intentar el push:
   ```bash
   git push
   ```
   *(Repitan el proceso de `pull` y luego `push` por turnos hasta que todas las PCs hayan subido sus integrantes).*

---

## 💥 Fase 2: Choque Masivo (Resolución de Conflictos)

Ahora forzaremos un conflicto de código real donde dos o más computadoras editan exactamente la misma línea del mismo archivo.

1. Todas las computadoras deben hacer un último `git pull` para estar al día.
2. Abran `equipo.md`. Vayan a la **última línea** del archivo (abajo de todo).
3. Escriban en esa misma línea una propuesta de idea para el proyecto final de la materia.
4. Guarden el archivo, prepárenlo y hagan el commit:
   ```bash
   git add equipo.md
   git commit -m "idea: propuesta de proyecto final"
   ```
5. A la de 3, vuelvan a hacer `git push` todos juntos.
6. El primero subirá con éxito. El resto recibirá rechazo.
7. Las PCs rechazadas deben hacer:
   ```bash
   git pull
   ```
8. **¡Conflicto de Merge!** La terminal avisará que hay un conflicto en `equipo.md` y detendrá la fusión.
9. **¿Cómo solucionarlo?**
   * Abran `equipo.md` en VS Code. Verán líneas extrañas con marcas de conflicto:
     * `<<<<<<< HEAD` (Tus cambios locales).
     * `=======` (Separador).
     * `>>>>>>> [código-de-commit]` (Los cambios que vienen de GitHub).
   * Usen las opciones flotantes de VS Code (*Accept Current Change*, *Accept Incoming Change* o *Accept Both*) para quedarse con ambas ideas de proyecto.
   * Limpien las marcas de conflicto (los símbolos `<<<<<<<`, `=======` y `>>>>>>>` deben borrarse por completo).
   * Guarden el archivo.
10. Finalicen la fusión en la terminal:
    ```bash
    git add equipo.md
    git commit -m "resolve: unificar propuestas de proyecto"
    git push
    ```
    *(A medida que las PCs van subiendo su resolución, la siguiente PC tendrá que hacer `pull` y resolver un conflicto con aún más propuestas añadidas. ¡Buena suerte!)*
