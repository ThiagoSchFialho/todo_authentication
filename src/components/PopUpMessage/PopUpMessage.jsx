import {
    MessageContainer,
    Message
} from './styles';

const PopUpMessage = ({ type, message }) => {
    return (
        <MessageContainer $type={type}>
            <Message $type={type}>{message}</Message>
        </MessageContainer>
    )
}

export default PopUpMessage;