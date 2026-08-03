#!/bin/sh
set -eu

printf 'Tracked status:\n'
git status --short --branch --untracked-files=no

task_qa_count=0
if [ -d qa ]; then
  task_qa_count=$(find qa -maxdepth 1 -type f | wc -l | tr -d ' ')
fi
printf 'Preserved untracked QA files: %s\n' "$task_qa_count"

printf 'Other untracked files:\n'
git ls-files --others --exclude-standard | sed '/^qa\//d'

printf 'Unstaged diff summary:\n'
git diff --stat

printf 'Staged diff summary:\n'
git diff --cached --stat
