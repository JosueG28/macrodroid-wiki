# Understanding MacroDroid Helper Apps for Android Automation

## Why Helper Apps Are Necessary 🔧

Android has progressively restricted apps from controlling core system functions like WiFi/Bluetooth toggling. For MacroDroid to automate these features, it uses helper apps built with older Android tools that still have necessary permissions. Think of them as "specialized tools" that bypass Android's restrictions when MacroDroid needs to control system features.

---

## Helper App Comparison Table 📊
Here's which helper app you should choose:

| Feature                          | Connectivity Helper                                    | Universal Helper                                       |
|----------------------------------|-------------------------------------------------------|-------------------------------------------------------|
| **Android Version Support**      | Android 14+                                           | Android ≤13 (or Android 14+ via PC)                   |
| **Installation Difficulty**      | ★☆☆☆☆ (Easy - direct install)                         | ★★★☆☆ (Complex on Android 14+)                        |
| **Key Features**                 | • WiFi control<br>• Bluetooth toggle<br>• HotSpot     | • All Connectivity features<br>• Camera disable<br>• Shell scripts |
| **Required For Xiaomi Devices**  | Android 12+ (WiFi/BT features)                        | Android ≤11 only                                      |
| **Google Warning Reason**        | Uses system-level permissions                         | Built with older SDK (Android 5)                      |
| **Best For**                     | Most users on modern Android                          | Advanced users needing extra features                 |
| **Download**                     | [⬇️ Download](https://macrodroidlink.com/connectivityhelper/MacroDroid_Connectivity_Helper.apk) | [⬇️ Download](https://macrodroidlink.com/helper/MacroDroidHelper.apk) |

---

## Detailed Explanation

### **Connectivity Helper (Recommended for Android 14+)**
- **Why you need it**: Required for basic network controls (WiFi/BT) on modern Android
- **Permissions needed**: Location access (only to detect WiFi networks)
- **Installation Steps**:
  1. Download APK
  2. Tap "Settings" → "Install anyway" when warned
  3. Grant permissions and disable battery optimization

### **Universal Helper (Legacy Devices Only)**
- **Why you need it**: For advanced features like camera blocking or shell scripts
- **Permissions needed**: Extensive system-level permissions
- **Installation Warning**: Requires PC/ADB on Android 14+

---

## Step-by-Step Installation Guides  

[Connectivity Helper](<connectivity.md>)  
[Universal Helper](<universal.md>)
