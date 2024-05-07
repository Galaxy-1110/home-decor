"use client";
import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section
			className={
				"min-h-screen isolate relative flex md:text-5xl text-2xl justify-center flex-col gap-10 items-center" +
				" " +
				"bg-[url('https://media.architecturaldigest.com/photos/622a4e512b9c59af16b36cc9/master/w_1600%2Cc_limit/PW%2520STORE-PILLOW%2520SHELF.jpg')] bg-contain bg-center bg-no-repeat " +
				" " +
				"after:absolute after:z-[-1] after:inset-0 after:opacity-55 after:bg-slate-400"
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
										shown: { opacity: 1, y: 0, color: "#F5E9DB" },
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
