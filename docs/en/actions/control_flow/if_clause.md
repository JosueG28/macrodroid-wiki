# 🔄 Using the If Clause in MacroDroid

The **If Clause** in MacroDroid is a powerful tool that allows you to add conditional logic to your macros, enabling actions to execute only when specific conditions are met. Found under the **Conditions/Loops** category in the "Add Action" menu, the If Clause, along with its terminating **End If**, lets you control the flow of your macro based on dynamic conditions, making your automations smarter and more precise.

---

## 🔹 What is the If Clause?

The **If Clause** is an action that checks whether a specified condition is true before executing a set of subsequent actions. If the condition is met, the actions between the **If** and **End If** statements are executed. If the condition is false, those actions are skipped. Conditions in an If Clause work the same way as **constraints** in MacroDroid and support logical operators like **AND** (default) or **OR** for multiple conditions.

### Key Components:
- **If Clause**: Defines the condition to check.
- **End If**: Marks the end of the conditional block.
- **Else Clause** (optional): Specifies alternative actions to execute if the condition is false.
- **Else/If or Else/If Confirmed Clause** (optional): Allows additional conditions to be checked if the initial condition fails.
- **Nested Ifs**: You can place additional If/End If pairs within an existing If Clause for more complex logic.

### Example:
A macro might use an If Clause to check if the battery level is below 20%. If true, it could trigger a "Show Notification" action; if false, it could skip to an Else Clause to perform a different action, like "Increase Brightness."

---

## 🔹 How to Add an If Clause

1. In the macro editing screen, select **Add Action** > **Conditions/Loops** > **If Clause**.
2. Choose a condition (e.g., "Battery Level < 20%"). These conditions are identical to those available in constraints.
3. Add actions between the **If** and **End If** to execute if the condition is true.
4. (Optional) To add an **Else Clause**, select the If Clause again, choose **Add Else Clause** from the action menu, and add actions to execute if the condition is false.
5. (Optional) For additional conditions, select **Add Else/If Clause** or **Add Else/If Confirmed Clause** to check further conditions if the initial one fails.

---

## 🔹 Logical Operators in If Clauses

When using multiple conditions in an If Clause, you can combine them with:
- **AND** (default): All conditions must be true for the actions to execute.
- **OR**: At least one condition must be true for the actions to execute.

### Example:
An If Clause with conditions "Battery Level < 30%" **AND** "Not Charging" will only execute its actions if both are true.

---

## 🔹 Else and Else/If Clauses

- **Else Clause**: Use this to define actions that run when the If condition is false. To add, select the If Clause, then choose **Add Else Clause** from the action menu.
- **Else/If Clause**: Allows you to check an additional condition if the initial If condition fails. Select **Add Else/If Clause** to add another condition.
- **Else/If Confirmed Clause**: Similar to Else/If but requires user confirmation (e.g., via a dialog) before proceeding.

### Example:
- **If**: "Wi-Fi Connected" → Action: "Show Notification: Connected to Wi-Fi."
- **Else**: Action: "Show Notification: No Wi-Fi Connection."
- **Else/If**: "Mobile Data Enabled" → Action: "Show Notification: Using Mobile Data."

---

## 🔹 Nested If Clauses

You can place additional **If/End If** pairs within an existing If Clause to create complex, layered logic. This is called **nesting** and is useful for scenarios requiring multiple levels of decision-making.

### Example:
- **If**: "Time of Day: 8:00 AM - 10:00 PM"
  - **Nested If**: "Battery Level > 50%" → Action: "Increase Volume."
  - **Nested Else**: Action: "Show Notification: Low Battery."
- **End If**

---

## 🔹 Constraints in If Clauses

The conditions in an If Clause are the same as those used in **constraints** and include options like checking device states, time, connectivity, or variable values. One powerful option is **MacroDroid Variable/Compare Values**, which allows you to compare variables using specific operators.

### Comparison Operators for Variables:
- **= (Equal)**: The variable’s content must exactly match the specified value.
  - *Compatible*: String, Integer, Decimal, Boolean (Boolean only in compare values condition/constraints).
  - *Example*: `{my_variable} = "hello"` → True if the variable contains exactly "hello."
- **!= (Not Equal)**: The variable’s content must be different from the specified value.
  - *Compatible*: String, Integer, Decimal, Boolean.
  - *Example*: `{my_variable} != "hello"` → True if the variable does not contain "hello."
- **Contains**: The variable’s content must include the specified text.
  - *Compatible*: String.
  - *Example*: `{my_variable} Contains "info"` → True if the variable includes "info" (e.g., "Here are the informations...").
- **Excludes**: The variable’s content must not include the specified text.
  - *Compatible*: String.
  - *Example*: `{my_variable} Excludes "error"` → True if the variable does not contain "error."

### Wildcards:
- **`*`**: Represents any number of characters (0 or more, equivalent to `.*` in Regex).
  - *Example*: `{my_variable} = "data*"` → Matches "data," "database," or "data123."
- **`?`**: Represents exactly one mandatory character (equivalent to `.{1}` in Regex).
  - *Example*: `{my_variable} = "dat?"` → Matches "data" or "date" but not "database."
- **Regular Expressions**: Check the **Enter regular expression matching** box to use Regex syntax for advanced pattern matching (recommended for advanced users).

---

## 🔹 Why Use If Clauses?

- **Conditional Logic**: Execute actions only when specific conditions are met, making macros smarter.
- **Flexibility**: Combine conditions with AND/OR, use Else clauses, or nest Ifs for complex workflows.
- **Precision**: Compare variables or use wildcards/Regex for fine-tuned control over macro behavior.

### Practical Example:
A macro to manage notifications based on battery and time:
- **Trigger**: "Battery Level Drops Below 20%."
- **If Clause**: "Time of Day: 8:00 AM - 10:00 PM"
  - Action: "Show Notification: Low Battery, Charge Soon!"
  - **Nested If**: `{battery_level} < 10`
    - Action: "Lower Brightness."
  - **Nested Else**: Action: "Vibrate."
- **Else Clause**: Action: "Show Notification: Low Battery (Night Mode)."
- **End If**

---

## 🔹 Tips for New Users

- **Start Simple**: Begin with a basic If Clause, like checking "Battery Level < 30%," to understand how conditions work.
- **Test Conditions**: Run your macro to ensure the If Clause evaluates as expected.
- **Use Familiar Constraints**: Choose conditions you’ve used in constraints to ease into If Clauses.

---

## 🔹 Tips for Advanced Users

- **Nest If Clauses**: Use nested Ifs for multi-layered logic, such as checking multiple device states or variable values.
- **Leverage Variables**: Combine If Clauses with variable comparisons (e.g., Contains, Excludes) for dynamic decision-making.
- **Use Regex**: For complex string matching, enable regular expression matching to unlock advanced possibilities.

---

The If Clause is a cornerstone of advanced MacroDroid automations, giving you the power to create dynamic, context-aware macros. Experiment with conditions, Else clauses, and wildcards to build smarter workflows, whether you’re just starting or crafting intricate automations!