/**
 * Created by zhanghaoyi on 16/11/9.
 */
import React from 'react';
import '../style/Header.css';
class Header extends React.Component{
    constructor(){
        super();
        this.state = {

        };
        //绑定事件
    }
    componentDidMount(){
        //初始化数据
    }
    componentWillUnmount(){
    }
    render(){
        return (
            <header className="header">
                <div className="header-logo-box">
                    <a className="fa fa-eercast fa-3x logo">
                    </a>
                </div>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <a name="home" href="#/home">主&nbsp;页</a>
                        </li>
                        <li>
                            <a name="component" href="#/demo/component/dataTable">组&nbsp;件</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
module.exports = Header;