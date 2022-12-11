# Service Writer
this service get data from api with kafka and save in both redis and mongodb

download and internet in my location is very slow. if you hav my problem mak a tar file with node_modules directory and with `ADD node_modules.tar node_module` command in `dockerfile` move all modules in docker container without download again also you can run `RUN npm install` to download all repositories and libraries to you image.😊