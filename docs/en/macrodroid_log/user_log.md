<!-- CUSTOM COLOR METADATA -->
<meta name="category-color" content='{"color":"#618b4b","hover":"#FF8A65"}' />

# MacroDroid User Log Guide

The **User Log** in MacroDroid is a customizable activity tracker that records only what *you* choose. Unlike the **System Log**, which captures everything behind the scenes (including system-level details), the User Log focuses purely on the events you decide to log using the **Log Event** action.

This makes it an ideal tool for monitoring key actions, debugging specific issues, or simply keeping a clean and relevant history of your macros.

---

## 📚 What Gets Recorded
The User Log only includes entries you’ve explicitly set up. You have full control over what’s tracked and how it's labeled.

- Events triggered by the **Log Event** action  
  *(e.g., “Wi-Fi turned on”, “Sent SMS”, “Entered silent mode”)*
- Optional category tags for organization  
  *(default: **General**, or custom ones like “Battery Alerts”, “Location Triggers”, etc.)*

Each log entry includes:
- A **timestamp**
- Your **custom message**
- The **log level** you assign (explained below)
- The **category** it belongs to

---

## 🔢 Log Levels Explained
Log levels help you prioritize, organize, and filter entries based on their importance.

| Level       | Icon | Description                                 | Best For                 |
|-------------|------|---------------------------------------------|--------------------------|
| Detailed    | 🔍   | Fine-grained info (e.g., “Checking step X”) | Step-by-step debugging   |
| Standard    | 📋   | General activity (e.g., “Macro ran”)         | Day-to-day tracking      |
| Warnings    | ⚠️   | Possible issues (e.g., “Low battery detected”) | Spotting irregularities  |
| Errors      | ❌   | Failures (e.g., “Action failed”)             | Identifying what broke   |

You can later filter logs by these levels to isolate what matters most.

---

## 📤 Export & Manage Options
From the **⋮ menu** in the User Log screen, you can:

| Option               | Description                                 |
|----------------------|---------------------------------------------|
| Share Log (TXT)      | Export as plain text for easy reading or sharing |
| Share Log (HTML)     | Export a color-coded, formatted version for visual clarity |
| Clear Log            | Delete all entries and start from scratch   |
| Change Text Size     | Choose from Small to Large for better readability |

---

## 💡 Why Use It?

- **Less cluttered** than the System Log — only shows what’s relevant to you  
- **Great for debugging** — isolate a problem by adding strategic log points  
- **Beginner-friendly** — no technical jargon, just custom messages you define  
- **Powerful for experts** — can be used for precise flow analysis and behavior tracking  

It’s your own custom journal for macro behavior. Use it to validate triggers, check if conditions are met, or understand what happened (and when) during macro execution.

---

**Reference**: [MacroDroid User Log Documentation](https://macrodroidforum.com/wiki/index.php/User_Log)
