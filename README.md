# Code Challenge: TodoService List Refactoring

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
Agrego los tipos en el ts.config
6. ``"types": ["vitest/globals"],``
7. Vuelvo lanzar los tests y veo que todo se ejecuta correctamente.

## Refactorización del código base
1. Creo la estructura de componentes iniciales separado por responsabilidades
2. Creo los servicios necesarios para manejar la lógica de negocio
3. Creo los modelos de datos para las tareas
4. Considero usar data-testid para facilitar la selección de elementos en los tests
5. Creo un helper para recuperar los elementos por data-testid
6. Empiezo a escribir los tests siguiendo la metodología TDD (Red → Green → Refactor) para cada funcionalidad requerida
7. Implemento la funcionalidad para agregar tareas, marcar como completadas, eliminar tareas, filtrar por estado y ordenar por prioridad, asegurándome de que cada cambio pase los tests correspondientes
8. El el orchestrador de tareas (todo-app.component.ts) me encargo de manejar el estado global de las tareas y pasar los datos necesarios a los componentes hijos
9. No mockeo el servicio de tareas para los tests, ya que quiero probar la integración completa entre el servicio y los componentes

## Notas finales
- He tardado unas 3 horas y media para finalizar la tarea
- No consigo que Stackblitz pase los test coverage, han pasado en mi editor en local.

Test Files  6 passed (6)
Tests  33 passed (33)
Start at  16:11:52
Duration  8.62s (transform 823ms, setup 5.41s, import 1.46s, tests 1.40s, environment 29.93s)

% Coverage report from v8
------------------------------------|---------|----------|---------|---------|-------------------
File                                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------------------|---------|----------|---------|---------|-------------------
All files                           |    93.1 |    90.19 |   83.67 |   98.49 |                   
helpers                            |      80 |       50 |     100 |     100 |                   
query.helpers.ts                  |      80 |       50 |     100 |     100 | 8                 
todo-app                           |   83.33 |    80.76 |   66.66 |   96.55 |                   
todo-app.html                     |   61.53 |      100 |       0 |    87.5 | 11                
todo-app.ts                       |    93.1 |    80.76 |     100 |     100 | 17,29-44          
todo-app/components/todo-filter    |     100 |    91.66 |     100 |     100 |                   
todo-filter.html                  |     100 |      100 |     100 |     100 |                   
todo-filter.ts                    |     100 |    91.66 |     100 |     100 | 11                
todo-app/components/todo-form      |     100 |      100 |     100 |     100 |                   
todo-form.html                    |     100 |      100 |     100 |     100 |                   
todo-form.ts                      |     100 |      100 |     100 |     100 |                   
todo-app/components/todo-list      |      76 |    91.66 |      40 |   93.33 |                   
todo-list.html                    |    62.5 |      100 |       0 |      90 | 11                
todo-list.ts                      |     100 |    91.66 |     100 |     100 | 11                
todo-app/components/todo-list-item |     100 |    93.75 |     100 |     100 |                   
todo-list-item.html               |     100 |      100 |     100 |     100 |                   
todo-list-item.ts                 |     100 |    91.66 |     100 |     100 | 11                
todo-app/models                    |     100 |      100 |     100 |     100 |                   
todo.model.ts                     |     100 |      100 |     100 |     100 |                   
todo-app/services                  |     100 |    92.85 |     100 |     100 |                   
todo.service.ts                   |     100 |    92.85 |     100 |     100 | 8                 
------------------------------------|---------|----------|---------|---------|-------------------