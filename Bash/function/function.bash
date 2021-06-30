#!/usr/bin/env bash

pari() {
  
  [[ $1 -lt $2 ]] || return

  spazio="$3"
  if [[ $(( $1 % 2 )) -eq 0 ]]; then
    i=0
    for (( i = 0; i < $spazio; i++ )); do
      echo -n ' '
    done
    echo $1

  
    spazio=$(( spazio + 1 ))
  fi

  pari $(( $1 + 1 )) $2 $spazio
}

main() {
  echo $FUNCNAME
  pari $1 $2 1
}

main $1 $2
