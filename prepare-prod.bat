@echo off

for /d %%i in (*) do (
    if /i not "%%i"=="portfolio" rd /s /q "%%i"
)
for %%i in (*) do (
    if /i not "%%i"=="prepare-prod.bat" del /f /q "%%i"
)

REM Navigate to the portfolio directory
cd portfolio

REM Run the npm build command
npm run build

REM Move the "out" and ".next" folders to the root directory
move out ..\
move .next ..\

REM Navigate to the root directory
cd ..

REM Move the contents of the "out" folder to the root directory
xcopy out\*.* . /s /e /i

REM Remove the now-empty "out" folder
rd /s /q out

REM Create a .nojekyll file in the root directory
echo.> .nojekyll

echo Production preparation is complete.