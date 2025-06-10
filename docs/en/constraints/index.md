
# 🔒 Introduction to Constraints in MacroDroid

**Constraints** are conditions that must be met *at the moment a trigger fires* for your macro to execute. They act as filters for your triggers, adding precision to when your automations should run. While triggers define *when* a macro could start, constraints define *whether* it actually should based on additional criteria.

[**Go to constraints list**](list.md)

---

## 🔹 What Are Constraints?

A **constraint** is a real-time condition checked when a trigger activates. If *all constraints* are satisfied, the macro runs. If any constraint fails, the macro is blocked. Constraints can check device states (e.g., Wi-Fi status), contextual data (e.g., time of day), or custom variables.

### Key Rules:
1. Constraints only validate conditions **at the exact moment the trigger fires**.  
2. They use **AND logic** – *all* constraints must pass simultaneously.  
3. Constraints *do not* continuously monitor conditions (unlike triggers).  

### Example:
A "Headphones Connected" trigger + a "Media Volume < 30%" constraint will only run your macro when headphones are plugged in *and* volume is already low.

---

## 🔹 Using Multiple Constraints

You can add **multiple constraints** to a macro. All constraints must be satisfied for the macro to execute. This allows complex conditional logic without cluttering triggers.

### How Constraints Interact:
- **AND Logic Only**: Constraints are *always* combined with AND (`Constraint1 AND Constraint2 AND ...`).  
- **Order Doesn't Matter**: Evaluation happens simultaneously when the trigger fires.  
- **Flexible Combinations**: Mix different constraint types (e.g., time + location + battery).  

### Example:
A "Screen On" trigger with these constraints:  
1. `Time of Day: 10:00 PM - 7:00 AM`  
2. `Charging: No`  
3. `Wifi Connected: Yes`  
→ Only runs at night, on battery, when connected to Wi-Fi.

---

## 🔹 Two Ways to Apply Constraints

### 1. Local Constraints (Attached to Triggers/Actions)
- Added directly to **individual triggers or actions**
- Only affect the specific component they're attached to
- Don't impact other parts of the macro

**Trigger Constraint Example**:  
A "Screen On" trigger with local constraint `Charging = No`  
→ Macro only starts when screen turns on *while not charging*

**Action Constraint Example**:  
A "Set Brightness to 100%" action with constraint `Time = Daytime`  
→ This brightness action only runs during daytime

### 2. Global Constraints (In Constraints Section)
- Added in the macro's dedicated **Constraints section**
- Affect the **entire macro**
- Must be satisfied for the macro to run at all

**Global Constraint Example**:  
Global constraint `Wi-Fi Connected = Home Network`  
→ Macro won't run unless device is on home Wi-Fi

---

## 🔹 Scopes Compared

| Constraint Type | Where Added | Scope | Example Use Case |
|-----------------|-------------|-------|------------------|
| **Trigger Local** | On trigger | Only that trigger | Run macro when headphones connect, but only if volume > 50% |
| **Action Local** | On action | Only that action | Send SMS only if battery > 20% |
| **Global** | Constraints section | Entire macro | Block macro during work hours |

---

## 🔹 Practical Examples

### Scenario 1: Morning Alarm Macro
**Macro Goal**: Smart alarm that prepares your day only under the right conditions

- **Trigger**: 7:00 AM Alarm
- **Global Constraint**: Day of Week = Weekdays  
→ Macro only runs Monday to Friday

- **Action 1**: Increase Volume
- **Action 2**: Read Weather Forecast
- **Action 3**: Turn On Coffee Smart Plug  
  - **Local Constraint**: Smart Plug must be connected

This setup ensures the macro only runs on workdays, and only attempts to brew coffee if the smart plug is ready.

### Scenario 2: Location-Based Reminder

**Trigger**: Enter Grocery Store (geofence)  
**Global Constraint**: Time = 8AM-8PM (macro won't run at night)  
**Action**: Show "Buy Milk" notification  
**Action Constraint**: Notification Not Exists (prevents duplicates)

---

## 🔹 Common Constraint Examples

| Category          | Examples                                      |
|-------------------|-----------------------------------------------|
| **Device State**  | Screen On/Off, Charging State, Headphones Plugged |
| **Connectivity**  | Wi-Fi Connected/SSID, Bluetooth Device Active    |
| **Time/Location** | Time Range, Day of Week, Enter/Exit Geofence    |
| **System**        | Battery Level, Foreground App, Notification Exists |
| **Custom**        | Variable Value, Macro Not Running               |

---

## 🔹 Why Constraints Matter

- **Precision**: Prevent macros from running in unwanted scenarios (e.g., during meetings).
- **Efficiency**: Reduce unnecessary macro executions to save battery/resources.
- **Simplification**: Avoid creating duplicate macros for slight condition variations.
- **Dynamic Control**: Combine with variables for context-aware automations.

---

## 🔹 Constraints vs. Triggers

| Triggers                          | Constraints                          |
|-----------------------------------|--------------------------------------|
| Detect **events** (e.g., SMS received) | Check **states** (e.g., screen off)    |
| Start macro execution             | Gatekeep *whether* macro runs        |
| Support OR logic (multiple triggers) | Use AND logic (all must pass)        |
| Instantaneous (moment of event)   | Evaluated at trigger-fire instant    |

---