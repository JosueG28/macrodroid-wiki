# ✨ Texto Mágico en MacroDroid

**Texto Mágico** es una función poderosa en MacroDroid que te permite insertar valores dinámicos en tus macros en lugar de texto estático. Estos valores, como el nivel de batería, la hora actual, datos de sensores o la ubicación del dispositivo, se actualizan en tiempo real cuando se ejecuta la macro, haciendo que tus automatizaciones sean más flexibles y adaptables.

---

## 🔹 ¿Qué es el Texto Mágico y dónde lo encuentras?

En muchos **disparadores**, **acciones** y **restricciones** en MacroDroid, notarás que algunos campos tienen un botón **"..."** junto a ellos. Al hacer clic en este botón, se abre una lista de opciones de **Texto Mágico** disponibles, que dependen del contexto del campo en el que estés trabajando.

Estos valores dinámicos se resuelven en tiempo de ejecución, lo que significa que reflejan el estado actual del dispositivo cuando se ejecuta la macro.

### Ejemplo:
Si configuras una notificación con el texto "Mi batería está al {battery}%", cuando la macro se ejecute, MacroDroid reemplazará `{battery}` con el porcentaje real de batería. Por ejemplo, si tu batería está al 42%, la notificación dirá: "Mi batería está al 42%."

---

## 🔹 ¿Cómo funciona el Texto Mágico?

El Texto Mágico actúa como un marcador que MacroDroid reemplaza automáticamente con el valor correspondiente cuando se activa la macro. Esto lo hace ideal para personalizar acciones o tomar decisiones basadas en datos en tiempo real.

---

## 🔹 Usar el Texto Mágico manualmente

También puedes escribir el Texto Mágico directamente en los campos de texto en lugar de seleccionarlo de la lista. Esto es útil si conoces el código exacto o si una opción no aparece en la lista.

### Advertencia:
- **La sintaxis es importante:** El Texto Mágico debe escribirse exactamente como se indica (por ejemplo, `{battery}`). Un error como `{batery}` no funcionará y el texto aparecerá como "{batery}" en lugar del valor esperado.
- **Prueba tus macros:** Siempre ejecuta una prueba para asegurarte de que el Texto Mágico escrito manualmente se resuelve correctamente.

---

## 🔹 Estilos de formato

Hay dos formatos para el Texto Mágico:

- **Llaves `{}`**: Formato moderno (recomendado).  
- **Corchetes `[]`**: Formato antiguo (aún soportado).

✅ **Usa llaves `{}` siempre que sea posible.** Son más confiables y fáciles de leer, especialmente para expresiones complejas (como listas anidadas o diccionarios).

### Ejemplo:
- Moderno: `{battery}` → Muestra el nivel actual de batería (por ejemplo, "42").
- Antiguo: `[battery]` → También funciona, pero es menos preferido.

---

## 🔹 Consejos para usuarios nuevos

Si eres nuevo en MacroDroid, el Texto Mágico puede parecer complejo al principio, pero estos consejos te ayudarán a comenzar:

- **Explora las opciones:** Haz clic en el botón **"..."** siempre que lo veas para descubrir los valores de Texto Mágico disponibles para ese campo.
- **Empieza con algo simple:** Prueba usar `{battery}` en una notificación para ver cómo funcionan los valores dinámicos.
- **Prueba tu configuración:** Ejecuta tu macro después de agregar Texto Mágico para confirmar que funciona como esperas.

---

## 🔹 Ejemplos prácticos para inspirarte

- **Notificación personalizada:** "La temperatura de la CPU es {cpu_temp}°C" para monitorear el estado de tu dispositivo.
- **Disparador basado en hora:** Usa `{hour}` y `{minute}` para activar una macro en un momento específico.
- **Registro de datos:** Escribe `{memory_free}` en un archivo de registro para seguir el rastro de la memoria disponible.
- **Restricción dinámica:** Configura una macro para que solo se ejecute si `{wifi_ssid}` coincide con el nombre de tu red Wi-Fi.

---

## 🔹 Por qué el Texto Mágico es tan poderoso

El Texto Mágico transforma tus macros de estáticas a dinámicas, permitiéndoles adaptarse al estado actual de tu dispositivo. Ya sea que estés mostrando información en tiempo real, tomando decisiones basadas en datos de sensores o automatizando tareas de manera más inteligente, el Texto Mágico es una de las herramientas más versátiles de MacroDroid.

¡Experimenta con el Texto Mágico para llevar tus macros al siguiente nivel, ya seas principiante o un experto!