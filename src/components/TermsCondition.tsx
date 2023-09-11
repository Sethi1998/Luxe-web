import Layout from "./common/Layout";
import Container from "./common/Container";

export const TermsCondition = () => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center capatalise">
            Terms&Condition
          </h2>
          <h3>Thank you for your interest in Luxe Ride!</h3>
          <p className="text-secondary">
            PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN
            IMPORTANT INFORMATION THAT AFFECTS YOUR RIGHTS, REMEDIES, AND
            OBLIGATIONS. THEY INCLUDE AN AGREEMENT TO ARBITRATE (UNLESS YOU OPT
            OUT). THESE TERMS ALSO INCLUDE A PROHIBITION OF CLASS AND
            REPRESENTATIVE ACTIONS AND NON-INDIVIDUALIZED RELIEF FOR ALL MATTERS
            IN EITHER COURT OR ARBITRATION, VARIOUS LIMITATIONS AND EXCLUSIONS,
            A CLAUSE THAT GOVERNS THE JURISDICTION, VENUE, AND GOVERNING LAW OF
            DISPUTES, EXCEPT WHERE PROHIBITED, AND OBLIGATIONS TO COMPLY WITH
            APPLICABLE LAWS AND REGULATIONS.
          </p>
        </div>
      </Container>
    </Layout>
  );
};
