import { observer } from "mobx-react";
import { styled } from "styled-components";
import { CodeBlock } from "./CodeBlock";
import { Button, Callout, Icon, IconName, InputGroup } from "@blueprintjs/core";
import { useRef, useState } from "react";

const BLANK_TEXT = "____";

function replaceBlankWithText(text: string, replacement?: string) {
    if (!replacement) {
        return text;
    }

    return text.replace(BLANK_TEXT, replacement);
}

export interface FillInTheBlankProps {
    title?: string;
    question: string;
    answer: string;
    hint?: string;
    explaination?: string;
}

const RootDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const HeadingDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;

export const FillInTheBlank = observer((props: FillInTheBlankProps) => {
    const { question, answer, title, hint, explaination } = props;

    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const errorIntent = error ? "danger" : undefined;
    const successIntent = success ? "success" : undefined;
    const intent = successIntent ?? errorIntent;

    const onSubmitClick = () => {
        if (value.trim() === answer.trim()) {
            setError("");
            setSuccess(true);
        } else {
            setError("Incorrect");
            setSuccess(false);
            inputRef.current?.select();
        }
    };

    const onValueChange = (value: string) => {
        setValue(value);
        setError("");
        setSuccess(false);
    };

    const myTitle = title ?? "Fill in the blank";

    const icon: IconName = success ? "tick-circle" : error ? "cross-circle" : "info-sign";

    const onInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmitClick();
        }
    };

    return (
        <RootDiv>
            <HeadingDiv>
                <Icon icon={icon} intent={intent} />
                <h3>{myTitle}</h3>
            </HeadingDiv>
            <CodeBlock language="typescript">{replaceBlankWithText(question, value)}</CodeBlock>

            {error && hint && (
                <Callout intent="warning" icon="info-sign">
                    Hint: {hint}
                </Callout>
            )}

            {success && !explaination && <Callout intent="success">Success</Callout>}
            {success && explaination && <Callout intent="success">Reason: {explaination}</Callout>}

            <InputGroup
                inputRef={inputRef}
                intent={intent}
                onKeyDown={onInputKeyPress}
                value={value}
                onValueChange={onValueChange}
                placeholder="Enter your answer here"
                rightElement={<Button intent={intent} text="Submit" onClick={onSubmitClick} />}
            />
        </RootDiv>
    );
});
