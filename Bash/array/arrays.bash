#!/usr/bin/env bash
array=${@:2:2}

arrayfinal=(I am ${array[*]} and ${@:4:1})
echo ${arrayfinal[*]}
