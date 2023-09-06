import { createContext, useContext } from "react";
import { ArraysPage } from "./ArraysPage";
import { AsyncAwaitPage } from "./AsyncAwaitPage";
import { ControlFlowPage } from "./ControlFlowPage";
import { FunctionsPage } from "./FunctionsPage";
import { GenericsPage } from "./GenericsPage";
import { InterfacesPage } from "./InterfacesPage";
import { TimeoutPage } from "./TimeoutPage";
import { TypesPage } from "./TypesPage";
import { VariablesPage } from "./VariablesPage";
import { NullishOperatorsPage } from "./NullishOperatorsPage";

const LessonNumberContext = createContext<number>(0);
export function useLessonNumber(): number {
    return useContext(LessonNumberContext);
}

export interface LessonInfo {
    page: React.ReactNode;
    title: string;
    slug: string;
}

export const LESSONS = [
    {
        page: <VariablesPage />,
        title: "Variables & Constants",
        slug: "variables-and-constants",
    },
    {
        page: <TypesPage />,
        title: "Types",
        slug: "types",
    },
    {
        page: <ControlFlowPage />,
        title: "Control Flow",
        slug: "control-flow",
    },
    {
        page: <FunctionsPage />,
        title: "Functions",
        slug: "functions",
    },
    {
        page: <ArraysPage />,
        title: "Arrays",
        slug: "arrays",
    },
    {
        page: <TimeoutPage />,
        title: "Timeout",
        slug: "timeout",
    },
    {
        page: <InterfacesPage />,
        title: "Interfaces",
        slug: "interfaces",
    },
    {
        page: <GenericsPage />,
        title: "Generics",
        slug: "generics",
    },
    {
        page: <AsyncAwaitPage />,
        title: "Async/Await",
        slug: "async-await",
    },
    {
        page: <NullishOperatorsPage />,
        title: "Nullish Operators",
        slug: "nullish-operators",
    },
].map((lesson, idx) => ({
    ...lesson,
    page: (
        <LessonNumberContext.Provider value={idx + 1}>{lesson.page}</LessonNumberContext.Provider>
    ),
})) satisfies LessonInfo[];
