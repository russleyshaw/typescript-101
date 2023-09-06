import { HTMLTable, Code as BpCode } from "@blueprintjs/core";
import { styled } from "styled-components";

export const QuizDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const MyTable = styled(HTMLTable).attrs({ bordered: true })``;

export const Code = styled(BpCode)`
    font-size: 0.75rem;
`;

export const ColDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: start;
`;

export const WrapRowDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
`;
