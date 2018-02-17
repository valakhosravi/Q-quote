import React, { Component } from 'react';
import $ from 'jquery';
import axios from 'axios';

import {API} from '../API.js';
import './quote.component.css';

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['blue','green','purple','teal','pink','orange','yellow',],
            isEditable: false,
        };
    }

    render() {
        return (
                <div className={"q-card q-color-"+ this.state.colors[this.props.quote.id % 7] + " rounded"} id={"q-card-id-" + this.props.quote.id}>
                    <header className="rounded-top">
                        <strong>{this.props.quote.author}
                        </strong>
                            {!this.state.isEditable ? <i className="fa fa-ellipsis-h pull-right q-menu-button" id={this.props.quote.id}></i> : null}
                            {this.state.isEditable ? <i className="fa fa-times pull-right q-menu-button" onClick={this.onCloseEditclick}></i> : null}
                        <div className="q-card-menu rounded pull-right" id={"menu-" + this.props.quote.id}>
                            <div className="py-1 px-2 q-menu-item text-primary">
                                <i className='fa fa-share pr-2'></i>
                                Share
                            </div>
                            <div className="py-1 px-2 q-menu-item text-primary" onClick={this.onEditClick}>
                                <i className='fa fa-edit pr-2'></i>
                                Edit
                            </div>
                            <div className="py-1 px-2 q-menu-item text-primary" onClick={this.onDeleteClick}>
                                <i className='fa fa-trash pr-2'></i>
                                Delete
                            </div>
                            <div className="py-1 px-2 q-menu-item text-danger">
                                <i className='fa fa-flag pr-2'></i>
                                Report
                            </div>
                        </div>
                    </header>
                    <div className="textarea" id={"textarea-" + this.props.quote.id} contentEditable={this.state.isEditable} suppressContentEditableWarning={true}>
                        {this.props.quote.content}
                    </div>
                    <footer>
                        {/* <button className="rounded px-4">Submit</button> */}
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

    onEditClick = ($event) => {
        this.setState({
            isEditable: true,
        });
        setTimeout(() => {
            $('#block-ui').css('z-index', '1');
            $('#block-ui').css('opacity', '0.4');
            $('#q-card-id-' + this.props.quote.id).css('z-index', '2');
            $('#textarea-' + this.props.quote.id).get(0).focus();
        }, 10);
    }
    onCloseEditclick = ($event) => {
        this.setState({
            isEditable: false,
        });
        setTimeout(() => {
            $('#block-ui').css('z-index', '0');
            $('#block-ui').css('opacity', '0');
            $('#q-card-id-' + this.props.quote.id).css('z-index', '0');
        }, 10);
    }

    onDeleteClick = ($event) => {
        const requestConfig = {
            baseURL: API.baseURL,
            url: '/quotes/' + this.props.quote.id.toString(),
            method: 'delete',
        }
        axios.request(requestConfig)
            .then((response) => {
                console.log('response', response);
                this.props.refresh();
            })
            .catch((error) => {
                console.log('error', error);
            })
        $event.preventDefault();
    }
}

export default Quote;
