import React from 'react';
import Layout from "../Layout/Layout";
import Icon from "../Icon/Icon";

const Todos = () => (
    <Layout>
        <section>
            <div>
                <Icon name="tasks" />
            </div>
            <div>
                <h2>Todos</h2>
                <p>Below is a list of your todos. You can mark them as done, assign them to users or add new ones.</p>
                <ul>
                    <li>
                        <h3><input type="checkbox" /> Run Create React App to bootstrap an app</h3>
                        <small>Assigned to Bram</small>
                    </li>
                    <li>
                        <h3><input type="checkbox" /> Get Tailwind playing nice with CRA</h3>
                        <small>Assigned to Bram</small>
                    </li>
                    <li>
                        <h3><input type="checkbox" /> Add some libraries and play around with them</h3>
                        <small>Assigned to Bram</small>
                    </li>
                </ul>
            </div>
        </section>
    </Layout>
);

export default Todos;
