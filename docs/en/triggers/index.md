# 🚀 Introduction to Triggers in MacroDroid

**Triggers** in MacroDroid are instantaneous events that your device detects to start a macro. They are the spark that initiates your automation, telling MacroDroid when to execute the macro’s actions. From detecting a screen unlock to receiving a notification, triggers allow you to create responsive and dynamic automations tailored to your needs.

---

## 🔹 What Are Triggers?

A **trigger** is an event that your device can detect, such as a change in battery level, a specific time, or a location update. For a macro to be valid, it must include **at least one trigger**. The macro must also be **enabled** (not disabled) at the exact moment the trigger event occurs for it to fire.

### Example:
A trigger like "Charger Connected" can start a macro that runs actions such as "Turn On Wi-Fi" or "Show Notification" when you plug in your device.

---

## 🔹 Using Multiple Triggers

You can add **multiple triggers** to a single macro. If any one of these triggers fires, the macro will execute, assuming all constraints (if any) are met. This provides flexibility to start a macro from different events.

### Important Note:
Triggers cannot be combined with **AND logic** (e.g., "Trigger 1 AND Trigger 2") using a "Trigger Fired" constraint because triggers are **instantaneous events**. It’s highly improbable for two events to occur at exactly the same time. When a macro runs, it is always initiated by **exactly one trigger**.

#### Alternative to AND Logic:
Instead of combining triggers with AND, you can add **constraints** to individual triggers to limit when they fire based on other conditions. For example, you can add a "Time of Day" constraint to a "Screen On" trigger to ensure it only activates during specific hours.

### Example:
A macro with two triggers—"Charger Connected" and "Headphones Connected"—will run its actions if *either* event occurs. To make a trigger like "Charger Connected" only fire during the day, add a constraint like "Time of Day: 8:00 AM - 10:00 PM" to that specific trigger.

---

## 🔹 Common Trigger Examples

MacroDroid offers a wide variety of triggers to suit different automation needs. Some popular examples include:
- **Device Events**: "Screen On/Off," "Charger Connected/Disconnected," or "Battery Level Drops."
- **Time-Based**: "Regular Interval" (e.g., every hour) or "Specific Time."
- **Connectivity**: "Wi-Fi Connected/Disconnected" or "Bluetooth Device Connected."
- **Notifications**: "Notification Received" from a specific app.
- **Location**: "Enter/Exit Location" based on GPS or network data.

---

## 🔹 Why Are Triggers Important?

- **Initiation**: Triggers are the starting point of every macro, determining *when* your automation runs.
- **Flexibility**: With multiple triggers, you can make a single macro respond to various events.
- **Precision**: Adding constraints to triggers allows you to fine-tune when they activate, ensuring your macros run only in the right context.

### Practical Example:
A macro designed to save battery might include:
- **Trigger**: "Battery Level Drops Below 20%" to detect low battery.
- **Additional Trigger**: "Screen On" to catch when the device is actively used.
- **Constraint** (on the "Screen On" trigger): "Not Charging" to ensure the macro only runs when the device isn’t plugged in.
- **Actions**: "Lower Brightness" and "Show Notification: Low Battery!"

---

## 🔹 Tips for New Users

- **Explore Triggers**: Browse the trigger list in the macro editing screen to see what events your device can detect.
- **Start Simple**: Try a trigger like "Screen On" to understand how it initiates a macro.
- **Check Macro Status**: Ensure your macro is enabled, as disabled macros won’t respond to triggers.

---

## 🔹 Tips for Advanced Users

- **Use Multiple Triggers**: Combine triggers to make a macro respond to different scenarios, like both "Charger Connected" and "Location: Home."
- **Add Constraints**: Use constraints on individual triggers to create precise conditions, such as limiting a "Notification Received" trigger to a specific app or time.
- **Test Thoroughly**: Since only one trigger starts a macro, test your setup to ensure the right trigger fires under the expected conditions.

---

Triggers are the foundation of MacroDroid’s automations, giving you control over *when* your macros run. Whether you’re creating simple automations or complex workflows with multiple triggers and constraints, experimenting with triggers will help you unlock the full power of MacroDroid!
