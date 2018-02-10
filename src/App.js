import React, { Component } from 'react';
import Quote from './quote-component/quote.component';
import './App.css';

class App extends Component {
    render() {
        return (
          <div className="w-100 q-countainer">
              <div className="col-sm-12 col-md-6 col-lg-3 d-inline-block pull-left p-0">
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 d-inline-block pull-left p-0">
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 d-inline-block pull-left p-0">
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 d-inline-block pull-left p-0">
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
                  <Quote></Quote>
              </div>
          </div>
        );
    }
}

export default App;
