import { observer } from "mobx-react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const RootDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;

    align-self: center;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const LessonLayout = observer(() => {
    return (
        <RootDiv>
            <Outlet />
        </RootDiv>
    );
});
