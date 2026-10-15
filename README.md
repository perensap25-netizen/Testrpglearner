# Spellbound: Codebound RPG

A small, phone-friendly learning RPG prototype. Complete coding quests to earn XP and rune shards, level up, and craft cosmetic badges.

## Install on your Galaxy Z Flip 7

### Fastest way (open the HTML file)
1. Unzip `Spellbound_Python_RPG.zip` on your phone.
2. Open `index.html` in a browser or a local HTML viewer.
3. This works as a web page, but **offline caching and "install app" support are not guaranteed** when opened as a local file.

### Recommended: install as a PWA
A Progressive Web App needs to be served over HTTPS (or localhost). For a proper install button and reliable offline caching:
1. Upload the unzipped folder to a static host that gives you HTTPS, such as GitHub Pages or another static web host you trust.
2. Open the HTTPS site in Chrome on your Z Flip 7.
3. Tap Chrome's `⋮` menu → **Add to Home screen** or **Install app** (wording varies).
4. Launch it from the new home-screen icon. Open it once while online so the app files can be cached; then test airplane mode.
5. Your progress is stored in that browser profile's local storage. Export a save from Inventory before clearing browser data or uninstalling.

If you do not want to upload it anywhere, you can run it from a computer on your local Wi-Fi using a local web server, but Android browser installation and HTTPS requirements vary. Do not expose a development server to the public internet.

## What it teaches
- Python: print, variables, conditions, loops, functions, debugging
- Game-dev thinking: rewards, progression, reusable logic
- Minecraft Bedrock addon concepts: JSON and pack manifests
- AI-agent safety: allowlists, permissions, confirmation
- Ethical pentesting: permission, scope, safe lab habits

## Important limitations
- This is a **learning-game prototype**, not a Python interpreter. It presents code puzzles and concepts; it does not execute arbitrary Python.
- Minecraft Bedrock addons primarily use JSON pack files and JavaScript/Script API for in-game scripting, not Python. Python can help generate or validate addon files.
- Cybersecurity content is intentionally beginner-friendly and defensive. Only test systems you own or have explicit permission to test.
- No accounts, telemetry, or external API calls are included in the app source.

## Editing
- `index.html`: UI, quest content, progression, local save
- `manifest.json`: install metadata
- `sw.js`: offline cache
- `icon.svg`: app icon
