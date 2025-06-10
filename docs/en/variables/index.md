# 🧠 Understanding Variables in MacroDroid

Variables are used to **store and manipulate data** in your macros — they’re like containers that hold values your macros can use and modify as they run.

## 🔄 Types of Variables

MacroDroid supports two main types of variables:

### 🌐 Global Variables

- **Syntax:** `{v=varName}` or `[v=varName]`  
- **Scope:** Available in **all macros**, including Action Blocks  
- Ideal for sharing data between different macros or across multiple triggers

### 📦 Local Variables

- **Syntax:** `{lv=varName}` or `[lv=varName]`  
- **Scope:** Only available **within the macro** where they were created (including Action Blocks called by that macro)  
- Ideal for temporary or macro-specific values

> Use Global Variables when you need persistent or shared data.  
> Use Local Variables for isolated, one-time-use values within a single macro execution.

---

## 🧰 Supported Variable Types

You can create variables using different **data types** depending on your needs:

- `String` – Text (e.g. "Hello world")  
- `Integer` – Whole numbers (e.g. 5, -12)  
- `Decimal` – Numbers with decimals (e.g. 3.14, -0.01)  
- `Boolean` – True/False  
- `Array` – A list of values (e.g. [1, 2, 3] or ["A", "B", "C"])  
- `Dictionary` – A collection of key-value pairs (e.g. {"name": "Alex", "age": 30})  

These types allow for powerful data handling inside your macros.

---

## 🔒 Secure Variables

When creating a variable, you can choose to mark it as **Secure**.

> A variable marked as secure will have its contents **cleared** when macro(s) are shared/exported or uploaded to the template store.

This is useful when your variable holds **sensitive information** like passwords, tokens, or personal data that shouldn’t be shared.

---

## ⚙️ Variables in Conditions and Constraints

Variables can be used in:

- **Conditions** (e.g., “if `isLoggedIn` is true”)  
- **Constraints** (e.g., “run only if `batteryLevel` > 50”)  
- **Text fields** by referencing `{v=yourVar}` or `{lv=yourVar}`  
- **Magic Text** inputs across actions

They let you dynamically control the behavior of your macros based on real-time values.

---

## 💡 Summary

| Type        | Syntax            | Scope                          | Good For                          |
|-------------|-------------------|--------------------------------|-----------------------------------|
| Global      | `{v=varName}`     | All macros and action blocks   | Shared or persistent data         |
| Local       | `{lv=varName}`    | Single macro and its blocks    | Temporary or isolated values      |
| Secure      | (any variable)    | Same as global/local           | Hiding sensitive data in exports  |

> Variables are the brain of your macro logic. Master them and you’ll unlock the full power of MacroDroid 🚀
