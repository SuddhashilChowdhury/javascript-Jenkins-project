# JavaScript Playwright Automation with Jenkins

## Overview

This project demonstrates UI test automation using **Playwright with JavaScript** and Continuous Integration using **Jenkins**. It includes sample Playwright test cases, Jenkins pipeline configuration, and GitHub integration for automated execution.

---

## Tech Stack

- JavaScript
- Playwright
- Node.js
- Jenkins
- Git & GitHub
- GitHub Actions (workflow included)

---

## Project Structure

```
javascript-jenkins-project/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── tests/
│   ├── Arrays.js
│   ├── basics.js
│   ├── classes_basics.js
│   ├── functions_basics.js
│   ├── objects_basics.js
│   ├── ui_basics.spec.js
│   └── example.spec.js
│
├── playwright-report/
├── test-results/
├── package.json
├── package-lock.json
├── playwright.config.js
├── Jenkinsfile
└── .gitignore
```

---

## Features

- UI Automation using Playwright
- Cross-browser execution
- Jenkins CI Pipeline
- GitHub Integration
- HTML Test Reports
- GitHub Actions workflow
- Easy project setup

---

## Prerequisites

- Node.js (v18 or above)
- npm
- Git
- Jenkins
- Visual Studio Code

---

## Installation

Clone the repository

```bash
git clone https://github.com/SuddhashilChowdhury/javascript-Jenkins-project.git
```

Navigate to the project

```bash
cd javascript-Jenkins-project
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## Available Scripts

Install project dependencies

```bash
npm run build
```

Run all Playwright tests

```bash
npm test
```

Run tests in headed mode

```bash
npm run test:headed
```

Open the HTML report

```bash
npm run report
```

---

## Jenkins Pipeline

The project includes a Declarative Jenkins Pipeline.

Pipeline stages include:

- Checkout Source Code
- Install Dependencies
- Execute Playwright Tests
- Generate Reports

Run the pipeline using:

```
Build Now
```

from the Jenkins dashboard.

---

## Playwright Reports

After execution, open the report using

```bash
npm run report
```

or view

```
playwright-report/index.html
```

---

## GitHub Repository

Repository:

https://github.com/SuddhashilChowdhury/javascript-Jenkins-project

---

## Future Enhancements

- Parallel execution
- Docker support
- Allure Reporting
- Cross-browser matrix execution
- Azure DevOps integration
- Slack Notifications
- Email Reports

---

## Author

**Suddhashil Chowdhury**

Automation Test Engineer

GitHub:
https://github.com/SuddhashilChowdhury

LinkedIn:
https://www.linkedin.com/in/suddhashil-chowdhury/

---

## License

This project is intended for learning, automation practice, and CI/CD demonstrations.