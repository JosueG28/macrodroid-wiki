# 🔒 Introduction to Constraints in MacroDroid

**Constraints** in MacroDroid are conditions that control whether a macro or specific actions within it will execute after a trigger is activated. They act as filters, ensuring your automations only run when specific conditions are met, making them precise and context-aware. MacroDroid supports two types of constraints: **General Constraints** and **Individual Constraints**, both of which can use logical operators (AND, OR, XOR, NOT) for flexible customization.

---

## 🔹 Types of Constraints

### 1. General Constraints
- **Location**: Found at the bottom of the macro editing screen in the **Constraints** section.
- **Behavior**: These constraints affect the **entire macro**. If any general constraint evaluates to false, the macro will not execute at all, regardless of the trigger.
- **Use Case**: Ideal for setting broad conditions that determine whether the macro should run.

#### Example:
A macro that turns on Wi-Fi when you connect your charger (trigger: "Charger Connected") might have a general constraint like "Time of Day: 8:00 AM - 10:00 PM" to ensure the entire macro only runs during the day.

### 2. Individual Constraints
- **Location**: Applied directly to a specific **trigger** or **action**. To add one, tap the action or trigger in the macro editing screen and select **Add Constraint**.
- **Behavior**: These constraints only affect the specific trigger or action they’re attached to. If the constraint fails, only that particular action or trigger is skipped, allowing other parts of the macro to proceed.
- **Use Case**: Perfect for fine-tuning individual actions or triggers within a macro.

#### Example:
In a macro with multiple actions, you could add an individual constraint to a "Send Notification" action, such as "Battery Level > 30%," so the notification only appears if the battery is above 30%, while other actions in the macro run regardless.

---

## 🔹 How Do Constraints Work?

1. **Evaluation**: Constraints are checked **after** the macro’s trigger is activated.
2. **Condition**: For a macro or action to proceed, all constraints (general or individual) must evaluate to true. If any constraint is false, the affected macro or action stops.
3. **Logical Operators**: Both general and individual constraints support **AND**, **OR**, **XOR**, and **NOT** operators, allowing you to create complex conditions.
   - **AND**: All conditions must be true.
   - **OR**: At least one condition must be true.
   - **XOR**: Exactly one condition must be true.
   - **NOT**: Inverts the condition’s result.

### Example with Logical Operators:
A general constraint might combine "Wi-Fi Connected" **AND** "Day of the Week: Weekdays" to ensure a macro only runs when connected to Wi-Fi on a weekday.

---

## 🔹 Common Constraint Examples

MacroDroid offers a wide range of constraints to customize your macros. Some popular options include:
- **Time-Based**: "Day of the Week" (e.g., only Monday to Friday) or "Time of Day."
- **Device State**: "Battery Level" (e.g., above 30%) or "Silent Mode."
- **Connectivity**: "Wi-Fi Connection" (e.g., only at home) or "Bluetooth Enabled."
- **Apps**: "Foreground App" (e.g., only if WhatsApp is open).

---

## 🔹 Why Use Constraints?

- **Precision**: Ensure macros or specific actions only run under the exact conditions you define.
- **Efficiency**: Prevent unnecessary resource usage, like battery or data.
- **Customization**: Use general constraints for macro-wide control or individual constraints for granular control over specific actions or triggers.

### Practical Example:
A macro that silences your phone when you arrive at work (trigger: "Location") could include:
- A **general constraint** like "Time of Day: 9:00 AM - 5:00 PM" to ensure the macro only runs during work hours.
- An **individual constraint** on a "Send Notification" action, like "Battery Level > 20%," to only send the notification if the battery is sufficiently charged.

---

Constraints, with their support for general and individual applications and logical operators, are a cornerstone of MacroDroid’s flexibility. Experiment with them to create smarter, more efficient automations, whether you’re a beginner or an advanced user!