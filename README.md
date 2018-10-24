# smar

SMARTSHEET AUTOMATION

installed node.js SDK using npm install smartsheet.  Documentation at https://github.com/smartsheet-platform/smartsheet-javascript-sdk

http://smartsheet-platform.github.io/api-docs/

Smartsheets to reference and use:

in production sheet we are trying to automate: https://app.smartsheet.com/b/home?lx=-460eD14qAIUQeDTcApbjg
sheet to house template to copy from: https://app.smartsheet.com/b/home?lx=s5BUBsQvbqPSwK0UyNC0_A
test sheet to test copying rows to: https://app.smartsheet.com/b/home?lx=eL173nJ9dQNiBpCyu5Nq4A

The goal is to automate a lot of what is already being done by our development group to manage the development process for new stores.  This is done by tasks and due dates assigned to those tasks.

There are some Tasks that are important to the business, called Milestone Dates, that need to be present on each project, and need to be named consistently.  We also want to give the ability for admins on the sheets to add one-off tasks for a specific project.

When a new project is created in Tririga, we need to use the template project to create a new project on the Development Managers smartsheet.  This could be done by copying the Template rows from the Template smartsheet to the Development Managers smartsheet, which is a function availible using the API. We also need to load in the dates that were entered into Tririga into the corresponding Task for that Project in Smartsheet.  

An extra thing I would like to do is use the hyperlink API funtion to assign a tririga url to that cell in Smartsheet.  

When a location is opened, we need to move those project's rows to a Completed Project sheet.




