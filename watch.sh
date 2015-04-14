#! /bin/bash
while inotifywait -r less/*
do
    lessc less/a.less > css/a.css # your compile command
  done
done
