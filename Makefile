info: 
	@echo "  make build       Build the project images."
	@echo "  make start       Start the project containers."
	@echo "  make stop        Stop the project containers."
	@echo "  make dev         Start the project containers including dev output."
	@echo "  make reset     Reset the project containers & volumes."
build:
	@echo "Installing local dependencies.."
	yarn install
	@echo "Installing local dependencies for frontend.."
	cd frontend && yarn install
	@echo "Installing local dependencies for backend.."
	cd backend && yarn install
	@echo ""
	@docker-compose build
start:
	@docker-compose up -d
	@echo ""
	@echo "  The frontend is running on http://localhost:3000/."
	@echo "  The backend  is running on http://localhost:3333/."
	@echo ""
stop:
	@docker-compose stop
dev:
	@docker-compose up
reset:
	@docker-compose down -v