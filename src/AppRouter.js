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
                </Route>
            </Router>
        );
    }
}
module.exports = AppRouter;