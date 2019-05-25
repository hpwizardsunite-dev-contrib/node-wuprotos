@echo off
call npm i
call npm run-script build
call npm run-script test
