# Instrucciones de Trabajo - PC 3
**Widget Asignado:** Asistencia Mock
**Acciones Especiales:** Modificación de Estilo Global (Conflicto en CSS) y Ubicación en Grilla (Conflicto en HTML).

---

## 🛠️ Tareas a realizar en tu rama `feature-pc3`:

### 1. Modificar el HTML (`index.html`):
Buscá el comentario `<!-- [PC 3] AGREGÁ TU WIDGET DE ASISTENCIA MOCK ABAJO DE ESTE COMENTARIO -->` y agregá el siguiente bloque de código:
```html
<section class="widget-card widget-attendance">
    <h3>📊 Asistencia</h3>
    <p class="percentage">94%</p>
    <p>Presentes: 17 de 18</p>
</section>
```

### 2. Agregar Estilos en CSS (`style.css`):
1. **Conflicto CSS:** Subí al principio de `style.css`. Buscá la variable `--primary-color` en la línea 4 y cambiale su valor a verde esmeralda:
   ```css
   --primary-color: #10b981; /* Verde esmeralda */
   ```
2. Andá al final del archivo `style.css` y agregá los estilos de tu widget:
   ```css
   .widget-attendance .percentage {
       font-size: 1.8rem;
       font-weight: 800;
       color: var(--primary-color);
   }
   ```

### 3. Registrar a tus Integrantes:
Buscá el comentario `<!-- [PC 3] Agregá tu bloque de créditos abajo de este comentario -->` en el footer y agregá tus datos:
```html
<div class="team-credits">
    <h4>PC 3 - Integrantes</h4>
    <ul>
        <li>[Nombre y Apellido Alumno 1]</li>
        <li>[Nombre y Apellido Alumno 2]</li>
    </ul>
</div>
```

---

## 🏁 Siguiente Paso:
Cuando termines de guardar los archivos, hacé commit en tu terminal y subí la rama a GitHub como indica el paso 2 de la [`README.md`](file:///home/axel/Escritorio/Clases/moviles-2026/clases/clase-02/actividad-git/README.md).
