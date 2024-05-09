"use client";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section
			className={
				"min-h-screen isolate relative flex md:text-5xl text-2xl justify-center flex-col gap-10 items-center" +
				" " +
				"bg-[url('/images.jpg')] bg-contain bg-center bg-no-repeat " +
				" " +
				"after:absolute after:z-[-1] after:inset-0 after:opacity-45 after:bg-[#F5E9DB]"
			}>
			<motion.h1
				className="text-white text-center"
				initial={{ scale: 1 }}
				animate={{
					scale: [1.5, 1.1, 1.4],
				}}
				transition={{
					repeat: Infinity,
					duration: 1.4,
					repeatType: "reverse",
					type: "spring",
				}}>
				Welcome to <br></br>
				<motion.span
					variants={{
						shown: { transition: { staggerChildren: 0.1 } },
						hidden: {},
					}}
					initial="hidden"
					animate="shown">
					{"Elevate Home Designs".split(" ").map((word, i) => (
						<span className="inline-block" key={i}>
							{word.split("").map((char, i) => (
								<motion.span
									key={i}
									variants={{
										hidden: { opacity: 0, y: 20, color: "white" },
										shown: { opacity: 1, y: 0, color: "#615344" },
									}}
									className="inline-block">
									{char}
								</motion.span>
							))}
							<span className="inline-block">&nbsp;</span>
						</span>
					))}
				</motion.span>
			</motion.h1>
		</section>
	);
}
