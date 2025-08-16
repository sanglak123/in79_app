#!/bin/bash
set -euo pipefail

APP_ROOT="/home/inn70544/apps/in79app"
LOG_DIR="/home/inn70544/logs"
LOG_FILE="$LOG_DIR/deploy_in79app.log"
LOCK_FILE="/tmp/deploy_in79app.lock"

mkdir -p "$LOG_DIR"
exec 9>"$LOCK_FILE" || true
flock -n 9 || { echo "$(date '+%F %T') skip: another deploy running" >> "$LOG_FILE"; exit 0; }

cd "$APP_ROOT"

# Chọn trình quản lý gói
if [ -f yarn.lock ]; then
  PKG="${PKG:-yarn}"
  INSTALL="$PKG install --frozen-lockfile"
  BUILD="$PKG run build"
else
  if command -v npm >/dev/null 2>&1; then PKG="npm";
  elif [ -x /opt/alt/alt-nodejs18/root/usr/bin/npm ]; then PKG="/opt/alt/alt-nodejs18/root/usr/bin/npm";
  elif [ -x /opt/cpanel/ea-nodejs18/bin/npm ]; then PKG="/opt/cpanel/ea-nodejs18/bin/npm";
  else PKG="npm"; fi
  INSTALL="$PKG ci"
  BUILD="$PKG run build"
fi

CURRENT="$(git rev-parse HEAD 2>/dev/null || echo none)"
LAST="$(cat .last_built_sha 2>/dev/null || echo none)"

if [ "$CURRENT" != "$LAST" ]; then
  echo "$(date '+%F %T') build start: $CURRENT" >> "$LOG_FILE"
  $INSTALL
  $BUILD
  mkdir -p tmp && touch tmp/restart.txt
  echo "$CURRENT" > .last_built_sha
  echo "$(date '+%F %T') build done : $CURRENT" >> "$LOG_FILE"
else
  echo "$(date '+%F %T') no change (HEAD=$CURRENT)" >> "$LOG_FILE"
fi
