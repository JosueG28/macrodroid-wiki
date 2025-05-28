# ✨ Magic Text: `Notifications`

**Returns:** Various details extracted from a received notification.

**Requires:**  
The macro must include the **Notification Received** trigger.

---

### `{not_title}`  
**Returns:** The main, prominent title text summarizing the notification’s purpose.  
**Example:**  
`New message from Josué`

---

### `{not_ticker}`  
**Returns:** Brief scrolling text shown temporarily on the status bar (mostly obsolete since Android 5.0).  
**Example:**  
`Josué: Hey, are you there?`

---

### `{notification}`  
**Returns:** The main body text/content of the notification.  
**Example:**  
`Hey, I just wanted to check in.`

---

### `{not_sub_text}`  
**Returns:** Secondary text that adds extra context or detail.  
**Example:**  
`2 new messages`

---

### `{not_text_lines}`  
**Returns:** Expanded text showing more content if the notification supports it.  
**Example:**  
`Hey, just checking in. Let me know when you're free.`

---

### `{not_action_names}`  
**Returns:** Names of action buttons inside the notification (like Reply, Mark as Read).  
**Example:**  
`Reply, Mark as Read`

---

### `{not_timestamp}`  
**Returns:** Unix timestamp in milliseconds indicating when the notification arrived.  
**Example:**  
`1735689600000` (which is 00:00:00:000 GMT, Jan 1, 2025)

---

### `{not_app_name}`  
**Returns:** Name of the app that generated the notification.  
**Example:**  
`WhatsApp`

---

### `{not_app_package}`  
**Returns:** Package name of the app that created the notification.  
**Example:**  
`com.whatsapp`

---

### `{not_channel}`  
**Returns:** Name of the notification channel through which this notification was sent (useful for apps with multiple channels).  
**Example:**  
`Messages`
