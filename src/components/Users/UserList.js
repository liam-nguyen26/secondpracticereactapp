import Card from '../UI/Card';
import styled from 'styled-components';

const StyledList = styled.ul`
    margin: 2rem auto;
    width: 90%;
    max-width: 40rem;

    & ul {
        list-style: none;
        padding: 1rem;
    }

    & li {
        border: 1px solid #ccc;
        margin: 0.5rem 0;
        padding: 0.5rem;
    }
`;

const UserList = (props) => {
    return (
        <Card>
            <StyledList>
                {props.users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </StyledList>
        </Card>
    )  
};

export default UserList;