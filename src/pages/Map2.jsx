
function User(props){
    return (
        <div>
            <b>{props.user.userName}</b> <span>{props.user.email}</span>
        </div>
    );
}

function UserList(){
    const users = [
        {
            id : 100,
            userName : "test1",
            email : "test@email.com"
        },

        {
            id : 200,
            userName : "test2",
            email : "test2@email.com"
        }
    ];

    return (
        <div>
            <User user={users[0]} />
            <User user={users[1]} />
        </div>
    );
}

export default UserList;