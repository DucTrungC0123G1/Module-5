import React, {Component} from 'react';

class Student extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [
                {id: '1', name: 'Trung', age: '10', address: 'Đà Nẵng'},
                {id: '2', name: 'Hoàng', age: '11', address: 'Đà Lạt'},
                {id: '3', name: 'Hải', age: '12', address: 'Đồng Nai'},
                {id: '4', name: 'Thủy', age: '13', address: 'Quảng Nam'},
            ]

        }
    }

    render() {
        return (
            <div>
                <table border={1}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    {this.state.studentList.map(student => (
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        )
                    )}

                </table>
            </div>
        )
    }
}

export default Student;