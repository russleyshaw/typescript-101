import { observer } from "mobx-react";
import { styled } from "styled-components";
import { CodeBlock } from "./CodeBlock";
import { Button, ButtonGroup, Callout, Icon, IconName, InputGroup } from "@blueprintjs/core";
import { useState } from "react";

export interface YesNoQuizProps {
    title?: string;
    question: string;
    code?: string;
    answer: "yes" | "no";
    explaination?: string;
    hint?: string;
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

export const YesNoQuiz = observer((props: YesNoQuizProps) => {
    const { question, answer, title, code, explaination, hint } = props;

    const isAnswerYes = answer === "yes";
    const [value, setValue] = useState<boolean | undefined>(undefined);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const errorIntent = error ? "danger" : undefined;
    const successIntent = success ? "success" : undefined;
    const intent = successIntent ?? errorIntent;

    const onValueSubmit = (value: boolean) => {
        setValue(value);
        if (value === isAnswerYes) {
            setError("");
            setSuccess(true);
        } else {
            setError("Incorrect");
            setSuccess(false);
        }
    };

    const myTitle = title ?? "Yes or No";

    const icon: IconName = success ? "tick-circle" : error ? "cross-circle" : "info-sign";

    return (
        <RootDiv>
            <HeadingDiv>
                <Icon icon={icon} intent={intent} />
                <h3>{myTitle}</h3>
            </HeadingDiv>
            <div>{question}</div>

            {code && <CodeBlock language="typescript">{code}</CodeBlock>}

            {error && hint && (
                <Callout intent="warning" icon="info-sign">
                    Hint: {hint}
                </Callout>
            )}

            {success && !explaination && <Callout intent="success">Success</Callout>}
            {success && explaination && <Callout intent="success">Reason: {explaination}</Callout>}
            <ButtonGroup fill>
                <Button
                    intent={value === true ? intent : undefined}
                    text="Yes"
                    onClick={() => onValueSubmit(true)}
                />
                <Button
                    intent={value === false ? intent : undefined}
                    text="No"
                    onClick={() => onValueSubmit(false)}
                />
            </ButtonGroup>
        </RootDiv>
    );
});
