# ✨ Magic Text: `Spotify`

**Returns:** Metadata of the currently playing track on Spotify.

**Usage:**  
Can be used in any text field that supports Magic Text (e.g., notifications, TTS, logs).

**Requires:**  
The macro must include the **Spotify** trigger and the **Spotify app must be installed** on the device.

---

### `{spotify_track_id}`  
**Returns:**  
The unique ID of the currently playing track.

---

### `{spotify_artist}`  
**Returns:**  
The artist name of the currently playing track.  
*Not available when using "Started music".*

---

### `{spotify_album}`  
**Returns:**  
The album name of the currently playing track.  
*Not available when using "Started music".*

---

### `{spotify_track}`  
**Returns:**  
The name of the currently playing track.  
*Not available when using "Started music".*

---

### `{spotify_length_s}`  
**Returns:**  
The total length of the currently playing track in seconds.

---

### `{spotify_is_playing}`  
**Returns:**  
`true` if music is currently playing, `false` otherwise.

---

## ⚠️ Possible Issues

- **Spotify values not updating:**  
  In order for the Spotify trigger to function, you **must enable the `Device Broadcast Status`** option within the Spotify app’s settings.
  
- **Magic Text not available:**  
  Ensure the **Spotify app is installed** and the macro includes the **Spotify trigger**. Without it, these values won't be populated.
