# ✨ Magic Text: `{setting_system=your_setting_key_here}`

**Returns:**  
A value based on the system setting being checked. For time format settings, it usually returns `12` or `24`.

**Example:**  
If you use the key `time_12_24`, it might return:  
`12` → The device is using the 12-hour format  
`24` → The device is using the 24-hour format

**Usage:**  
Can be used in any text field that supports Magic Text (e.g., notifications, text-to-speech, logs, etc.).

**Simple explanation:**  
This Magic Text allows you to check basic system preferences on the device. For example, the setting `time_12_24` tells you whether the device is using a **12-hour** or **24-hour** clock. You just replace `your_setting_key_here` with the setting you want to check.

> ⚠️ **Important:**  
System settings control everyday behaviors of the device. While reading them is safe, changing certain values without knowing their effect might cause unexpected behavior. It’s recommended to **use this Magic Text only for reading values** unless you’re sure of what you're doing.
