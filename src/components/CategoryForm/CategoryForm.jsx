import { ErrorMessage, Formik } from "formik";
import * as Yup from 'yup';
import { useEffect, useRef, useState } from "react";
import { useDb } from "../../hooks/useDb";
import {
    Form,
    InputContainer,
    Input,
    ErrorText,
    SubmitButton,
    CancelButton
} from './styles';

const validationSchema = Yup.object({
    title: Yup.string().required("O nome da categoria é obrigatório"),
});

const CategoryForm = ({ fetchCategories, setIsAddingCategory }) => {
    const { createCategory } = useDb();
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleCreateCategory = async (values) => {
        setIsLoading(true);
        const result = await createCategory(values);

        if (result.success) {
            await fetchCategories();
            setIsAddingCategory(false)
            setIsLoading(false);
        }
        window.location.reload()
    };

    return (
        <Formik
            initialValues={{ title: '' }}
            onSubmit={handleCreateCategory}
            validationSchema={validationSchema}
        >
            <Form>
                <InputContainer>
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        ref={inputRef}
                    />
                    <ErrorMessage name='title' component={ErrorText}/>
                </InputContainer>
                <SubmitButton type="submit" disabled={isLoading}>
                    {isLoading ? "Adicionando..." : "Adicionar"}
                </SubmitButton>
                <CancelButton onClick={() => setIsAddingCategory(false)}>Cancelar</CancelButton>
            </Form>
        </Formik>
    )
}

export default CategoryForm;
