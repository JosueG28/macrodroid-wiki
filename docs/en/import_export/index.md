# 🔁 Exporting and Importing in MacroDroid

MacroDroid provides a robust system to **back up, share, and migrate** your automations. You can export entire setups or specific components like macros, categories, or action blocks.

---

## 📦 Full Export / Import

From the **Import/Export** tile on the main screen:

### Export:
- **Export all** generates a `.MDR` file containing:
  - All macros, action blocks, variables
  - Settings, quick tiles, drawer items
- Choose to **save to device storage** or **share via Android's share menu**

### Import:
1. Tap **Import/Export** → **Import Macros**  
2. Select a `.MDR` file from storage  
3. Optionally **reset variables on import**  
   > **Note:** Resets all variables to their default values (e.g., integer → 0, boolean → false, strings → empty) when loading an `.mdr` file.

> ⚠️ **Critical Warning**:  
> Importing a `.MDR` file **will delete all existing macros and settings** before restoring the imported content. This action cannot be undone.

---

## 🔄 Export via Action

Use the **Export Macros** action within macros:

- **To File (.MDR)**: Creates complete backup file
- **To Variable**: Exports as JSON string  
  *Requires manual steps*:  
  1. Save output to file  
  2. Rename with `.MDR` extension  
  3. Import via main screen

---

## 🔹 Exporting Individual Components

### Single Macro (.macro file):
- **From macro list**: Long-press macro → **Export Macro**
- **From editor**: 3-dot menu (top-right) → **Export Macro**
- *Includes*:  
  - Triggers, actions, constraints  
  - Global/local variables (if used)  
  - Referenced action blocks

### Entire Category (.category file):
- Long-press category → **Export**
- *Includes*:  
  - All macros in category  
  - Related action blocks  
  - Associated variables

### Action Block (.ablock file):
- **Action Blocks** screen → Long-press block → **Share**
- *Contains only* the action block (no macros/variables)

---

## 🧩 Supported Import Formats

| File Type      | Contents                      | Import Method               |
|----------------|-------------------------------|-----------------------------|
| `.MDR`         | Full setup                    | Main screen → Import Macros / Any file manager |
| `.macro`       | Single macro + dependencies   | Any file manager            |
| `.category`    | Category + contents           | Any file manager            |
| `.ablock`      | Standalone action block       | Any file manager        |
