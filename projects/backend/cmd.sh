#!/bin/bash
set -e

if [ "$ENV" = 'DEV' ]
then
    echo "Running Development Server"
    npm install
    exec npm run dev:start
elif [ "$ENV" = 'UNIT' ]
then
    echo "Run Unit-tests"
else
    echo "Running Production Server"
    npm install --only=production
    exec npm run prod:start
fi