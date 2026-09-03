# Sapiver Rhythm

Sapiver Rhythm is an offline two-hand rhythm trainer for beginner percussionists progressing towards intermediate coordination.

## Included

- 96 validated, progressive two-hand exercises
- Watch, Join in and Repeat modes
- Four-beat count-in at the selected tempo
- Absolute Web Audio scheduling without cumulative drift
- Live green/red timing feedback
- Foundation, Developing and Intermediate timing bands
- Relaxed, Standard and Precise accuracy profiles
- Local progress storage

The verified standalone trainer is bundled inside the Android application at `assets/rhythm-trainer.html`; it does not require a network connection.

## Local checks

```bash
npm ci
npm run typecheck
npx expo-doctor
```

## Android preview APK

1. Link this repository to the `sapiverforge/sapiver-rhythm` EAS project.
2. Add an `EXPO_TOKEN` repository secret.
3. Run **Android preview build** from the GitHub Actions tab.

The workflow submits the build with `--no-wait`, so GitHub Actions does not consume hours while the free EAS queue is waiting.
