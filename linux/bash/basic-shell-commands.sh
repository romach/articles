#!/usr/bin/env bash

## Bash command structure

# <command> [<options>] [<arguments>]
ls -lah /home

# options combination
ls -l -a -h
ls -lah

## System variables.

# print a pathname of the user's preferred command language interpreter (ex., /bin/bash)
echo $SHELL;

## File and directory listing.

# print current working directory
pwd
# list of files and directories in current directory
ls
# list all files and directories (including hidden (started with dot)) in current directory with additional information
# (size, rights, modification time)
ls -lah

## Move to directory

# move to home directory
cd
  # or
cd ~

# move to parent directory
cd ..

## Files and directories

# information about filesystem structure - https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard

# information about file or directory
# stat <file name>
stat file.txt

# print file content
cat ~/.bashrc

# print first 2 lines of file
head -n 2 ~/.bashrc

# print last 2 lines of file
tail -n 2 ~/.bashrc

## Logs

# show list of logs
ls /var/log

# system log - /var/log/syslog

# show last file content and wait for new information in file
tail -f /var/log/syslog

# open file with pager:
# ↑, ↓ - scroll up/down
# q - exit
# f - page forward
# b - page backward
# / - search: n - next search result, N - previous search result
less /var/log/syslog

## Find text

# finds word 'text' in file 'file.txt'
grep text file.txt

# finds word 'text' in file 'file.txt', also displays one line before and one line after found word
grep -C text file.txt

# finds word 'text' in current directory recursively, also displays line number where word was found
grep -Rn text .

## Redirect input/output
# redirect output to file (with rewrite)
ls -la > output

# redirect output to file (with append)
ls -la >> output

# redirect content of input.txt to command input
wc -l < input.txt

# redirect input and output
wc -l < input.txt > output.txt

# redirect errors to file
ls -la 2&> output.txt

## Pipelines
# find lines with words 'alias' and 'color' in .bashrc
cat .bashrc | grep alias | grep color

## Environment variables
# list environment variables
env

# output environment variable
echo $HOME

# change environment variable 'HOME' for command 'cd'
HOME=/some-dir cd

# change environment variable 'HOME' for current session
export HOME=/tmp

## Commands history
# list commands history with command 'history'
history

# list commands history from file. History saves to file after exit from terminal
cat ~/.bash_history

# prints commands size of history
echo $HISTFILESIZE

# execute last command
!!

# search in commands history
# ctrl + r