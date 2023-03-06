import styled from "styled-components";
import tw from "twin.macro";

export const Base = styled.div`
  ${tw`h-screen flex items-stretch`};
  
  h1{
    ${tw`text-2xl text-orange_util`};
  };

  h2{
    ${tw`text-lg mt-20 mb-5`};
  };
  
  a{
    ${tw`text-sm text-orange_util mt-20`};
  };

  p{
    ${tw`text-sm text-gray_100_util`};
  };
`;

export const Background = styled.div`
  ${tw`flex-1 bg-hero-pattern bg-cover opacity-20 bg-no-repeat bg-center`};

`;