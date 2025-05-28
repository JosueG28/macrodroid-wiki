# 🔒 Introducción a las Restricciones en MacroDroid

Las **Restricciones** en MacroDroid son condiciones que determinan si una macro o acciones específicas dentro de ella se ejecutarán después de que se active un disparador. Actúan como un filtro adicional: si todas las restricciones se cumplen (es decir, son verdaderas), la macro o la acción procede; si alguna falla, no se ejecuta. Esto hace que las restricciones sean esenciales para crear automatizaciones precisas y adaptadas al contexto que solo se ejecuten cuando lo desees.

---

## 🔹 Tipos de Restricciones

### 1. Restricciones Generales
- **Ubicación**: Se encuentran en la parte inferior de la pantalla de edición de macros, en la sección **Restricciones**.
- **Comportamiento**: Estas restricciones afectan a **toda la macro**. Si alguna restricción general es falsa, la macro no se ejecutará en absoluto, independientemente del disparador.
- **Caso de uso**: Ideal para establecer condiciones amplias que determinen si la macro debe ejecutarse.

#### Ejemplo:
Una macro que activa el Wi-Fi al conectar el cargador (disparador: "Cargador Conectado") podría tener una restricción general como "Hora del Día: 8:00 AM - 10:00 PM" para asegurar que la macro solo funcione durante el día.

### 2. Restricciones Individuales
- **Ubicación**: Se aplican directamente a un **disparador** o **acción** específica. Para agregar una, toca la acción o disparador en la pantalla de edición de macros y selecciona **Añadir Restricción**.
- **Comportamiento**: Estas restricciones solo afectan al disparador o acción específica a la que están asociadas. Si la restricción falla, solo esa acción o disparador se omite, permitiendo que otras partes de la macro continúen.
- **Caso de uso**: Perfectas para ajustar acciones o disparadores individuales dentro de una macro.

#### Ejemplo:
En una macro con varias acciones, podrías añadir una restricción individual a una acción de "Enviar Notificación", como "Nivel de Batería > 30%", para que la notificación solo aparezca si la batería está por encima del 30%, mientras que otras acciones de la macro se ejecutan sin importar esta condición.

---

## 🔹 ¿Cómo funcionan las Restricciones?

1. **Evaluación**: Las restricciones se verifican **después** de que se activa el disparador de la macro.
2. **Condición**: Para que la macro o una acción proceda, todas las restricciones (generales o individuales) deben ser verdaderas. Si alguna es falsa, la macro o acción afectada se detiene.
3. **Operadores Lógicos**: Tanto las restricciones generales como las individuales soportan operadores **AND**, **OR**, **XOR** y **NOT**, lo que permite crear condiciones complejas.
   - **AND**: Todas las condiciones deben ser verdaderas.
   - **OR**: Al menos una condición debe ser verdadera.
   - **XOR**: Exactamente una condición debe ser verdadera.
   - **NOT**: Invierte el resultado de la condición.

### Ejemplo con Operadores Lógicos:
Una restricción general podría combinar "Wi-Fi Conectado" **AND** "Día de la Semana: Días Laborables" para asegurar que una macro solo se ejecute cuando está conectado a Wi-Fi en un día laborable.

---

## 🔹 Ejemplos Comunes de Restricciones

MacroDroid ofrece una amplia gama de restricciones para personalizar tus macros. Algunas opciones populares incluyen:
- **Basadas en Tiempo**: "Día de la Semana" (por ejemplo, solo de lunes a viernes) o "Hora del Día".
- **Estado del Dispositivo**: "Nivel de Batería" (por ejemplo, superior al 30%) o "Modo Silencioso".
- **Conectividad**: "Conexión Wi-Fi" (por ejemplo, solo en casa) o "Bluetooth Activado".
- **Aplicaciones**: "Aplicación en Primer Plano" (por ejemplo, solo si WhatsApp está abierto).

---

## 🔹 ¿Por qué usar Restricciones?

- **Precisión**: Aseguran que las macros o acciones específicas solo se ejecuten bajo las condiciones exactas que defines.
- **Eficiencia**: Evitan el uso innecesario de recursos, como batería o datos.
- **Personalización**: Usa restricciones generales para un control a nivel de macro o restricciones individuales para un control detallado sobre acciones o disparadores específicos.

### Ejemplo Práctico:
Una macro que silencia tu teléfono al llegar al trabajo (disparador: "Ubicación") podría incluir:
- Una **restricción general** como "Hora del Día: 9:00 AM - 5:00 PM" para asegurar que la macro solo funcione durante el horario laboral.
- Una **restricción individual** en una acción de "Enviar Notificación", como "Nivel de Batería > 20%", para que la notificación solo se envíe si la batería está suficientemente cargada.

---

Las restricciones, con su soporte para aplicaciones generales e individuales y operadores lógicos, son una de las características más poderosas de MacroDroid. ¡Experimenta con ellas para crear automatizaciones más inteligentes y eficientes, ya seas principiante o un usuario avanzado!