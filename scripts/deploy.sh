#!/bin/bash

# Go into web folder and run fresh install
cd web
rm -rf ./node_modules
yarn install

# Build web app 
yarn run build

# Commit changes and push to Master


# Change to release branch

# Merge master changes

# Commit changes and push to release