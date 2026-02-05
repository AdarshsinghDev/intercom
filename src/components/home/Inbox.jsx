import Section from "../ui/Section";
import inboxImg from "../../assets/img/inboxImg.png";
import wolt from "../../assets/img/Wolt.png";
import inboxUser from "../../assets/img/inboxUser.png";
import inboxTopCardImg1 from "../../assets/img/inboxTopCardImg1.png";
import topRightCardImg1 from "../../assets/img/topRightCardImg1.png";
import topRightCardImg2 from "../../assets/img/topRightCardImg2.png";
import inboxTopBottomCardImg1 from "../../assets/img/inboxCardImg11.png";
import inboxTopBottomCardImg2 from "../../assets/img/inboxCardImg12.png";
import inboxTopBottomCardImg3 from "../../assets/img/inboxCardImg13.png";
const Inbox = () => {
  return (
    <>
      <Section
        variant="primary"
        labelBgGradient="#8added"
        labelBgGradient2="#c2edf6"
        labelTextColor="#083d48"
        bgGradient="#e5f7fb"
        label="Inbox"
        title="Maximize team productivity with the world's fastest shared Inbox"
        description="Our AI-enhanced Inbox is lightning fast, easy-to-use, and optimized for efficiency."
        linkText="Learn more about Inbox"
        linkTo="/inbox"
        inboxMainImg={inboxImg}
        features={[
          " Faster customer resolutions",
          "Prevent team burnout",
          "Lower your costs",
        ]}
        topCards={[
          {
            h2: "Ticketing",
            p: "Easily collaborate with colleagues to quickly solve complex problems, as well as allow customers to track progress in real time.",
            img: inboxTopCardImg1,
          },
        ]}
        topRightCards={[
          {
            h2: "Configurable",
            p: "Change language, turn on dark mode, save custom views, and more.",
            img: topRightCardImg1,
          },
          {
            h2: "Omnichannel",
            p: "See all your support conversations in one place.",
            img: topRightCardImg2,
          },
        ]}
        topBottomCards={[
          {
            h2: "Multiplayer",
            p: "Collaborate efficiently with teammates in real time thanks to co-presence indicators, notes, and @mentions.",
            img: inboxTopBottomCardImg1,
          },
          {
            h2: "Lightning fast",
            p: "Win time back with powerful macros, nonexistent load times, and simple shortcuts that put your entire Inbox a Cmd+K away",
            img: inboxTopBottomCardImg2,
          },
          {
            h2: "Team management",
            p: "Get more done by optimizing operations with live dashboards, reporting, work management tools, and more.",
            img: inboxTopBottomCardImg3,
          },
        ]}
        brandImg={wolt}
        quote={
          <>
            The thing I noticed most about Inbox is the speed. In a test, we saw
            a<b>15% increase in the number of conversations handled.</b>
          </>
        }
        userImg={inboxUser}
        userName="Pelle Blarke"
        userRole="International Strategy and Operations Manager, Wolt"
      />
    </>
  );
};

export default Inbox;
