#!/usr/bin/env bash
array=${@:2:2}

arrayfinal=(I am ${array[*]} and $4)
echo ${arrayfinal[*]}
