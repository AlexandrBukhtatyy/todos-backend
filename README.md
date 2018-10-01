# TODOS - express.js
```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker run -e "ENV=DEV" -v $(pwd):/usr/src/app -p 8080:8080 todos
```