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
            <header className={"header"+this.props.param.hideHeader?" hide-display":""}>
                <div className="header-logo-box">
                    <a className="fa fa-eercast fa-3x logo">
                    </a>
                </div>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <a name="home" href="#/home">Home</a>
                        </li>
                        <li>
                            <a name="home" href="#/photo">Photo</a>
                        </li>
                        <li>
                            <a name="home" href="#/photo">Demo</a>
                        </li>
                        <li>
                            <a name="component" href="#/demo/component/dataTable">Component</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
module.exports = Header;