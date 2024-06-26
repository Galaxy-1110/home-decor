"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
	const [hovered, setHovered] = useState(null);
	const [isDesktop, setisDesktop] = useState(false);
	const [IconActive, setIconActive] = useState(false);

	useEffect(() => {
		checkWindowSize();
		window.addEventListener("resize", checkWindowSize);
		return () => {
			window.removeEventListener("resize", checkWindowSize);
		};
	}, [isDesktop]);

	const checkWindowSize = () => {
		let windowWidth;
		if (typeof window !== "undefined") {
			windowWidth = window.innerWidth;
		}
		if (windowWidth >= 1028) {
			setisDesktop(true);
		} else {
			setisDesktop(false);
		}
	};

	const navItems = [
		{ name: "Home", link: `${usePathname() == "/" ? "#top" : "/"}` },
		{ name: "Products", link: "/#Products" },
		{ name: "Features", link: "/#Features" },
	];

	return (
		<nav className="fixed top-0 bg-black opacity-75 w-full md:px-7 px-1 py-0 z-50">
			<div className="flex justify-between items-center align-middle px-8 py-5">
				<div className="flex items-center ">
					<Image
						src="/logo.png"
						alt="Brew Haven"
						className="rounded-full"
						width={42}
						height={42}
					/>
				</div>
				{isDesktop ? (
					<div
						className="flex items-center space-x-12 "
						onMouseLeave={() => setHovered(null)}>
						{navItems.map((item, index) => {
							return (
								<Link
									key={index}
									href={item.link}
									className="text-white cursor-pointer relative h-full text-l tracking-wider "
									onMouseOver={() => {
										setHovered(index);
									}}
									onMouseLeave={() => setHovered(index)}>
									{item.name}
									{index === hovered && (
										<AnimatePresence>
											<motion.div
												className="absolute  bg-[#8B4513] left-0 right-0 bottom-0 block h-[2px] w-[100%]"
												exit={{
													opacity: 0,
													transition: { duration: 0.5, delay: 0.2 },
												}}
												layoutId="navbar"
												transition={{
													type: "spring",
													duration: 1,
												}}
											/>
										</AnimatePresence>
									)}
								</Link>
							);
						})}
					</div>
				) : (
					<div>
						<motion.button
							className="relative h-20 w-20 rounded-full z-10 "
							onClick={() => {
								setIconActive((status) => !status);
							}}
							animate={IconActive ? "open" : "close"}>
							<motion.span
								className="absolute h-1 w-10 bg-white"
								style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
								variants={{
									open: {
										rotate: ["0deg", "0deg", "45deg"],
										top: ["35%", "50%", "50%"],
									},
									close: {
										rotate: ["45deg", "0deg", "0deg"],
										top: ["50%", "50%", "35%"],
									},
								}}
							/>
							<motion.span
								className="absolute h-1 w-10 bg-white"
								style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
								variants={{
									open: {
										rotate: ["0deg", "0deg", "-45deg"],
									},
									close: {
										rotate: ["-45deg", "0deg", "0deg"],
									},
								}}
							/>
							<motion.span
								className="absolute h-1 w-4 bg-white"
								style={{
									left: "calc(50% + 10px)",
									bottom: "35%",
									x: "-50%",
									y: "50%",
								}}
								variants={{
									open: {
										rotate: ["0deg", "0deg", "45deg"],
										left: "50%",
										bottom: ["35%", "50%", "50%"],
									},
									close: {
										rotate: ["45deg", "0deg", "0deg"],
										left: "calc(50% + 10px)",
										bottom: ["50%", "50%", "35%"],
									},
								}}
							/>
						</motion.button>

						{IconActive && (
							<div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 backgroundblur flex justify-center items-center">
								<div className="flex flex-col gap-5">
									{navItems.map((item, index) => {
										return (
											<Link
												key={index}
												href={item.link}
												className="text-white cursor-pointer relative h-full text-l tracking-wider font-bold text-xl"
												onClick={() => setIconActive(false)}>
												{item.name}
											</Link>
										);
									})}
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</nav>
	);
}
