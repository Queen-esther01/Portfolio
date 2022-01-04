import styled from 'styled-components'


const ButtonComponent = styled.button`
        background: #0071E3;
        padding: 1rem 2rem;
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