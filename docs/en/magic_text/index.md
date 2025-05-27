# ✨ Magic Text

In many triggers, actions, and constraints, you'll find fields with a **"..."** button next to them. Clicking this button displays a list of available **Magic Text** options based on the current context.

Magic Text allows you to insert dynamic values (like system info, date/time, sensor data, etc.) instead of fixed static text. These values are resolved at runtime—when the macro is executed.

For example:  
Using `[Battery]` in a notification action will insert the **current battery level** at the moment the macro runs.

---

## 🔹 Manual Magic Text

You can also type Magic Text manually instead of using the list. But be careful—typos or incorrect syntax will break the value.

---

## 🔸 Format Styles

There are two formats:

- **Curly brackets `{}`** → Modern format (recommended)  
- **Square brackets `[]`** → Legacy format (still supported)

> ✅ Use curly brackets `{}` whenever possible. They’re more reliable and easier to read, especially for complex expressions (like nested lists or dictionaries).

---

## 🧪 Examples

```[clipboard]          → Current clipboard text```  

```[battery]            → Current battery level```  

```{current_brightness} → current brightness level```  

```{ip}                 → Current IP``` 

---

## 🧪 Control flow

### [If clause](<mt_If clause.md>)
### [If confirmed then](<mt_If confirmed then.md>)
### [Repeat actions](<mt_Repeat actions.md>)
### [Iterate Dictionary/Array](<mt_Iterate Dictionary_Array.md>)
### [Break from loop](<mt_Break from loop.md>)
### [Continue loop](<mt_Continue loop.md>)


## 🧪 Requires a trigger to operate

### [App Install/Remove/Update](<mt_App Install_Remove_Update.md>)
### [Application Launched/Closed](<mt_Application Launched_Closed.md>)
### [Bluetooth (Device connected or device disconnected)](<mt_Bluetooth.md>)
### [Call (Active, Ended, Incoming, Missed, Outgoing)](<mt_Call.md>)
### [SMS received](<mt_SMS received.md>)
### [Logcat](<mt_Logcat.md>)
### [Notifications](<mt_Notifications.md>)
### [Popup message text](<mt_Popup message text.md>)
### [Spotify](<mt_Spotify.md>)
### [System settings](<mt_System settings.md>)
### [Text Shared to MacroDroid](<mt_Text Shared to MacroDroid.md>)
### [Shared Text Subject](<mt_Shared Text Subject.md>)
### [UI click](<mt_UI click.md>)
### [USB device connected](<mt_USB device connected.md>)
### [Weather](<mt_Weather.md>)
### [Webhook URL](<mt_Webhook URL.md>)

## 🧪 Does not require a trigger to operate

### [am/pm](<mt_am_pm.md>)
### [Android version](<mt_Android version.md>)
### [Android version (SDK level)](<mt_Android version (SDK level).md>)
### [Battery current now (mA)](<mt_Battery current now (mA).md>)
### [Battery temp ºC](<mt_Battery temp ºC.md>)
### [Cell connection type](<mt_Cell connection type.md>)
### [Cell id](<mt_Cell id.md>)
### [Cell tower signal strength](<mt_Cell tower signal strength.md>)
### [Clipboard text](<mt_Clipboard text.md>)
### [Create GUID](<mt_Create GUID.md>)
### [Current battery %](<mt_Current battery %.md>)
### [Current brightness](<mt_Current brightness.md>)
### [Current brightness (Android 9+ alternative)](<mt_Current brightness (Android 9+ alternative).md>)
### [Current IP address](<mt_Current IP address.md>)
### [Current IP address (V6)](<mt_Current IP address (V6).md>)
### [Current volume (Alarm)](<mt_Current volume (Alarm).md>)
### [Current volume (Bluetooth voice)](<mt_Current volume (Bluetooth voice).md>)
### [Current volume (Media / Music)](<mt_Current volume (Media / Music).md>)
### [Current volume (Notification)](<mt_Current volume (Notification).md>)
### [Current volume (Ringer)](<mt_Current volume (Ringer).md>)
### [Current volume (System sounds)](<mt_Current volume (System sounds).md>)
### [Current volume (Voice call)](<mt_Current volume (Voice call).md>)
### [Day of the month](<mt_Day of the month.md>)
### [Day of the week](<mt_Day of the week.md>)
### [Device manufacturer](<mt_Device manufacturer.md>)
### [Device model](<mt_Device model.md>)
### [Device uptime](<mt_Device uptime.md>)
### [Device uptime (s)](<mt_Device uptime (s).md>)
### [Device serial](<mt_Device serial.md>)
### [Dictionary/Array size](<mt_Dictionary/Array size.md>)
### [Foreground app name](<mt_Foreground app name.md>)
### [Foreground app package](<mt_Foreground app package.md>)
### [Foreground app activity class](<mt_Foreground app activity class.md>)
### [Hour of day](<mt_Hour of day.md>)
### [Hour of day (12h)](<mt_Hour of day (12h).md>)
### [Hour of day (Leanding zero)](<mt_Hour of day (Leanding zero).md>)
### [IMEI](<mt_IMEI.md>)
### [Language code](<mt_Language code.md>)
### [Last known location (accuracy meters)](<mt_Last known location (accuracy meters).md>)
### [Last known location (altitude)](<mt_Last known location (altitude).md>)
### [Last known location (lat)](<mt_Last known location (lat).md>)
### [Last known location (lat,lon)](<mt_Last known location (lat,lon).md>)
### [Last known location (link)](<mt_Last known location (link).md>)
### [Last known location (lon)](<mt_Last known location (lon).md>)
### [Last known location (time)](<mt_Last known location (time).md>)
### [Last location speed (kmh)](<mt_Last location speed (kmh).md>)
### [Last location speed (mph)](<mt_Last location speed (mph).md>)
### [Location area code](<mt_Location area code.md>)
### [Macro category](<mt_Macro category.md>)
### [Macro id](<mt_Macro id.md>)
### [Macro name](<mt_Macro name.md>)
### [Macrodroid is pro](<mt_Macrodroid is pro.md>)
### [Macrodroid version](<mt_Macrodroid version.md>)
### [Minute](<mt_Minute.md>)
### [Mobile country code](<mt_Mobile country code.md>)
### [Mobile network code](<mt_Mobile network code.md>)
### [Month](<mt_Month.md>)
### [Month (as digit)](<mt_Month (as digit).md>)
### [New line](<mt_New line.md>)
### [Power (on/off)](<mt_Power (on/off).md>)
### [RAM (Total)](<mt_RAM (Total).md>)
### [RAM (available)](<mt_RAM (available).md>)
### [Screen resolution](<mt_Screen resolution.md>)
### [Screen resolution (X)](<mt_Screen resolution (X).md>)
### [Screen resolution (Y)](<mt_Screen resolution (Y).md>)
### [Screen timeout (seconds)](<mt_Screen timeout (seconds).md>)
### [Second](<mt_Second.md>)
### [Sim operator name](<mt_Sim operator name.md>)
### [Sim 2 operator name](<mt_Sim 2 operator name.md>)
### [Stopwatches](<mt_Stopwatches.md>)
### [Storage free (external)](<mt_Storage free (external).md>)
### [Storage free (internal)](<mt_Storage free (internal).md>)
### [Storage total (external)](<mt_Storage total (external).md>)
### [Storage total (internal)](<mt_Storage total (internal).md>)
### [String variable value](<mt_String variable value.md>)
### [System setting (Global)](<mt_System setting (Global).md>)
### [System setting (Secure)](<mt_System setting (Secure).md>)
### [System setting (System)](<mt_System setting (System).md>)
### [System time](<mt_System time.md>)
### [System time (ms)](<mt_System time (ms).md>)
### [Week of year](<mt_Week of year.md>)
### [Webhook Base Url](<mt_Webhook Base Url.md>)
### [Wifi signal strength](<mt_Wifi signal strength.md>)
### [Year](<mt_Year.md>)
### [](<mt_.md>)

