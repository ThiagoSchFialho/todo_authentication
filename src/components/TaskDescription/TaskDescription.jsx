import Switch from "../../components/Switch/Switch";
import { useDb } from "../../hooks/useDb";
import {
    Description,    
    EditToggle,
    DescriptionTitle,
    DescriptionInfo,
    DescritionTitle2,
    DescriptionText,
    FooterOptions,
    FooterOptionsList,
    FooterOptionsItem
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

const TaskDescription = ({ task, fetchTasks }) => {
    const { deleteTask } = useDb();

    const handleDeleteTask = async (task) => {
        const confirm = window.confirm(`Tem certeza que deseja excluir a tarefa ${task.title}?`);

        if (!confirm) {
            return false;
        }

        const result = await deleteTask(task.id);
        if (result.sucess) {
            fetchTasks();
        }
    }

    return (
        <Description>
            <EditToggle>
                <Switch/>
            </EditToggle>
            <DescriptionTitle>{task.title}</DescriptionTitle>
            <DescriptionInfo><strong>Data:</strong> {getDate(task.date)}</DescriptionInfo>
            <DescriptionInfo><strong>Horário:</strong> {task.time ? task.time.substring(0, 5) : 'Indefinido'}</DescriptionInfo>
            <DescritionTitle2>Descrição</DescritionTitle2>
            <DescriptionText>{task.description || 'Nenhuma descrição'}</DescriptionText>
            <FooterOptions>
                <FooterOptionsList>
                    <FooterOptionsItem onClick={() => handleDeleteTask(task)}>Excluir tarefa</FooterOptionsItem>
                </FooterOptionsList>
            </FooterOptions>
        </Description>
    )
}

export default TaskDescription;