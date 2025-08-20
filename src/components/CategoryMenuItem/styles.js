import styled from "styled-components";

export const CategoryItemContainer = styled.li`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    
    &:last-child span {
        font-weight: 400;
        margin: 10px 0;
    }
`;

export const CategoryItem = styled.span`
    font-weight: 500;
    font-size: 15pt;
`;