import styled from "styled-components";
import tw from "twin.macro";

export const Base = styled.div`
  ${tw`w-full h-screen`};
`;

export const Content = styled.div`
    ${tw`flex flex-col my-10 max-w-xl mx-auto gap-5`};
`;

export const Container = styled.div`
    ${tw`flex justify-between items-center`};
  
    > h1{
          ${tw`text-2xl`};
    };
`;

export const Form = styled.div`
    ${tw`w-full`};
`;

export const Section = styled.div`
    ${tw``};
`;