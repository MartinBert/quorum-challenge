#!/bin/bash
npm install -g prisma && prisma migrate reset --force && prisma db push --preview-feature && npm run start