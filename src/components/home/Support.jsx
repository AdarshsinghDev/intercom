import React from "react";
import Section from "../ui/Section";
import supportImg1 from "../../assets/img/supportImg1.png";
import supportImg2 from "../../assets/img/supportImg2.png";
import TrueCommerce from "../../assets/img/TrueCommerce.png";
import supportUser from "../../assets/img/supportUser.png";
import supportTopBottomCardsImg1 from "../../assets/img/supportTopBottomCardsImg1.png";
import supportTopBottomCardsImg2 from "../../assets/img/supportTopBottomCardsImg2.png";
import supportTopBottomCardsImg3 from "../../assets/img/supportTopBottomCardsImg3.png";

import supportTopCardsImg1 from "../../assets/img/supportTopCardsImg1.png";
import supportTopRightCardsImg1 from "../../assets/img/supportTopRightCardsImg1.png";
import supportTopRightCardsImg2 from "../../assets/img/supportTopRightCardsImg2.png";

const Support = () => {
  return (
    <Section
      variant="secondary"
      labelBgGradient="#fbd482"
      labelBgGradient2="#feefd4"
      bgGradient="#fff5e6"
      label="Proactive Support"
      title="Get ahead of known issues and slash support volume"
      description="Resolve customer issues before they contact you. Our proactive support tools cut down
        contact rates while boosting customer satisfaction."
      linkText="Learn more about Proactive Support"
      linkTo="/support"
      mainImg={supportImg1}
      features={[
        "Reduce inbound Volume",
        "increase CSAT",
        "No engineering resource needed",
      ]}
      // topBottomCards={[
      //   {
      //     h2: "Help Center",
      //     p: "Let customers search and browse support articles directly in your product and on the web.",
      //     img: inboxTopBottomCardsImg1,
      //   },
      //   {
      //     h2: "Checklists",
      //     p: "Onboard customers without taking time from your team thanks to contextual and personalized task lists.",
      //     img: inboxTopBottomCardsImg2,
      //   },
      //   {
      //     h2: "Banners",
      //     p: "Inform specific customers of planned changes, events, or service interruptions.",
      //     img: inboxTopBottomCardsImg3,
      //   },
      // ]}
      // topCards={[
      //   {
      //     h2: "Product Tours",
      //     p: "Drive adoption of new features and deepen customer engagement with guided experiences.",
      //     img: inboxTopCardsImg1,
      //   },
      // ]}
      // topRightCards={[
      //   {
      //     h2: "Tooltips",
      //     p: "Add help content directly into your product without engineering resources using our no-code UI",
      //     img: inboxTopRightCardsImg1,
      //   },
      //   {
      //     h2: "Outbound Messages",
      //     p: "Automatically trigger an in-app chat, email, or SMS message when a customer needs help.",
      //     img: inboxTopRightCardsImg2,
      //   },
      // ]}
      brandImg={TrueCommerce}
      quote={
        <>
          Self-service and proactive support have helped us
          <b>reduce inbound conversation volume by 20%</b> over the past two
          years, even as our user base has continued to grow
        </>
      }
      userImg={supportUser}
      userName="Christian Parker"
      userRole="Director of Managed Services,TrueCommerce"
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col lg:flex-row md:flex-row gap-2">
          <div className="bg-gradient-to-t from-[#fffaf2] to-[#fff1da] border border-gray-300 p-4 pb-0 pr-0 rounded-2xl flex flex-col w-[90%] m-auto">
            <h2 className="font-bold text-xl mb-2">Help Centre</h2>
            <p>
              Let customers search and browse support articles directly in your
              product and on the web.
            </p>{" "}
            <div className="w-full mt-6">
              <img src={supportTopBottomCardsImg1} className="w-full" alt="" />
            </div>
          </div>

          <div className="bg-gradient-to-t from-[#fffaf2] to-[#fff1da] border border-gray-300  p-4 pb-0 pr-0 rounded-2xl flex flex-col w-[90%] m-auto">
            <h2 className="font-bold text-xl mb-2">Checklists</h2>
            <p>
              Onboard customers without taking time from your team thanks to
              contextual and personalized task lists.
            </p>{" "}
            <div className="w-full mt-6">
              <img src={supportTopBottomCardsImg2} className="w-full" alt="" />
            </div>
          </div>

          <div className="bg-gradient-to-t from-[#fffaf2] to-[#fff1da] border border-gray-300 p-4 pb-0 pr-0 rounded-2xl flex flex-col w-[90%] m-auto">
            <h2 className="font-bold text-xl  mb-2">Banners</h2>
            <p>
              Inform specific customers of planned changes, events, or service
              interruptions.
            </p>
            <div className="w-full mt-6">
              <img src={supportTopBottomCardsImg3} className="w-full" alt="" />
            </div>
          </div>
        </div>

        <div className="flex gap-2 lg:flex-nowrap  flex-wrap">
          <div className="w-full">
            <div className="flex flex-col gap-2 ">
              <div className="bg-gradient-to-t from-[#fffaf2] to-[#fff1da] border border-gray-300  p-4 pb-0 pr-0 rounded-2xl flex lg:flex-row flex-col justify-between">
                <div className="lg:w-[40%]">
                  {" "}
                  <h2 className="font-bold text-xl  mb-2">Tooltips</h2>
                  <p>
                    Add help content directly into your product without
                    engineering resources using our no-code UI.
                  </p>
                </div>
                <div>
                  <img
                    src={supportTopRightCardsImg1}
                    className="w-full"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-gradient-to-t from-[#fffaf2] to-[#fff1da] border border-gray-300  p-4 pb-0 pr-0 rounded-2xl flex lg:flex-row flex-col justify-between">
                <div className="lg:w-[40%]">
                  <h2 className="font-bold text-xl  mb-2">Outbound Messages</h2>
                  <p>
                    Automatically trigger an in-app chat, email, or SMS message
                    when a customer needs help.
                  </p>
                </div>
                <div>
                  <img
                    src={supportTopRightCardsImg2}
                    className="w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-100 border border-gray-300 w-full rounded-2xl p-4 flex flex-col justify-between">
            <div className="w-[90%]">
              <h2 className="font-bold text-xl mb-2">Products Tours</h2>
              <p>
                Drive adoption of new features and deepen customer engagement
                with guided experiences.
              </p>
            </div>
            <div className="w-full">
              <img src={supportTopCardsImg1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Support;
