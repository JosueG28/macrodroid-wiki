<!-- CUSTOM COLOR METADATA -->
<meta name="category-color" content='{"color":"#018e42","hover":"#FF8A65"}' />

# MacroDroid System Log Guide

The **System Log** is MacroDroid's activity diary where all app events are recorded. It's essential for troubleshooting and understanding your automations. Here's what you need to know:

## 📚 What Gets Recorded
- Trigger activations (e.g., "WiFi connected")
- Actions performed (e.g., "Notification sent")
- Constraints checks (e.g., "Battery level constraint passed")
- Variable changes (e.g., "Variable %my_var updated")
- Errors and warnings
- Macro start/end times

## 🔢 Log Levels Explained
MacroDroid categorizes entries by importance:

| Level | Icon | What It Shows | Use Case |
|-------|------|---------------|----------|
| **Detailed** | 🔍 | Every single step (e.g., "Checking constraint: Time between 8:00-9:00") | Deep debugging - very verbose |
| **Standard** | 📋 | Key milestones (e.g., "Macro 'Alarm Off' triggered", "Action: Volume set to 0") | Daily monitoring (recommended) |
| **Warnings** | ⚠️ | Non-critical issues (e.g., "Location unavailable for 'Weather Update'") | Potential problems review |
| **Errors** | ❌ | Critical failures (e.g., "Action failed: File not found", "Macro disabled") | Fixing broken macros |

## 🔍 Filtering the Log
Tap the **filter icon** (top-right) to narrow results:

![Filter Icon](https://simpleicons.org/icons/filter.png) *Filter by:*
- **Event Types**:
  - ✅ Triggers  
  - ✅ Actions  
  - ✅ Constraints  
  - ✅ Variables  
- **Macros**:
  - Show specific macros or **All Macros**
- **Variables**:
  - Track individual variables

## 📤 Export & Manage Options
Use the **⋮ menu** (top-right) for:

| Option | Description |
|--------|-------------|
| **Share Log (TXT)** | Export as plain text - best for sharing |
| **Share Log (HTML)** | Color-coded formatted report - easier to read |
| **Clear Log** | Wipe all entries (start fresh) |
| **Change Text Size** | Adjust font size (Small → Large) |

## 💡 Pro Tips
1. **Debugging**: When a macro misbehaves, check the log to see where it failed
2. **Timestamp**: All entries include exact execution times
3. **Color Coding**: Errors (red), Warnings (orange), Actions (blue)

> The log automatically scrolls to show latest entries - perfect for real-time monitoring!

Example entry:  
`[12:30:45] 🔔 Trigger: Device Boot Completed → Macro 'Startup Setup' RUNNING`  
`[12:30:47] ✅ Action: WiFi enabled (Macro: Startup Setup)`  
`[12:30:49] ⚠️ Constraint failed: Battery > 30% (Macro: Backup Photos)`
