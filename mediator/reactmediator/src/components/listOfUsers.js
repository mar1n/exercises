const Listofusers = ({users}) => <div>{users.map((user) => {
    return <p key={user}>{user}</p>
})}</div>;

export default Listofusers;