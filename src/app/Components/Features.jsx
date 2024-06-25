"use client";
import { featuresData } from "../data/features";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Features() {
	return (
		<section id="Features" className="bg-[#e2cbb0]">
			<img src="/wave.svg" alt="wave" />
			<div
				className={
					"px-5 md:px-8 lg:px-10 pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
				}>
				{featuresData.map((feature, index) => (
					<Reveal>
						<motion.div
							key={index}
							whileHover={{
								y: -10,
								backdropFilter: "blur(5px)",
								cursor: "default",
							}}>
							<div className="mb-5">{feature.icon}</div>
							<div>
								<h2 className="text-2xl font-bold mt-4 lg:mt-0">
									{feature.title}
								</h2>
								<p className="text-lg mt-2">{feature.description}</p>
							</div>
						</motion.div>
					</Reveal>
				))}
			</div>
		</section>
	);
}
