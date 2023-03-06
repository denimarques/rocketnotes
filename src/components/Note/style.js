import styled from "styled-components";
import tw from "twin.macro";

export const Content = styled.button`
    ${tw`w-full bg-background_700 rounded p-6 mb-4`};
  
    > h1{
      flex: 1;
      text-align: left;
    }
  
    > footer{
      ${tw`w-full flex mt-6 gap-5`};
    }
`;