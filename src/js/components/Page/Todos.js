import React from 'react';
import Layout from "../Layout/Layout";
import Icon from "../Icon/Icon";

const Todos = () => (
    <Layout>
        <section className="w-full bg-white shadow-lg rounded-lg">
            <div className="flex items-center p-6">
                <div className="bg-gray-800 w-16 h-16 text-white rounded-full flex justify-center items-center flex-shrink-0 mr-8 text-xl">
                    <Icon name="tasks" />
                </div>
                <div>
                    <h2 className="text-2xl">
                        Todos
                    </h2>
                    <p className="text-gray-500">Below is a list of your todos. You can mark them as done, assign them to users or add new ones.</p>
                </div>
            </div>
            <div className="bg-gray-100 md:pl-32 p-8 rounded-b-lg">
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
