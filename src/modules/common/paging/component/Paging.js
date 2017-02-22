import React, {PropTypes} from "react";
import '../style/Paging.css';

class Paging extends React.Component{

    constructor(config){
        super(config);
        this.state = {
            "pageSize": config.metaData.sizeRole[0],
            "currentPage": 1,
            "perPageNumOption": config.metaData.sizeRole
        };
        this.flushPage = this.flushPage.bind(this);
        this.getPageInfo = this.getPageInfo.bind(this);
    }

    prevClick(){
        if(this.state.currentPage > 1) {
            this.state.currentPage -= 1;
            this.flushPage();
            this.setState(this.state);
        }
    }

    nextClick(){
        var totalPage = this.getPageNum(this.state.pageSize, this.props.total);
        if(this.state.currentPage < totalPage) {
            this.state.currentPage += 1;
            this.flushPage();
            this.setState(this.state);
        }
    }

    componentWillReceiveProps() {
    }

    componentDidMount(){

    }

    componentWillUnmount() {

    }
    /**
     * 刷新页面
     * */
    flushPage() {
        this.props.onSelected(this.state.currentPage, this.state.pageSize);
    }

    render() {
        var totalPage = this.getPageNum(this.state.pageSize, this.props.total);
        var hasPrev = this.state.currentPage !== 1,
            hasNext = this.state.currentPage !== totalPage;
        if(this.props.total === 0){
            hasPrev = false;
            hasNext = false;
        }
        var pages = [];
        for(let i = 0; i < totalPage; i++) {
            pages.push(`第${i + 1}页`)
        }
        return (
            <div className="material-paging-style">
                <section className="page-box">
                    <select className="form-control input-sm" onChange={this.pageSizeChanged.bind(this)}>
                        {this.state.perPageNumOption.map(function(value,key){
                            return(
                                <option key={key} value={value}>每页{value}条</option>
                            )
                        })}
                    </select>
                    <select ref="pageNum" onChange={this.pageSelected.bind(this)} value={this.state.currentPage} className="form-control input-sm" >
                        {pages.map((itm, inx) => {
                            return (
                                <option key={inx} value={inx + 1}>{itm}</option>
                            )
                        })}
                    </select>
                    <span>共{this.props.total}条</span>
                    <span>共{totalPage}页</span>
                    <a  aria-label="Previous" className={(hasPrev? '': 'unavailable')} onClick={this.prevClick.bind(this)} >
                        <i aria-hidden="true" className="fa fa-chevron-left"/>
                    </a>
                    <a  aria-label="Next" className={(hasNext? '': 'unavailable')}  onClick={this.nextClick.bind(this)}>
                        <i aria-hidden="true" className="fa fa-chevron-right"/>
                    </a>
                </section>
            </div>
        )
    }
    /**
     * 已知每页显示数量和总数,求可分的页数
     * */
    getPageNum(pageSize, totalNum) {
        return Math.floor((pageSize + totalNum - 1) / pageSize)
    }
    /**
     * 显示指定页面
     * */
    pageSelected(evt) {
        this.state.currentPage = Number(evt.target.value)
        this.flushPage();
        this.setState(this.state);
    }
    /**
     * 页容量改变时触发
     * */
    pageSizeChanged(evt) {
        this.state.pageSize = Number(evt.target.value);
        this.state.currentPage = 1;
        this.flushPage();
        this.setState(this.state);
    }

    getPageInfo() {
        return {
            pageNo: this.state.currentPage,
            pageSize: this.state.pageSize
        }
    }
}
Paging.propTypes = {
    metaData: PropTypes.object.isRequired,
    onSelected: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired
}
module.exports = Paging;

