import { observer } from "mobx-react";
import { useLessonNumber } from ".";
import { CodeBlock } from "../../components/CodeBlock";
import { QuizDiv } from "../../components/styled";
import { FillInTheBlank } from "../../components/FillInTheBlank";

export const InterfacesPage = observer(() => {
    const lessonNum = useLessonNumber();
    return (
        <>
            <h1>Lesson {lessonNum}: Interfaces</h1>

            <p>
                An interface is a way to describe the shape of an object. It defines the properties
                and methods that an object must have.
            </p>

            <CodeBlock>{`
interface Person {
    id: number;
    name: string;
    age: number;

    sayHello: () => string; // a function that returns a string
    faveFood?: string; // optional property
}
            `}</CodeBlock>

            <p>We can use that interface by treating it as a type.</p>

            <CodeBlock>{`
const person: Person = {
    id: 1,
    name: "John",
    age: 25,
    sayHello: () => "Hello!",
    faveFood: "Pizza"
};
            `}</CodeBlock>

            <p>
                An interface is just defining a structure. So if a structure just so happens to
                match that interface, then we can use that value.
            </p>

            <CodeBlock>{`
cosnt person = {
    id: 1,
    name: "John",
    age: 25,
    sayHello: () => "Hello!",
    faveFood: "Pizza"
};

sayHelloTo(person);
// this works even though person isn't explicitly typed as a Person

function sayHelloTo(person: Person) {
    console.log(person.sayHello());
}
            `}</CodeBlock>

            <QuizDiv>
                <FillInTheBlank
                    question="Add the missing field for the interface below."
                    answer="year?: number"
                    hint="Add a question mark to make it optional."
                    explaination="The year property is optional."
                    code={`
interface Car {
    make: string;
    model: string;
    ____; // What's missing?
}

const car: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2003;
};

const car2: Car = {
    make: "Honda",
    model: "Civic",
};
                `}
                />
            </QuizDiv>
        </>
    );
});
