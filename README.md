# Simple Task Management System

A simple task management system built with React, TypeScript, Vite, Ant Design (antd), and Dnd-kit for drag and drop functionality. This application allows you to manage tasks by dragging them between different status columns and create new tasks.

## Features

- **Dynamic Task Rendering**: Interprets and renders tasks from a JSON object.
- **Drag and Drop**: Move tasks between columns representing different statuses using Dnd-kit.
- **Create New Tasks**: Add new tasks with a form, pre-filled with existing statuses.
- **Responsive Layout**: Columns fill available space and are of equal size.

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/task-management-system.git
   cd task-management-system
   ```

2. Install dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

### Running the Application

Start the development server:

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

### Project Structure

- `src/`
  - `components/`: Contains React components like `Column` and `TaskForm`.
  - `data/`: Contains initial task data in `tasks.ts`.
  - `App.tsx`: Main application component.
  - `index.tsx`: Entry point for the React application.

### JSON Input

The application accepts a JSON array of task objects. Each task object must have the following structure:

```json
[
  {
    "title": "Express Myself",
    "description": "Set the building on fire.",
    "status": "To Do",
    "assignee": "Lyla Harper"
  },
  {
    "title": "Catch Up Work - Saturday",
    "description": "Gonna need you to come into work on Saturday",
    "status": "In Progress",
    "assignee": "Hayes Aguirre"
  },
  {
    "title": "TPS Reports",
    "description": "Did you get the memo?",
    "status": "Done",
    "assignee": "Salvador Vega"
  }
]
```

**Note:** The `status` property of each task object must be one of `['To Do', 'In Progress', 'Done']`.

### Usage

1. **View Tasks**: Tasks are displayed in columns based on their status.
2. **Drag and Drop**: Drag tasks between columns to change their status.
3. **Create Tasks**: Use the "Create Task" button to add a new task.

### Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript for type safety.
- **Vite**: Fast development build tool.
- **Ant Design (antd)**: UI component library for React.
- **Dnd-kit**: Drag and drop toolkit for React.
