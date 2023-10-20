import React, {Component} from "react";

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            item: ""
        }

    }

    handleChange = (event) => {
        this.setState({item: event.target.value})
    }
    handleAddItem = () => {
        if (this.state.item) {
            this.setState({
                list: [this.state.list, this.state.item]
            })

        }
    }

    render() {
        return (
            <div>
                <h2>TodoList</h2>
                <div>
                    <input type="text" value={this.state.item} onChange={this.handleChange}/>
                </div>
                <div>
                    <button onClick={this.handleAddItem}>ADD</button>
                </div>
                {this.state.list.map((todo, index) =>
                    <p key={index}>{todo}</p>)}
            </div>
        )
    }
}

export default TodoApp;