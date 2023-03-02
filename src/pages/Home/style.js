import styled from "styled-components";
import tw from "twin.macro";

export const Base = styled.div`
    ${tw`grid w-full h-screen`};
    grid-template-columns: 250px auto;
    grid-template-rows: 6rem 128px auto 64px;
    grid-template-areas: 
        "brand header"
        "menu search"
        "menu content"
        "newnote content";
`;

export const Brand = styled.div`
    grid-area: brand;
    ${tw`flex items-center justify-center border-b border-background_700 bg-background_900`};
  
    > h1 {
          ${tw`text-lg text-orange_util`};
    };
`;

export const Menu = styled.ul`
    grid-area: menu;
`;

export const Search = styled.div`
    grid-area: search;
`;

export const NewNote = styled.div`
    grid-area: newnote;
`;

export const Content = styled.div`
    grid-area: content;
`;
