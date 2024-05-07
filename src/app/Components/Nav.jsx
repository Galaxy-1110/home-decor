"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
	const [hovered, setHovered] = useState(null);
	return (
		<nav className="fixed top-0 bg-black opacity-75 w-full md:px-7 px-1 py-0 z-50">
			<div className="flex justify-between items-center align-middle px-8 py-6">
				<div className="flex items-center ">
					<Image
						src="/logo.jpg"
						alt="Brew Haven"
						className="rounded-full"
						width={54}
						height={54}
					/>
				</div>
				<div
					className="flex items-center space-x-12 "
					onMouseLeave={() => setHovered(null)}>
					{[
						{ name: "Home", link: `${usePathname() == "/" ? "#top" : "/"}` },
						{ name: "Products", link: "/#Products" },
					].map((item, index) => {
						return (
							<Link
								key={index}
								href={item.link}
								className="text-white cursor-pointer relative h-full text-l md:text-xl"
								onMouseOver={() => {
									setHovered(index);
								}}
								onMouseLeave={() => setHovered(index)}>
								{item.name}
								<AnimatePresence>
									{index === hovered && (
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
									)}
								</AnimatePresence>
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
}
