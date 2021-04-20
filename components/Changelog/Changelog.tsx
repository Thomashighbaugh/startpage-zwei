import React from 'react';
import styled from '@emotion/styled';

import { changelog, ChangelogVersion } from "@data/changelog"
import logo from "@data/pictures/logo.png"

const ChangelogWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    > h1 {
        font-weight: 900;
        font-size: 6rem;
        color: var(--accent-color-2);
    }
    > img {
        width: 180px;
        height: 180px;
    }
`;
const StyledVersion = styled.div`
    max-width: 900px;
    > p {
        margin-bottom: 10px;
    }
`;
const ChangeItem = styled.li`
    white-space: nowrap;
    margin-left: 1.95rem;
`;

export const Changelog = () => {
    return (
        <ChangelogWrapper>
            <img src={logo} alt="logo" />
            <h1 className="text-gray-300 text-6xl font-bold shadows-xl">Zwei</h1>
            { changelog.map((version: ChangelogVersion) => <Version {...version} />)}
        </ChangelogWrapper>)
}

const Version = ({ version, description, changes }: ChangelogVersion) => {
    return <StyledVersion>
        <h2>v{version}</h2>
        {description && <p>{description}</p>}
        {changes && <h3 className="text-4xl ">Changes:</h3>}
        {changes?.map((change) => <ChangeItem>{change}</ChangeItem>)}
    </StyledVersion>
}