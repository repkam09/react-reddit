#!/bin/bash
npm run clean
git pull && npm run build && rsync -rP ./build/ /home/mark/website/reddit/
