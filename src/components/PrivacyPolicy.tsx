import Layout from "./common/Layout";
import Container from "./common/Container";
import Link from "next/link";
export const PrivacyPolicy = () => {
  return (
    <Layout>
      <Container>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-center capatalise">
            LuxeRide Privacy Policy
          </h2>
          <h3 className="font-semibold">Privacy Policy for Luxeride</h3>
          <p>
            At Luxeride, accessible from luxeridenow.com, one of our main
            priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by Luxeride and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </p>
          <p>
            Luxeride follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </p>
          <p>
            Like any other website, Luxeride uses "cookies". These cookies are
            used to store information including visitors' preferences, and the
            pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information
          </p>
          <p>
            Google is one of a third-party vendor on our site. It also uses
            cookies, known as DART cookies, to serve ads to our site visitors
            based upon their visit to www.website.com and other sites on the
            internet. However, visitors may choose to decline the use of DART
            cookies by visiting the Google ad and content network Privacy Policy
            at the following URL –
            <Link
              href="https://policies.google.com/technologies/ads"
              className="text-primary"
            >
              https://policies.google.com/technologies/ads
            </Link>
            .
          </p>
          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Luxeride.
          </p>
          <p>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Luxeride, which
            are sent directly to users' browser. They automatically receive your
            IP address when this occurs. These technologies are used to measure
            the effectiveness of their advertising campaigns and/or to
            personalize the advertising content that you see on websites that
            you visit.
          </p>
          <p>
            Note that Luxeride has no access to or control over these cookies
            that are used by third-party advertisers.
          </p>
          <h2 className="font-semibold">Third Party Privacy Policies</h2>
          <p>
            Luxeride's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.{" "}
          </p>

          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.{" "}
          </p>
          <h2 className="font-semibold">Children's Information</h2>

          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>

          <p>
            Luxeride does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </p>

          <h2>Online Privacy Policy Only</h2>

          <p>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collected in Luxeride. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </p>

          <h2 className="font-semibold">Consent</h2>

          <p>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its Terms and Conditions.
          </p>
        </div>
      </Container>
    </Layout>
  );
};
