import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import tasksApi from "apis/tasks";
import Container from "components/Container";
import PageLoader from "components/PageLoader";

const ShowTask = () => {
  const { slug } = useParams();
  const [taskDetails, setTaskDetails] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await tasksApi.show(slug);
        setTaskDetails(response.data.task);
      } catch (error) {
        logger.error(error);
      } finally {
        setPageLoading(false);
      }
    };
    fetchTaskDetails();
  }, [slug]);

  if (pageLoading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <h1 className="text-bb-gray border-b border-bb-gray mt-3 mb-3 pb-3 pl-3 text-lg leading-5">
        <span>Task Title : </span> {taskDetails?.title}
      </h1>
    </Container>
  );
};

export default ShowTask;
