import { Inbox } from "@/components/Inbox";
import { Notifications } from "@/components/Inbox/Notifications";
import Container from "@/components/common/Container";
import { Hostlayout } from "@/components/common/Layout/Hostlayout";
import React from "react";

const NotificationPage = () => {
  return (
    <Hostlayout>
      <Container>
        <Inbox />
        <Notifications />
      </Container>
    </Hostlayout>
  );
};

export default NotificationPage;
