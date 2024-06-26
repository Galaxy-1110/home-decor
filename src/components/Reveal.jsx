import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Reveal({
	children,
	fullSize = false,
	dislocated = false,
	amount = 0.1,
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: amount });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("shown");
		}
	}, [isInView]);

	return (
		<div
			ref={ref}
			className={"relative " + `${fullSize ? "w-full" : "w-auto"}`}>
			<motion.div
				className="h-auto w-[inherit]"
				variants={{
					hidden: { opacity: 0, y: 75, x: dislocated ? 75 : 0 },
					shown: { opacity: 1, y: 0, x: 0 },
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
