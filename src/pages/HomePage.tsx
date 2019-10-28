import React from 'react';
import { match } from 'react-router';
import Select from '@atlaskit/select';
import MediaServicesBlurIcon from '@atlaskit/icon/glyph/media-services/blur';
import LinkIcon from '@atlaskit/icon/glyph/link';
import Button from '@atlaskit/button';
import Page from "@atlaskit/page/Page";
import { FlippyOnClick } from "../share/FlippyUtils";
import { Control, Nav, NavSection, RightNavButtonContainer } from '../styled';


export type NavigationProps = {
    onCategorySelected?: (selected: { value: string }) => void;
    category?: any;
    categoryId?: string;
};

class Navigation extends React.Component<NavigationProps> {

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
                        <Button
                            appearance="subtle"
                            iconBefore={ <LinkIcon label="Link Icon"/> }
                            href={ 'https://github.com/kyungseop/interview_question' }
                            target="_blank"
                        />
                    </RightNavButtonContainer>
                </NavSection>
            </Nav>
        );
    }
}

const options = [
    { label: '없음', value: 'none' },
    { label: 'JAVA', value: 'java' },
    { label: 'DB', value: 'db' },
    { label: 'OS', value: 'os' },
    { label: '알고리즘', value: 'algorithm' },
    { label: '자료구조', value: 'data_structure' },
    { label: '디자인패턴', value: 'design_pattern' },
    { label: '프레임워크', value: 'framework' },
    { label: '네트워크', value: 'network' },
    { label: '컴퓨터', value: 'cs' },
    { label: '웹', value: 'web' },
    { label: 'React', value: 'react' },
    { label: '클라우드', value: 'cloud' },
    { label: '기타', value: 'etc' },
];

export type Contents = {
    quiz: string;
    answer: string;
};

export type Props = {
    match: match<Record<string, string>>;
};
export type State = {
    value: string;
    data: Array<Contents>;
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
        isFlipped: false
    };

    onCategorySelected = (selected: { value: string }) => {
        this.updateSelected(selected.value);
    };

    updateSelected(value: string) {
        fetch(`/data/${value}.json`)
            .then(r => r.json())
            .then(data => {
                this.setState({ value: value, data: data });
            }).catch(res => {
            this.setState({ value: value, data: [] });
        });
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
                <div
                    style={ {
                        display: 'flex',
                        flex: '1 0 200px',
                        justifyContent: 'space-around',
                        'flexWrap': 'wrap'
                    } }>
                    { this.state.data.map(test => (

                        <FlippyOnClick key={ key++ }
                                       front={ test.quiz }
                                       back={ test.answer }
                                       flipDirection="horizontal"/>))
                    }
                </div>
            </Page>
        );
    }
}