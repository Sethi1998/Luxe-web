import { Inbox } from "@/components/Inbox";
import { Messages } from "@/components/Inbox/messages";
import Container from "@/components/common/Container";
import { Hostlayout } from "@/components/common/Layout/Hostlayout";
import React from "react";

const MessagesPage = () => {
  return (
    <Hostlayout>
      <Container>
        <Inbox />
        <Messages />
      </Container>
    </Hostlayout>
  );
};

export default MessagesPage;
