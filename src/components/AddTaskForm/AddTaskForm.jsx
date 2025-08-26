import { ErrorMessage, Formik } from "formik";
import * as Yup from 'yup';
import { useDb } from "../../hooks/useDb";
import {
    ModalContainer,
    Form,
    FormFields,
    Label,
    Input,
    FormFieldGroupContainer,
    FormFieldGroup,
    SectionTitle,
    DescriptionInputContainer,
    DescriptionInput,
    ErrorText,
    SubmitButton
} from './styles';

const validationSchema = Yup.object({
  title: Yup.string()
    .required("O título é obrigatório")
    .min(3, "O título deve ter pelo menos 3 caracteres"),

  date: Yup.date()
    .required("A data é obrigatória"),

  category_id: Yup.string()
    .required("A categoria é obrigatória"),

  description: Yup.string()
    .max(500, "A descrição não pode passar de 500 caracteres")
});


const AddTaskForm = ({ categories, fetchTasks }) => {
    const { createTask } = useDb();

    const onAddTask = async (values) => {
        const result = await createTask(values);

        if (result.success) {
            await fetchTasks();
        }
        window.location.reload()
    }

    console.log(categories)

    return (
        <ModalContainer>
            <Formik
                initialValues={{
                    id: "",
                    done: false,
                    title: "",
                    date: "",
                    time: "",
                    category_id: "",
                    description: ""
                }}
                onSubmit={onAddTask}
                validationSchema={validationSchema}
            >
            <Form>
                <FormFields>
                    <FormFieldGroupContainer>
                        <FormFieldGroup>
                            <Label>Tarefa</Label>
                            <Input type="text" name="title" id="title"/>
                            <ErrorMessage name='title' component={ErrorText}/>
                        </FormFieldGroup>

                        <FormFieldGroup>
                            <Label>Categoria</Label>
                            <Input component="select" name="category_id" id="category_id">
                                <option value="">Selecione uma categoria</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.title}
                                    </option>
                                ))}
                            </Input>
                            <ErrorMessage name='category_id' component={ErrorText}/>
                        </FormFieldGroup>
                    </FormFieldGroupContainer>

                    <FormFieldGroupContainer>
                        <FormFieldGroup>
                            <Label>Data</Label>
                            <Input type="date" name="date" id="date"/>
                            <ErrorMessage name='date' component={ErrorText}/>
                        </FormFieldGroup>

                        <FormFieldGroup>
                            <Label>Horário</Label>
                            <Input type="time" name="time" id="time"/>
                        </FormFieldGroup>
                    </FormFieldGroupContainer>

                    <DescriptionInputContainer>
                        <SectionTitle>Descrição</SectionTitle>
                        <DescriptionInput component="textarea" name="description" id="description"/>
                        <ErrorMessage name='description' component={ErrorText}/>
                    </DescriptionInputContainer>
                </FormFields>

                <SubmitButton type="submit">Salvar</SubmitButton>
            </Form>
            </Formik>
        </ModalContainer>
    )
}

export default AddTaskForm;