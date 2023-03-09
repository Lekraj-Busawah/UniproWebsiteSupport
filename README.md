# UniproWebsiteSmokeTests

install percy: npm install --save-dev @percy/cli @percy/cypress 

set percy token: $env:PERCY_TOKEN = "52ec3a85b91df31492ebd16973d70cba9afa082de7116c379565d93813d6481b"

run percy tests: npx percy exec -- cypress run --record --key bce19bd9-9691-4798-b4b3-a988643996c1 --spec "cypress/e2e/SmokeTest/UICheck/percy.spec.js"
