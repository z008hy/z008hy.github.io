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
                    <img src={require('../image/headerLogo.png')} className="logo"/>
                </div>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <a name="home" href="#/home">主页</a>
                        </li>
                        <li>
                            <a name="home" href="#/photo">相册</a>
                        </li>
                        <li>
                            <a name="home" href="#/expo">网站示例</a>
                        </li>
                        <li>
                            <a name="component" href="#/component">组件示例</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
module.exports = Header;