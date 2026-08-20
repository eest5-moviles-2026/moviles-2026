# Instrucciones de Trabajo - PC 2
**Widget Asignado:** Estado del Laboratorio (Netbooks)

---

## 🛠️ Tareas a realizar en tu rama `feature-pc2`:

### 1. Modificar el HTML (`index.html`):
Buscá el comentario `<!-- [PC 2] AGREGÁ TU WIDGET DE ESTADO DEL LAB ABAJO DE ESTE COMENTARIO -->` y agregá el siguiente bloque de código:
```html
<section class="widget-card widget-status">
    <h3>💻 Estado del Lab</h3>
    <div class="status-indicator">
        <span class="dot green"></span>
        <span class="text">Lab Activo</span>
    </div>
    <p>Netbooks conectadas: <strong>14</strong></p>
</section>
```

### 2. Agregar Estilos en CSS (`style.css`):
Andá al final de `style.css` y agregá estos estilos para tu tarjeta:
```css
.widget-status .status-indicator {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 5px;
}
.widget-status .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.widget-status .dot.green {
    background-color: #10b981;
    box-shadow: 0 0 8px #10b981;
}
.widget-status .text {
    font-size: 0.8rem;
    font-weight: 600;
}
```

### 3. Registrar a tus Integrantes:
Buscá el comentario `<!-- [PC 2] Agregá tu bloque de créditos abajo de este comentario -->` en el footer y agregá tus datos:
```html
<div class="team-credits">
    <h4>PC 2 - Integrantes</h4>
    <ul>
        <li>[Nombre y Apellido Alumno 1]</li>
        <li>[Nombre y Apellido Alumno 2]</li>
    </ul>
</div>
```

---

## 🏁 Siguiente Paso:
Cuando termines de guardar los archivos, hacé commit en tu terminal y subí la rama a GitHub como indica el paso 2 de la [`actividad-git.md`](file:///home/axel/Escritorio/Clases/moviles-2026/clases/clase-02/actividad-git.md).
