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
        return (
                <div className={"q-card q-color-"+ this.state.colors[this.props.quote.id % 7] + " rounded"}>
                    <header className="rounded-top">
                        <strong>{this.props.quote.author}
                        </strong>
                        <i className="fa fa-ellipsis-v pull-right q-menu-button pl-2" id={this.props.quote.id}>
                        </i>
                        <div className="q-card-menu rounded pull-right" id={"menu-" + this.props.quote.id}>
                            <div className="py-1 px-3 q-menu-item">
                                <i className='fa fa-share pr-2'></i>
                                Share
                            </div>
                            <div className="py-1 px-3 q-menu-item">
                                <i className='fa fa-edit pr-2'></i>
                                Edit
                            </div>
                            <div className="py-1 px-3 q-menu-item">
                                <i className='fa fa-trash pr-2'></i>
                                Delete
                            </div>
                            <div className="py-1 px-3 q-menu-item">
                                <i className='fa fa-flag pr-2'></i>
                                Report
                            </div>
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

    onMenuButtonClick = ($event) => {
        // console.log($event);
        // if ($('#menu-'+this.props.quote.id).is(':visible')) {
        //     $('#menu-'+this.props.quote.id).fadeOut(200);
        // } else {
        //     $('#menu-'+this.props.quote.id).fadeIn(200);
        // }
    }
}

export default Quote;
