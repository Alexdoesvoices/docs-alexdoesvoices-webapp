#!/usr/bin/env bash

git fetch origin master
git reset --hard origin/master
git clean -fd

chmod +x deploy.sh

bun install
bun run build

pm2 restart ecosystem.config.cjs

echo "Deploy Successful: $(date +'%H:%M')" | mail -v -s "Collections app rebuilt" alexdoesvoices05@gmail.com

echo "Done!"