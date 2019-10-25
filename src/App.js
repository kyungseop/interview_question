import React, {Component} from 'react';
import './App.css';
import {FlippyOnClick} from "./share/FlippyUtils";

const options = [ '없음', 'JAVA', 'DB', '알고리즘' ];

class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            value: '없음',
            data: [],
            filtered: [],
            isFlipped: false
        };
    }

    componentDidMount = () => {
        fetch( "/data.json" )
            .then( r => r.json() )
            .then( data => {
                this.setState( { data } );
            } );
    };

    onChange = e => {
        let filtered = this.state.data.filter( dt => {
            return dt.category === e.target.value
        } );

        let contents = [];

        filtered.map( c =>
            c.contents.map( content => {
                contents.push( content );
            } ) );

        this.setState( { value: e.target.value, filtered: contents } );
    };


    render() {
        return (
            <div className="App">
                <div style={{ margin: '4px' }}>
                    <label htmlFor="category">카테고리</label>
                    <select value={this.state.value} onChange={( e ) => this.onChange( e )}>
                        {options.map( option => {
                            return <option value={option} key={option}>{option}</option>
                        } )}
                    </select>
                </div>
                <div
                    style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flexWrap': 'wrap' }}>
                    {this.state.filtered.map( test => (
                        <FlippyOnClick key={test.quiz}
                                       front={test.quiz}
                                       back={test.answer}
                                       flipDirection="horizontal"/> ) )
                    }
                </div>
            </div>
        );
    }
}

export default App;
