# Clase 06: Servidores Web, Express & Arquitectura MVC (Node.js)

**Materia:** Desarrollo de Software para Plataformas Móviles  
**Curso:** 7° Año - División 5ta (E.E.S.T N° 5)  
**Profesor:** Axel Castellano Gutiérrez  

---

## 🎯 Objetivos de la Clase
En esta clase vas a construir tu **primer servidor Backend profesional en Node.js**:
1. Comprender el entorno de ejecución Node.js, el manifiesto `package.json` y el uso de ES Modules.
2. Entender el problema del código monolítico y la solución con **Arquitectura en Capas (MVC)**.
3. Configurar la seguridad con variables de entorno (`.env`) e ignorar secretos con `.gitignore`.
4. Instalar y configurar las dependencias clave: `express`, `cors`, `dotenv`, `mysql2` y `nodemon`.
5. Construir un circuito End-to-End completo: `index.js` ➔ `Router` ➔ `Controller` ➔ `Model` ➔ `Base de Datos`.

---

## 📑 Recursos Teóricos y Guía Paso a Paso
Toda la explicación conceptual, desgloses línea por línea y la guía práctica paso a paso para construir la estructura de tu backend desde cero están disponibles en:

👉 📘 [**Guía de Teoría y Kickoff Backend: Node.js, Express y MVC**](./js-teoria.md)

---

## 🚀 Consigna Práctica para el Proyecto Grupal

Aplicando la arquitectura MVC explicada en la guía teórica, cada equipo debe iniciar el desarrollo del backend de su proyecto grupal:

1. **Estructura del Repositorio**: Dividir el repositorio del equipo en dos carpetas principales: `frontend/` y `backend/`.
2. **Inicialización y Seguridad**:
   - Inicializar Node.js en `backend/` (`npm init -y`) y agregar `"type": "module"`.
   - Crear el `.gitignore` incluyendo `node_modules/` y `.env`.
   - Crear el `.env.example` público con las claves necesarias.
3. **Instalación del Stack**: Instalar `express`, `cors`, `dotenv`, `mysql2` y `nodemon`.
4. **Servidor Base & Pool**: Configurar `backend/index.js` con Express, CORS y JSON middleware, y crear el pool de conexiones en `src/database/db.js`.
5. **Primera Entidad MVC**: Implementar al menos una entidad del proyecto (ej: `productos`, `usuarios`, `turnos`, etc.) completando su **Model** (con consultas parametrizadas con `?`), **Controller**, **Router** y el montaje en `index.js`.
6. **Verificación**: Probar los endpoints `GET` y `POST` desde Postman o Thunder Client.
