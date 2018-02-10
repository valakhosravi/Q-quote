import React, { Component } from 'react';
import './quote.component.css';

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                'blue',
                'purple',
                'pink',
                'orange',
                'yellow',
                'green',
                'teal',
            ],
            counter: 0,
        };
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    

    render() {
        const randomNumber = this.getRandomNumber(0, this.state.colors.length);
        console.log(randomNumber);
        return (
                <div className={"q-card q-color-"+ this.state.colors[randomNumber] + " rounded"}>
                    <header className="rounded-top">
                        <strong>Les Brown</strong>
                        <p className="d-inline-block pull-right m-0"><small> Fri Feb 09 2018</small></p>
                    </header>
                    <article>
                        We can bring positive energy into our daily lives by smiling more, talking to strangers in line, replacing handshakes with hugs, and calling our friends just to tell them we love them.
                    </article>
                    <footer>
                        <button type="button" className="btn btn-outline-primary pull-right" data-toggle="button">
                            <i className="fa fa-heart-o mr-2 text-red"></i>
                            LIKE
                            <span className="ml-2">0</span>
                        </button>
                    </footer>
                </div>
        );
    }
}

export default Quote;
