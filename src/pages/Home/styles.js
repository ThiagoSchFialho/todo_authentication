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

export const Description = styled.div`
    width: 350px;
    background-color: #F4FAFF;
    margin: 10px;
    padding: 20px;
    padding-right: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px #0060af7c;
`;

export const DescriptionTitle = styled.h1`
    font-size: 16pt;
    margin-bottom: 20px;
`;

export const DescriptionInfo = styled.p`
    margin-bottom: 5px;
`;

export const DescritionTitle2 = styled.h2`
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
`;

export const DescriptionText = styled.p`
    text-indent: 20px;
`;