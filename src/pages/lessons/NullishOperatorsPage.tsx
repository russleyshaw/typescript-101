import { observer } from "mobx-react";
import { useLessonNumber } from ".";
import { CodeBlock } from "../../components/CodeBlock";

export const NullishOperatorsPage = observer(() => {
    const lessonNum = useLessonNumber();
    return (
        <>
            <h1>Lesson {lessonNum}: Nullish Operators</h1>

            <h2>Nullish Coalescing Operator</h2>
            <p>In older JavaScript, it was common to use the `||` operator to provide a default.</p>
            <CodeBlock>{`
const foo = 0 || "Default"         // "Default"
const foo = 1234 || "Default"      // 1234
const foo = "" || "Default"        // "Default"
const foo = "hello" || "Default"   // "hello"
const foo = null || "Default"      // "Default"
const foo = undefined || "Default" // "Default"
            `}</CodeBlock>
            <p>
                This has an issue: if <code>bar</code> is <code>0</code> or <code>""</code>, the
                default would also still be applied, even if your intent was to provide a default
                for if the value is <code>null</code> or <code>undefined</code>
            </p>
            <p>
                The nullish coalescing operator (<code>??</code>) is a newer operator that only
                provides a default value if the value is <code>null</code> or <code>undefined</code>
                .
            </p>
            <CodeBlock>{`
const foo = 0 ?? "Default"         // 0
const foo = 1234 ?? "Default"      // 1234
const foo = "" ?? "Default"        // ""
const foo = "hello" ?? "Default"   // "hello"
const foo = null ?? "Default"      // Default
const foo = undefined ?? "Default" // Default
            `}</CodeBlock>

            <h2>Optional Chaining Operator</h2>
            <p>
                An annoyance with dealing with large, nested structures is sometimes you have many
                layers of possibly undefined or null elements.
            </p>
            <CodeBlock>{`
interface Tree {
    value: number;
    left?: Tree;
    right?: Tree;

    print(): void;
}

const root: Tree = { ... }

const val = root.left.right.value;
// Error: Object is possibly 'undefined'.
            `}</CodeBlock>
            <p>
                The optional chaining operator (<code>?.</code>) allows you to access a property or
                return undefined if it doesn't exist. It also works with calling functions.' If the
                function doesn't exist, it will return undefined.
            </p>

            <CodeBlock>{`
const val = root.left?.right?.value;
// val is number | undefined

root.left?.right?.print();
// Calls print if it exists, otherwise does nothing.
            `}</CodeBlock>
        </>
    );
});
