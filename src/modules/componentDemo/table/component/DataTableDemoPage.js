/**
 * Created by zhanghaoyi on 17/2/22.
 */
import React from "react";
import Paging from '../../../common/paging/component/Paging';
import DataTable from '../../../common/dataTable/component/DataTable';
import '../style/DataTableDemoPage.css'
export default class DataTableDemoPage extends React.Component {
    constructor(){
        super();
        this.state = {
            dataTableData:{
                tableData:{
                    head:['学校名称','学校类别','所属省份','所属地市','区县'],
                    body:[
                        {
                            originalData:{},
                            rowData:['高新一小','高中','陕西','西安','高新区']
                        },
                        {
                            originalData:{},
                            rowData:['高新一小','高中','陕西','西安','高新区']
                        },
                        {
                            originalData:{},
                            rowData:['高新一小','高中','陕西','西安','高新区']
                        },
                        {
                            originalData:{},
                            rowData:['高新一小','高中','陕西','西安','高新区']
                        },
                        {
                            originalData:{},
                            rowData:['高新一小','高中','陕西','西安','高新区']
                        },
                        {
                            originalData:{},
                            rowData:['高新一小','高中','陕西','西安','高新区']
                        },
                        {
                            originalData:{},
                            rowData:['高新一小','高中','陕西','西安','高新区']
                        },
                        {
                            originalData:{},
                            rowData:['高新一小','高中','陕西','西安','高新区']
                        },
                        {
                            originalData:{},
                            rowData:['高新一小','高中','陕西','西安','高新区']
                        },
                        {
                            originalData:{},
                            rowData:['高新一小','高中','陕西','西安','高新区']
                        },
                    ],
                },
                rowAction:[
                    {
                        name:'编辑',
                        functional:(()=>{alert('编辑')})
                    },
                    {
                        name:'删除',
                        functional:(()=>{alert('删除')})
                    }
                ],
                pending:false,
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
            <section className="table-content">
                <h1>表格</h1>
                <div className="table-description">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;用于数据展示</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;根据数据源的不同分为前端分页和后端分页</p>
                </div>
                <div className="table-demo-cell">
                    <h2>后端分页表格</h2>
                    <div className="table-description">
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;数据来源来自后端接口数据。根据页码数、页容量向后端查询数据。</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;处最后一列外其余列都为数据,最后一列为表格操作,一般的表格操作有:增加、修改、查询、删除。</p>
                    </div>
                    <div className="panel panel-default panel-table">
                        <DataTable
                            tableData={{head:this.state.dataTableData.tableData.head,body:this.state.dataTableData.tableData.body}}
                            rowAction={this.state.dataTableData.rowAction}
                            pending={this.state.dataTableData.pending}/>
                        <Paging
                            metaData={{sizeRole: [10, 20, 50, 100],currPage:1}}
                            total={10}
                            onSelected={this.pageChange}/>
                    </div>
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