#!/bin/bash
source /home/ubuntu/.bashrc
cd /home/ubuntu/portfolio
NPM=$(which npm)
echo $NPM
cat package-lock.json | tail -n 20
$NPM install --unsafe-perm=true