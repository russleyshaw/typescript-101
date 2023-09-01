import { observer } from "mobx-react";
import { Link } from "react-router-dom";

export const HomePage = observer(() => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/lessons/1">Lesson 1: Variables & Constants</Link>
                </li>
            </ul>
        </div>
    );
});
