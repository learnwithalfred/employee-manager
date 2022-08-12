import React, { useState, useEffect } from "react";

import { all, isNil, isEmpty, either } from "ramda";

import usersApi from "apis/users";
import Container from "components/Container";
import PageLoader from "components/PageLoader";

import UserData from "./UserData";

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

  if (all(either(isNil, isEmpty), [fetchUserList])) {
    return (
      <Container>
        <h1 className="my-5 text-center text-xl leading-5">Mo Users found</h1>
      </Container>
    );
  }

  return (
    <Container>
      <UserData users={users} />
    </Container>
  );
};
export default UsersPage;
