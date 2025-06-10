The **Connectivity Helper** is a companion app for MacroDroid that works around Android 14+ restrictions, enabling these advanced features:  
- Enable/Disable WiFi and connect to specific networks  
- Enable/Disable Bluetooth  
- Enable/Disable HotSpot  

**Compatibility**: Requires MacroDroid v5.47.8 or higher  

---

#### Installation Steps

1. **Download APK**  
   Use your phone's browser to download directly from the [official link](https://macrodroidlink.com/connectivityhelper/MacroDroid_Connectivity_Helper.apk).

2. **Open downloaded file**  
   Locate `MacroDroid_Connectivity_Helper.apk` in your notifications or Downloads folder.

3. **Handle "Unknown Apps" warning**  
   If you see this security block:  
   ![Unknown Apps Block](https://macrodroidforum.com/wiki/images/4/44/Not_allowed_to_install.png)  
   - Tap **Settings** → Enable **"Install unknown apps"** for your browser

4. **Bypass Play Protect warnings**  
   If Google Play Protect blocks installation:  
   - Initial warning:  
   ![Play Protect Warning 1](https://macrodroidforum.com/wiki/images/6/6c/Install_warning1.png)  
   - Tap **More details** → Select **Install anyway**:  
   ![Play Protect Option](https://macrodroidforum.com/wiki/images/1/1b/Install_warning2.png)

5. **Complete installation**  
   Follow standard installation prompts after warnings are cleared.

6. **Configure permissions**  
   When opening the app for the first time:  
   ![Permission Screen](https://macrodroidforum.com/wiki/images/d/d8/Connectivity_helper_screenshot.png)  
   Grant these essential permissions:  
   Nearby devices  
   Notification access  
   Usage access  

   **Important Notes**:  
   - Location permission is only used to control WiFi/query SSIDs – your actual location is NOT accessed  

```diff
- Battery optimization MUST be disabled for reliable functionality
```

---

#### Device-Specific Configuration

**Disable Battery Optimization**  
```diff
- Critical for all devices! Must be disabled for reliable functionality
```
Go to:  
`Settings → Apps → Connectivity Helper → Battery → Optimize battery usage`  
Select **All apps**  
Toggle **OFF** for Connectivity Helper  

**Xiaomi Devices**  
Like many OEM devices, Xiaomi requires additional configuration:  

After standard battery optimization steps:  
Open **Security app → Battery → App battery saver**  
Find **Connectivity Helper** → Set to **No restrictions**

Additionally go to:  
`Settings → Apps → Permissions → Other permissions`  
Enable:
- Change Wi-Fi connectivity
- Change Bluetooth connectivity

---

#### Android Version Considerations

**Android 12–13**  
To use WiFi actions:
- Connectivity Helper must be installed (even with universal helper app)
- Enable special permissions:  
  `Settings → Apps → Connectivity Helper → Other Permissions`  
  - Change Wi-Fi connectivity  
  - Change Bluetooth connectivity  

**Android 14+**
```diff
- WiFi Limitation: Automating WiFi enabling requires manual confirmation!
  System will always display a prompt requiring user approval.
  No known workaround exists for this OS restriction.
```

Bluetooth and HotSpot actions work without limitations.