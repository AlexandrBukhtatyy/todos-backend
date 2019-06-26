#!/bin/bash
set -e

if [ "$ENV" = 'DEV' ]
then
    echo "Running Development Server"
    npm --no-bin-links install

    npm install -g sequelize-cli
    cd ./src
    npx sequelize db:migrate
    npx sequelize db:seed:all
    cd ..

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
