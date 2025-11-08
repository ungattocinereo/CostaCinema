#!/bin/bash

# Costiera Cinema - Docker Helper Script
# This script helps manage the Docker container

set -e

# Detect which docker compose command to use
if command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE="docker-compose"
elif command -v docker &> /dev/null && docker compose version &> /dev/null; then
    DOCKER_COMPOSE="docker compose"
else
    echo "❌ Error: Neither 'docker-compose' nor 'docker compose' is available."
    echo "Please install Docker and Docker Compose first."
    exit 1
fi

show_help() {
    echo "Costiera Cinema - Docker Helper Script"
    echo ""
    echo "Usage: ./docker-run.sh [command]"
    echo ""
    echo "Commands:"
    echo "  build       Build the Docker image"
    echo "  start       Start the container"
    echo "  stop        Stop the container"
    echo "  restart     Restart the container"
    echo "  logs        Show container logs"
    echo "  port        Show the assigned port"
    echo "  status      Show container status"
    echo "  clean       Remove container and image"
    echo "  help        Show this help message"
    echo ""
}

get_port() {
    PORT=$($DOCKER_COMPOSE port costiera-cinema 3000 2>/dev/null | cut -d':' -f2)
    if [ -n "$PORT" ]; then
        echo ""
        echo "✅ Costiera Cinema is running on:"
        echo "🌐 http://localhost:$PORT"
        echo ""
    else
        echo "❌ Container is not running or port not mapped"
    fi
}

case "$1" in
    build)
        echo "🏗️  Building Costiera Cinema Docker image..."
        $DOCKER_COMPOSE build
        echo "✅ Build complete!"
        ;;
    start)
        echo "🚀 Starting Costiera Cinema container..."
        $DOCKER_COMPOSE up -d
        sleep 3
        get_port
        ;;
    stop)
        echo "🛑 Stopping Costiera Cinema container..."
        $DOCKER_COMPOSE down
        echo "✅ Container stopped"
        ;;
    restart)
        echo "🔄 Restarting Costiera Cinema container..."
        $DOCKER_COMPOSE restart
        sleep 3
        get_port
        ;;
    logs)
        echo "📋 Showing container logs (Ctrl+C to exit)..."
        $DOCKER_COMPOSE logs -f
        ;;
    port)
        get_port
        ;;
    status)
        echo "📊 Container status:"
        $DOCKER_COMPOSE ps
        ;;
    clean)
        echo "🧹 Cleaning up Costiera Cinema Docker resources..."
        $DOCKER_COMPOSE down -v
        docker rmi costiera-cinema-costiera-cinema 2>/dev/null || echo "Image already removed"
        echo "✅ Cleanup complete!"
        ;;
    help|"")
        show_help
        ;;
    *)
        echo "❌ Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac
