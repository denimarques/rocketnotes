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
    ${tw`pt-10 bg-background_900`};
  
    > li {
      ${tw`h-12 flex items-center justify-center text-gray_100_util`};
    };
  
    > li:nth-child(1) {
      ${tw`text-orange_util`};
    }
`;

export const Search = styled.div`
    grid-area: search;
    ${tw`p-10`};
  
    > form > input {
      ${tw`w-full h-12 px-4 outline-none bg-background_900 rounded placeholder:text-sm placeholder:text-gray_300_util`};
    };
`;

export const NewNote = styled.div`
    grid-area: newnote;
    ${tw`bg-orange_util flex gap-2 items-center justify-center text-xl text-background_900 font-medium`};
`;

export const Content = styled.div`
    grid-area: content;
    background-color: red;
`;
