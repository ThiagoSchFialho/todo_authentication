import {
    MainContainer,
    SidePainel,
    UserProfileContainer,
    UserProfileImg,
    UserName,
    CategoriesContainer,
    CategoryTitle,
    Separator,
    CategoryList,
    CategoryItemContainer,
    CategoryItem,
    ListContainer,
    List,
    ListTitle,
    TaskContainer,
    TaskCheckBox,
    TaskContentContainer,
    TaskInfo,
    TaskTitle,
    TaskCategory,
    TaskDateTime,
    Description,
    DescriptionTitle,
    DescriptionInfo,
    DescritionTitle2,
    DescriptionText
} from "./styles"

const Home = () => {
    return (
        <>
            <MainContainer>
                <SidePainel>
                    <UserProfileContainer>
                        <UserProfileImg src="/userProfile.svg" alt="User Profile" />
                        <UserName>User name</UserName>
                    </UserProfileContainer>

                    <CategoriesContainer>
                        <CategoryTitle>Categorias</CategoryTitle>
                        <Separator/>
                        <CategoryList>
                            <CategoryItemContainer>
                                <img src="/Inbox.svg" alt="inbox"/>
                                <CategoryItem>Todas</CategoryItem>
                            </CategoryItemContainer>

                            <CategoryItemContainer>
                                <img src="/Briefcase.svg"/>
                                <CategoryItem>Trabalho</CategoryItem>
                            </CategoryItemContainer>

                            <CategoryItemContainer>
                                <img src="/Book.svg"/>
                                <CategoryItem>Estudo</CategoryItem>
                            </CategoryItemContainer>

                            <CategoryItemContainer>
                                <img src="/Home.svg"/>
                                <CategoryItem>Casa</CategoryItem>
                            </CategoryItemContainer>

                            <CategoryItemContainer>
                                <img src="/add.svg" alt="add"/>
                                <CategoryItem>Adicionar categoria</CategoryItem>
                            </CategoryItemContainer>
                        </CategoryList>
                    </CategoriesContainer>
                </SidePainel>

                <ListContainer>
                    <List>
                        <ListTitle>Trabalho</ListTitle>
                        <TaskContainer>
                            <TaskCheckBox src="/check_box_checked.svg"/>
                            <TaskContentContainer>
                                <TaskTitle>Reunião com o cliente</TaskTitle>
                                <TaskInfo>
                                    <TaskCategory>Trabalho</TaskCategory>
                                    <TaskDateTime>Hoje - 12:00</TaskDateTime>
                                </TaskInfo>
                            </TaskContentContainer>
                        </TaskContainer>

                        <TaskContainer>
                            <TaskCheckBox src="/check_box.svg"/>
                            <TaskContentContainer>
                                <TaskTitle>Reunião com o cliente</TaskTitle>
                                <TaskInfo>
                                    <TaskCategory>Trabalho</TaskCategory>
                                    <TaskDateTime>10/08/25 - 14:30</TaskDateTime>
                                </TaskInfo>
                            </TaskContentContainer>
                        </TaskContainer>
                    </List>

                    <Description>
                        <DescriptionTitle>Reunião com o cliente</DescriptionTitle>
                        <DescriptionInfo><strong>Data:</strong> Hoje</DescriptionInfo>
                        <DescriptionInfo><strong>Horário:</strong> 12:00</DescriptionInfo>
                        <DescritionTitle2>Descrição</DescritionTitle2>
                        <DescriptionText>Reunião importante com o cliente</DescriptionText>
                    </Description>
                </ListContainer>
            </MainContainer>
        </>
    )
}

export default Home;