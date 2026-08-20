# Instrucciones de Trabajo - PC 1
**Widget Asignado:** Accesos Rápidos (Links Útiles)

---

## 🛠️ Tareas a realizar en tu rama `feature-pc1`:

### 1. Desarrollar el HTML (`index.html`):
Buscá el comentario `<!-- [PC 1] AGREGÁ TU WIDGET DE ACCESOS RÁPIDOS ABAJO DE ESTE COMENTARIO -->`. Debés programar allí una tarjeta que cumpla con los siguientes requisitos:
1. Una etiqueta `<section>` contenedora con las clases `widget-card` y `widget-links`.
2. Adentro, un título `<h3>` que diga `🔗 Accesos Rápidos`.
3. Un párrafo `<p>` corto indicando para qué sirven los enlaces.
4. Una lista desordenada (`<ul>` con clase `links-list`) que contenga al menos dos enlaces (`<a>`) externos: uno a GitHub (`https://github.com`) y otro a MDN Web Docs (`https://developer.mozilla.org`). Ambos deben abrirse en una pestaña nueva (`target="_blank"`).

### 2. Escribir los Estilos en CSS (`style.css`):
Andá al final del archivo `style.css` y escribí las reglas de diseño necesarias para que tu tarjeta quede estéticamente impecable:
1. Modificá la clase `.widget-links .links-list` para quitarle los círculos/viñetas por defecto a la lista, quitarle el relleno izquierdo (`padding-left: 0`) y agregarle un margen superior de `8px`.
2. Estilá las etiquetas `.widget-links a` para que:
   * Tengan el color principal de la app usando la variable `--primary-color`.
   * No tengan la línea de subrayado común (`text-decoration: none`).
   * Tengan un grosor de fuente semibold (`font-weight: 600`) y tamaño de `0.8rem`.
3. Agregá un efecto hover (`:hover`) sobre tus enlaces para que se muestre el subrayado únicamente cuando pasás el mouse por encima.

### 3. Registrar a tus Integrantes:
Buscá el comentario `<!-- [PC 1] Agregá tu bloque de créditos abajo de este comentario -->` en el footer. Debés crear una estructura HTML que contenga:
1. Un contenedor `<div>` con la clase `team-credits`.
2. Un título `<h4>` que diga `PC 1 - Integrantes`.
3. Una lista desordenada (`<ul>`) que contenga los nombres y apellidos reales de todos los integrantes sentados en tu computadora.

---

## 🏁 Siguiente Paso:
Cuando termines de guardar y verificar que el diseño se vea bien en tu navegador, hacé commit en tu terminal y subí la rama a GitHub como indica el paso 2 de la [`README.md`](file:///home/axel/Escritorio/Clases/moviles-2026/clases/clase-02/actividad-git/README.md).
