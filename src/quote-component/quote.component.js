import React, { Component } from 'react';
import './quote.component.css';

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['blue','green','purple','teal','pink','orange','yellow',]
        };
    }

    render() {
        console.log(this.props.quote);
        return (
                <div className={"q-card q-color-"+ this.state.colors[this.props.quote.id % 7] + " rounded"}>
                    <header className="rounded-top">
                        <strong>{this.props.quote.author}
                        </strong>
                        <i className="fa fa-ellipsis-v pull-right pl-2">
                        </i>
                        <div className="q-card-menu rounded pull-right px-2">
                            <div className="my-1">Share</div>
                            <div className="my-1">Edit</div>
                            <div className="my-1">Delete</div>
                            <div className="my-1">Report</div>
                        </div>
                    </header>
                    <article>
                        {this.props.quote.content}
                    </article>
                    <footer>
                        <span className="pull-left rounded">
                            <i className="fa fa-heart-o text-red pr-1"></i>
                            <span className="pl-1">
                                {this.props.quote.like_count}
                            </span>
                        </span>
                        <p className="d-inline-block pull-right m-0">{new Date(this.props.quote.create_date).toDateString()}</p>                        
                    </footer>
                </div>
        );
    }
}

export default Quote;
