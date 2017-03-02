/**
 * Created by zhanghaoyi on 17/3/2.
 */
import React from 'react';
import DataTableDemoPage from "../../componentDemo/table/component/DataTableDemoPage";
import '../style/ComponentsPage.css';
export default class ComponentsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return  (
            <section className="content">
                <div className="content-container">
                    <div className="panel panel-default panel-margin-portrait-40x component-panel">
                        <div className="component-right-content">
                            <div className="component-demo-content">
                                <DataTableDemoPage/>
                            </div>
                        </div>
                        <div className="component-left-nav">
                            <ul>
                                <li>
                                    <a>表格</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}