# 🧱 Understanding Action Blocks in MacroDroid

Action Blocks let you create reusable "chunks" of actions to simplify your macros. Think of them like custom building blocks!

## 🔑 Key Features

### 1️⃣ Input/Output Parameters

- **Inputs**: Values you feed into the Action Block  
- **Outputs**: Results the Action Block returns to your macro  
- **Supported Types**:  
  ✅ Text (String)  
  ✅ Numbers (Integer/Decimal)  
  ✅ True/False (Boolean)  
  ✅ Lists (Array)  
  ✅ Key-Value Collections (Dictionary)  

> **Example:** Create a *"Calculate Discount"* Action Block with `price` (input) and `final price` (output)

### 2️⃣ Working Variables ⚙️

- Temporary "scratchpad" variables  
- Only exist **while the Action Block is running**  
- Ideal for intermediate calculations  
- **Automatically reset** every time the block runs  

> **Example:** Use `tempTotal` to hold intermediate values during a multi-step calculation

---

## 🛠️ Anatomy of an Action Block

```
[Action Block Name]
│
├── 📥 INPUTS (Optional)
│   └── e.g., userName (Text), itemPrice (Number)
│
├── ⚙️ WORKING VARIABLES (Optional)
│   └── Temporary values (cleared after each run)
│
├── ▶️ ACTIONS
│   ├── Your standard MacroDroid actions
│   ├── Can use inputs + working variables
│   └── Can set outputs/working variables
│
├── 🛑 CLAUSES/RESTRICTIONS (Optional)
│
└── 📤 OUTPUTS (Optional)
    └── e.g., discountedPrice (Number), greetingMessage (Text)
```

---

## ⭐ Key Benefits

- **Reusability**: Use the same block in multiple macros  
- **Simplify Macros**: Replace 10 actions with 1 block  
- **Easy Updates**: Change logic in one place  
- **Cleaner Macros**: Hide complex operations under the hood  

---

## 🚫 Important Limitations

- ❌ No triggers (only actions/clauses/restrictions)  
- ❌ Working variables disappear after the block finishes  
- ❌ Can't run independently (must be called from a macro or another block)  

---

## 🧪 Real-World Example: "Send Custom Notification" Action Block

```
INPUTS:
  - title (Text)
  - message (Text)
  - icon (Text)

WORKING VARIABLES:
  - tempTimestamp (Text)

ACTIONS:
1. Set [tempTimestamp] = Current time
2. Create notification:
   Title = {title}
   Text = {message} at {tempTimestamp}
   Icon = {icon}

OUTPUTS: (none)
```

---

## 💡 Pro Tips

- Start simple — add complexity later  
- Name variables clearly (`totalPrice` vs `tempCalc`)  
- Use "Comment" actions to document your logic  
- Test blocks individually before integrating them into macros  

> Action Blocks are like mini-macros inside your main macros. Build once, reuse everywhere ✨
