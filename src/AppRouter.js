/**
 * Created by z008hy on 16/11/9.
 * 项目总路由
 */
/*sys src*/
import React from "react";
import {Router, Route, hashHistory, IndexRoute} from "react-router";
/*custom src*/
import Index from "./Index.js";
import Home from "./modules/home/component/Home.js";
import DataTableDemoPage from "./modules/componentDemo/table/component/DataTableDemoPage";
import ExpoPage from "./modules/expo/component/ExpoPage";
import ComponentsPage from "./modules/components/component/ComponentsPage";

/*resource src*/
require("./less/reset.less");
require("./less/common.less");
class AppRouter extends React.Component{
    render(){
        return(
            <Router history={hashHistory} >
                <Route path="/" component={Index} >
                    <IndexRoute component={Home} />
                    {/*主页*/}
                    <Route path="/home" component={Home}/>
                    {/*表格组件展示*/}
                    <Route path="/demo/component/dataTable" component={DataTableDemoPage}/>
                    {/*网站示例*/}
                    <Route path="/expo" component={ExpoPage}/>
                    {/*组件示例*/}
                    <Route path="/component" component={ComponentsPage}/>
                </Route>
            </Router>
        );
    }
}
module.exports = AppRouter;