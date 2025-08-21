import { useState } from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useDb } from "../../hooks/useDb";
import Switch from "../../components/Switch/Switch";
import {
    Description,    
    EditToggle,
    DescriptionTitle,
    DescriptionInfo,
    DescritionTitle2,
    DescriptionText,
    FooterOptions,
    FooterOptionsList,
    FooterOptionsItem,
    Form,
    InputContainer,
    InputTitle,
    DescriptionInfoForm,
    InputDateTime,
    SelectCategory,
    InputDescription,
    SubmitButton
} from './styles';

const validationSchema = Yup.object({

})

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

const TaskDescription = ({ categories, task, fetchTasks }) => {
    const { updateTask, deleteTask } = useDb();
    const [ isEditing, setIsEditing ] = useState(false);

    const handleDeleteTask = async (task) => {
        const confirmed = window.confirm(`Tem certeza que deseja excluir a tarefa ${task.title}?`);

        if (!confirmed) {
            return;
        }

        const result = await deleteTask(task.id);
        if (result.success) {
            fetchTasks();
        }
    }

    const handleUpdateTask = async (values) => {
        console.log(values);
        const result = await updateTask(values);

        if (result.success) {
            await fetchTasks();
            setIsEditing(false);
        }
        window.location.reload()
    }

    console.log(task)
    console.log(categories)
    return (
        <Description>
            <EditToggle>
                <Switch isEditing={isEditing} setIsEditing={setIsEditing}/>
            </EditToggle>
            {isEditing ?
            (
                <>
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
                        onSubmit={handleUpdateTask}
                        validationSchema={validationSchema}
                    >
                    <Form>
                        <InputContainer>
                            <InputTitle type="text" name="title" id="title"/>

                            <DescriptionInfoForm>
                                <strong>Data:</strong>
                                <InputDateTime type="date" name="date" id="date"/>
                            </DescriptionInfoForm>

                            <DescriptionInfoForm>
                                <strong>Horário:</strong>
                                <InputDateTime type="time" name="time" id="time"/>
                            </DescriptionInfoForm>

                            <DescriptionInfoForm>
                                <strong>Categoria:</strong>
                                <SelectCategory component="select" name="category_id" id="category_id">
                                    <option value="">Selecione uma categoria</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.title}
                                        </option>
                                    ))}
                                </SelectCategory>
                            </DescriptionInfoForm>

                            <DescritionTitle2>Descrição</DescritionTitle2>
                            <InputDescription component="textarea" name="description" id="description"/>
                        </InputContainer>
    
                        <SubmitButton type="submit">Salvar</SubmitButton>
                    </Form>
                    </Formik>
                </>
            ) : (
                <>
                    <DescriptionTitle>{task.title}</DescriptionTitle>
                    <DescriptionInfo><strong>Data:</strong> {getDate(task.date)}</DescriptionInfo>
                    <DescriptionInfo><strong>Horário:</strong> {task.time ? task.time.substring(0, 5) : 'Indefinido'}</DescriptionInfo>
                    <DescriptionInfo><strong>Categoria:</strong> {task.category_name}</DescriptionInfo>
                    <DescritionTitle2>Descrição</DescritionTitle2>
                    <DescriptionText>{task.description || 'Nenhuma descrição'}</DescriptionText>
                    <FooterOptions>
                        <FooterOptionsList>
                            <FooterOptionsItem onClick={() => handleDeleteTask(task)}>Excluir tarefa</FooterOptionsItem>
                        </FooterOptionsList>
                    </FooterOptions>
                </>
            )}
        </Description>
    )
}

export default TaskDescription;