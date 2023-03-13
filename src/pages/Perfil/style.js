import tw from "twin.macro";
import styled from "styled-components";


export const Base = styled.div`
    ${tw``};
`;

export const Header = styled.header`
    ${tw`h-28 bg-background_900 flex items-center text-gray_100_util text-2xl pl-20`};
`;

export const Form = styled.div`
    ${tw`max-w-sm mx-auto`};
    div:nth-child(3){
      ${tw`mt-8`};
    }
`;

export const Avatar = styled.div`
  ${tw`relative mx-auto w-32 h-32 mb-14`};
  
  img{
          ${tw`rounded-full w-32 h-32 -mt-14`};
  };
  
  label{
          ${tw`absolute bottom-2 right-0 bg-orange_util flex items-center justify-center w-8 h-8 rounded-full cursor-pointer`};
  };
  
  svg{
          ${tw`text-background_800`};
  };
  
  input{
          ${tw`hidden`};
  };
  
`;
