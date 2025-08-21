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
    ListTitle
} from "./styles"
import TaskDescription from "../../components/TaskDescription/TaskDescription";

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
                        <TaskDescription categories={categories} task={selectedTask} fetchTasks={fetchTasks} />
                    )}
                </ListContainer>
            </MainContainer>
        </>
    )
}

export default Home;