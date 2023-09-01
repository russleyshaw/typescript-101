import { observer } from "mobx-react";

import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";

import { useCallback, useMemo, useState } from "react";
import { styled } from "styled-components";
import { trimLines } from "../lib/string";
import { Button } from "@blueprintjs/core";

export interface CodeBlockProps {
    filename?: string;
    language: string;
    children: string;
}

const RootDiv = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;

    position: relative;
`;

const HeaderDiv = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
`;

export const CodeBlock = observer((props: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    const { children, language } = props;

    const highlighted = useMemo(() => {
        return hljs.highlight(language, trimLines(children)).value;
    }, [children, language]);

    const onCopyClick = useCallback(() => {
        navigator.clipboard.writeText(children);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 5000);
    }, [children]);

    return (
        <RootDiv>
            <HeaderDiv>
                <Button onClick={onCopyClick} text={copied ? "Copied!" : "Copy"} />
            </HeaderDiv>
            <pre>
                <code dangerouslySetInnerHTML={{ __html: highlighted }} />
            </pre>
        </RootDiv>
    );
});
