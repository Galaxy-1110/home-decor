import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Reveal({ children }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("shown");
		}
	}, [isInView]);

	return (
		<div ref={ref} className="relative w-auto">
			<motion.div
				className="h-auto w-auto"
				variants={{
					hidden: { opacity: 0, y: 75 },
					shown: { opacity: 1, y: 0 },
				}}
				initial="hidden"
				animate={mainControls}
				transition={{
					duration: 1,
					type: "spring",
					damping: 9,
				}}>
				{children}
			</motion.div>
		</div>
	);
}
