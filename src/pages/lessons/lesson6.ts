{
    type Nullable<T> = T | null;

    const foo: Nullable<number> = 1;
    const bar: Nullable<number> = null;
    const baz: Nullable<number> = "3"; // Error: Type '"3"' is not assignable to type 'number | null'.

    type Pair<T, U> = [first: T, second: U];
    function makePair<T, U>(first: T, second: U): Pair<T, U> {
        return [first, second];
    }

    const coord = makePair(1, 2);
    const fullName = makePair("John", "Doe");
    const nameAndAge = makePair("John", 42);
}
