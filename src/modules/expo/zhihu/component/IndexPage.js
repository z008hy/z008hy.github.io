/**
 * Created by zhanghaoyi on 17/2/23.
 */
import React from 'react';
import '../style/IndexPage.css';
export default class IndexPage extends React.Component {
    constructor(){
        super();
        this.state = {
            dataTableData:{

            }
        };
        //绑定事件
        this.pageChange = this.pageChange.bind(this);
    }
    componentDidMount(){
        //初始化数据
    }
    componentWillUnmount(){
    }
    render(){
        return (
            <section className="content">
                {/*导航*/}
                <div className="ZhiHu-header">
                    <div className="header-content">
                        <a className="header-logo"/>
                        <div className="header-search">
                            <div className="search-group">
                                <input placeholder="搜索您感兴趣的内容..."/>
                                <button>
                                    <i className="fa fa-search"/>
                                </button>
                            </div>
                        </div>
                        <div className="header-navigation">
                            <ul>
                                <li>
                                    <a className="current">首页</a>
                                </li>
                                <li>
                                    <a>话题</a>
                                </li>
                                <li>
                                    <a>发现</a>
                                </li>
                                <li>
                                    <a>消息</a>
                                </li>
                            </ul>
                        </div>
                        <div className="user-info">
                            <a className="user-show">
                                <img className="user-img" src="data:image/jpg;base64,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"/>
                                <span className="username">岁月如同马匹</span>
                            </a>
                            <div className="user-manage">
                                <ul className="user-manage-dropdown">
                                    <li>
                                        <a>
                                            <i className="fa fa-user-o"/>
                                            <span>我的主页</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fa fa-envelope-o"/>
                                            <span>私信</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fa fa-cog"/>
                                            <span>设置</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i className="fa fa-power-off"/>
                                            <span>退出</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*页内容*/}
                <div className="ZhiHu-content">
                    {/*左侧内容*/}
                    <div></div>
                    {/*右侧内容*/}
                    <div></div>
                </div>
            </section>
        );
    }
    /*******************************************************用户行为***************************************************************/
    //分页器改变
    pageChange(pageNo, pageSize){
        alert('页码数:'+pageNo+',页容量:'+pageSize);
    }
}