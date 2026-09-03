# Sapiver Rhythm — Google Play Console release pack

Prepared: 3 September 2026

## App identity

- App name: **Sapiver Rhythm**
- Package name: `uk.co.sapiverpress.sapiverrhythm`
- Current app version: `1.0.1`
- Current Android versionCode: `2`
- Category: **Music & Audio**
- App type: **App**
- Default language: **English (United Kingdom)**
- Pricing: **DECISION REQUIRED before first public release**

### Pricing warning

Do not default Sapiver Rhythm to free without making the monetisation decision deliberately. Google Play currently allows a paid app to be changed to free, but once an app has been offered free it cannot later be changed to paid under the same package name. Charging later would require a new app/package. In-app purchases or subscriptions are a separate monetisation route.

This is therefore a release decision, not a form-filling default.

## Store listing

### App name

Sapiver Rhythm

### Short description

Build two-hand rhythm with guided patterns, tempo control and timing feedback.

### Full description

Sapiver Rhythm is a focused two-hand rhythm trainer for beginner and developing percussionists and musicians.

Work through 96 progressive exercises, starting with steady crotchets and quavers and moving into increasingly demanding two-hand combinations. Each exercise separates the left- and right-hand patterns clearly so you can see, hear and practise how the parts fit together.

Use Watch mode to hear and follow a pattern, Join in to practise with it, or Repeat to keep the exercise looping. Adjust the tempo to suit your current level and choose a timing profile that matches the amount of precision you want to work on.

Features:

- 96 progressive two-hand rhythm exercises
- Separate left- and right-hand rhythm lanes
- Watch, Join in and Repeat practice modes
- Adjustable tempo
- Relaxed, Standard and Precise timing profiles
- Immediate timing feedback while practising
- Progress and preferences remembered on the device
- No Sapiver Rhythm account required
- No advertising
- No microphone recording required

Sapiver Rhythm is designed as a practical training tool rather than an age-specific learning app. It is intended to help beginner and developing musicians build coordination, timing and independence between the hands.

## Privacy

Play Console privacy-policy URL:

`https://suite.sapiverpress.co.uk/app/sapiver-rhythm/privacy/`

The policy must be live at that URL before it is entered into Play Console or the app is submitted for review.

The Android app includes an in-app Privacy control in the Rhythm journey sheet. It opens the same public policy URL using the device's normal web-link handling.

## App content declarations

### Ads

**Does the app contain ads?** No.

There are no ad SDKs, banner ads, interstitial ads, native ads or house-ad placements in the current app.

### App access

**Are any parts of the app restricted?** No.

No account, login, subscription or access code is required. Reviewers can access the complete trainer immediately after installation.

Suggested reviewer note:

> No sign-in or special access is required. Open the app, select a level from Rhythm journey, and use Watch, Join in or Repeat. The two large pads at the bottom are the left- and right-hand practice controls.

### Data safety

For the current release:

- **Does the app collect or share required user-data types?** No.
- Practice taps and per-attempt timing are processed on the device.
- Current level, unlocked progress, tempo and timing-profile preference are stored locally on the device.
- The trainer does not send those values to Sapiver Press.
- No account data is collected.
- No analytics SDK is included.
- No advertising SDK is included.
- No cloud synchronisation is included.
- No location, contacts or camera data is required.
- Microphone recording permission is explicitly blocked in the Android configuration.

If any SDK, analytics, account, cloud-sync, advertising or remote telemetry is added later, the Data safety answers and privacy policy must be reassessed before release.

### Target audience — DECISION REQUIRED

The app itself is age-neutral: it is a general beginner-to-intermediate music-practice tool rather than a children's product. Do not make the Play target-audience selection merely to minimise policy work or maximise reach.

A plausible broad-audience selection is:

- Ages **13–15**
- Ages **16–17**
- Ages **18 and over**

However, Google requires developers to consider whether selected age groups are treated as children under applicable local law. Selecting teen groups can therefore create additional Families-policy considerations in some regions.

Do **not** select ages 12 and under unless Sapiver Rhythm is deliberately intended and marketed for those ages and the relevant Google Play Families requirements have been reviewed in full.

Final target-audience selection should be made immediately before the Play declarations are submitted, based on the intended marketed audience.

### Content rating — expected answers for the current build

Select the IARC category appropriate for a general non-game training/utility app, then answer the questionnaire according to the current build. Expected answers are **No** for content involving:

- Violence or injury
- Fear or horror
- Sexual content or nudity
- Profanity or crude humour
- Alcohol, tobacco or drugs
- Gambling or simulated gambling
- User-generated content
- User-to-user communication
- Location sharing
- Purchases or paid random items

The final rating is assigned by IARC after the questionnaire is submitted. Do not manually claim a specific PEGI/IARC rating before the certificate is returned.

### News app

No.

### Government app

No.

### Financial features

None.

### Health features

None.

### High-risk or sensitive permissions

None expected for the current release. Microphone recording permission is explicitly blocked. Play Console performs its own permission scan after the AAB is uploaded; use that scan as the final authority before submission.

## Store graphics

Required/expected pack:

- Play Store app icon: 512 × 512
- Feature graphic: 1024 × 500, JPEG or 24-bit PNG without alpha
- Minimum two phone screenshots
- Recommended: at least four portrait screenshots at 1080 × 1920 for stronger Play surfaces

The repository launcher icon is `assets/icon.png` and is 1024 × 1024. A 512 × 512 Play listing copy should be made from that source without changing the artwork.

## Release build

The repository contains `.github/workflows/android-production.yml`.

It is manual-only (`workflow_dispatch`) so it cannot consume an EAS production build unless someone deliberately presses **Run workflow**.

The workflow:

1. Installs locked dependencies.
2. Runs TypeScript checking.
3. Runs Expo Doctor.
4. Starts an EAS `production` Android build.
5. Waits for completion.
6. Downloads the resulting `.aab`.
7. Attaches it to the GitHub workflow run for one day as `sapiver-rhythm-production-aab`.

The `production` EAS profile is configured for Android App Bundle output.

## Release order

1. Confirm the privacy-policy URL is publicly live.
2. Confirm the latest validation workflow is green.
3. Decide whether the first public release is free, paid or uses another monetisation model. Do not publish it free by accident.
4. Decide the intended Play target-audience age groups.
5. Create Sapiver Rhythm in Google Play Console using package `uk.co.sapiverpress.sapiverrhythm`.
6. Complete the main store listing and upload the graphics.
7. Complete Ads, App access, Privacy policy, Target audience, Data safety and Content rating.
8. Run the manual `Android production AAB` workflow only when an EAS production build is authorised.
9. Upload the `.aab` to the required Play testing track.
10. Review Play Console's generated permission and policy warnings before publishing the test release.
11. If the developer account is subject to Google's new-personal-account testing requirement, maintain at least 12 opted-in closed testers continuously for 14 days before applying for production access.
