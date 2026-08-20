# Instrucciones de Trabajo - PC 4
**Widget Asignado:** Avisos Parroquiales

---

## 🛠️ Tareas a realizar en tu rama `feature-pc4`:

### 1. Modificar el HTML (`index.html`):
Buscá el comentario `<!-- [PC 4] AGREGÁ TU WIDGET DE AVISOS PARROQUIALES ABAJO DE ESTE COMENTARIO -->` y agregá el siguiente bloque de código:
```html
<section class="widget-card widget-notices">
    <h3>📢 Novedades</h3>
    <p class="date">Próxima Clase:</p>
    <p>Nivelación de JS Parte II (Objetos y Arrays). Traer ejercicios resueltos.</p>
</section>
```

### 2. Agregar Estilos en CSS (`style.css`):
Andá al final de `style.css` y agregá estos estilos para tu tarjeta:
```css
.widget-notices .date {
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--text-muted);
}
```

### 3. Registrar a tus Integrantes:
Buscá el comentario `<!-- [PC 4] Agregá tu bloque de créditos abajo de este comentario -->` en el footer y agregá tus datos:
```html
<div class="team-credits">
    <h4>PC 4 - Integrantes</h4>
    <ul>
        <li>[Nombre y Apellido Alumno 1]</li>
        <li>[Nombre y Apellido Alumno 2]</li>
    </ul>
</div>
```

---

## 🏁 Siguiente Paso:
Cuando termines de guardar los archivos, hacé commit en tu terminal y subí la rama a GitHub como indica el paso 2 de la [`README.md`](file:///home/axel/Escritorio/Clases/moviles-2026/clases/clase-02/actividad-git/README.md).
