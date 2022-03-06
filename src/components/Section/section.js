import styled from "styled-components";

const SectionWrapper = styled.section`
    min-height: 100vh;
    background: ${props => props.background};
    padding-top: 100px;
`;

const Section = ({ children, background = '#c9a74d' }) => (
    <SectionWrapper background={background}>{children}</SectionWrapper>
)

export default Section;
