# ✨ Magic Text: `{vtype=variable_name}`

**Returns:**  
A number indicating the data type of the specified variable.

**Values:**  
- `0` → Boolean (true/false)  
- `1` → Integer (whole number)  
- `2` → String (text)  
- `3` → Decimal (number with decimals)  
- `4` → Dictionary (key-value pairs)  
- `5` → Array (ordered list of values)

**Usage:**  
Replace `variable_name` with the name of the variable you want to check. Can be used in any text field that supports Magic Text (e.g., notifications, text-to-speech, logs, etc.).

**Simple explanation:**  
This Magic Text tells you what type of data a variable holds by returning a number code. For example, if it returns `2`, it means the variable is text.
