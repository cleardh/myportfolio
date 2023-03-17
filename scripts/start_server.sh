#!/bin/bash
cd /home/ubuntu/portfolio
npm run build
pm2 restart portfolio