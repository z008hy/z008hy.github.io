/**
 * Created by zhanghaoyi on 16/12/12.
 * 外部传入属性,tableData,rowAction
 */
import React from 'react';
import '../style/DataTable.css';
export default class DataTable extends React.Component {
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
        //判断是否有数据
        if(!this.props.tableData){
            return null;
        }
        const colLength = this.props.tableData.head.length+(((this.props.rowAction&&this.props.rowAction.length>0)?1:0));
        const pending = (
            <tbody>
            <tr>
                <td colSpan={colLength}>
                    <div>
                        <i className="fa fa-spinner fa-pulse fa-2x fa-fw" style={{margin: '0 10px'}}/>
                        <span style={{fontSize:'14px',verticalAlign: 'text-bottom'}}>正在加载...</span>
                    </div>
                </td>
            </tr>
            </tbody>
        );
        //判断是否有操作
        if(this.props.rowAction&&this.props.rowAction.length>0){
        }
        //表头
        let tableHead = (
            <thead>
                <tr>
                    {
                        this.props.tableData.head.map((val, inx) => {
                            return (
                                <th key={inx}>{val}</th>
                            )
                        })
                    }
                    {((this.props.rowAction&&this.props.rowAction.length>0)?<th>操作</th>:"")}
                </tr>
            </thead>
           );
        //表身
        let tableBody = (
            <tbody>
                {(this.props.tableData.body&&this.props.tableData.body.length>0)?this.props.tableData.body.map((val, inx) => {
                    return (
                        <tr key={inx}>
                            {
                                val.rowData.map((value, index) => {
                                    //判断类型
                                    if(typeof value ==='object'){
                                        if(value.type==='a'){
                                            return (
                                                <td key={index}>
                                                    <a href={value.url} download={value.dataName||''}>{value.name}</a>
                                                </td>
                                            );
                                        }else if(value.type==='btn'){
                                            return (
                                                <td key={index}>
                                                    <a href={value.url} onClick={value.functional}>{value.name}</a>
                                                </td>
                                            );
                                        }
                                    }else{
                                        return (
                                            <td key={index}>{value}</td>
                                        );
                                    }
                                })
                            }
                            <td>
                                {((this.props.rowAction&&this.props.rowAction.length>0)?(
                                    this.props.rowAction.map((v,i)=>{
                                        if(v.filter){
                                            if(v.filter(val.originalData)){
                                                return (
                                                    <a key={i} onClick={evt => {v.functional(val.originalData,evt)}}>
                                                        {v.name}&nbsp;&nbsp;
                                                    </a>
                                                )
                                            }else{
                                                return null;
                                            }
                                        }else{
                                            return (
                                                <a key={i} onClick={evt => {v.functional(val.originalData,evt)}}>
                                                    {v.name}&nbsp;&nbsp;
                                                </a>
                                            )
                                        }
                                    })
                                ):"")}
                            </td>
                        </tr>
                    );
                }):(
                    <tr>
                        <td colSpan={colLength}>
                            <div>
                                <i className="fa fa-exclamation fa-2x" style={{margin: '0 10px'}}/>
                                <span style={{fontSize:'14px',verticalAlign: 'text-bottom'}}>没有数据</span>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        );
        return (
            <table className="table table-striped table-bordered material-table-style" ref="tableDataShow">
                {tableHead}
                {this.props.pending?pending:tableBody}
            </table>
        );
    }
}