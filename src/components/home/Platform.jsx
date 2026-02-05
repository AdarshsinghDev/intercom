import React from "react";
import Section from "../ui/Section";
import platfromImg1 from "../../assets/img/platformImg1.png";
import platformCustom1 from "../../assets/img/platformCustom1.png";
import platformCustom2 from "../../assets/img/platformCustom2.png";
import godtlevert from "../../assets/img/godtlevert.png";
import platformUser from "../../assets/img/platformUser.png";
import {
  BarChart3,
  CodeSquareIcon,
  Phone,
  MessageSquareMoreIcon,
  ChartColumn,
  ArrowUpSquareIcon,
  EqualApproximately,
} from "lucide-react";
import bottomCurve from "../../assets/img/bottomCurve.png";

const Platform = () => {
  const InnerCustomCard = ({ h2, p, img }) => {
    return (
      <div className="bg-orange-200 p-4 rounded-2xl">
        <div className="mb-6 w-[85%] m-auto">
          <h2 className="font-bold text-xl mb-3">{h2}</h2>
          <p>{p}.</p>
        </div>
        <img src={img} className="w-full" alt="" />
      </div>
    );
  };

  return (
    <div>
      <Section
        label="Platform"
        labelBgGradient="#f2b293"
        labelBgGradient2="#c4e1fc"
        labelTextColor="#423100"
        title="A single, powerful, easy-to-use platform"
        description="Get all your automation, conversations, tickets, customer data, and reporting working together seamlessly. Maximize team performance by connecting all your other tools to our platform"
        linkText="Learn more about the Intercom Platform"
        linkTo="/platform"
        mainImg={platfromImg1}
        features={[
          "Maximize team performance with actionable insights",
          "Stop switching between tools and speed up workflows",
          "See all your data in one place",
        ]}
        cardCustomColor={true}
        topCards={[
          {
            h2: "Reporting",
            p: "Understand and improve the performance of your bots and team with flexible and customizable reports.",
            img: platformCustom1,
          },
          {
            h2: "Customer data",
            p: "View, segment, and filter all your customer data—and model it however works best for your business.",
            img: platformCustom2,
          },
        ]}
        bottomCards={[
          {
            icon: <ChartColumn />,
            h2: "Behavioral data",
            p: "Craft the best customer support experiences using a complete picture of past actions",
          },
          {
            icon: <CodeSquareIcon />,
            h2: "Omnichannel messaging",
            p: "Power bots and workflows with live customer data stored in other tools—no engineering resources required.",
          },
          {
            icon: <EqualApproximately />,
            h2: "Phone",
            p: "Get all your tools working as one—and add more to existing workflows—with 300+ apps.",
          },
          {
            icon: <ArrowUpSquareIcon />,
            h2: "Switch",
            p: "Configure Intercom to work best for you with our easy- to-use APIs and webhooks.",
          },
        ]}
        brandImg={godtlevert}
        quote={
          <>
            We have almost all of our support channels integrated into one
            system, making it easy for us to manage our support, as well as
            <b>
              take a data driven approach to continuously improving our service.
            </b>
          </>
        }
        userImg={platformUser}
        userName="Oda Skuggedal Wilhelmsen"
        userRole="Nordic Customer Service Manager, Godtlevert"
      />
      <img src={bottomCurve} alt="" />
    </div>
  );
};

export default Platform;
