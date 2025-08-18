import {
    TaskContainer,
    TaskCheckBox,
    TaskContentContainer,
    TaskInfo,
    TaskTitle,
    TaskCategory,
    TaskDateTime,
} from './styles';

const Task = ({ task }) => {
    return (
        <TaskContainer>
            <TaskCheckBox src={task.done ? "/check_box_checked.svg" : "/check_box.svg"}/>
            <TaskContentContainer>
                <TaskTitle>{task.title}</TaskTitle>
                <TaskInfo>
                    <TaskCategory>{task.category}</TaskCategory>
                    <TaskDateTime>
                        {task.date}{task.time ? ` - ${task.time}` : ""}
                    </TaskDateTime>
                </TaskInfo>
            </TaskContentContainer>
        </TaskContainer>
    )
}

export default Task;