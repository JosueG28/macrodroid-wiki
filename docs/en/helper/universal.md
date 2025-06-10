# 🛠️ Universal Helper Installation Guide (Android 14+)

This guide provides a beginner-friendly step-by-step explanation on how to install the **MacroDroid Universal Helper APK** on devices running Android 14 or higher using **ADB (Android Debug Bridge)**. Since Android 14 blocks direct installation of older APKs via standard methods, ADB is required. This tutorial assumes **zero command-line experience**, and explains how to set the `platform-tools` path, where to place the APK, and how to avoid common pitfalls.

---

## 🧰 Requirements

- **Android device** with Android 14 or higher.
- **PC or Mac** (Windows, Linux, or macOS).
- **USB cable** (must support data transfer, not just charging).
- **Universal Helper APK**: [Download here](https://macrodroidlink.com/universalhelper/MacroDroid_Universal_Helper.apk)
- **ADB Platform-Tools**:
  - [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
  - [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)
  - [macOS](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)

---

## 📱 Prepare Your Android Device

1. **Enable Developer Options**:
   - Go to **Settings → About phone**.
   - Tap **Build number** 7 times until you see “You are now a developer!”

2. **Enable USB Debugging**:
   - Go to **Settings → System → Developer options**.
   - Turn on **USB debugging**.

3. **(Optional) Disable Permission Monitoring**:
   - In Developer options, also enable:
     - **Disable permission monitoring**
     - **USB debugging (security settings)** if available.

---

## 💻 Set Up ADB on Your Computer

1. **Download and Extract Platform-Tools**:
   - Download the ZIP file for your OS from the links above.
   - Extract the folder to an easy-to-access location (like Desktop or Downloads).

2. **Open Terminal or Command Prompt in `platform-tools` Folder**:
   - **Windows**:
     - Go to the extracted `platform-tools` folder.
     - Shift + Right Click inside the folder → Choose **"Open PowerShell window here"** or **"Open Command window here"**.
   - **macOS/Linux**:
     - Open Terminal and use the `cd` command to enter the folder:
       ```bash
       cd ~/Desktop/platform-tools
       ```
       or
       ```bash
       cd ~/Downloads/platform-tools
       ```

3. **Check ADB is Working**:
   - Run:
     ```bash
     adb version
     ```
   - You should see the installed ADB version.

4. **Connect Your Phone and Verify Connection**:
   - Plug in your phone using the USB cable.
   - Run:
     ```bash
     adb devices
     ```
   - If you see your device listed, you're good. If it says “unauthorized,” check your phone for a popup to allow USB debugging.

---

## 📦 Install the Universal Helper APK

1. **Move the APK into the `platform-tools` Folder**:
   - Place the file `MacroDroid_Universal_Helper.apk` inside the `platform-tools` folder you extracted.

2. **Install the APK via ADB**:
   - In the terminal or command prompt, run:
     ```bash
     adb install --bypass-low-target-sdk-block MacroDroid_Universal_Helper.apk
     ```
   - You should see a success message.

3. **Grant Required Permission to the Helper App**:
   - Run the following command:
     ```bash
     adb shell pm grant com.arlosoft.macrodroid.helper android.permission.WRITE_SECURE_SETTINGS
     ```

---

## ✅ After Installation

- **Open the Universal Helper App**:
  - Find the app on your phone and open it.
  - Grant all the permissions it asks for.

- **Test in MacroDroid**:
  - Open MacroDroid and test a feature that needs the Helper (like toggling Wi-Fi or changing brightness).

---

## 🛠️ Troubleshooting Common Issues

1. **ADB Permission Error**:
   - Error: `"Neither user 2000 nor current process has android.permission.GRANT_RUNTIME_PERMISSIONS"`
   - Fix:
     - Ensure Developer Options and USB Debugging are enabled.
     - Check “USB debugging (security settings)” in Developer Options.
     - Restart phone and re-run the permission command.

2. **ADB Not Recognized / “Command not found”**:
   - Fix:
     - Make sure you’re inside the `platform-tools` folder.
     - Ensure `adb.exe` (Windows) or `adb` (Mac/Linux) is present.

3. **No Devices Found**:
   - Fix:
     - Ensure USB debugging is enabled.
     - Try another USB cable or port.
     - Make sure your phone is set to **File Transfer** mode (not “Charge only”).

4. **APK Not Found or Installation Fails**:
   - Fix:
     - Double-check the APK file name.
     - Make sure the APK is inside the `platform-tools` folder.
     - Run `adb install` from that same folder.

---

## ℹ️ Additional Info

- **Why the Helper is Needed**:
  - As of MacroDroid v5.8+, certain functions (like changing secure system settings) require the Universal Helper due to Android restrictions.

- **Tips for First-Time Users**:
  - Keep filenames simple; don’t rename the APK.
  - Use copy-paste for commands to avoid typos.
  - Always run commands inside the `platform-tools` folder unless you’ve added it to your system’s PATH.

- **Advanced ADB Use**:
  - To use `adb` from anywhere, you can add `platform-tools` to your system’s environment PATH.

---

## 🔗 Official Resources

- **ADB Docs**: [Android Debug Bridge (ADB)](https://developer.android.com/tools/adb)
- **MacroDroid Forum**: [MacroDroid Community](https://www.macrodroidforum.com/)
