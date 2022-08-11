import React, { useState, useEffect } from "react";

// import { all, isNil, isEmpty, either } from "ramda";

import usersApi from "apis/users";
import Container from "components/Container";
import PageLoader from "components/PageLoader";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  const fetchUserList = async () => {
    try {
      const response = await usersApi.list();
      setUsers(response.data.users);
      setPageLoading(false);
    } catch (error) {
      logger.error(error);
      setPageLoading(false);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  if (pageLoading) {
    return <PageLoader />;
  }

  return (
    <Container>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.role}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </Container>
  );
};
export default UsersPage;
