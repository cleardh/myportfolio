#!/bin/bash
source $HOME/.bashrc
cd /home/ubuntu/portfolio
cat package-lock.json | tail -n 20
npm install --unsafe-perm=true