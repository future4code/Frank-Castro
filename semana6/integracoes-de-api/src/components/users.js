import React from "react";
import styled from "styled-components";

const UserList = styled.div`

`

const UserListItem = styled.div`

`

const DeleteButton = styled.button`

`

export class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <UserList>
                <h2>Lista de usuarios:</h2>
                    <UserListItem>
                        <DeleteButton>
                            x
                        </DeleteButton>
                    </UserListItem>
                ))
            </UserList>
        );
    }

}