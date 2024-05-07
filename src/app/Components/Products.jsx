"use client";
import Link from "next/link";
import data from "../data/products.json";
import Reveal from "@/components/Reveal";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function Products() {
	const [hovered, setHovered] = useState(null);

	return (
		<section
			id="Products"
			className="flex flex-col gap-10 items-center p-14 bg-[#F5E9DB]">
			<h2 className="md:text-5xl text-2xl font-bold">Featured Products</h2>
			<Reveal>
				<div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 "
					onMouseLeave={() => setHovered(null)}>
					{data.map((product, i) => (
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
											transition: { duration: 0.15, delay: 0.2 },
										}}
										transition={{
											type: "spring",
											duration: 1,
										}}
									/>
								)}
							</AnimatePresence>
							<motion.div
								className={
									"flex justify-between flex-col h-full gap-5 bg-[#6D583F] p-10 rounded-2xl " +
									" " +
									"  overflow-hidden  border border-transparent  group-hover:border-[#BFAE9E] relative z-20"
								}>
								<div className="flex flex-col gap-2">
									<img
										src={product.image}
										alt={product.name}
										className="rounded-lg mb-4"
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
					))}
				</div>
			</Reveal>
		</section>
	);
}
