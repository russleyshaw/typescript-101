import { observer } from "mobx-react";
import { CodeBlock } from "../../components/CodeBlock";
import { useLessonNumber } from ".";

export const Lesson6Page = observer(() => {
    const lessonNum = useLessonNumber();
    return (
        <>
            <h1>Lesson {lessonNum}: Collections</h1>

            <h2>Sets</h2>
            <p>A set is a collection of unique values.</p>
            <CodeBlock language="ts">{`
const emptySet = new Set<number>();

const mySet = new Set<number>([1, 2, 3, 4]);
mySet.add(1); // No effect
mySet.add(5); // 5 is added
mySet.delete(1); // 1 is removed
mySet.has(1); // false
mySet.values(); // [2, 3, 4, 5]
mySet.size; // 4
mySet.clear(); // Set is now empty
`}</CodeBlock>
            <p>
                <strong>Set vs Array</strong>
            </p>
            <p>
                You should use a Set when duplication of data would not make sense and order is not
                important and you expect insertions and deletions to happen regularly. For example,
                keeping track of who has accessed a document can be performed by always adding the
                user to the set when they access it.
            </p>

            <h2>Maps</h2>
            <p>A map is a collection of key/value pairs.</p>
            <CodeBlock language="ts">{`
const emptyMap = new Map<string, number>();

const myMap = new Map<string, number>([
    ["a", 1],
    ["b", 2],
    ["c", 3],
    ["d", 4],
]);

myMap.set("e", 5); // e is added
myMap.delete("a"); // a is removed
myMap.has("a"); // false
myMap.get("b"); // 2
myMap.set("b", 100); // b is updated
myMap.keys(); // ['b', 'c', 'd', 'e']
myMap.values(); // [100, 3, 4, 5]
myMap.size; // 4
myMap.clear(); // Map is now empty
`}</CodeBlock>
            <p>
                <strong>Map vs Object</strong>
            </p>
            <p>
                You should use a Map when you need to store key/value pairs and the keys are not
                always strings. Use objects for structure and use maps for data. Use objects if you
                know all possible keys ahead of time. Use maps if you don't know all possible keys
                ahead of time.
            </p>
        </>
    );
});
