import styled from 'styled-components'

const ButtonComponent = styled.button`
    background: #0071E3;
    padding: 0.5rem 1rem;
    border-radius: 6px;
`;

function Button({ children }) {
    return (
        <>
            <ButtonComponent>
                {children}
            </ButtonComponent>
        </>
    );
}

export default Button;