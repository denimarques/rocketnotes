import tw from "twin.macro";
import styled from "styled-components";

export const Content = styled.button`
    ${tw`self-end`};
    ${({isActive}) => isActive ? tw`text-orange_util` : tw`text-gray_100_util` };
`;