#!/usr/bin/env bash

first=${@:1:1}
second=${@:2:1}
third=${@:3:1}
RESULT=$((first*(second+third)))
echo project-$RESULT/src/{index.js,util.js} project-$RESULT/dest/{index.js,util.js} project-$RESULT/test/{index.js,util.js}
