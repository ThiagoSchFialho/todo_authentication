import { useDb } from '../../hooks/useDb';
import {
    TaskContainer,
    TaskCheckBox,
    TaskContentContainer,
    TaskInfo,
    TaskTitle,
    TaskCategory,
    TaskDateTime,
} from './styles';


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

const Task = ({ task, fetch, selectedTask }) => {
    const { updateStatusTask } = useDb();

    const updateDoneStatus = async (id) => {
        const result = await updateStatusTask(id);

        if (result.success) {
            fetch();
        }
    }

    const updateDescription = () => {
        selectedTask();
    }

    return (
        <TaskContainer>
            <TaskCheckBox onClick={() => updateDoneStatus(task.id)} src={task.done ? "/check_box_checked.svg" : "/check_box.svg"}/>
            <TaskContentContainer onClick={() => updateDescription()}>
                <TaskTitle>{task.title}</TaskTitle>
                <TaskInfo>
                    <TaskCategory>{task.category_name || "Sem categoria"}</TaskCategory>
                    <TaskDateTime>
                        {getDate(task.date)}{task.time ? ` - ${task.time.substring(0, 5)}` : ""}
                    </TaskDateTime>
                </TaskInfo>
            </TaskContentContainer>
        </TaskContainer>
    )
}

export default Task;