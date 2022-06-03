#!/bin/bash
npm install -g prisma && prisma migrate reset --force && prisma migrate dev && npm run start