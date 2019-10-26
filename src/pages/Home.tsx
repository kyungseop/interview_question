import React from 'react';
import { FlippyOnClick } from "../share/FlippyUtils";

const options = [ '없음', 'JAVA', 'DB', '알고리즘' ];

export type Contents = {
    no: number;
    quiz: string;
    answer: string;
};

export type Data = {
    category: string;
    contents: Array<Contents>;
};

export type Props = {};
export type State = {
    value: string;
    data: Array<Data>;
    filtered: Array<Contents>;
    isFlipped: boolean;
};

export default class Home extends React.Component<Props, State> {

    state: State = {
        value: '',
        data: [],
        filtered: [],
        isFlipped: false
    };

    componentDidMount() {
        fetch("/data.json")
            .then(r => r.json())
            .then(data => {
                this.setState({ data: data });
            });
    };

    onChange = (e: React.ChangeEvent<any>) => {

        let filtered = this.state.data.filter((dt: Data) => {
            return dt.category === e.target.value
        });

        let contents: Array<Contents> = [];

        filtered.map(c =>
            c.contents.map((content: Contents) => {
                contents.push(content);
            }));

        this.setState({ value: e.target.value, filtered: contents });
    };


    render() {
        return (
            <div>
                <div style={ { margin: '4px' } }>
                    <label htmlFor="category">카테고리</label>
                    <select value={ this.state.value } onChange={ (e) => this.onChange(e) }>
                        { options.map(option => {
                            return <option value={ option } key={ option }>{ option }</option>
                        }) }
                    </select>
                </div>
                <div
                    style={ {
                        display: 'flex',
                        flex: '1 0 200px',
                        justifyContent: 'space-around',
                        'flexWrap': 'wrap'
                    } }>
                    { this.state.filtered.map(test => (
                        <FlippyOnClick key={ test.quiz }
                                       front={ test.quiz }
                                       back={ test.answer }
                                       flipDirection="horizontal"/>))
                    }
                </div>
            </div>
        );
    }
}