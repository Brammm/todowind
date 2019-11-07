import React from 'react';
import Layout from "./components/Layout/Layout";

import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/todo.css';

const Todo = () => {
    return <Layout>
        <Layout.Header>This is my header</Layout.Header>
        <Layout.Content>Here goes the content</Layout.Content>
    </Layout>;
};

export default Todo;
