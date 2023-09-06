import { observer } from "mobx-react";
import { useLessonNumber } from ".";

export const AsyncAwaitPage = observer(() => {
    const lessonNum = useLessonNumber();
    return (
        <>
            <h1>Lesson {lessonNum}: Async & Await</h1>

            <h2>Promises</h2>

            <h2>Async/Await</h2>
        </>
    );
});
