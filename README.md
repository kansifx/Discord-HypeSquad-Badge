# Discord HypeSquad Changer

This repository contains a specialized **JavaScript** snippet designed to change or join a Discord HypeSquad House (Bravery, Brilliance, or Balance) instantly. Instead of taking the manual quiz, this script communicates directly with Discord's internal API by hooking into Webpack modules.

## Features
- **Dynamic Module Hooking**: Automatically locates the `HTTPUtils` module within the Discord client.
- **Instant Migration**: Switch between houses without waiting for quiz cooldowns.
- **Console-Ready**: Designed to be executed directly in the Developer Tools console.

## How to Use

1. Open Discord in your browser or the Desktop app.
2. Press `Ctrl + Shift + I` to open **Developer Tools**.
3. Navigate to the **Console** tab.
4. Copy the full code from `hypesquad_changer.js` in this repo and paste it into the console.
5. Press `Enter`.
6. Refresh Discord (`Ctrl + R`) to see your new badge!

## House ID Reference
Update the `houseId` variable in the script to your preferred house:
- `1` : **House of Bravery**
- `2` : **House of Brilliance**
- `3` : **House of Balance**

## Technical Overview
The script functions by pushing a custom chunk into `webpackChunkdiscord_app` to gain access to the Webpack requirement function. It then performs the following:
- Scans the Webpack cache for modules containing specific code signatures (e.g., `"HTTPUtils"`).
- Extracts the API handler to perform an authenticated `POST` request to the `/hypesquad/online` endpoint.

## Disclaimer
This project is for **educational purposes only**. Manipulating the Discord client via the console technically violates Discord's Terms of Service. Use this at your own risk. The author is not responsible for any account actions taken by Discord.
