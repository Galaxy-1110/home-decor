import { TbTools } from "react-icons/tb";
import { MdManageHistory } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { LiaCommentsSolid } from "react-icons/lia";
import { MdEmojiNature } from "react-icons/md";
import { ImTrophy } from "react-icons/im";

export const featuresData = [
	{
		title: "Expert Craftsmanship",
		description:
			"Our skilled artisans take pride in their work, delivering exceptional craftsmanship in every project. Attention to detail is our hallmark, ensuring that each piece meets the highest standards.",
		icon: <TbTools size={42} />,
	},
	{
		title: "Project Management",
		description:
			"We provide comprehensive end-to-end service from initial consultation to final installation, with a commitment to project timelines and punctual delivery.",
		icon: <MdManageHistory size={42} />,
	},
	{
		title: "Customer Support",
		description:
			"Our responsive communication channels and after-sales services ensure that your needs are met promptly and efficiently, even after your purchase.",
		icon: <BiSupport size={42} />,
	},
	{
		title: "Testimonials",
		description:
			"Read positive feedback from our satisfied clients and watch engaging video testimonials to see how we've transformed their spaces.",
		icon: <LiaCommentsSolid size={42} />,
	},
	{
		title: "Sustainability Commitment",
		description:
			"Learn about our green initiatives and eco-friendly products. We are dedicated to sustainable practices and contributing to environmental causes.",
		icon: <MdEmojiNature size={42} />,
	},
	{
		title: "Awards and Recognition",
		description:
			"Discover the industry awards and recognition we've received, as well as features and mentions in notable media outlets.",
		icon: <ImTrophy size={42} />,
	},
];
