# ✨ Texto Mágico

En muchos disparadores, acciones y restricciones, encontrará campos con un botón **"..."** junto a ellos. Al hacer clic en este botón, se muestra una lista de opciones de **Texto Mágico** disponibles según el contexto actual.

El Texto Mágico permite insertar valores dinámicos (como información del sistema, fecha/hora, datos del sensor, etc.) en lugar de texto estático fijo. Estos valores se resuelven en tiempo de ejecución, al ejecutar la macro.

Por ejemplo:

Usar `[Battery]` en una acción de notificación insertará el **nivel actual de batería** en el momento de ejecutar la macro.

---

## 🔹 Texto Mágico Manual

También puedes escribir el Texto Mágico manualmente en lugar de usar la lista. Pero ten cuidado: los errores tipográficos o de sintaxis pueden dañar el valor.

---

## 🔸 Estilos de Formato

Existen dos formatos:

- **Llaves `{}`** → Formato moderno (recomendado)  
- **Corchetes `[]`** → Formato heredado (aún compatible)

> ✅ Usa llaves `{}` siempre que sea posible. Son más confiables y fáciles de leer, especialmente en expresiones complejas (como listas o diccionarios anidados).

---

## 🧪 Ejemplos

```[clipboard]          → Texto actual del portapapeles```  

```[battery]            → Nivel actual de batería```  

```{current_brightness} → Nivel actual de brillo```  

```{ip}                 → IP actual```

---

## 🧪 Flujo de control

### [Cláusula 'Si'](<mt_If clause.md>)
### [Cláusula 'Si Confirmada Entonces'](<mt_If confirmed then.md>)
### [Repetir Acciones](<mt_Repeat actions.md>)
### [Iterar Diccionario/Arreglo](<mt_Iterate Dictionary_Array.md>)
### [Salir del bucle](<mt_Break from loop.md>)
### [Continuar bucle](<mt_Continue loop.md>)


## 🧪 Requiere disparador para funcionar

### [Instalar/Desinstalar/Actualizar app](<mt_App Install_Remove_Update.md>)
### [Aplicación Ejecutada/Cerrada](<mt_Application Launched_Closed.md>)
### [Bluetooth (Device connected or device disconnected)](<mt_Bluetooth.md>)
### [Llamada (activa, finalizada, entrante, perdida, saliente)](<mt_Call.md>)
### [SMS Recibido](<mt_SMS received.md>)
### [Logcat](<mt_Logcat.md>)
### [Notificaciones](<mt_Notifications.md>)
### [Texto del mensaje emergente](<mt_Popup message text.md>)
### [Spotify](<mt_Spotify.md>)
### [Configuración del sistema](<mt_System settings.md>)
### [Texto compartido](<mt_Text Shared to MacroDroid.md>)
### [Asunto de texto compartido](<mt_Shared Text Subject.md>)
### [Texto de la interfaz de usuario](<mt_UI click.md>)
### [Dispositivo USB conectado](<mt_USB device connected.md>)
### [Clima](<mt_Weather.md>)
### [Url Base de Webhook](<mt_Webhook URL.md>)

## 🧪 No requiere disparador para funcionar

### [am/pm](<mt_am_pm.md>)
### [Versión de Android](<mt_Android version.md>)
### [Versión de Android (nivel de SDK)](<mt_Android version (SDK level).md>)
### [Corriente de la batería ahora (mA)](<mt_Battery current now (mA).md>)
### [Temperatura de la batería en °C](<mt_Battery temp ºC.md>)
### [Tipo de conexión de celda](<mt_Cell connection type.md>)
### [ID de celda](<mt_Cell id.md>)
### [Intensidad de señal de antena GSM](<mt_Cell tower signal strength.md>)
### [Texto del portapapeles text](<mt_Clipboard text.md>)
### [Crear GUID](<mt_Create GUID.md>)
### [Batería actual %](<mt_Current battery %.md>)
### [Brillo actual](<mt_Current brightness.md>)
### [Brillo actual (alternativa Android 9+ )](<mt_Current brightness (Android 9+ alternative).md>)
### [Dirección IP actual](<mt_Current IP address.md>)
### [Dirección IP actual (V6)](<mt_Current IP address (V6).md>)
### [Volúmen actual (Alarma)](<mt_Current volume (Alarm).md>)
### [Volúmen actual (Voz Bluetooth)](<mt_Current volume (Bluetooth voice).md>)
### [Volúmen actual (Multimedia/Música)](<mt_Current volume (Media / Music).md>)
### [Volúmen actual (Notificación)](<mt_Current volume (Notification).md>)
### [Volúmen actual (Timbre)](<mt_Current volume (Ringer).md>)
### [Volúmen actual (Sonidos de sistema)](<mt_Current volume (System sounds).md>)
### [Volúmen actual (Llamada de voz)](<mt_Current volume (Voice call).md>)
### [Día del mes](<mt_Day of the month.md>)
### [Día de la semana](<mt_Day of the week.md>)
### [Fabricante del dispositivo](<mt_Device manufacturer.md>)
### [Modelo del dispositivo](<mt_Device model.md>)
### [Device uptime](<mt_Device uptime.md>)
### [Device uptime (s)](<mt_Device uptime (s).md>)
### [Device serial](<mt_Device serial.md>)
### [Dictionary/Array size](<mt_Dictionary/Array size.md>)
### [Nombre de aplicación en primer plano](<mt_Foreground app name.md>)
### [Paquete de aplicación en primer plano](<mt_Foreground app package.md>)
### [Clase de actividad de la aplicación en primer plano](<mt_Foreground app activity class.md>)
### [Hora del día](<mt_Hour of day.md>)
### [Hora del día (12h)](<mt_Hour of day (12h).md>)
### [Hora del día (Cero inicial)](<mt_Hour of day (Leanding zero).md>)
### [IMEI](<mt_IMEI.md>)
### [Código de idioma](<mt_Language code.md>)
### [Última ubicación conocida (metros de exactitud)](<mt_Last known location (accuracy meters).md>)
### [Última ubicación conocida (altitud)](<mt_Last known location (altitude).md>)
### [Última ubicación conocida (lat)](<mt_Last known location (lat).md>)
### [Última ubicación conocida (lat,lon)](<mt_Last known location (lat,lon).md>)
### [Última ubicación conocida (enlace)](<mt_Last known location (link).md>)
### [Última ubicación conocida (lon)](<mt_Last known location (lon).md>)
### [Última ubicación conocida (hora)](<mt_Last known location (time).md>)
### [Velocidad de la ultima ubicación (kmh)](<mt_Last location speed (kmh).md>)
### [Velocidad de la ultima ubicación (mph)](<mt_Last location speed (mph).md>)
### [Código de áerea  de ubicación](<mt_Location area code.md>)
### [Categoria del Macro](<mt_Macro category.md>)
### [id de Macro](<mt_Macro id.md>)
### [Nombre de Macro](<mt_Macro name.md>)
### [MacroDroid es pro](<mt_Macrodroid is pro.md>)
### [Versión de MacroDroid](<mt_Macrodroid version.md>)
### [Minuto](<mt_Minute.md>)
### [Código del país](<mt_Mobile country code.md>)
### [Código de red móvil](<mt_Mobile network code.md>)
### [Mes](<mt_Month.md>)
### [Mes (número)](<mt_Month (as digit).md>)
### [Nueva línea](<mt_New line.md>)
### [Encendido (Activado/Desactivado)](<mt_Power (on/off).md>)
### [RAM (Total)](<mt_RAM (Total).md>)
### [RAM (disponible)](<mt_RAM (available).md>)
### [Resolución de pantalla](<mt_Screen resolution.md>)
### [Resolución de pantalla (X)](<mt_Screen resolution (X).md>)
### [Resolución de pantalla (Y)](<mt_Screen resolution (Y).md>)
### [Tiempo de espera de pantalla (segundos)](<mt_Screen timeout (seconds).md>)
### [segundo](<mt_Second.md>)
### [nombre del operador SIM](<mt_Sim operator name.md>)
### [nombre del operador SIM 2](<mt_Sim 2 operator name.md>)
### [Cronómetros](<mt_Stopwatches.md>)
### [Almacenamiento libre (externo)](<mt_Storage free (external).md>)
### [Almacenamiento libre (interno)](<mt_Storage free (internal).md>)
### [Almacenamiento total (externo))](<mt_Storage total (external).md>)
### [Almacenamiento total (interno)](<mt_Storage total (internal).md>)
### [Valor de variable de cadena](<mt_String variable value.md>)
### [Configuración del sistema (Global)](<mt_System setting (Global).md>)
### [Configuración del sistema (Secure)](<mt_System setting (Secure).md>)
### [Configuración del sistema (System)](<mt_System setting (System).md>)
### [Tiempo del sistema](<mt_System time.md>)
### [Tiempo del sistema (ms)](<mt_System time (ms).md>)
### [Semana del año](<mt_Week of year.md>)
### [Url Base de Webhook](<mt_Webhook Base Url.md>)
### [Intensidad de la señal Wifi](<mt_Wifi signal strength.md>)
### [Año](<mt_Year.md>)
### [](<mt_.md>)

