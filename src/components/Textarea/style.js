import styled from "styled-components";
import tw from "twin.macro";

export const Content = styled.div`
  ${tw`w-full flex my-2 items-center rounded-xl text-gray_100_util bg-background_900`};
  
  > textarea{
    ${tw`w-full p-5 bg-transparent text-white_util outline-none `};
  }
`;