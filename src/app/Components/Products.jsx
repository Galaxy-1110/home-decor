"use client";
import Link from "next/link";
import data from "../data/products.json";
import Reveal from "@/components/Reveal";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Products() {
	const [hovered, setHovered] = useState(null);
	const [query, setQuery] = useState("");

	let filteredData = data.filter((product) => {
		return (
			product.name.toLowerCase().includes(query.toLowerCase()) ||
			product.category.toLowerCase().includes(query.toLowerCase())
		);
	});

	const styledbtn = `p-2 border border-[#BFAE9E] rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-[#BFAE9E] focus:ring-opacity-50 focus:ring-2 focus:ring-[#BFAE9E]  backdrop-blur-xl transition-all`;
	const categories = data.map((product) => product.category);
	return (
		<section
			id="Products"
			className=" flex flex-col gap-10 items-center w-full p-5 md:p-14 bg-[#F5E9DB]">
			<h2 className="md:text-5xl text-2xl font-bold">Featured Products</h2>
			<Reveal fullSize>
				<div className="flex flex-1 w-full justify-center gap-5 mb-5 ">
					<input
						type="text"
						placeholder="🔎 | Search Products"
						className="p-2 border border-[#BFAE9E] rounded-lg w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-[#BFAE9E] focus:ring-opacity-50 focus:"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
				<div className="flex gap-6 mb-4  flex-wrap">
					<button onClick={() => setQuery("")} className={styledbtn}>
						No filter
					</button>
					{categories.map((category, i) => {
						return (
							<button
								key={i}
								className={
									"flex gap-1 cursor-pointer pointer-events-auto justify-center align-middle items-center " +
									" " +
									styledbtn
								}
								onClick={() => setQuery(category)}>
								<label htmlFor={"option" + i} className="cursor-pointer">
									{category}{" "}
								</label>
							</button>
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
