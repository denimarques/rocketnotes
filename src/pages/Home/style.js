import styled from "styled-components";
import tw from "twin.macro";

export const Base = styled.div`
    ${tw`grid w-full h-screen`};
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
        "brand header"
        "menu search"
        "menu content"
        "newnote content";
`;

export const Brand = styled.div`
    grid-area: brand;
    ${tw`self-center text-center`};
`;

export const Menu = styled.ul`
    grid-area: menu;
    background: red;
`;

export const Search = styled.div`
    grid-area: search;
    background: aquamarine;
`;

export const NewNote = styled.div`
    grid-area: newnote;
    background: black;
`;

export const Content = styled.div`
    grid-area: content;
    background: green;
`;
