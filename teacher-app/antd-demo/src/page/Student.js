import React, { Component } from 'react';
import { Table, Tag } from 'antd';
import Axios from 'axios'
import './../mock/mock'//别忘了引入写好的mock文件
const { Column, ColumnGroup } = Table;
class Student extends Component {
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    componentWillMount(){
        Axios.get('http://www.student.com/studentList').then(res=>{
            this.setState({
                list:res.data
            })
        })
        .catch(()=>{
            console.log('no');
        })
    }
    render() {
        return (
            <div>
                <Table dataSource={this.state.list}>
                    <ColumnGroup title="Name">
                        <Column title="First Name" dataIndex="firstName" key="firstName" />
                        <Column title="Last Name" dataIndex="lastName" key="lastName" />
                    </ColumnGroup>
                    <Column title="Age" dataIndex="age" key="age" />
                    <Column title="Address" dataIndex="address" key="address" />
                    <Column title="Tags" dataIndex="tags" key="tags"
                    render={tags => (
                        <span>
                        {tags.map(tag => (
                            <Tag color="blue" key={tag}>
                            {tag}
                            </Tag>
                        ))}
                        </span>
                    )}
                    />
                    
                </Table>
                <div>asdasdasda</div>
            </div>
        );
    }
}

export default Student;