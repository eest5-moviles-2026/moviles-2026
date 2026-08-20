# Instrucciones de Trabajo - PC 5
**Widget Asignado:** Configuración de Tema
**Acción Especial:** Modificación de Estilo Global (Conflicto en CSS).

---

## 🛠️ Tareas a realizar en tu rama `feature-pc5`:

### 1. Modificar el HTML (`index.html`):
Buscá el comentario `<!-- [PC 5] AGREGÁ TU WIDGET DE CONFIGURACIÓN DE TEMA ABAJO DE ESTE COMENTARIO -->` y agregá el siguiente bloque de código:
```html
<section class="widget-card widget-theme">
    <h3>🎨 Configuración</h3>
    <p>Tema Activo:</p>
    <div class="theme-badge">Dark Mode</div>
</section>
```

### 2. Agregar Estilos en CSS (`style.css`):
1. **Conflicto CSS:** Subí al principio de `style.css`. Buscá la variable `--primary-color` en la línea 4 y cambiale su valor a violeta amatista:
   ```css
   --primary-color: #8b5cf6; /* Violeta amatista */
   ```
2. Andá al final de `style.css` y agregá los estilos de tu widget:
   ```css
   .widget-theme .theme-badge {
       display: inline-block;
       background: rgba(255, 255, 255, 0.08);
       color: #ffffff;
       padding: 4px 10px;
       border-radius: 8px;
       font-size: 0.75rem;
       font-weight: 600;
       border: 1px solid var(--border-color);
       margin-top: 5px;
   }
   ```

### 3. Registrar a tus Integrantes:
Buscá el comentario `<!-- [PC 5] Agregá tu bloque de créditos abajo de este comentario -->` en el footer y agregá tus datos:
```html
<div class="team-credits">
    <h4>PC 5 - Integrantes</h4>
    <ul>
        <li>[Nombre y Apellido Alumno 1]</li>
        <li>[Nombre y Apellido Alumno 2]</li>
    </ul>
</div>
```

---

## 🏁 Siguiente Paso:
Cuando termines de guardar los archivos, hacé commit en tu terminal y subí la rama a GitHub como indica el paso 2 de la [`README.md`](file:///home/axel/Escritorio/Clases/moviles-2026/clases/clase-02/actividad-git/README.md).
