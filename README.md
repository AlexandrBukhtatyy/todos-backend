# TODOS - express.js

## Проект для практики в backend и использования контейнеров Docker

## Начало работы
```
vagrant up
vagrant ssh, cd /vagrant или vagrant ssh -c "cd /vagrant && bash"
docker-compose up -d
```

## Команды 
```
vagrant up                          // Создать виртуальную машину
vagrant ssh                         // Подключиться к виртуальной машине по ssh
vagrant halt                        // Выключить виртуальную машину
docker stop $(docker ps -a -q)      // Остановить все контейнеры
docker rm $(docker ps -a -q)        // Удалить все контейнеры
docker rmi $(docker images -q)      // Удалить все образы
docker exec -it [image] /bin/bash   // Запустить в интерактивном режиме bash в контейнере (из образа image)
docker-compose build                // Сбилдить образы
docker-compose up                   // Запустить контейнеры
docker-compose stop                 // Остановить контейнеры
docker-compose start                // Запустить контейнеры
```
-------------------------------------------------------------------

#### Заметки
* standard_init_linux.go:190: exec user process caused "no such file or directory" - Use notepad++, go to edit -> EOL conversion -> change from CRLF to LF.