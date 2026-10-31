# Project Architecture

## 1. Overview

This project follows a monorepo-style architecture to organize frontend, backend, documentation, and testing files in a single GitHub repository.

The main objective is to build an Accessibility Audit Dashboard that presents website accessibility testing results.

## 2. Repository Structure

```text
wikipedia-accessibility-audit/
│
├── client/
│   ├── docs/
│   │   ├── README.md
│   │   ├── accessibility-audit.csv
│   │   └── architecture.md
│   ├── server/
│   │   ├── README.md
│   │   └── server.js
│   ├── tests/
│   │   ├── README.md
│   │   └── accessibility-checklist.md
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 3. Architecture Boundaries

### Client
Responsible for the user interface, dashboard layout, styling, and frontend interactions.

### Server
Responsible for backend logic, APIs, and data processing.

### Docs
Stores accessibility audit reports and architecture documentation.

### Tests
Contains manual and automated accessibility test cases.

## 4. Local Setup

1. Clone the GitHub repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser.
4. Review the client and server directories.

## 5. First Vertical Feature Slice

The first feature is an Accessibility Audit Dashboard.

It allows users to:

- View Lighthouse audit scores.
- Read accessibility findings.
- View recommended solutions.
- Track issue status.

## 6. Technology Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js
- Version Control: Git and GitHub
- Testing: Google Lighthouse
- Deployment: GitHub Pages

## 7. Deployment

The frontend dashboard is deployed using GitHub Pages.

Live Website: https://priyadharshini560.github.io/wikipedia-accessibility-audit/
