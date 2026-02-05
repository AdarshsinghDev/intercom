import React from "react";
import Section from "../ui/Section";
import messangerImg1 from "../../assets/img/messangerImg1.png";
import messangerCustom1 from "../../assets/img/messangerCustom1.png";
import messangerCustom2 from "../../assets/img/messangerCustom2.png";
import Rebag from "../../assets/img/Rebag.png";
import messangerUser from "../../assets/img/messangerUser.png";
import { MessageSquareMoreIcon, Phone, Smartphone, Table } from "lucide-react";
const Messanger = () => {
  return (
    <Section
      labelBgGradient="#ec916b"
      labelBgGradient2="#f9e1d7"
      labelTextColor="#423100"
      bgGradient="#fbece7"
      variant="secondary"
      label="Messenger and Omnichannel"
      title="Deliver conversational support where it works best for your customers"
      description="Our Messenger supports customers when it's most effective—the moment they need help in your product. And with email, SMS, and more, they can also  pick whatever channel works best."
      linkText="Learn more about Messenger and Omnichannel"
      linkTo="/automation"
      mainImg={messangerImg1}
      features={["Lower support volume", "Increase CSAT", "Zero training bots"]}
      topCards={[
        {
          h2: "Custom Messenger",
          p: "Match your brand",
          img: messangerCustom1,
        },
        { h2: "Configurable", p: "Show/hide features", img: messangerCustom2 },
      ]}
      bottomCards={[
        {
          icon: <Smartphone />,
          h2: "Mobile",
          p: "Bring the Messenger to your mobile app with powerful iOS and Android SDKs.",
        },
        {
          icon: <MessageSquareMoreIcon />,
          h2: "Omnichannel messaging",
          p: "Support customers using their preferred channel whether that’s email, SMS, social, or more.",
        },
        {
          icon: <Phone />,
          h2: "Phone",
          p: "Centralize your phone support using our integrations (with more coming soon).",
        },
        {
          icon: <MessageSquareMoreIcon />,
          h2: "Switch",
          p: "Reduce phone wait times by letting customers switch to messaging mid-call.",
        },
      ]}
      brandImg={Rebag}
      quote={
        <>
          Intercom powers our customer communications, delivering conversions,
          customer engagement, and personalized support.{" "}
          <b>The Messenger is the heart of this strategy.</b>
        </>
      }
      userImg={messangerUser}
      userName="Adarsh Singh"
      userRole="Product Designer"
    />
  );
};

export default Messanger;
