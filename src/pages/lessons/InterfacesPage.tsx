import { observer } from "mobx-react";
import { useLessonNumber } from ".";

export const InterfacesPage = observer(() => {
    const lessonNum = useLessonNumber();
    return (
        <>
            <h1>Lesson {lessonNum}: Interfaces</h1>
        </>
    );
});
