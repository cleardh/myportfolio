#!/bin/bash
source /home/ubuntu/.bashrc
cd /home/ubuntu/portfolio
# To fix EACCES: permission denied error
sudo chown ubuntu:ubuntu package-lock.json package.json
npm install --unsafe-perm true