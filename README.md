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

-------------------------------------------------------------------
```
vagrant up
vagrant ssh
/*---------------*/
cd /vagrant
docker-compose up
```
-------------------------------------------------------------------
почему то не устанавливается nodemon в контейнере внутри ВМ-vagrant
если поставить его глобально в образе он не обновляет при изменение файлов

https://stackoverflow.com/questions/51508150/standard-init-linux-go190-exec-user-process-caused-no-such-file-or-directory

https://github.com/npm/npm/issues/20605