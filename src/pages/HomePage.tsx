import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { LESSONS } from "./lessons";

export const HomePage = observer(() => {
    return (
        <div>
            <ul>
                {LESSONS.map(lesson => (
                    <li>
                        <Link to={`/lessons/${lesson.slug}`}>{lesson.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
});
