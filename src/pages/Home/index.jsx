import { useEffect, useState } from "react";
import { useDb } from "../../hooks/useDb";
import Task from "../../components/Task/Task";
import CategoryMenuItem from "../../components/categoryMenuItem/CategoryMenuItem";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
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

const getDate = (date) => {
    const currentDate = new Date();
    const d = new Date(date);

    const isToday =
        d.getDate() === currentDate.getDate() &&
        d.getMonth() === currentDate.getMonth() &&
        d.getFullYear() === currentDate.getFullYear();

    if (isToday) {
        return 'Hoje';

    } else {
        const day = d.getDate().toString().padStart(2, '0');
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const year = d.getFullYear().toString();

        return `${day}/${month}/${year}`;
    }
}

const Home = () => {
    const userId = localStorage.getItem('userId');
    const { getCategories, getTasks } = useDb();
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedTask, setSelectedTask] = useState();
    const [currentCategory, setCurrentCategory] = useState('Todas as categorias');
    const [isAddingCategory, setIsAddingCategory] = useState(false);

    const fetchTasks = async () => {
        const tasks = await getTasks(userId);
        setTasks(tasks);
        setSelectedTask(tasks[0]);
    };

    const fetchCategories = async () => {
        const category = await getCategories(userId);
        setCategories(category);
    };

    useEffect(() => {
        fetchTasks();
        fetchCategories();
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

                            <CategoryMenuItem
                                key="all"
                                category="Todas" 
                                setCurrentCategory={() => setCurrentCategory("Todas as categorias")}
                            />

                            {categories.map((category) => (
                                <CategoryMenuItem
                                    key={category.id}
                                    category={category.title}
                                    setCurrentCategory={() => setCurrentCategory(category.title)}
                                />
                            ))}

                            {isAddingCategory ? (
                                <CategoryForm fetchCategories={fetchCategories} setIsAddingCategory={setIsAddingCategory} />
                            ) : (
                                <CategoryItemContainer onClick={() => setIsAddingCategory(true)}>
                                    <img src="/add.svg" alt="add"/>
                                    <CategoryItem>Adicionar categoria</CategoryItem>
                                </CategoryItemContainer>
                            )}

                        </CategoryList>
                    </CategoriesContainer>
                </SidePainel>

                <ListContainer>

                    <List>
                        <ListTitle>{currentCategory}</ListTitle>
                        {tasks && tasks.length > 0 ? (
                            <>
                                {tasks.map((task) => (
                                    (currentCategory === 'Todas as categorias' || task.category_name === currentCategory) && (
                                        <Task 
                                            key={task.id} 
                                            task={task} 
                                            fetch={fetchTasks}
                                            selectedTask={() => setSelectedTask(task)}
                                        />
                                    )
                                ))}
                            </>
                        ) : (
                            <p>Nenhuma tarefa encontrada.</p>
                        )}
                    </List>

                    {selectedTask && (
                        <Description>
                            <DescriptionTitle>{selectedTask.title}</DescriptionTitle>
                            <DescriptionInfo><strong>Data:</strong> {getDate(selectedTask.date)}</DescriptionInfo>
                            <DescriptionInfo><strong>Horário:</strong> {selectedTask.time ? selectedTask.time.substring(0, 5) : 'Indefinido'}</DescriptionInfo>
                            <DescritionTitle2>Descrição</DescritionTitle2>
                            <DescriptionText>{selectedTask.description || 'Nenhuma descrição'}</DescriptionText>
                        </Description>
                    )}
                </ListContainer>
            </MainContainer>
        </>
    )
}

export default Home;