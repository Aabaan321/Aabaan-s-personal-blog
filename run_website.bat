@echo off
title Aabaan Portfolio Server
cls
echo ========================================================
echo   STARTING AABAAN'S PORTFOLIO + CHATBOT
echo ========================================================
echo.
echo   [!] The chatbot requires a local server to work.
echo   [!] This script starts a Python web server for you.
echo.
echo   1. Opening http://localhost:8000 in your browser...
echo   2. You can now use the Chatbot!
echo.
echo   (Keep this window open while using the site)
echo.
echo ========================================================

start http://localhost:8000
python -m http.server 8000
pause
