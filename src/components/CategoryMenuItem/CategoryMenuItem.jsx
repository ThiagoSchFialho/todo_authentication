import { useDb } from '../../hooks/useDb';
import {
    CategoryItemContainer,
    CategoryItem,
    DeleteIcon
} from './styles';

const CategoryMenuItem = ({ category, setCurrentCategory, isDeletingCategory, setIsDeletingCategory, fetchCategories, fetchTasks }) => {
    const { deleteCategory } = useDb();

    const onDelete = async (id) => {
        const confirmed = window.confirm(`Tem certeza que deseja excluir a categoria ${category.title}?`);

        if (!confirmed) return;

        setIsDeletingCategory(false);
        const result = await deleteCategory(id);

        if (result.success) {
            await fetchCategories();
            await fetchTasks();
        }
    }

    return (
        <CategoryItemContainer >
            <CategoryItem onClick={() => setCurrentCategory(category)}>{category.title}</CategoryItem>
            {isDeletingCategory && (
                <DeleteIcon onClick={() => onDelete(category.id)} src='/delete-inline.svg'/>
            )}
        </CategoryItemContainer>
    )
}

export default CategoryMenuItem;