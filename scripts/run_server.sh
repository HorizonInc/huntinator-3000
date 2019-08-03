#!/bin/bash

# Going into the api folder
cd api

# Fresh install
rm -rf ./node_modules
yarn install

# Running server
yarn start