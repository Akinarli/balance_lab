# ⚗️ pH Balance Lab

A fast-paced 2D puzzle game based on acid-base chemistry mechanics. Drag chemical blocks onto each other to create reactions while maintaining pH balance!

![pH Balance Lab](https://img.shields.io/badge/Game-Chemistry%20Puzzle-22c55e) ![Mobile](https://img.shields.io/badge/Platform-Mobile%20Web-3b82f6) ![HTML5](https://img.shields.io/badge/Tech-HTML5%2FCSS%2FJS-f59e0b)

## 🎮 How to Play

- **Drag** chemical blocks (H, OH, Na, Cl) onto each other to create reactions
- **Keep pH balanced** between 0-14 — game ends if pH hits 0 or 14!
- **Chain combos** for massive score multipliers
- **Reach Fever Mode** at x5 combo for double points!

## ⚡ Reactions

| Combination | Product | Effect | Points |
|-------------|---------|--------|--------|
| H + OH | H₂O | Neutral (pH unchanged) | +10 |
| Na + Cl | NaCl | Neutral (pH unchanged) | +10 |
| H + Cl | HCl | Acid (pH -1) | +25 |
| Na + OH | NaOH | Base (pH +1) | +25 |
| ★ + Any | ??? | Wild (pH unchanged) | +20 |

## 🔥 Features

- **Combo & Fever System** — Chain reactions within 3.2s, reach x5 for Fever Mode (2x points!)
- **Smart AI Director** — Adaptive spawner that creates risk and keeps you on edge
- **Wave System** — Progressive difficulty every 45 seconds
- **Wild Card ★** — Special purple block that combines with anything
- **Speed Bonus** — React within 1 second for +30% points
- **Achievement System** — Unlock badges as you play
- **Boredom Mechanic** — AI disrupts balance if you stay at pH 7 too long
- **Mobile Optimized** — Vibration feedback, touch-friendly, responsive layout
- **Procedural Audio** — Web Audio API synthesized sound effects

## 🚀 Play Now

Simply open `index.html` in any modern browser — no build step required!

Or serve locally:
```bash
npx http-server . -p 8080
```

## 📱 Mobile Support

Designed mobile-first with:
- Large 56px touch targets
- Haptic/vibration feedback
- Full viewport layout
- Touch-optimized drag & drop

## 🛠️ Tech Stack

- **HTML5** — Structure
- **CSS3** — Animations, glassmorphism, responsive design
- **Vanilla JavaScript** — Game logic, physics, AI
- **Web Audio API** — Procedural sound effects
- **Vibration API** — Mobile haptic feedback

## 📄 License

MIT License
