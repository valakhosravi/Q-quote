import React, { Component } from 'react';
import axios from 'axios';
import './add-quote.component.css';

class AddQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['blue','green','purple','teal','pink','orange','yellow',],
            content: '',
        };
    }

    render() {
        return (
                <div className={"q-card-a q-color-"+ this.state.colors[this.props.index % 7] + " rounded"}>
                    <header className="rounded-top">
                        <strong>
                            YOUR NAME HERE
                        </strong>
                        <i className="fa fa-ellipsis-v pull-right"></i>
                    </header>
                    <textarea
                        placeholder="Type Here ..."
                        value={this.state.content}
                        onChange={this.onTextAreaChange.bind(this)}
                    ></textarea>
                    <footer>
                        <button className="rounded px-4" onClick={this.onPostClick.bind(this)}>Post</button>
                    </footer>
                </div>
        );
    }

    onTextAreaChange(event) {
        this.setState({
            content: event.target.value
        });
    }

    onPostClick(event) {
        console.log(this.state.content);
        var instance = axios.create({
            baseURL: 'http://localhost:3000/api/quotes',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
        });
        const data = {
            "author": "User",
            "content": this.state.content,
            "create_date": "2018-02-10T22:45:09.294Z",
            "like_count": 0
        };
        instance.post('http://localhost:3000/api/quotes', data)
            .then((response) => {
                console.log('response', response);
                this.props.refresh();
            })
            .catch((error) => {
                console.log('error', error);
            })
        event.preventDefault();
    }
}

export default AddQuote;
