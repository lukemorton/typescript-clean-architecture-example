all: install start

install:
	swagger-codegen generate -i swagger.yml -l swagger
	swagger-codegen generate -i swagger.yml -l nodejs-server -o mock

start:
	cd mock && npm start
