/**
 * Created by z008hy on 16/11/9.
 */
import React from 'react';
import Header from './modules/home/component/Header';

class Index extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}
module.exports = Index;