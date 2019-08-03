#!/bin/bash

# Building react app
cd web
rm -rf ./node_modules
yarn install
yarn run build

# Running server
cd ../api
rm -rf ./node_modules
yarn install
yarn start