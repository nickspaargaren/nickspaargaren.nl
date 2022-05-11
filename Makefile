info: 
	@echo "\n=== Available commands ===\n"
	@egrep '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) |  awk 'BEGIN {FS = ":.*?## "}; {printf "\033[33m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Build the project images.
	@make do-install-dependencies
	@echo ""
	@docker-compose build

start: ## Start the project containers.
	@docker-compose up -d
	@echo ""
	@echo "  The frontend is running on http://localhost:3000/."
	@echo "  The frontend GraphQL playground is running on http://localhost:3000/___graphql."
	@echo ""
	@echo "  The backend  is running on http://localhost:3333/."
	@echo ""

stop: ## Stop the project containers.
	@docker-compose stop

dev: ## Start the project containers including dev output.
	@docker-compose up

test: ## Run the project tests.
	@make start
	@make do-frontend-tests

lint: ## Run the project codestyle check.
	@make start
	@make do-frontend-lint

update: ## Update all dependencies in root, frontend and backend folders.
	@make do-update-root-dependencies
	@make do-update-frontend-dependencies
	@make do-update-backend-dependencies

reset: ## Reset the project containers, volumes, local dependencies and cache files.
	@make do-remove-nodemodules
	@make do-remove-cache
	@docker-compose down -v

# Installing dependencies
do-install-dependencies:
	@make do-install-root-dependencies
	@make do-install-frontend-dependencies
	@make do-install-backend-dependencies

do-install-root-dependencies:
	@echo ""
	@echo "Installing local dependencies.."
	@yarn install

do-install-frontend-dependencies:
	@echo ""
	@echo "Installing local dependencies for frontend.."
	@cd frontend && yarn install

do-install-backend-dependencies:
	@echo ""
	@echo "Installing local dependencies for backend.."
	@cd backend && yarn install

# Upgrade dependencies
do-update-root-dependencies:
	@echo ""
	@echo "Updating dependencies.."
	@yarn upgrade-interactive --latest

do-update-frontend-dependencies:
	@echo ""
	@echo "Updating dependencies for frontend.."
	@cd frontend && yarn upgrade-interactive --latest

do-update-backend-dependencies:
	@echo ""
	@echo "Updating dependencies for backend.."
	@cd backend && yarn upgrade-interactive --latest

# Remove dependencies & cache
do-remove-nodemodules:
	@echo ""
	@echo "Removing all node_modules folders.."
	@sudo rm -rf node_modules
	@cd frontend && sudo rm -rf node_modules
	@cd backend && sudo rm -rf node_modules
	@echo ""
	@echo "All node_modules folders removed.."

do-remove-cache:
	@echo ""
	@echo "Removing frontend cache folder.."
	@cd frontend && sudo rm -rf .cache/ && sudo rm -rf public/
	@echo ""
	@echo "Cache folders removed.."

do-frontend-tests:
	@echo "Starting frontend tests.."
	cd frontend && yarn test

do-frontend-lint:
	@echo "Starting frontend codestyle check.."
	@docker-compose exec frontend sh -c "yarn lint"