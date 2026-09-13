# Dev Stack

Dev Stack is a simple website where users can explore different technologies and build their own development stack.

Users can see the technology name, category, difficulty and rating. They can also add technologies to their stack and remove them when needed.

## Live Website

https://dav-stack-hasib-b14.vercel.app

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

## Features

- Explore different technologies
- Add technology to the stack
- Prevent duplicate technology adding
- Remove a selected technology
- Remove all technologies
- Toast notifications for different actions
- Loading spinner while data is loading
- Responsive design for mobile, tablet and desktop

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax used in React where we can write HTML-like code inside JavaScript. It makes the UI code more easy to understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store data which can change in a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in React. I used it in `App.tsx` for technologies, selected technologies and loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run some code after a component renders. I used it to fetch the technology data from `data.json` when the website loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list. It helps React update the list correctly when an item is added or removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it in `App.tsx` to show the loading spinner when the data is loading and show the technology section after loading.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We can pass data from a parent to a child using props. The child can send something back by calling a function passed from the parent.

In this project, `App.tsx` passes the `onAdd` function to the technology component. The child calls this function when a technology is added.

## Author

Md. Al Hasib