#!/bin/bash
set -euo pipefail

docker build --target compile-frontend \
       --cache-from=noticrawl:compile-frontend \
       --tag noticrawl:compile-frontend .

docker build --target noticrawl-image \
       --cache-from=noticrawl:compile-frontend \
       --cache-from=noticrawl:latest \
       --tag noticrawl:latest .

docker-compose up