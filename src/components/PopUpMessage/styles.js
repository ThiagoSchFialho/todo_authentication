import styled from 'styled-components';

export const MessageContainer = styled.div`
    position: absolute;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ $type }) => $type === 'error' ? '#E74C3C' : '#7CDF64'};
    padding: 5px 20px;
    border-radius: 5px; 
`;

export const Message = styled.p`
    color: ${({ $type }) => $type === 'error' ? '#470f0b' : '#182E12'};
    font-weight: 700;
    font-size: 14pt;
`;