#!/usr/bin/env bash

i=$1

while [[ $i -lt $2 ]]; do
  if [[ $(($i % 2))  == 0  ]]; then echo $i;
  fi
   i=$(( $i + 1 ))

done
