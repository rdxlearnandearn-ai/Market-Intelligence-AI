README: Convert uploaded Expo project into Pure React Native (0.74) - instructions

What this ZIP contains:
- template files for android gradle configuration and app build.gradle
- package.json template for React Native 0.74
- GitHub Actions workflow (build.yml) configured to build debug APK
- README with exact commands to finish conversion

IMPORTANT: I cannot run native Android builds inside this environment. These files are prepared for you to apply to your repo.
Follow the steps exactly to convert your project to pure React Native while preserving UI (App.tsx).

STEPS - run in Termux (or PC) IN YOUR PROJECT ROOT where your uploaded repo is extracted:

1) Backup current project (always safe):
   cp -r ~/myapp/market-intelligence-expo ~/myapp/market-intelligence-expo-backup

2) Remove old android and ios (if any) - we will use pure RN native folder:
   rm -rf android ios

3) Create a temporary clean React Native project (requires Node + npx available):
   npx react-native init tempapp --version 0.74.1

4) Copy the clean android folder into your project (this gives a native android skeleton):
   cp -r tempapp/android ./
   rm -rf tempapp

5) Replace your package.json with the provided package.json (or merge dependencies):
   # You can either overwrite or merge carefully. To overwrite:
   mv package.json package.json.bak
   cp /path/to/Market-Intelligence-RN-fix/package.json ./

6) Install node modules:
   npm install

7) Place your App.tsx (UI) at the project root (replace temp App.js):
   # If your UI is in App.tsx inside the uploaded project, ensure it sits at root.
   # If your UI uses expo APIs, you must remove those imports or replace with RN equivalents.
   # Keep UI files unchanged.

8) Copy gradle files from this ZIP into android/ (they are prepared):
   cp /path/to/Market-Intelligence-RN-fix/android/build.gradle android/build.gradle
   cp /path/to/Market-Intelligence-RN-fix/android/gradle.properties android/gradle.properties
   cp /path/to/Market-Intelligence-RN-fix/android/settings.gradle android/settings.gradle
   cp /path/to/Market-Intelligence-RN-fix/android/app/build.gradle android/app/build.gradle

9) Ensure android/gradlew is executable:
   chmod +x android/gradlew

10) Commit changes and push to GitHub:
   git add -A
   git commit -m "Convert to pure React Native 0.74 - apply build fixes"
   git push origin main

11) On GitHub, run the workflow: Actions -> Android APK Build -> Run workflow
   After the workflow completes, download the APK from Artifacts.

NOTES and troubleshooting:
- If your UI used Expo-specific APIs (expo-router, expo-file-system, expo-constants), you must replace them with React Native or community packages before building.
- If you used TypeScript, ensure tsconfig.json and dependencies remain compatible.
- If you used native modules previously (Firebase, custom native SDKs), remove them or add proper implementation for pure RN.
- I preserved your UI files. If you want, I can also prepare a small patch to adapt any small Expo-only imports to RN equivalents — paste any errors here and I'll fix them.

If you want, I can produce a git patch file (.patch) with all the files replaced; say 'make patch' and I will include it in the ZIP.
