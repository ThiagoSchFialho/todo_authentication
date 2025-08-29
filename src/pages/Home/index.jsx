import { useEffect, useState } from "react";
import { useDb } from "../../hooks/useDb";
import Task from "../../components/Task/Task";
import CategoryMenuItem from "../../components/categoryMenuItem/CategoryMenuItem";
import CategoryForm from "../../components/CategoryForm/CategoryForm";
import AddTaskForm from "../../components/AddTaskForm/AddTaskForm";
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
    AddTask,
    AddTaskImg
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
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [isDeletingCategory, setIsDeletingCategory] = useState(false);

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
                                    category={category}
                                    setCurrentCategory={() => setCurrentCategory(category.title)}
                                    isDeletingCategory={isDeletingCategory}
                                    setIsDeletingCategory={setIsDeletingCategory}
                                    fetchCategories={fetchCategories}
                                    fetchTasks={fetchTasks}
                                />
                            ))}

                            {isAddingCategory ? (
                                <CategoryForm fetchCategories={fetchCategories} setIsAddingCategory={setIsAddingCategory} />
                            ) : (
                                <>
                                    <CategoryItemContainer onClick={() => setIsAddingCategory(true)}>
                                        <img src="/add.svg" alt="add"/>
                                        <CategoryItem>Adicionar categoria</CategoryItem>
                                    </CategoryItemContainer>
                                    <CategoryItemContainer onClick={() => setIsDeletingCategory(!isDeletingCategory)}>
                                        <img src="/delete.svg" alt="add"/>
                                        <CategoryItem>{isDeletingCategory ? "Cancelar" : "Excluir categoria"}</CategoryItem>
                                    </CategoryItemContainer>
                                </>
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

                    <AddTask onClick={() => setIsAddingTask(true)}>
                        <AddTaskImg src="/add_task.svg" alt="Adicionar tarefa"/>
                    </AddTask>

                    {selectedTask && (
                        <TaskDescription categories={categories} task={selectedTask} fetchTasks={fetchTasks} />
                    )}
                </ListContainer>

                {isAddingTask && (
                    <AddTaskForm categories={categories} task={selectedTask} fetchTasks={fetchTasks}/>
                )}

            </MainContainer>
        </>
    )
}

export default Home;