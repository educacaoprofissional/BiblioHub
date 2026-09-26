#!/usr/bin/env bash
set -e

cd "$(dirname "$0")"

echo "======================================"
echo " BiblioHub - iniciar apresentação"
echo "======================================"

if [ ! -f package.json ]; then
  echo "ERRO: package.json não encontrado."
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "Instalando dependências..."
  npm install
fi

echo "Iniciando BiblioHub na porta 5173..."
exec npm start
