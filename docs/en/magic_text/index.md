# ✨ Magic Text in MacroDroid

**Magic Text** is a powerful feature in MacroDroid that lets you insert dynamic values into your macros instead of static text. These values, such as battery level, current time, sensor data, or device location, are updated in real-time when the macro runs, making your automations more flexible and responsive.

---

## 🔹 What is Magic Text and Where Do You Find It?

In many **triggers**, **actions**, and **constraints** in MacroDroid, you’ll notice fields with a **"..."** button next to them. Clicking this button opens a list of available **Magic Text** options, which depend on the context of the field you’re working with.

These dynamic values are resolved at runtime, meaning they reflect the device’s state when the macro executes.

### Example:
If you set up a notification with the text "My battery is at {battery}%", when the macro runs, MacroDroid replaces `{battery}` with the actual battery percentage. For instance, if your battery is at 42%, the notification will read: "My battery is at 42%."

---

## 🔹 How Does Magic Text Work?

Magic Text acts as a placeholder that MacroDroid automatically replaces with the corresponding value when the macro is triggered. This makes it ideal for customizing actions or making decisions based on real-time data.

---

## 🔹 Using Magic Text Manually

You can also type Magic Text directly into text fields instead of selecting from the list. This is helpful if you know the exact code or if an option isn’t listed.

### Warning:
- **Syntax matters:** Magic Text must be written exactly as shown (e.g., `{battery}`). A typo like `{batery}` will not work, and the text will appear as "{batery}" instead of the intended value.
- **Test your macros:** Always run a test to ensure manually entered Magic Text resolves correctly.

---

## 🔹 Format Styles

There are two formats for Magic Text:

- **Curly brackets `{}`**: Modern format (recommended).  
- **Square brackets `[]`**: Legacy format (still supported).

✅ **Use curly brackets `{}` whenever possible.** They’re more reliable and easier to read, especially for complex expressions (like nested lists or dictionaries).

### Example:
- Modern: `{battery}` → Displays the current battery level (e.g., "42").
- Legacy: `[battery]` → Also works but less preferred.

---

## 🔹 Tips for New Users

If you’re new to MacroDroid, Magic Text might seem complex at first, but these tips will help you get started:

- **Explore the options:** Click the **"..."** button whenever you see it to discover available Magic Text values for that field.
- **Start simple:** Try using `{battery}` in a notification to see how dynamic values work.
- **Test your setup:** Run your macro after adding Magic Text to confirm it behaves as expected.

---

## 🔹 Why Magic Text is So Powerful

Magic Text transforms your macros from static to dynamic, enabling them to adapt to your device’s current state. Whether you’re displaying real-time information, making decisions based on sensor data, or automating tasks more intelligently, Magic Text is one of MacroDroid’s most versatile tools.

Experiment with Magic Text to take your macros to the next level, whether you’re a beginner or a seasoned pro!