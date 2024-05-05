const Listofusers = ({users, deleteUserfn}) => <div>{users.map((user) => {
    return <p key={user} onClick={() => deleteUserfn(user)}>{user}</p>
})}</div>;

export default Listofusers;