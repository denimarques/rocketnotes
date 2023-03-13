import styled from "styled-components"
import tw from "twin.macro"

export const Content = styled.div`
    ${tw`px-10 h-24 border-b border-background_700 w-full flex justify-between items-center self-center`};
    grid-area: header;
  
`;

export const Profile = styled.div`
    ${tw`flex items-center gap-5`};
`;

export const Logout = styled.div`
    ${tw`text-2xl text-gray_100_util`};
`;