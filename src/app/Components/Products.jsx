"use client";
import Link from "next/link";
import data from "../data/products.json";
import Reveal from "@/components/Reveal";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Products() {
	const [hovered, setHovered] = useState(null);
	const [query, setQuery] = useState("");

	const [isDesktop, setisDesktop] = useState(false);
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
	let filteredData = data.filter((product) => {
		return (
			product.name.toLowerCase().includes(query.toLowerCase()) ||
			product.category.toLowerCase().includes(query.toLowerCase())
		);
	});

	let categories = data.map((product) => product.category);
	categories = ["No filter", ...categories];

	const handleCategoryClick = (category) => {
		if (category == "No filter") return setQuery("");
		setQuery(category);
	};

	return (
		<section
			id="Products"
			className=" flex flex-col gap-10 items-center w-full p-5 md:p-14 bg-[#F5E9DB]">
			<h2 className="md:text-5xl text-2xl font-bold">Featured Products</h2>
			<Reveal fullSize amount={isDesktop ? 0.2 : 0.1}>
				<div className="flex flex-1 w-full justify-center gap-5 mb-5 ">
					<input
						type="text"
						placeholder="🔎 | Search Products"
						className="p-2 border border-[#BFAE9E] rounded-lg w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-[#BFAE9E] focus:ring-opacity-50 focus:"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
				<div className="flex md:gap-3 gap-2 mb-4 flex-wrap">
					{categories.map((category, i) => {
						return (
							<motion.button
								key={i}
								className={
									"flex gap-1 cursor-pointer pointer-events-auto justify-center align-middle items-center glass px-2 py-2 text-sm md:text-base md:px-4 md:py-2 text-slate-900"
								}
								whileTap={{
									scale: 0.95,
									color: "#BFAE9E",
									backgroundColor: "#000000",
								}}
								onClick={() => handleCategoryClick(category)}>
								{category}
							</motion.button>
						);
					})}
				</div>
				<div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 "
					onMouseLeave={() => setHovered(null)}>
					{filteredData.length == 0 ? (
						<div>No results found</div>
					) : (
						filteredData.map((product, i) => (
							<Link
								className="relative group block p-2 h-full w-full"
								href={`/products/${product.id}`}
								key={product.id}
								onMouseEnter={() => setHovered(i)}>
								<AnimatePresence>
									{hovered === i && (
										<motion.span
											className="absolute inset-0 h-full w-full bg-[#BFAE9E] block z-10  rounded-2xl"
											layoutId="hoverBackground"
											initial={{ opacity: 0 }}
											animate={{
												opacity: 1,
												transition: { duration: 0.15 },
											}}
											exit={{
												opacity: 0,
												transition: { duration: 0.2, delay: 0.4 },
											}}
											transition={{
												type: "spring",
												stiffness: 60,
												damping: 10,
											}}
										/>
									)}
								</AnimatePresence>
								<motion.div
									className={
										"flex justify-between flex-col h-full gap-5 bg-[#6D583F] p-8 rounded-2xl " +
										" " +
										"overflow-hidden  border border-transparent  group-hover:border-[#BFAE9E] relative z-20"
									}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									layout
									transition={{ duration: 0.5 }}>
									<div className="flex flex-col gap-2">
										<Image
											height={328}
											width={328}
											src={`/${product.image}`}
											alt={product.name}
											className="rounded-lg mb-4 "
										/>
										<h3 className="text-2xl text-[#2E2E2E] font-bold    ">
											{product.name}
										</h3>
										<p>{product.description}</p>
									</div>
									<div className="flex gap-4">
										<Badge>${product.price}</Badge>
										<Badge variant="secondary">{product.category}</Badge>
									</div>
								</motion.div>
							</Link>
						))
					)}
				</div>
			</Reveal>
		</section>
	);
}
