import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

const FooterCTA = () => (
  <div className="text-center mb-24 px-4">
    <h2 className="lg:text-7xl text-3xl font-semibold mb-8">
      Combine automation and <br />
      human support today
    </h2>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Button
        btnText="Start free trial"
        btnType="primaryBtn"
        btnIcon={<ArrowRight />}
      />

      <Button btnText="View demo" btnType="tertiaryBtn"  />
    </div>
  </div>
);

export default FooterCTA;
