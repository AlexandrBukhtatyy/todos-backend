#!/bin/bash
set -e

if [ "$ENV" = 'DEV' ]
then
    echo "Running Development Server"
    npm --no-bin-links install
    npm i -g nodemon
    exec npm run dev:start
elif [ "$ENV" = 'UNIT' ]
then
    echo "Run Unit-tests"
else
    echo "Running Production Server"
    npm install --only=production
    exec npm run prod:start
fi