# TODOS - express.js
## Проект для практики в backend и использования контейнеров Docker

## Команды 
```
docker stop $(docker ps -a -q)  // Остановить все контейнеры
docker rm $(docker ps -a -q)    // Удалить все контейнеры
docker rmi $(docker images -q)  // Удалить все образы
docker run -e "ENV=DEV" -v $(pwd):/usr/src/app -p 8080:8080 todos
docker-compose build            // Сбилдить образы
docker-compose up               // Запустить контейнеры
docker-compose stop             // Остановить контейнеры
docker-compose start            // Запустить контейнеры
```