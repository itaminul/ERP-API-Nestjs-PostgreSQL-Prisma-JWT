#!/bin/bash
set -e

echo "Creating shadow database: $POSTGRES_SHADOW_DB"
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE "$POSTGRES_SHADOW_DB";
EOSQL
