build:
	@docker-compose build
start:
	@docker-compose up -d
stop:
	@docker-compose stop
dev:
	@docker-compose up --build
reset:
	@docker container prune