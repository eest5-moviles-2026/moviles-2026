# Instrucciones de Trabajo - PC 1
**Widget Asignado:** Accesos Rápidos (Links Útiles)

---

## 🛠️ Tareas a realizar en tu rama `feature-pc1`:

### 1. Modificar el HTML (`index.html`):
Buscá el comentario `<!-- [PC 1] AGREGÁ TU WIDGET DE ACCESOS RÁPIDOS ABAJO DE ESTE COMENTARIO -->` y agregá el siguiente bloque de código:
```html
<section class="widget-card widget-links">
    <h3>🔗 Accesos Rápidos</h3>
    <p>Enlaces clave para la clase:</p>
    <ul class="links-list">
        <li><a href="https://github.com" target="_blank">GitHub</a></li>
        <li><a href="https://developer.mozilla.org" target="_blank">MDN Docs</a></li>
    </ul>
</section>
```

### 2. Agregar Estilos en CSS (`style.css`):
Andá al final de `style.css` y agregá estos estilos para tu tarjeta:
```css
.widget-links .links-list {
    list-style: none;
    padding-left: 0;
    margin-top: 8px;
}
.widget-links li {
    margin-bottom: 6px;
}
.widget-links a {
    color: var(--primary-color);
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 600;
}
.widget-links a:hover {
    text-decoration: underline;
}
```

### 3. Registrar a tus Integrantes:
Buscá el comentario `<!-- [PC 1] Agregá tu bloque de créditos abajo de este comentario -->` en el footer y agregá tus datos:
```html
<div class="team-credits">
    <h4>PC 1 - Integrantes</h4>
    <ul>
        <li>[Nombre y Apellido Alumno 1]</li>
        <li>[Nombre y Apellido Alumno 2]</li>
    </ul>
</div>
```

---

## 🏁 Siguiente Paso:
Cuando termines de guardar los archivos, hacé commit en tu terminal y subí la rama a GitHub como indica el paso 2 de la [`actividad-git.md`](file:///home/axel/Escritorio/Clases/moviles-2026/clases/clase-02/actividad-git.md).
