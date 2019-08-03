#!/bin/bash

# Building react app
cd web
yarn run build

# Running server
cd ../api
yarn start