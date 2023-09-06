import { observer } from "mobx-react";
import { CodeBlock } from "../../components/CodeBlock";
import { HTMLTable } from "@blueprintjs/core";
import { useLessonNumber } from ".";
import { Code, ColDiv } from "../../components/styled";

export const ControlFlowPage = observer(() => {
    const lessonNum = useLessonNumber();
    return (
        <>
            <h1>Lesson {lessonNum}: Control Flow & Truthiness</h1>
            <h3>Control Flow</h3>
            <p>
                <Code>if</Code> statements allow for branching. The <Code>else</Code> statement is
                optional.
            </p>
            <CodeBlock>{`
let foo = 1;
if (foo === 1) {
    console.log("Foo is 1");
}

if (foo === 2) {
    console.log("Foo is 2");
} else {
    console.log("Foo is not 2");
}
`}</CodeBlock>
            <p>
                The ternary operator (<Code>?</Code>) is a shorthand for <Code>if/else</Code>{" "}
                statements.
            </p>
            <CodeBlock>{`
const foo = 1;

const bar = foo === 1 ? "Foo is 1" : "Foo is not 1";
console.log(bar); // Foo is 1
`}</CodeBlock>
            <h3>Truthiness</h3>
            <p>
                Truthiness is the concept of statements evaluating as true or false in conditionals.
                Things other than explicit booleans can evaluate as true or false.
            </p>
            <HTMLTable bordered>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Truthy</th>
                        <th>Falsy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Code>number</Code>
                        </td>
                        <td>
                            <ColDiv>
                                <Code>n != 0</Code>
                                <Code>12</Code>
                                <Code>-34</Code>
                            </ColDiv>
                        </td>
                        <td>
                            <Code>n == 0</Code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Code>string</Code>
                        </td>
                        <td>
                            <ColDiv>
                                <Code>str.length &gt; 0</Code>
                                <Code>"abcd"</Code>
                            </ColDiv>
                        </td>
                        <td>
                            <Code>""</Code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Code>null</Code>
                        </td>
                        <td> </td>
                        <td>
                            <Code>null</Code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Code>undefined</Code>
                        </td>
                        <td> </td>
                        <td>
                            <Code>undefined</Code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Code>object</Code>
                        </td>
                        <td>
                            <ColDiv>
                                <Code>obj != null</Code>
                                <Code>{`{}`}</Code>
                            </ColDiv>
                        </td>
                        <td>
                            <Code>null</Code>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Code>array</Code>
                        </td>
                        <td>
                            <ColDiv>
                                <Code>arr.length &gt; 0</Code>
                                <Code>[]</Code>
                            </ColDiv>
                        </td>
                        <td> </td>
                    </tr>
                </tbody>
            </HTMLTable>
            Because of this, we sometimes need to be careful when comparing values. For example, if
            a value `foo` is `number | null`, if we evaluated `if(foo)`, it would evaluate as `true`
            if foo was any non-zero value; however, we may want to check if `foo` is not `null` or
            `undefined`. We can do this by using the `!=` operator.
            <CodeBlock>{`
printTruthy(1); // 1 is truthy
printTruthy(0); // 0 is falsy
printTruthy(-1); // -1 is truthy

printTruthy(""); // "" is falsy
printTruthy("foo"); // "foo" is truthy

printTruthy(null); // null is falsy
printTruthy(undefined); // undefined is falsy

printTruthy({}); // {} is truthy
printTruthy([]); // [] is truthy

let foo: number | null = 1;
printTruthy(foo); // 1 is truthy

foo = null;
printTruthy(foo); // null is falsy
foo = 0;
printTruthy(foo); // 0 is falsy

function printTruthy(value: any) {
    if (value) {
        console.log(\`\${value} is truthy\`);
    } else {
        console.log(\`\${value} is falsy\`);
    }
}
`}</CodeBlock>
            <h3>Null, Undefined, Nullish</h3>
            <p>
                Because JavaScript has both `null` and `undefined`, we have the concept of
                `nullish`, which is anything that is either `null` or `undefined`. We can use the
                `foo == null` expression to check if a value is `nullish`.
            </p>
            <CodeBlock>{`
type Nullish = null | undefined;

printNullish(1); // 1 is not nullish
printNullish(0); // 0 is not nullish

printNullish(""); // "" is not nullish
printNullish("foo"); // "foo" is not nullish

printNullish(null); // null is nullish
printNullish(undefined); // undefined is nullish

function printNullish(value: Nullish) {
    if (value == null) {
        console.log(\`\${value} is nullish\`);
    } else {
        console.log(\`\${value} is not nullish\`);
    }
}
`}</CodeBlock>
        </>
    );
});
