import styled from 'styled-components';

export const MainContainer = styled.div`
    min-height: 100vh;
    display: flex;
`;

export const SidePainel = styled.div`
    min-height: 100%;
    width: 300px;
    background-color: #F4FAFF;
    box-shadow: 0px 0px 5px 0px #0060af7c;
    padding: 20px;
`;

export const UserProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 50px;
`;

export const UserProfileImg = styled.img`
    width: 30px;
`;

export const UserName = styled.p`
    font-weight: 600;
`;

export const CategoriesContainer = styled.div`

`;

export const CategoryTitle = styled.h2`
    font-weight: 500;
    font-size: 13pt;
`;

export const Separator = styled.hr`
    height: 1px;
    background-color: #002241;
    border: none;
    margin-top: 5px;
    margin-bottom: 15px;
`;

export const CategoryList = styled.ul`
    list-style: none;
`;

export const CategoryItemContainer = styled.li`
    display: flex;
    align-items: end;
    gap: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    
    &:nth-last-child(2) span {
        font-size: 13pt;
        font-weight: 400;
        margin-top: 10px;
    }

    &:last-child span {
        font-size: 13pt;
        font-weight: 400;
        color: #ca3d3d;
    }

    img {
        width: 25px;
    }
`;

export const CategoryItem = styled.span`
    font-weight: 500;
    font-size: 15pt;
`;

export const ListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const List = styled.div`
    padding: 30px 60px;
`;

export const ListTitle = styled.h1`
    font-size: 20pt;
    margin-bottom: 50px;
`;

export const AddTask = styled.button`
    position: fixed;
    bottom: 10px;
    right: 370px;
    width: 60px;
    height: 60px;
    border-radius: 40%;
    border: none;
    box-shadow: 0px 0px 5px 2px #0060af7c;
    background-color: #1C5D99;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    cursor: pointer;
`;

export const AddTaskImg = styled.img`
    width: 40px;
`;