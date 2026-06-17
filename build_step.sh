#!/bin/bash

echo "Build script"

# Instalar dependencias
npm install

# Crear el bundle de producción con Webpack
npm run build