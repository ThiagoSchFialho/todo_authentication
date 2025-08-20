import {
    CategoryItemContainer,
    CategoryItem
} from './styles';

const CategoryMenuItem = ({ category, setCurrentCategory }) => {
    return (
        <CategoryItemContainer onClick={() => setCurrentCategory(category)}>
            <CategoryItem>{category}</CategoryItem>
        </CategoryItemContainer>
    )
}

export default CategoryMenuItem;