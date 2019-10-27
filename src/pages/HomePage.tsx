import React from 'react';
import { match } from 'react-router';
import Select from '@atlaskit/select';
import CodeIcon from '@atlaskit/icon/glyph/code';
import MediaServicesBlurIcon from '@atlaskit/icon/glyph/media-services/blur';
import { FlippyOnClick } from "../share/FlippyUtils";
import { Control, Nav, NavButton, NavSection, RightNavButtonContainer } from '../styled';
import Page from "@atlaskit/page/Page";
import { Grid, GridColumn } from "@atlaskit/page";


export type NavigationProps = {
    onCategorySelected?: (selected: { value: string }) => void;
    category?: any;
    categoryId?: string;
};

class Navigation extends React.Component<NavigationProps> {
    onCodeToggle = () => {
        //TODO link to github repository
    };

    render() {
        const {
            onCategorySelected,
            category,
            categoryId
        } = this.props;

        return (
            <Nav>
                <NavSection style={ { marginLeft: 8 } }>
                    <MediaServicesBlurIcon label={ 'Logo' }/>
                </NavSection>
                <NavSection>
                    <CategorySelector category={ category }
                                      categoryId={ categoryId }
                                      onSelected={ onCategorySelected }/>
                </NavSection>
                <NavSection>
                    <RightNavButtonContainer>
                        <NavButton
                            isSelected={ true }
                            onClick={ this.onCodeToggle }
                        >
                            <CodeIcon label="Show source"/>
                        </NavButton>
                    </RightNavButtonContainer>
                </NavSection>
            </Nav>
        );
    }
}

const options = [
    { label: '없음', value: 'none' },
    { label: 'JAVA', value: 'JAVA' },
    { label: 'DB', value: 'DB' },
    { label: '알고리즘', value: '알고리즘' }
];

export type Contents = {
    no: number;
    quiz: string;
    answer: string;
};

export type Data = {
    category: string;
    contents: Array<Contents>;
};

export type Props = {
    match: match<Record<string, string>>;
};
export type State = {
    value: string;
    data: Array<Data>;
    filtered: Array<Contents>;
    isFlipped: boolean;
};


function CategorySelector(props: any) {
    let selectedCategoryItem;

    const categorySelectItems = [
        {
            label: '필터',
            options: props.category
        }
    ];

    return (
        <Control>
            <Select
                styles={ {
                    container: (styles: object) => ({
                        ...styles,
                        flex: '1 1 0px',
                        minWidth: '300px',
                    }),
                    control: (styles: object) => ({
                        ...styles,
                        backgroundColor: '#fff',
                    }),
                } }
                options={ categorySelectItems }
                placeholder="Select Category"
                onChange={ (value: string, { action }: { action: string }) =>
                    action === 'select-option' && props.onSelected(value)
                }
                // value={ selectedCategoryItem }
            />
        </Control>
    );
}

export default class HomePage extends React.Component<Props, State> {

    state: State = {
        value: 'none',
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

    onCategorySelected = (selected: { value: string }) => {
        this.updateSelected(selected.value);
    };

    updateSelected(value: string) {
        let filtered = this.state.data.filter((dt: Data) => {
            return dt.category === value
        });

        let contents: Array<Contents> = [];

        filtered.map(c =>
            c.contents.forEach((content: Contents) => {
                contents.push(content);
            }));

        this.setState({ value: value, filtered: contents });
    }

    render() {
        //TODO set categoryId
        let key = 0;
        return (
            <Page>
                <Navigation categoryId={ '' }
                            category={ options }
                            onCategorySelected={ this.onCategorySelected }
                />
                <h2>암기카드</h2>
                <Grid layout="fluid" spacing="comfortable">
                    <div
                        style={ {
                            display: 'flex',
                            flex: '1 0 200px',
                            justifyContent: 'space-around',
                            'flexWrap': 'wrap'
                        } }>
                        { this.state.filtered.map(test => (
                            <GridColumn key={ key++ } medium={ 2 }>
                                <FlippyOnClick key={ key++ }
                                               front={ test.quiz }
                                               back={ test.answer }
                                               flipDirection="horizontal"/></GridColumn>))
                        }
                    </div>
                </Grid>
            </Page>
        );
    }
}