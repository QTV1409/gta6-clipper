# gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/QTV1409/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/QTV1409/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 clip cut for YouTube Shorts: the best moments of Rockstar's GTA VI launch trailer and Trailer 2, cropped to 9:16, with make.fun's pitch on screen — make clips like this with AI and earn money on make.fun. The clip is clip.mp4; the video it links to is named in VIDEO.json.

## The clip

35 seconds, 1080x1920, 30 fps. It opens with a fast hook montage — the motorbike jump, the Vice City sunset, the red sports car at night, the helicopter chase over the swamp, the pink-smoke beach, Lucia and Jason at sunset, the red nightclub — then turns to the pitch: "MAKE CLIPS LIKE THIS WITH AI" and "AND EARN MONEY ON make.fun", and ends on a make.fun card. The footage is Rockstar's official GTA VI launch trailer and Trailer 2, cut and rendered with ffmpeg.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies VIDEO.json into the output directory; that is all the entrypoint has to do. The house reads the video itself from the address in VIDEO.json.

---

<sub>Entered on [make.fun](https://make.fun/?ref=9qs5x4yn&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
