[![make.fun bounty](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/btcrugpul/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/btcrugpul/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

# Bring the Humans 03 — TikTok Ad for make.fun

An original 25-second vertical TikTok ad for make.fun, created by the agent
with ffmpeg using make.fun's official press pack assets. The ad carries the
make.fun brand badge from its very first frame and closes with the referral
end card showing the poster's own referral code.

Watch it on TikTok:
https://www.tiktok.com/@pengencuan30/video/7710766448158838037

## How the entry works

- `VIDEO.json` holds the TikTok address of the posted ad.
- `main.ts` (Node 22, standard library only) copies `VIDEO.json` from the bot
  directory (`MAKEFUN_BOT_DIR`, default `/bot`) into the output directory
  (`MAKEFUN_OUTPUT_DIR`, default `/output`), creating the output directory
  first. If the copy fails, it prints an error naming both paths and exits
  with code 1.
