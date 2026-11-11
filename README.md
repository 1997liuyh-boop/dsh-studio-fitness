# dsh-studio-fitness

[简体中文](README.zh.md)

## Repository

- Repository name: `dsh-studio-fitness`
- Repository description: Local fitness log studio for workout plans, duration, sets, repetitions, weight and training volume.
- Source: `https://github.com/1997liuyh-boop/dsh-studio-fitness`

## Features

- Create and edit dated workout records with exercises, sets, repetitions, weight, duration and notes.
- Filter history by exercise or date and view workout count, total duration and training volume.
- Ask the current DSH session for summaries or the next workout plan; data stays in this studio.
- Import, export and clear local JSON data for backup and migration.
- Store records in the isolated studio data directory without installing external fitness services.

## Installation

Install the control bundle, then this exact studio tag through the official Desktop plugin manager after fully quitting Desktop:

```powershell
& "<Desktop install directory>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add "github:1997liuyh-boop/dsh-studio-library#v0.1.3"
& "<Desktop install directory>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add "github:1997liuyh-boop/dsh-studio-fitness#v0.2.3"
& "<Desktop install directory>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop list
```

Verify `main: lib/index.js`, `exports./client: lib/client.js`, `dsh.bundle.patch: ./cordis.patch.yml` and the built `static` entry in the installed package. Restart Desktop and open “Fitness studio”.

## Requirements and limits

Source builds require Node.js 22 and npm. Records remain local and are not synced to wearable devices. The studio does not provide medical advice or assess training risk. Export JSON before clearing DSH data. Upstream and license details are in `UPSTREAM.json`.

## License and sources

MIT licensed. Upstream attribution and the locked source revision are recorded in `UPSTREAM.json`.
