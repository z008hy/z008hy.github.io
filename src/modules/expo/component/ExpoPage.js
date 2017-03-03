/**
 * Created by zhanghaoyi on 17/3/2.
 */
import React from 'react';
import '../style/ExpoPage.css';
export default class ExpoPage extends React.Component {
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
                <div className="content-main">
                    <ul className="expo-ul">
                        <li>
                            <a href="/expo/zhihuStatic/indexPage.html" target="_blank">
                                <div className="expo-title">
                                    <i className="fa fa-tag"/>
                                    <span>知乎个人首页</span>
                                </div>
                                <img className="expo-img" src={require('../image/ZhiHuExpo.png')}/>
                            </a>
                        </li>
                        <li>
                            <a href="/expo/tmallStatic/indexPage.html" target="_blank">
                                <div className="expo-title">
                                    <i className="fa fa-tag"/>
                                    <span>天猫首页</span>
                                </div>
                                <img className="expo-img" src={require('../image/tmallExpo.png')}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}