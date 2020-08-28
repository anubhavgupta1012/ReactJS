Components: reusable pieces of React code to control part of the user interface. Components capture the structure of UI, and can have internal data to track the user behavior throughout the lifetime of the app.


State: dynamic data in a React component. This is often used to track variables that will be re-rendered in the UI based on events that occur in the application.


👉 Remember the React State Rule: Never Directly Modify State. Instead use the `this.setState` method.


Props: data in a React component that gets passed down from its parent. In the parent component, it will pass data down to the child component through attributes in the child component’s JSX.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Bundling is the process of taking many JavaScript files and combining them into one giant JavaScript file for the html to refer to. This is useful because the browser doesn’t natively support the import/export system that is used in React projects.

    Parcel-bundler is a tool that achieves bundling.

    Transpiling is the process of translating modern JavaScript code into a syntax that the browser actually supports. This is necessary because, as the JavaScript language evolves and adds new features, the browser must keep up and support those additions. Therefore, the feature set that the browser can support will always be a bit behind the overall JavaScript language.

    Babel is a tool that achieves transpilation.


