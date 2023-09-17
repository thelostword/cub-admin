#!/bin/bash

set -e

pnpm build
echo "built basic done."

pnpm iconfont build

echo "built done."
