# Writer Service
this service return all of saved data or find and return a record of all of saved data

download and internet in my location is very slow. if you hav my problem mak a tar file with node_modules directory and with `ADD node_modules.tar node_module` command in `dockerfile` move all modules in docker container without download again also you can run `RUN npm install` to download all repositories and libraries to you image.😎