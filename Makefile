info: 
	@echo "  make build			Build the project images."
	@echo "  make start			Start the project containers."
	@echo "  make stop			Stop the project containers."
	@echo "  make dev			Start the project containers including dev output."
	@echo "  make update			Update all dependencies in root, frontend and backend folders."
	@echo "  make reset			Reset the project containers, volumes, local dependencies and cache files."

build: \
	do-install-dependencies
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

update: \
	do-update-root-dependencies \
	do-update-frontend-dependencies \
	do-update-backend-dependencies

reset: do-remove-nodemodules \
	do-remove-cache
	@docker-compose down -v

# Installing dependencies
do-install-dependencies: \
	do-install-root-dependencies \
	do-install-frontend-dependencies \
	do-install-backend-dependencies

do-install-root-dependencies:
	@echo ""
	@echo "Installing local dependencies.."
	yarn install

do-install-frontend-dependencies:
	@echo ""
	@echo "Installing local dependencies for frontend.."
	cd frontend && yarn install

do-install-backend-dependencies:
	@echo ""
	@echo "Installing local dependencies for backend.."
	cd backend && yarn install

# Upgrade dependencies
do-update-root-dependencies:
	@echo ""
	@echo "Updating dependencies.."
	yarn upgrade-interactive --latest

do-update-frontend-dependencies:
	@echo ""
	@echo "Updating dependencies for frontend.."
	cd frontend && yarn upgrade-interactive --latest

do-update-backend-dependencies:
	@echo ""
	@echo "Updating dependencies for backend.."
	cd backend && yarn upgrade-interactive --latest

# Remove dependencies & cache
do-remove-nodemodules:
	@echo ""
	@echo "Removing all node_modules folders.."
	sudo rm -rf node_modules
	cd frontend && sudo rm -rf node_modules
	cd backend && sudo rm -rf node_modules
	@echo ""
	@echo "All node_modules folders removed.."
do-remove-cache:
	@echo ""
	@echo "Removing frontend cache folder.."
	cd frontend && sudo rm -rf .cache/
	@echo ""
	@echo "Cache folder removed.."