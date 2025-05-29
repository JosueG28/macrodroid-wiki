# ✨ Magic Text: `PopUp Message`

**Returns:** Information extracted from a system or app-generated popup message.

**Usage:**  
Can be used in any text field that supports Magic Text (e.g., logs, notifications, TTS).

**Requires:**  
The macro must include the **PopUp Message** trigger.

---

### `{popup_message_text}`  
**Returns:**  
The full text content of the popup message.  
**Example:**  
If the popup says "Low battery warning":  
`{popup_message_text}` → `Low battery warning`

---

### `{app_name}`  
**Returns:**  
Name of the app that generated the popup.  
**Example:**  
`{app_name}` → `Settings`

---

### `{app_package}`  
**Returns:**  
Package name of the app that generated the popup.  
**Example:**  
`{app_package}` → `com.android.settings`
