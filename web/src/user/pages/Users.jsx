import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max",
      image: "https://picsum.photos/200/200",
      pitiks: 3,
    },
    {
      id: "u2",
      name: "Manu",
      image: "https://picsum.photos/200/200",
      pitiks: 2,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
