# Actividad Grupal: Taller de Git Branches (SmartPortal)
**Materia:** Desarrollo de Software para Plataformas Móviles  
**Clase 02:** Trabajo Colaborativo en Equipo y Resolución de Conflictos

En esta actividad práctica, las 5 computadoras del laboratorio trabajaremos sobre el **mismo repositorio remoto en GitHub** creado por el docente. Simularemos un equipo de desarrollo profesional integrando características de forma paralela mediante **ramas (branches)**, aprendiendo a resolver conflictos de fusión (*Merge Conflicts*).

---

## 👥 Roles y Tareas de los Equipos

Cada computadora tiene una tarea específica asignada en archivos individuales dentro de esta carpeta:
*   **PC 1:** Ver [`instrucciones-pc1.md`](file:///home/axel/Escritorio/Clases/moviles-2026/clases/clase-02/instrucciones-pc1.md)
*   **PC 2:** Ver [`instrucciones-pc2.md`](file:///home/axel/Escritorio/Clases/moviles-2026/clases/clase-02/instrucciones-pc2.md)
*   **PC 3:** Ver [`instrucciones-pc3.md`](file:///home/axel/Escritorio/Clases/moviles-2026/clases/clase-02/instrucciones-pc3.md)
*   **PC 4:** Ver [`instrucciones-pc4.md`](file:///home/axel/Escritorio/Clases/moviles-2026/clases/clase-02/instrucciones-pc4.md)
*   **PC 5:** Ver [`instrucciones-pc5.md`](file:///home/axel/Escritorio/Clases/moviles-2026/clases/clase-02/instrucciones-pc5.md)

---

## 🏁 Paso 1: Clonar y crear tu propia rama (Branch)

1. Abran la terminal Git Bash dentro de su directorio de grupo (`C:\Proyectos-Estudiantes\...`) y clonen el repositorio grupal compartido por el docente:
   ```bash
   git clone [URL-DEL-REPO-COMPARTIDO]
   cd desafio-git-grupal
   ```
2. Configuren su firma local para este proyecto específico (así el docente sabe quién hizo qué commit):
   ```bash
   git config user.name "PC [Número de PC]"
   git config user.email "pc[N]@example.com"
   ```
3. Creen una rama de desarrollo para su computadora y muévanse a ella:
   ```bash
   git checkout -b feature-pc[N]
   ```
   *(Reemplacen `[N]` por el número de su computadora. Ej: `feature-pc3`)*.

---

## 🛠️ Paso 2: Desarrollar su Tarea y hacer Push

1. Abran el proyecto en VS Code (`code .`).
2. Sigan detalladamente las instrucciones de programación de su archivo `instrucciones-pc[N].md`.
3. Al terminar y validar que sus cambios guardados no rompan la estructura, hagan commit y suban su rama a GitHub:
   ```bash
   git add .
   git commit -m "feat: implementar widget e integrantes de PC [N]"
   git push -u origin feature-pc[N]
   ```
4. 🛑 **Pausa de la Clase:** Esperen a que todos los equipos hayan subido sus respectivas ramas a GitHub antes de avanzar.

---

## 🔄 Paso 3: Integración Sincrónica y Auto-merge

Ahora integraremos las ramas a la rama principal `main`.

### 🔹 Turno de la PC 1 y PC 4
1. **PC 1** y **PC 4** vuelven a `main`, se bajan los últimos cambios del servidor e integran su rama local:
   ```bash
   git checkout main
   git pull origin main
   git merge feature-pc[N]
   git push origin main
   ```
2. Como editaron secciones separadas de `index.html`, las fusiones se resolverán automáticamente (*Auto-merge*).
3. 🛑 **Pausa de la Clase:** Observen cómo GitHub unió ambos códigos en `main`. Las **PCs 2, 3 y 5** ejecutan `git pull origin main` para tener todo al día.

---

## 💥 Paso 4: Fusión con Conflictos (HTML & CSS)

### 🔹 Turno de la PC 2
1. **PC 2** vuelve a `main`, hace `pull`, integra su rama y la sube:
   ```bash
   git checkout main
   git pull origin main
   git merge feature-pc2
   git push origin main
   ```

### 🔹 Turno de la PC 3 (Conflicto HTML)
1. **PC 3** vuelve a `main`, hace `pull` y ejecuta:
   ```bash
   git checkout main
   git pull origin main
   git merge feature-pc3
   ```
2. **¡BUM! Conflicto en `index.html`.** Git detendrá la consola porque PC 2 y PC 3 intentaron agregar su widget en el mismo lugar físico de la grilla.
3. **Resolución:** Abran `index.html` en VS Code, analicen el conflicto grupalmente, editen el código para que queden ambas tarjetas ordenadas, borren las marcas de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`), guarden y confirmen:
   ```bash
   git add index.html
   git commit -m "resolve: unificar grilla de PC 2 y PC 3"
   git push origin main
   ```

### 🔹 Turno de la PC 5 (Conflicto CSS)
1. **PC 5** hace el mismo proceso:
   ```bash
   git checkout main
   git pull origin main
   git merge feature-pc5
   ```
2. **¡BUM! Conflicto en `style.css`.** Chocará la variable del color de acento modificada por PC 3 y PC 5.
3. **Resolución:** Abran `style.css` en VS Code, elijan un color definitivo (o creen uno nuevo combinándolos), limpien el archivo y completen el ciclo:
   ```bash
   git add style.css
   git commit -m "resolve: unificar variable de color primario"
   git push origin main
   ```

---

## 🏁 Paso 5: El Cierre
1. Todas las PCs se cambian a `main` y ejecutan:
   ```bash
   git checkout main
   git pull origin main
   ```
2. Abran `index.html` en sus navegadores. Verán el SmartPortal completo con las 5 tarjetas armadas, el color acento integrado y las firmas de todos los integrantes visibles. ¡Felicidades!
