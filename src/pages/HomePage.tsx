import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { LESSONS } from "./lessons";
import { styled } from "styled-components";
import { NavButton } from "../components/NavButton";

const RootDiv = styled.div`
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    width: 700px;

    align-self: center;
    gap: 1rem;
`;

export const HomePage = observer(() => {
    return (
        <RootDiv>
            {LESSONS.map((lesson, idx) => (
                <NavButton large to={`/lessons/${lesson.slug}`}>
                    Lesson {idx + 1}: {lesson.title}
                </NavButton>
            ))}
        </RootDiv>
    );
});
