# ✨ Magic Text: `SMS received`

**Returns:** Information about an incoming SMS message.

**Usage:**  
Can be used in any text field that supports Magic Text (e.g., notifications, TTS, logs).

**Requires:**  
The macro must include the **SMS Received** trigger.

---

### `{sms_name}`  
**Returns:**  
Name of the sender if the number exists in your contact list.  
**Example:**  
If you receive an SMS from a contact named *MacroDroid user*:  
`{sms_name}` → `MacroDroid user`

---

### `{sms_message}`  
**Returns:**  
The content of the SMS message.  
**Example:**  
If the message is *"Hello, have a nice day"*:  
`{sms_message}` → `Hello, have a nice day`

---

### `{sms_number}`  
**Returns:**  
Phone number of the sender.  
**Example:**  
If the sender's number is `+1 1234567890`:  
`{sms_number}` → `+1 1234567890`

---

### `{sms_sim_id}`  
**Returns:**  
SIM card ID that received the SMS.  
**Example:**  
`{sms_sim_id}` → `4`

---

### `{sms_sim_name}`  
**Returns:**  
Name of the mobile carrier associated with the SIM that received the SMS.  
**Example:**  
If the carrier is Vodafone:  
`{sms_sim_name}` → `Vodafone`
