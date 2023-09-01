import { Button, ButtonGroup } from "@blueprintjs/core";
import { observer } from "mobx-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LESSONS } from "../pages/lessons";

const RootDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;

    align-self: center;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
    padding-bottom: 100px;
`;

const NextPrevButtons = styled(ButtonGroup)`
    margin-top: 5rem;
`;

export const LessonLayout = observer(() => {
    const location = useLocation();

    const myLessonIdx = LESSONS.findIndex(
        lesson => `/lessons/${lesson.slug}` === location.pathname,
    );

    const navigate = useNavigate();

    const prevIdx = myLessonIdx - 1;
    const nextIdx = myLessonIdx + 1;

    const nextLesson = nextIdx < LESSONS.length ? LESSONS[nextIdx] : undefined;
    const prevLesson = prevIdx >= 0 ? LESSONS[prevIdx] : undefined;

    const onNextClick = () => {
        if (nextLesson) {
            navigate(`/lessons/${nextLesson.slug}`);
        }
    };

    const onPrevClick = () => {
        if (prevLesson) {
            navigate(`/lessons/${prevLesson.slug}`);
        }
    };

    return (
        <RootDiv>
            <Outlet />

            <NextPrevButtons fill>
                <Button
                    disabled={!prevLesson}
                    text="Previous Lesson"
                    icon="arrow-left"
                    onClick={onPrevClick}
                />
                <Button
                    disabled={!nextLesson}
                    text="Next Lesson"
                    icon="arrow-right"
                    onClick={onNextClick}
                />
            </NextPrevButtons>
        </RootDiv>
    );
});
