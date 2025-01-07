import React from "react";
import { Footer, Navbar } from "../../components";
import { PersonalCabinetContainer } from "../../containers";
import { PageContainer } from "./PersonalCabinetPage.styled.ts";

const PersonalCabinetPage: React.FC = (): React.ReactElement => {
  return (
    <PageContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Navbar />
      <PersonalCabinetContainer />
      <Footer />
    </PageContainer>
  );
};

export default PersonalCabinetPage;
