# Orientation Demo

This is a demo of how to get Device Orientation Permissions working in the browser in iOS.

In order for iOS to allow device orientation permissions, the project **must be ran with HTTPS active** otherwise it will not allow you to access the permisssions popup.
Secondly, Accelerometer has to be a JavaScript file as TypeScript throws some errors about requestPermission() not being available.