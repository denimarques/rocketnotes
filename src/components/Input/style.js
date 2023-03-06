import styled from "styled-components";
import tw from "twin.macro";

export const Content = styled.div`
  ${tw`w-full flex my-2 items-center rounded text-gray_100_util bg-background_900`};
  
  > input{
    ${tw`w-full h-14 p-5 bg-transparent text-white_util outline-none`};
  }
  
  > svg {
    ${tw`ml-4 text-xl`};
  }
`;