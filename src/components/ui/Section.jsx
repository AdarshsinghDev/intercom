import React from "react";
import { NavLink } from "react-router-dom";
import { CircleCheck, ArrowRight } from "lucide-react";
import { IoCheckmarkCircle } from "react-icons/io5";
const colorMap = {
  primary: {
    badge: "from-cyan-200 to-cyan-500 text-cyan-800",
    card: "from-blue-100 to-blue-200",
    cardInner: "bg-orange-300",
    bg: "from-blue-100 to-blue-200 text-cyan-200",
    mainBg: "#031526",
  },
  secondary: {
    badge: "from-purple-200 to-purple-500 text-purple-800",
    card: "bg-purple-200",
    cardInner: "bg-purple-300",
  },
};

const Section = ({
  variant = "primary",
  labelBgGradient,
  labelBgGradient2,
  labelTextColor,
  bgGradient,
  label,
  title,
  description,
  linkText,
  linkTo = "#",
  automationMainImg,
  inboxMainImg,
  mainImg,
  features = [],
  topCards = [],
  cardCustomColor,
  topRightCards = [],
  topBottomCards = [],
  bottomCards = [],
  brandImg,
  quote,
  userImg,
  userName,
  userRole,
  children,
}) => {
  const colors = colorMap[variant] || colorMap.primary;

  return (
    <div className="max-w-[90%] m-auto pb-20">
      <div>
        {/* badge */}

        {/* heading */}
        <div
          className="text-center my-8 py-10 "
          style={{
            background: `radial-gradient(
      ellipse at left,
      ${bgGradient} 0%,
      rgba(37,99,235,0.12) 35%,
      rgba(255,255,255,0.9) 90%
    )`,
          }}
        >
          <div
            className="uppercase max-w-fit m-auto px-10 py-2 my-8 font-bold rounded-full text-2xl "
            style={{
              color: labelTextColor,
              background: `linear-gradient(to right, ${labelBgGradient2}, ${labelBgGradient})`,
            }}
          >
            {label}
          </div>
          <div className="lg:max-w-[80%] m-auto">
            <h2 className="mb-6 md:text-4xl lg:text-6xl font-bold leading-tight">
              {title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {linkText && (
        <NavLink
          to={linkTo}
          className="text-blue-600 flex gap-2 justify-center font-bold mt-20"
        >
          {linkText} <ArrowRight />
        </NavLink>
      )}

      {/* main image */}

      {automationMainImg && (
        <div
          className={`bg-gradient-to-r ${colors.bg} w-full mt-15 pt-2 rounded-2xl `}
        >
          <div className={`my-14 w-[30%]  m-auto`}>
            <img
              src={automationMainImg}
              alt={title}
              className="w-full rounded-2xl mb-30"
            />
          </div>
        </div>
      )}

      {mainImg && (
        <div className={`mb-40 w-full pt-2 rounded-2xl`}>
          <div className={`my-14  m-auto`}>
            <img src={mainImg} alt={title} className="w-full rounded-2xl" />
          </div>
        </div>
      )}

      {inboxMainImg && (
        <div className={` w-full  pt-2 rounded-2xl mb-30`}>
          <div className={`my-14  m-auto`}>
            <img
              src={inboxMainImg}
              alt={title}
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      )}
      {/* features */}
      {features.length > 0 && (
        <div className="flex flex-wrap justify-between w-[90%] m-auto my-16">
          {features.map((item, i) => (
            <div key={i} className="w-full md:w-[30%] flex gap-3 items-start items-center justify-center">
              <IoCheckmarkCircle size={32} className="text-blue-600 mt-1" />

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* top cards */}
      {children}

      <div className="flex gap-4">
        {topCards.length > 0 && (
          <div className="flex flex-col md:flex-row gap-10">
            {topCards.map((card, i) => (
              <div
                key={i}
                className={`${cardCustomColor ? `bg-[#21313f]` : `bg-gradient-to-r ${colors.card}`}  pt-5 m-auto pb-0 rounded-2xl pl-0`}
              >
                <div className="mb-6 w-[85%] m-auto">
                  <h2 className="text-xl mb-3 font-bold leading-tight">
                    {card.h2}
                  </h2>
                  <p
                    className={`text-base md:text-lg text-gray-600 leading-relaxed  ${cardCustomColor ? `text-white` : `text-gray-600 `}`}
                  >
                    {card.p}
                  </p>
                </div>
                <div className=" text-right flex">
                  <img
                    src={card.img}
                    alt={card.h2}
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {topRightCards.length > 0 && (
          <div className="flex flex-col gap-4 w-fit ">
            {topRightCards.map((card, i) => (
              <div
                key={i}
                className={`bg-gradient-to-r ${colors.card} flex m-auto rounded-2xl`}
              >
                <div className="mb-1 w-[85%] m-auto p-5">
                  <h2 className=" text-xl mb-3 font-bold leading-tight">
                    {card.h2}
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {card.p}
                  </p>
                </div>
                <div className="w-full">
                  <img
                    src={card.img}
                    alt={card.h2}
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {topBottomCards.length > 0 && (
        <div className="flex flex-col md:flex-row gap-10 my-12">
          {topBottomCards.map((card, i) => (
            <div
              key={i}
              className={`bg-gradient-to-r ${colors.card} pt-5 m-auto pb-0 rounded-2xl pl-0`}
            >
              <div className="mb-6 w-[85%] m-auto">
                <h2 className="font-bold text-xl mb-3">{card.h2}</h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {card.p}
                </p>
              </div>
              <div className=" text-right w-full flex">
                <img
                  src={card.img}
                  alt={card.h2}
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* bottom cards */}
      {bottomCards.length > 0 && (
        <div className="flex flex-wrap gap-5 my-12">
          {bottomCards.map((card, i) => (
            <div
              key={i}
              className={`${cardCustomColor ? `bg-[#21313f]` : `bg-gradient-to-r ${colors.card}`} rounded-2xl p-5 w-full sm:w-[48%] md:w-[23%]`}
            >
              <div
                className={` ${cardCustomColor ? `bg-[#3f4b59]` : `${colors.cardInner}`} w-fit p-3 rounded-xl mb-4`}
              >
                {card.icon}
              </div>
              <h2 className="font-bold text-xl mb-2">{card.h2}</h2>
              <p
                className={`text-base md:text-lg leading-relaxed ${cardCustomColor ? `text-white` : `text-gray-600 `}`}
              >
                {card.p}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* testimonial */}
      {brandImg && (
        <div className="w-full md:w-[70%] m-auto text-center mt-32">
          <img src={brandImg} alt="brand" className="m-auto mb-8" />

          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            "{quote}"
          </p>

          <div className="flex lg:flex-row md:flex-row flex-col justify-center gap-6 mt-8 items-center">
            <img src={userImg} alt={userName} />
            <div className="lg:text-left md:text-left text-center">
              <h2 className="font-bold">{userName}</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {userRole}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section;
