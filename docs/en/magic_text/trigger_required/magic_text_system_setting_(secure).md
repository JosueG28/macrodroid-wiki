# ✨ Magic Text: `{setting_secure=your_setting_key_here}`

**Returns:**  
A value depending on the secure system setting being checked. It can be a number, text, or package name.

**Example:**  
If you use the key `assistant`, it might return something like:  
`com.google.android.googlequicksearchbox/com.google.android.voiceinteraction.GsaVoiceInteractionService`  
(This means Google Assistant is currently set as the default assistant.)

**Usage:**  
Can be used in any text field that supports Magic Text (e.g., notifications, text-to-speech, logs, etc.).

**Simple explanation:**  
This Magic Text lets you read secure Android system settings. For example, some settings store which app is used for certain features, like the voice assistant. You just replace `your_setting_key_here` with the name of the setting you want to read.

> ⚠️ **Important:**  
Secure settings control critical features of the system. Changing them without understanding their purpose can affect how your device works or compromise its security. Use this Magic Text only to read values—**do not modify secure settings unless you know exactly what you're doing.**
