# Costiera Cinema - Makefile for Docker operations

.PHONY: help build up down restart logs port clean rebuild

help: ## Show this help message
	@echo "Costiera Cinema - Docker Commands"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Build the Docker image
	@echo "Building Costiera Cinema Docker image..."
	docker-compose build

up: ## Start the container (detached mode)
	@echo "Starting Costiera Cinema container..."
	docker-compose up -d
	@sleep 2
	@make port

down: ## Stop and remove the container
	@echo "Stopping Costiera Cinema container..."
	docker-compose down

restart: ## Restart the container
	@echo "Restarting Costiera Cinema container..."
	docker-compose restart
	@sleep 2
	@make port

logs: ## Show container logs
	docker-compose logs -f

port: ## Show the randomly assigned port
	@echo ""
	@echo "Costiera Cinema is running on:"
	@echo "http://localhost:$$(docker-compose port costiera-cinema 3000 | cut -d':' -f2)"
	@echo ""

status: ## Show container status
	docker-compose ps

clean: ## Remove container, image, and volumes
	@echo "Cleaning up Costiera Cinema Docker resources..."
	docker-compose down -v
	docker rmi costiera-cinema_costiera-cinema 2>/dev/null || true

rebuild: clean build up ## Clean rebuild and start

dev: ## Run in development mode (non-Docker)
	pnpm dev

install: ## Install dependencies
	pnpm install
