import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Product from "../Product";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
const pluginWrapper = () => {
    /*
    * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
    */
};


const TYPOS = ['abcd', 'abcdadsf', 'dasf'];

const parallaxData = [
    {
        start: 0,
        end: 500,
        properties: [
            {
                startValue: 1,
                endValue: 2,
                property: 'scale',
            },
        ],
    },
];

const StyledLink = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid #fff;
    padding: 16px;
    text-align: center;
    font-size: 24px;
    line-height: 24px;
    border-radius: 28px;
    background: rgba('#000', 0.5);
`;

const originalColors = ['#D2DBD8', '#EAC8C6', '#CAE4C9', '#CED09E'];

class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionsColor: [...originalColors],
            fullpages: props.products,
        };
    }

    onLeave(origin, destination, direction) {
        console.log("onLeave", { origin, destination, direction });
        // arguments are mapped in order of fullpage.js callback arguments do something
        // with the event
    }

    moveSectionDown() {
        fullpage_api.moveSectionDown();
    }

    render() {
        const { fullpages } = this.state;

        if (!fullpages.length) {
            return null;
        }

        return (

            <div className="App">
                <ReactFullpage
                    navigation
                    pluginWrapper={pluginWrapper}
                    onLeave={this.onLeave.bind(this)}
                    sectionsColor={this.state.sectionsColor}
                    render={comp =>
                        console.log("render prop change") || (
                            <ReactFullpage.Wrapper>
                                {fullpages.map((product, index) => (
                                    <div key={product.id} className="section">
                                        <Product product={product} />
                                    </div>
                                ))}
                            </ReactFullpage.Wrapper>
                        )
                    }
                />
            </div>
        );
    }
}

export default FullPage;
