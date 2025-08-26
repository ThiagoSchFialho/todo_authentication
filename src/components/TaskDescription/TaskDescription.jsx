import { useState } from "react";
import { ErrorMessage, Formik } from "formik";
import * as Yup from 'yup';
import { useDb } from "../../hooks/useDb";
import Switch from "../../components/Switch/Switch";
import {
    TaskCard,    
    EditToggleContainer,
    TaskTitle,
    TaskInfo,
    SectionTitle,
    TaskDescriptionText,
    Footer,
    FooterList,
    FooterAction,
    Form,
    FormFields,
    TaskTitleInput,
    FormFieldGroup,
    DateTimeInput,
    CategorySelect,
    DescriptionInput,
    ErrorText,
    SubmitButton
} from './styles';

const validationSchema = Yup.object({
  title: Yup.string()
    .required("O título é obrigatório")
    .min(3, "O título deve ter pelo menos 3 caracteres"),

  category_id: Yup.string()
    .required("A categoria é obrigatória"),

  description: Yup.string()
    .max(500, "A descrição não pode passar de 500 caracteres")
});

const formatDateToDisplay = (date) => {
    const today = new Date();
    const d = new Date(date);

    const isToday =
        d.getDate() === today.getDate() &&
        d.getMonth() === today.getMonth() &&
        d.getFullYear() === today.getFullYear();

    if (isToday) {
        return 'Hoje';
    } else {
        const day = d.getDate().toString().padStart(2, '0');
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const year = d.getFullYear().toString();

        return `${day}/${month}/${year}`;
    }
};

const TaskDescription = ({ categories, task, fetchTasks }) => {
    const { updateTask, deleteTask } = useDb();
    const [isEditing, setIsEditing] = useState(false);

    const onDeleteTask = async (task) => {
        const confirmed = window.confirm(`Tem certeza que deseja excluir a tarefa ${task.title}?`);

        if (!confirmed) return;

        const result = await deleteTask(task.id);
        if (result.success) {
            fetchTasks();
        }
    };

    const onUpdateTask = async (values) => {
        const result = await updateTask(values);

        if (result.success) {
            await fetchTasks();
            setIsEditing(false);
        }
        window.location.reload();
    };

    return (
        <TaskCard>
            <EditToggleContainer>
                <Switch isEditing={isEditing} setIsEditing={setIsEditing}/>
            </EditToggleContainer>

            {isEditing ? (
                <Formik
                    initialValues={{
                        id: task.id,
                        done: task.done,
                        title: task.title || "",
                        date: task.date ? task.date.substring(0, 10) : "",
                        time: task.time ? task.time.substring(0, 5) : "",
                        category_id: task.category_id || "",
                        description: task.description || ""
                    }}
                    onSubmit={onUpdateTask}
                    validationSchema={validationSchema}
                >
                <Form>
                    <FormFields>
                        <TaskTitleInput type="text" name="title" id="title"/>
                        <ErrorMessage name='title' component={ErrorText}/>

                        <FormFieldGroup style={{ marginTop: "20px" }}>
                            <strong>Data:</strong>
                            <DateTimeInput type="date" name="date" id="date"/>
                        </FormFieldGroup>

                        <FormFieldGroup>
                            <strong>Horário:</strong>
                            <DateTimeInput type="time" name="time" id="time"/>
                        </FormFieldGroup>

                        <FormFieldGroup>
                            <strong>Categoria:</strong>
                            <CategorySelect component="select" name="category_id" id="category_id">
                                <option value="">Selecione uma categoria</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.title}
                                    </option>
                                ))}
                            </CategorySelect>
                        </FormFieldGroup>
                        <ErrorMessage name='category_id' component={ErrorText}/>

                        <SectionTitle>Descrição</SectionTitle>
                        <DescriptionInput component="textarea" name="description" id="description"/>
                        <ErrorMessage name='description' component={ErrorText}/>
                    </FormFields>

                    <SubmitButton type="submit">Salvar</SubmitButton>
                </Form>
                </Formik>
            ) : (
                <>
                    <TaskTitle>{task.title}</TaskTitle>
                    <TaskInfo><strong>Data:</strong> {formatDateToDisplay(task.date)}</TaskInfo>
                    <TaskInfo><strong>Horário:</strong> {task.time ? task.time.substring(0, 5) : 'Indefinido'}</TaskInfo>
                    <TaskInfo><strong>Categoria:</strong> {task.category_name}</TaskInfo>
                    <SectionTitle>Descrição</SectionTitle>
                    <TaskDescriptionText>{task.description || 'Nenhuma descrição'}</TaskDescriptionText>
                    <Footer>
                        <FooterList>
                            <FooterAction onClick={() => onDeleteTask(task)}>Excluir tarefa</FooterAction>
                        </FooterList>
                    </Footer>
                </>
            )}
        </TaskCard>
    )
}

export default TaskDescription;
