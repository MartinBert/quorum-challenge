#!/bin/sh
npx prisma migrate reset --force && npx prisma migrate dev && npm run start