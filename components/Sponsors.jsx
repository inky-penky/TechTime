import Image from "next/image"
import Zoom from "../public/vectors/svg/Zoom svg.svg"
import Slack from "../public/vectors/svg/Slack.svg"
import Monday from "../public/vectors/svg/monday.com svg.svg"
import Dropbox from "../public/vectors/svg/Dropbox svg.svg"
import Stripe from "../public/vectors/svg/Stripe.svg"



const Sponsors = () => {
    return (
        <div className="p-[1.5rem] bg-[#CCDBF0] w-screen flex justify-center gap-12 items-center">
            <Image src={Zoom} width={95} alt="zoom" />
            <Image src={Stripe} width={80} alt="stripe" />
            <Image src={Monday} width={150} alt="monday.com" />
            <Image src={Slack} width={100} alt="slack" />
            <Image src={Dropbox} width={120} alt="dropbox" />
        </div>
    )
}


export default Sponsors