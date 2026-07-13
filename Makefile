.PHONY: help install dev up down restart logs prod prod-down build preview \
        content-init migrate-antarktida gen-data gen-courses gen-antarktida gen-state-exams gen-icons icons

# Lokální dev v Dockeru (Vite HMR) — http://localhost:8090
URL_DEV := http://localhost:8090

help: ## Přehled příkazů
	@grep -E '^[a-zA-Z0-9_-]+:.*##' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*## "}; {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}'

install: ## npm install (lokální závislosti)
	npm install

# --- Docker (vývoj) ---

dev: up ## Alias: spustit dev kontejner

up: ## Spustit dev kontejner (HMR, port 8090)
	docker compose up --build
	@echo "$(URL_DEV)"

up-d: ## Spustit dev kontejner na pozadí
	docker compose up --build -d
	@echo "$(URL_DEV)"

down: ## Zastavit dev kontejner
	docker compose down

restart: down up-d ## Restartovat dev kontejner

logs: ## Logy dev kontejneru
	docker compose logs -f

# --- Docker (produkce) ---

prod: ## Produkční build v Dockeru (nginx, port 8090)
	docker compose -f docker-compose.prod.yml up --build -d

prod-down: ## Zastavit produkční kontejner
	docker compose -f docker-compose.prod.yml down

# --- Lokálně bez Dockeru ---

dev-local: install ## Vite dev server lokálně (port 8090)
	npm run dev

build: ## Produkční build do dist/
	npm run build

preview: build ## Náhled produkčního buildu
	npm run preview

# --- Obsah (content/) ---

content-init: ## Vytvoří složky předmětů v content/fields/
	node scripts/content-init.mjs

migrate-antarktida: ## Export antarktida_modules.json → content/ (přepíše moduly!)
	node scripts/reorganize-antarktida-themes.mjs
	node scripts/migrate-antarktida-to-content.mjs

gen-data: content-init ## Sestaví src/data z content/ + IS MUNI + SZZ
	node scripts/build-content.mjs
	node scripts/generate-state-exams.mjs

gen-courses: ## Jen gk.ts + fg.ts
	node scripts/content-init.mjs
	node scripts/build-content.mjs

gen-antarktida: migrate-antarktida ## Antarktida: export JSON → content + sestavení
	node scripts/build-content.mjs

gen-state-exams: ## Přegenerovat data státních zkoušek
	node scripts/generate-state-exams.mjs

gen-icons icons: ## Vygenerovat PWA ikony
	node scripts/generate-icons.mjs
