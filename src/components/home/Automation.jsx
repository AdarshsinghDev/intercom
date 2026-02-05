import automateImg from "../../assets/img/automateCleanshot.png";
import zilch from "../../assets/img/zilch.png";
import automationUser from "../../assets/img/automation-user.png";
import automateTopCardImg1 from "../../assets/img/automateTopCardImg1.png";
import automateTopCardImg2 from "../../assets/img/automateTopCardImg2.png";
import topBottomCardImg1 from "../../assets/img/topBottomCardImg1.png";
import topBottomCardImg2 from "../../assets/img/topBottomCardImg2.png";
import topBottomCardImg3 from "../../assets/img/topBottomCardImg3.png";
import Section from "../ui/Section";
const Automation = () => {
  return (
    <Section
      variant="primary"
      labelBgGradient="#63affe"
      labelBgGradient2="#c0defd"
      labelTextColor="#003193"
      bgGradient="#e5f1fe"
      label="automation"
      title="Automate conversations with the power of AI"
      description="Reduce support volumes and increase customer satisfaction in minutes with Intercom’s AI-powered chatbots and automation tools."
      linkText="Learn more about automation"
      linkTo="/automation"
      automationMainImg={automateImg}
      // mainImg={automateImg}
      features={[
        "Unlock the best AI-powered customer service tools in minutes",
        "Lower your costs with more efficient support teams",
        "ZScale support without sacrificing customer experience",
      ]}
      topCards={[
        {
          h2: "Fin",
          p: "Our AI-powered bot automatically and accurately answers support questions with zero training required.",
          img: automateTopCardImg1,
        },
        {
          h2: "Workflows",
          p: "Easily build powerful no-code automations with bots, triggers,conditions, and rules—all in one place.",
          img: automateTopCardImg2,
        },
      ]}
      topBottomCards={[
        {
          h2: "AI-powered Inbox",
          p: "Instantly generate replies, recap conversations for other agents, and create new help articles.",
          img: topBottomCardImg1,
        },
        {
          h2: "Article suggestions",
          p: "mmediately recommend helpful content with machine learning—directly in your product",
          img: topBottomCardImg2,
        },
        {
          h2: "Conversation topics",
          p: "Better understand your customers with AI- powered analysis of support conversations.",
          img: topBottomCardImg3,
        },
      ]}
      brandImg={zilch}
      quote={
        <>
          Our bot deflection rate with our previous customer service solution
          was 5–10%. With Intercom, we achieved
          <b> 65% bot deflection within just one week</b> of going live.
        </>
      }
      userImg={automationUser}
      userName="Stuart Sykes"
      userRole="VP of Service Operations, Zilch"
    />
  );
};

export default Automation;
