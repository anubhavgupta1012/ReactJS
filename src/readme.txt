Components: reusable pieces of React code to control part of the user interface. Components capture the structure of UI, and can have internal data to track the user behavior throughout the lifetime of the app.


State: dynamic data in a React component. This is often used to track variables that will be re-rendered in the UI based on events that occur in the application.


👉 Remember the React State Rule: Never Directly Modify State. Instead use the `this.setState` method.


Props: data in a React component that gets passed down from its parent. In the parent component, it will pass data down to the child component through attributes in the child component’s JSX.