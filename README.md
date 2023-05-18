# Paramo Technologies Challenge - Gaston Garcia Alvarez #

## Challenge description
Create a project to automate User Registration and an additional feature of the page https://demo.casino 

- _Considering:_
    - Use Cypress (not record and play tools)
    - Write comments within the code
    - Create a repository on GitHub
    - Once finished, please share the direct link to your repository for review

_Scenarios considered for automation:_
- **Scenario 1:** Register with new user
- **Scenario 2:** Login using previous register credentials

## Scripts definition
- **test:ide** - Used to execute the Cypress IDE for creation/maintenance, execution and debugging of the different test suites
- **test:headless** - Used to run the test suites in headless mode (without the browser) over the command line
- **delete:results** - Used to remove previous test results in order to avoid mixing older and newer results
- **report** - Used to run the test suits in headless mode and generate the test results in both JUnit (XML) and Mochawesome (Json) reporters
- **mochawesome:report** - Used to merge all the Mochawesome results into a single Json result and to generate the final HTML report
- **junit:report** - Used to generate all the JUnit results into a single final XML report

## Plugins/Libraries implemented ##
- **Prettier** - For code formatting
- **JUnit Reporter** - For XML reports, could be used to publish test result inside Test Management Tools
- **Mochawesome Reporter** - For HTML reports, could be used mainly to inform test results to managers

## Custom Commands Implemented ##
**On file:** support/commands.js

- **visitDomain** - To gather selectors and perform actions related to the baseUrl visit, considering also closing the welcome pop up
- **goToUserRegistrationPage** - To gather selectors and perform actions related to the navigation to the user registration page
- **goToUserLoginPage** - To gather selectors and perform actions related to the navigation to the user login page
- **goToProfilePage** - To gather selectors and perform actions related to the navigation to the user profile page
- **register** - To gather selectors and perform actions related to the registration form and registration flow
- **login** - To gather selectors and perform actions related to the login form and login flow
- **logout** - To gather selectors and perform actions related to the logout flow
- **validateSuccessfulRegister** - To gather selectors and perform actions related to the checking of a successful register

## How to run the tests ##
***Important note:*** Please have in mind that **npm i** command should be executed once finished cloning the repo in order to update the different dependencies that were implemented in the project
### **IDE** ###
1. Run the script **npm run test:ide**
2. Select "E2E Testing" option
3. Select a browser from the available browsers list and then select "Start E2E Testing in Selected Browser"
4. At this point, you should be able to see the available features
5. Select one of the features (scenario1.feature or scenario2.feature) and it'll start to run on the selected browser
6. Now, you should be able to see the step by step of the selected feature
7. Select the first option of the side menu to return to specs view
8. Repeat steps 5 to 7 to execute the different features available

### **HEADLESS** ###
1. Run the script **npm run delete:results** to ensure there's no any older report prior to the tests execution
2. Run the script **npm run report**. The tests will be executed on the command line and individuals files for every result will be generated
    1. The junit reports will be saved on the following path: cypress/results/junit/*.xml
    2. The mochawesome reports will be saved on the following path: cypress/results/mochawesome/*.json
3. Run the script **npm run mochawesome:report**. This script will merge all the mochawesome results into one single json file and, after that, will create the HTML report
    1. The single json file will be allocated in the project root as mochawesome.json
    2. The HTML report will be saved on the following path: mochawesome-report/mochawesome.html
4. Run the script **npm run junit:report**. This script will merge all the mochawesome results into one single xml file
    1. The junit combined report will be saved on the following path: cypress/results/junit/combined-report.xml
5. Once you've executed the previous steps you can open the generated reports