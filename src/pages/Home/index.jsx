import { useEffect, useState } from "react";
import { useDb } from "../../hooks/useDb";
import Task from "../../components/Task/Task";
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
    Description,
    DescriptionTitle,
    DescriptionInfo,
    DescritionTitle2,
    DescriptionText
} from "./styles"

const Home = () => {
    const userId = localStorage.getItem('userId');
    const { getTasks } = useDb();
    const [tasks, setTasks] = useState();

    useEffect(() => {
        const fetchTasks = async () => {
            const tasks = await getTasks(userId);
            setTasks(tasks);
        };

        fetchTasks();
    }, []);

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
                        <ListTitle>Todas as categorias</ListTitle>
                        {tasks && tasks.length > 0 ? (
                            <>
                                {tasks.map((task) => (
                                    <Task key={task.id} task={task} />
                                ))}
                            </>
                        ) : (
                            <p>Nenhuma tarefa encontrada.</p>
                        )}
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