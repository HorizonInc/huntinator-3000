#!/bin/bash

COMMIT_MSG=$1

# Commit changes and push to master
git add .
git commit -m "DEPLOY - $COMMIT_MSG" 
git push origin master

# Change to release branch and merge master
git checkout release
git merge master

# Push to release and go back to master
git push origin release
git checkout master
