# Prolog Schedule Planner

## Overview
The Prolog Schedule Planner is an application designed to help users create their academic schedules based on selected courses. It utilizes Prolog for backend logic and provides a user-friendly interface for course selection and schedule generation.

## Project Structure
```
prolog-schedule-planner
├── backend
│   ├── base.pl                # Contains course definitions and database
│   ├── schedule_logic.pl      # Implements scheduling logic and conflict checks
│   └── utils.pl               # Utility functions for data manipulation
├── frontend
│   ├── index.html             # Main HTML document for the user interface
│   ├── styles
│   │   └── style.css          # CSS styles for the front-end interface
│   └── scripts
│       └── app.js             # JavaScript code for user interactions
├── package.json               # Configuration file for npm dependencies
└── README.md                  # Documentation for the project
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd prolog-schedule-planner
   ```

2. **Install dependencies**:
   Navigate to the project directory and run:
   ```
   npm install
   ```

3. **Run the backend**:
   Ensure you have a Prolog interpreter installed. Load the backend files (`base.pl`, `schedule_logic.pl`, `utils.pl`) in your Prolog environment.

4. **Open the frontend**:
   Open `frontend/index.html` in your web browser to access the application interface.

## Usage Guidelines
- Select courses from the available options.
- Submit your selections to generate a schedule.
- Review the generated schedule for any conflicts or adjustments.

## Features
- Course selection based on user preferences.
- Automatic schedule generation with conflict checking.
- User-friendly interface for easy navigation and interaction.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.