# Desarrollo de Software para Plataformas Móviles (7° Año)
### E.E.S.T N° 5 - Lanús (Tecnicatura en Programación)

Este repositorio contiene la planificación, recursos didácticos, códigos de ejemplo y guías prácticas para la materia dictada por el Prof. **Axel Castellano Gutiérrez** durante el ciclo lectivo 2026.

> [!IMPORTANT]
> 📢 **AULA VIRTUAL (Google Classroom):** Unite a nuestra plataforma de Google Classroom para recibir anuncios oficiales, entregar tareas y ver calificaciones a través del siguiente enlace: [**Invitación a Google Classroom (Código de clase: `me5dspnv`)**](https://classroom.google.com/c/ODY5MTg3OTQ3NzM0?cjc=me5dspnv).
https://classroom.google.com/c/ODY5MTg3OTQ3NzM0?cjc=me5dspnv

---

## 📌 Enfoque Pedagógico y Tecnológico
Debido a las restricciones de tiempo y recursos técnicos habituales en el entorno escolar, el curso se enfoca en el desarrollo de **Aplicaciones Web Progresivas (PWAs)** utilizando tecnologías web estándar (HTML, CSS y JavaScript Vanilla). 

Este enfoque permite:
*   Aprender los conceptos fundamentales del desarrollo móvil (Mobile First, layouts fluidos, consumo de APIs, ciclo de vida del software, persistencia local y soporte offline).
*   Desarrollar y probar aplicaciones en celulares reales **sin necesidad de configurar entornos de desarrollo complejos** (como Android Studio, SDKs de Java o emuladores) en las computadoras de la escuela.
*   Desplegar aplicaciones reales a producción usando servicios gratuitos de hosting en la nube.

---

## 📅 Contenidos y Planificación
*   [Planificación de clases detallada](file:///home/axel/Escritorio/Clases/planificacion-2026.md): Cronograma clase por clase con conceptos y actividades prácticas de agosto a diciembre.

---

## 📂 Estructura del Repositorio
*   📁 `planificacion/`: Documentación del proyecto docente y el calendario escolar.
*   📁 `clases/`: Ejemplos prácticos y desafíos planteados para cada clase (ej. `clases/clase-01/`).
*   📁 `recursos/`: Enlaces a documentación oficial de MDN, tutoriales y cheat-sheets útiles.

---

## 🛠️ Requisitos para las Clases
Para participar de las clases prácticas, los estudiantes necesitarán:
1.  **Editor de código:** Visual Studio Code (con la extensión *Live Server* instalada).
2.  **Navegador moderno:** Google Chrome, Brave, Firefox o Microsoft Edge para utilizar las Herramientas de Desarrollador (F12).
3.  **Cuenta de GitHub:** Para subir sus entregas y trabajar de forma colaborativa.
4.  **Dispositivo Móvil:** Para testear las aplicaciones reales instalándolas como PWAs.

---

## 💻 Protocolo de Git en el Laboratorio (¡Obligatorio!)
Dado que las computadoras del laboratorio son compartidas, para evitar que otros estudiantes utilicen tus credenciales o pisen tus entregas, debés seguir este protocolo en cada clase:

### 1. Ubicación del Workspace
Cloná tu repositorio únicamente dentro de la carpeta asignada a tu grupo en el disco local `C:\`:
*   **Grupo Jueves:** `C:\Proyectos-Estudiantes\Grupo-Jueves\tu-nombre-de-usuario\`
*   **Grupo Viernes:** `C:\Proyectos-Estudiantes\Grupo-Viernes\tu-nombre-de-usuario\`

### 2. Firma Local de Commits (No Global)
No uses `--global` al configurar tu nombre y correo en la terminal de la escuela. En su lugar, entra a la carpeta de tu repositorio clonado y configuralo **localmente**:
```bash
cd C:\Proyectos-Estudiantes\Grupo-[Día]\tu-repositorio
git config user.name "Tu Nombre Completo"
git config user.email "tu-email-registrado-en-github@example.com"
```

### 3. Autenticación con GitHub CLI (`gh`)
*   **Al iniciar la clase:** Iniciá tu sesión en la terminal ejecutando:
    ```bash
    gh auth login
    ```
    Seleccioná `GitHub.com`, protocolo `HTTPS`, confirmá con `Yes` para autenticar Git, elegí `Login with a web browser`, copiá el código de 8 dígitos y presiona Enter para autorizar en el navegador.
*   **Al finalizar la clase:** Cerrá tu sesión obligatoriamente para dejar la máquina limpia:
    ```bash
    gh auth logout
    ```

---

## ⚖️ Criterios de Evaluación
La materia se evalúa de forma continua a través de:
*   **Participación y Trabajo en Taller:** Actitud proactiva, resolución colaborativa de bugs y avance clase a clase.
*   **Proyecto Integrador Grupal:** Implementación de una PWA funcional para resolver un problema de la comunidad escolar. Se evaluará la calidad del código, usabilidad y cumplimiento de objetivos (Mobile First, Offline, Deploy).
*   **Demo Day:** Defensa oral del proyecto integrador en la última clase.
