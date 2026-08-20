# Instrucciones de Trabajo - PC 2
**Widget Asignado:** Estado del Laboratorio (Netbooks)

---

## 🛠️ Tareas a realizar en tu rama `feature-pc2`:

### 1. Desarrollar el HTML (`index.html`):
Buscá el comentario `<!-- [PC 2] AGREGÁ TU WIDGET DE ESTADO DEL LAB ABAJO DE ESTE COMENTARIO -->`. Debés programar allí una tarjeta que cumpla con los siguientes requisitos:
1. Una etiqueta `<section>` contenedora con las clases `widget-card` and `widget-status`.
2. Adentro, un título `<h3>` que diga `💻 Estado del Lab`.
3. Un contenedor `<div>` con la clase `status-indicator`. Adentro debe tener:
   * Un `<span>` con la clase `dot green` (será el círculo de luz indicadora).
   * Un `<span>` con la clase `text` que diga `Lab Activo`.
4. Un párrafo `<p>` que diga `Netbooks conectadas: ` y resalte el número `14` usando una etiqueta de énfasis fuerte (`<strong>`).

### 2. Escribir los Estilos en CSS (`style.css`):
Andá al final del archivo `style.css` y escribí las reglas de diseño necesarias para que tu tarjeta quede estéticamente impecable:
1. Modificá la clase `.widget-status .status-indicator` para que muestre sus elementos alineados en fila horizontal (`display: flex`), alineados verticalmente al centro (`align-items: center`), con una separación (`gap`) de `8px` y un margen inferior de `5px`.
2. Estilá la luz indicadora `.widget-status .dot`: debe tener ancho y alto de `10px`, ser un círculo perfecto (`border-radius: 50%`), tener fondo verde brillante (`background-color: #10b981`) y un efecto de brillo de luz de fondo usando `box-shadow` en color verde.
3. Modificá `.widget-status .text` para que su fuente sea de `0.8rem` y un grosor de `600`.

### 3. Registrar a tus Integrantes:
Buscá el comentario `<!-- [PC 2] Agregá tu bloque de créditos abajo de este comentario -->` en el footer. Debés crear una estructura HTML que contenga:
1. Un contenedor `<div>` con la clase `team-credits`.
2. Un título `<h4>` que diga `PC 2 - Integrantes`.
3. Una lista desordenada (`<ul>`) que contenga los nombres y apellidos reales de todos los integrantes sentados en tu computadora.

---

## 🏁 Siguiente Paso:
Cuando termines de guardar y verificar que el diseño se vea bien en tu navegador, hacé commit en tu terminal y subí la rama a GitHub como indica el paso 2 de la [`README.md`](file:///home/axel/Escritorio/Clases/moviles-2026/clases/clase-02/actividad-git/README.md).
