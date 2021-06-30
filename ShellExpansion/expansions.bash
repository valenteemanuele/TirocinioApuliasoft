#!/usr/bin/env bash

RESULT=$((($1)*($2+$3)))
echo project-$RESULT/src/{index.js,util.js} project-$RESULT/dest/{index.js,util.js} project-$RESULT/test/{index.js,util.js}
