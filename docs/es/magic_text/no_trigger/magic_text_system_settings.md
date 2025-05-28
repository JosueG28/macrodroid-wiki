# ✨ Magic Text: `System Settings`

**Requires trigger:** *System Settings Change*

Provides details when a system setting is changed on the device.

---

### `{system_setting_category}`  
**Returns:**  
The category of the changed setting key.  
*Possible values:* `Global`, `Secure`, or `System`.

---

### `{system_setting_key}`  
**Returns:**  
The name of the setting key that was changed.  
*Example:* `screen_brightness`, `airplane_mode_on`

---

### `{system_setting_value}`  
**Returns:**  
The new value of the setting key.  
*Example:* `1` (for enabled), `0` (for disabled), or other values depending on the key.
