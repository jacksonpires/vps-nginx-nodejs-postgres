# Node, Express, Postgres, Angular - CRUD Example
 
This example was forked and used in [Docker para desenvolvedores Javascript / Node.JS](http://www.videosdeti.com.br/curso-docker-nodejs.html) course.

## Starts cloning this project

* Just clone
```
  git clone https://github.com/jacksonpires/crud-node-postgres.git
```

## Steps to prepare Docker container:

* Run postgres container and verify Ports and IP Address
```
  docker run -v $(pwd)/postgres_data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=mysecretpassword -d -P postgres
  docker port <CONTAINER ID>
  docker container inspect --format '{{.NetworkSettings.IPAddress}}' <CONTAINER ID>
```

* Use [pgAdmin](https://www.pgadmin.org/) to connect and create a database with name **crud-node**

* Run Cloud9 container
```
  docker run -d -v $(pwd)/crud-node-postgres:/workspace -p 8181:8181 -p 3090:3090 jacksonpires/cloud9_nvm --auth username:password
```

* Browse to **http://localhost:8181** to go inside Cloud9 container

## On Cloud9 container run:

* Install Bower
```
  npm install -g bower
```

* Install all the node packages listed in the package.json
```
  npm install
```

* Installs the front end packages listed in the bower.json file
```
 bower install --allow-root
```

* Open **../server/config/database.js** and complete PostgreSQL database connection details

* Prepare the database (create table and populate)
```
  node db_setup/prepare.js
```

* Start the node project
```
  node server.js
```

* Browse to **http://localhost:3090**

## Screenshot

<div align="center">
		<img width="95%" src="screenshot/todo1.png" alt="Todos" title="Todos"</img>
</div>
