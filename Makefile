.PHONY: help dev build clean install

help:
	@echo "Available commands:"
	@echo "  make dev      - Run development server"
	@echo "  make build    - Build for production"
	@echo "  make clean    - Remove build artifacts"
	@echo "  make install  - Install dependencies"

dev:
	npm run dev

build:
	npm run build

clean:
	rm -rf .next out node_modules

install:
	npm install

.DEFAULT_GOAL := help
