import React from 'react';

const Blog = () => {
    return (
        <div className='space-y-10 my-container py-32'>
            <div className='bg-gray p-5 rounded font-semibold'>
                <p className='text-xl'>Tell us the differences between uncontrolled and controlled components.</p>
                <small>Answer: An uncontrolled component is a component where the form data is handled by the DOM, rather than by the React component. This means that the component's state is managed internally by the browser, and the React component does not have direct control over it. In an uncontrolled component, the data is retrieved from the DOM using a ref, and any updates to the data are handled by the browser. <br /><br /> A controlled component, on the other hand, is a component where the form data is handled by the React component. This means that the components state is managed by the React component, and any updates to the data are managed through props and state.</small>
            </div>
            <div className='bg-gray p-5 rounded font-semibold'>
                <p className='text-xl'>How to validate React props using PropTypes</p>
                <small>Answer:
                    In React, PropTypes is a package that allows you to specify the types of properties that are passed to a component. It provides a way to validate that the props passed to a component are of the correct type, and helps catch errors early in the development process.</small>
            </div>
            <div className='bg-gray p-5 rounded font-semibold'>
                <p className='text-xl'>Tell us the difference between nodejs and express js.</p>
                <small>Answer: Node.js is a runtime environment for JavaScript, while Express.js is a web application framework built on top of Node.js. Node.js provides the core functionality for building server-side applications, while Express.js provides additional features and utilities for building web applications, such as middleware for handling requests, routing for mapping URLs to code, and templating engines for generating HTML. Node.js is highly customizable and can be used to build a wide range of applications, from simple command-line tools to large-scale distributed systems, while Express.js is specifically designed for building web applications and APIs. Overall, Node.js and Express.js are complementary technologies that can be used together to build fast, efficient, and scalable web applications and APIs.</small>
            </div>
            <div className='bg-gray p-5 rounded font-semibold'>
                <p className='text-xl'>What is a custom hook, and why will you create a custom hook?</p>
                <small>Answer: A custom hook in React is a reusable function that encapsulates the logic of a particular behavior or feature in a React application. It allows developers to extract and reuse common code across different components, reducing code duplication and improving code organization. Custom hooks can be created for a wide variety of use cases, such as handling state management, fetching data from APIs, handling forms, and more. They can be used to abstract away complex logic and provide a simple and easy-to-use interface for developers to work with.</small>
            </div>
        </div>
    );
};

export default Blog;