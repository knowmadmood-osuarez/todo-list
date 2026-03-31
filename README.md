# Code Challenge: Todo List Refactoring

> Crea un gestor de tareas pendientes siguiendo **Test-Driven Development** (TDD) en Angular 21+

**Tiempo estimado**: 90–120 minutos

---

## 🎯 Objetivo

Refactorizar un código base para implementar una lista dinámica de tareas pendientes (TODOs) con:

- ✅ CRUD de tareas
- ✅ Filtrado por estado (completadas / incompletas)
- ✅ Ordenamiento por prioridad
- ✅ Cobertura de tests con TDD

---

## 📝 Requerimientos Funcionales

### Operaciones Básicas

- Agregar tareas dinámicamente con título y prioridad
- Marcar tareas como completadas o incompletas
- Eliminar tareas
- Filtrar: mostrar todas, solo completadas, o solo incompletas
- Las tareas con mayor prioridad aparecen primero

### Detalles Técnicos

- **List Items Dinámicos**: Los datos cambian conforme se agregan/actualizan tareas
- **Filtro de Completados**: Opción para visualizar solo completadas, solo incompletas, o todas
- **Ordenamiento por Prioridad**: Las tareas importantes aparecen primero

---

### Pautas de Estilo y Buenas Prácticas

- Código limpio y bien estructurado, con responsabilidades claras
- Comunica tus decisiones de diseño
- Documenta tu enfoque TDD: muestra cómo aplicaste Red → Green → Refactor
- Si consideras mejoras a futuro, menciónalas en los comentarios del código
- Opcionalmente, consume TODOs desde [dummyjson](https://dummyjson.com/docs/todos) para datos reales
- Ten en cuenta accesibilidad en la UI (ARIA labels, navegación por teclado, etc.)

**Nota**: Si encuentras algún error en el código base, intenta solucionarlo y explica tu solución.

---

# Mis pasos para abordar el ejercicio:
## Configuración del entorno de testing
1. Primero me descargo el proyecto y lo abro en mi editor de código
2. Añado los scripts necesarios en el package.json para ejecutar los tests (test y coverage)
3. Veo que no hay ninguna liberia de testing instalada, solo un inicio de configuración de Jest, me voy a decantar por usar Vitest, ya que es el recomendado para Angular 21+ y @angular/build incluye soporte nativo para Vitest
4. Configuro el angular JSON y lanzo el comando proporcionado en la documentacion de angular ``ng generate config vitest`` y ``npm install --save-dev vitest jsdom @vitest/coverage-v8``
5. Lanzo ng-test y veo que me da un error falta el archivo tsconfig.spec.json, lo creo con el siguiente contenido:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": ["vitest/globals", "jsdom"]
  },
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
```
6. Vuelvo lanzar los tests y veo que todo se ejecuta correctamente.

## Refactorización del código base
1. Creo la estructura de componentes iniciales separado por responsabilidades
2. Creo los servicios necesarios para manejar la lógica de negocio
3. Creo los modelos de datos para las tareas
4. Considero usar data-testid para facilitar la selección de elementos en los tests
5. Creo un helper para recuperar los elementos por data-testid
6. Empiezo a escribir los tests siguiendo la metodología TDD (Red → Green → Refactor) para cada funcionalidad requerida