import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import Quote from './quote-component/quote.component';
import AddQuote from './add-quote-component/add-quote.component';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: [],
			curentMenuId: -1,
		};
		this.getQuotes();
	}

	componentDidMount() {
		$(document).ready(() => {
			$(document).click(($event) => {
				$('#menu-' + this.state.curentMenuId).hide();
				if ($event.target.className.includes('q-menu-button')) {
					var id = $event.target.id;
					this.setState({
						curentMenuId: id,
					});
					$('#menu-' + id).toggle();
				}
			});
		});
	}

    render() {
        const length = 20;
		const columns = [[],[],[],[],];
		this.state.quotes.forEach((quote, i) => {
			switch (i % 4) {
				case 0:
					columns[1].push(<Quote key={i} quote={quote} index={i}></Quote>);
					break;
				case 1:
					columns[2].push(<Quote key={i} quote={quote} index={i}></Quote>);
					break;
				case 2:
					columns[3].push(<Quote key={i} quote={quote} index={i}></Quote>);
					break;
				case 3:
					columns[0].push(<Quote key={i} quote={quote} index={i}></Quote>);
					break;
				default:
					break;
			}
		});
        return (
          <div className="w-100 q-countainer">
			  <div id="block-ui">
			  </div>
              <div className="col-sm-12 col-md-6 col-lg-3 d-inline-block pull-left p-0">
			  		<AddQuote refresh={this.getQuotes.bind(this)}></AddQuote>
                  	{columns[0]}
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 d-inline-block pull-left p-0">
                  	{columns[1]}
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 d-inline-block pull-left p-0">
                  	{columns[2]}
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 d-inline-block pull-left p-0">
                  	{columns[3]}
              </div>
          </div>
        );
	}
	
	getQuotes() {
		axios.get('http://localhost:3000/api/quotes').then(response => {
			response.data = response.data.reverse();
			this.setState({
				quotes: response.data,
			});
		});
	}
}

export default App;
