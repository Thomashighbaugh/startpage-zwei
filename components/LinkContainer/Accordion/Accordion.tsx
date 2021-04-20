import React, { PropsWithChildren, useEffect, useState } from 'react';
import styled from "@emotion/styled";

const StyledAccordionContainer = styled.div`
    margin-left: 30px;
    display:flex;
    width:calc(40% - 120px - 80px);
`;

export const AccordionContainer = (props: PropsWithChildren<{}>) => {
    return <StyledAccordionContainer>
        {props.children}
    </StyledAccordionContainer>
}

const StyledAccordionGroup = styled.div`
    height: 400px;
    display: flex;
    padding: 0 10px;
    flex-direction: row;

`;

const AccordionContent = styled.div< { width: number }>`
    height: 100%;
    width: ${({ width }) => width + "px"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    transition:.3s;
`;

const AccordionTitleWrapper = styled.button< { active: boolean }>`
    padding: 0;
    background-color: var(--bg-color);
    border: 1px solid var(--accent-color2);
    height: 100%;
    width: 90px;
    border-radius:25px;
    cursor: ${({ active }) =>
        active ? "default" : "pointer"
    };
    color: ${({ active }) =>
        active ? "var(--bg-color)" : "var(--accent-color)"
    };
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    border-radius:25px;
    position: relative;
    ::before {
        content: "";
        border-radius:25px;

        position: absolute;
        bottom: 0px;
        width: 100%;
        height: ${({ active }) => active ? "400px" : "0"};
        background-color: var(--accent-color2);
        transition:  ${({ active }) => active ? "1s" : ".5s"};
    }
    :hover, :focus{
        color:var(--bg-color);
        outline: none;
        ${({ active }) => !active && `
            ::before {
                height: 80%;
                color: var(--bg-color)
            }

            }
        `}
    }

 

    };
`;

const AccordionTitle = styled.h1< { title: string, active: boolean }>`
    transform: rotate(90deg);
    min-width: max-content;
    transition: .5s;
    letter-spacing: 10px;
    font-size:2.62rem;
    ::active{
        color: var(--bg-color)

    }

`;

type groupProps = PropsWithChildren<{
    active: boolean,
    title: string,
    onClick: () => void,
}>

export const AccordionGroup = ({ active, title, children, onClick }: groupProps) => {
    const [contentWidth, setContentWidth] = useState(active ? 500 : 0);
    let parent: HTMLElement;
    useEffect(() => {
        if (parent && active) {
            setContentWidth(
                parent.clientWidth - (parent.children.length * 113) - 3
            );
        } else {
            setContentWidth(0);
        }
    }, [active])

    return <StyledAccordionGroup ref={elem => parent = elem?.parentElement as HTMLElement}>
        <AccordionTitleWrapper  active={active} onClick={onClick} tabIndex={active ? -1 : undefined}>
            <div className={"wave"} />
            <AccordionTitle className="font-black hover:text-gray-900" active={active} title={title}>
                {title}
            </AccordionTitle>
        </AccordionTitleWrapper>
        <AccordionContent width={contentWidth} aria-hidden={!active || undefined}>
            {children}
        </AccordionContent>
    </StyledAccordionGroup>
}
