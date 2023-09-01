import { Lesson1Page } from "./Lesson1Page";
import { Lesson2Page } from "./Lesson2Page";
import { Lesson3Page } from "./Lesson3Page";
import { Lesson4Page } from "./Lesson4Page";
import { Lesson6Page } from "./Lesson6Page";

export interface LessonInfo {
    page: React.ReactNode;
    title: string;
    slug: string;
}

export const LESSONS = [
    {
        page: <Lesson1Page />,
        title: "Lesson 1 - Variables & Constants",
        slug: "1",
    },
    {
        page: <Lesson2Page />,
        title: "Lesson 2 - Types",
        slug: "2",
    },
    {
        page: <Lesson3Page />,
        title: "Lesson 3 - Functions",
        slug: "3",
    },
    {
        page: <Lesson4Page />,
        title: "Lesson 4 - Classes",
        slug: "4",
    },
    {
        page: <Lesson6Page />,
        title: "Lesson 6 - Interfaces",
        slug: "6",
    },
] satisfies LessonInfo[];
