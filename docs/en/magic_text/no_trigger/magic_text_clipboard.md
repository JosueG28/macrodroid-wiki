# ✨ Magic Text: `{clipboard}`

**Returns:** The current text content stored in the clipboard.

**Important:**  
Due to Android 10+ restrictions, apps cannot read clipboard content while running in the background.  
This action creates a temporary invisible overlay to read the clipboard content in MacroDroid.  
You must use the **Clipboard Refresh** action before using this Magic Text.

**Example:**  
If you copied "Hello World" → returns `Hello World`

**Usage:**  
Can be used in any text field that supports Magic Text (e.g., notifications, TTS, logs).
