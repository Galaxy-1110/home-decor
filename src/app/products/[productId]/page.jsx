"use client";
import Nav from "@/app/Components/Nav";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import data from "@/app/data/products.json";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/Reveal";
import { IoCart, IoCheckmarkCircle } from "react-icons/io5";
import { motion, useAnimate } from "framer-motion";
import { useState } from "react";

export default function Productdetails({ params }) {
	const [scope, animate] = useAnimate();
	const [content, setContent] = useState("Add to Cart");
	const [isAnimating, setIsAnimating] = useState(false);
	const product = data.find((product) => product.id == params.productId);

	const handleBtnClick = async () => {
		if (isAnimating) return;

		setIsAnimating(true);
		animate(".btn", { cursor: "not-allowed" });
		animate(".icon", { x: [0, 120] }, { duration: 0.6 });
		animate(".text", { opacity: [1, 0] }, { duration: 0.4 });
		await animate(
			".icon",
			{ opacity: [1, 0], display: ["block", "none"] },
			{ duration: 0.4 }
		);
		animate(
			".btn",
			{
				background: [
					"linear-gradient(90deg, rgba(129,231,54,1) 0%, rgba(109,88,63,1) 0%, rgba(109,88,63,1) 100%)",
					"linear-gradient(90deg, rgba(129,231,54,1) 0%, rgba(129,231,54,1) 0%, rgba(129,231,54,1) 100%)",
				],
			},
			{ duration: 0.4, delay: 0.2, transition: "ease-in-out" }
		);
		await setContent("Added to Cart");
		await animate(".text", { opacity: [0, 1] }, { duration: 0.2 });

		await setTimeout(async () => {
			animate(".icon", { opacity: [0, 1] }, { duration: 0.2, delay: 0.4 });
			animate(".icon", { x: [120, 0] }, { duration: 0.8, delay: 0.2 });
			await animate(".text", { opacity: [1, 0] }, { duration: 0.4 });
			animate(".text", { opacity: [0, 1] }, { duration: 0.2, delay: 0.2 });
			animate(".btn", {
				background: [
					"linear-gradient(90deg, rgba(109,88,63,1) 0%, rgba(129,231,54,1) 0%, rgba(129,231,54,1) 100%)",
					"linear-gradient(90deg, rgba(129,231,54,1) 0%, rgba(109,88,63,1) 0%, rgba(109,88,63,1) 100%)",
				],
			});
			setContent("Add to Cart");
			animate(".btn", { cursor: "pointer" });
			setIsAnimating(false);
		}, 2000);
	};
	return (
		<>
			<Nav />
			<section className="min-h-screen pt-28 p-8 flex flex-col gap-16 bg-[#F5E9DB]">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator>
							<Slash />
						</BreadcrumbSeparator>
						<BreadcrumbItem>
							<BreadcrumbLink href="/#Products">Products</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator>
							<Slash />
						</BreadcrumbSeparator>
						<BreadcrumbItem>
							<BreadcrumbPage>{product.name}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<Reveal>
					<div className="flex flex-col md:flex-row gap-7">
						<div className="">
							<img
								src={`/${product.image}`}
								alt={product.name}
								className="object-cover"
							/>
						</div>
						<div className=" flex flex-col gap-12 ">
							<div className=" flex flex-col gap-4">
								<h1 className="text-3xl font-bold">{product.name}</h1>
								<p className="text-lg">{product.description}</p>
								<div className="flex gap-4">
									<Badge>${product.price}</Badge>
									<Badge variant={"secondary"}>{product.category}</Badge>
								</div>
							</div>
							<div ref={scope}>
								<motion.button
									whileHover={{ scale: [null, 1.2, 1.1] }}
									transition={{
										duration: 1,
										type: "tween",
										repeatType: "reverse",
									}}
									onClick={handleBtnClick}
									className="btn px-8 py-4 bg-[#6D583F] text-[#F5E9DB] rounded-3xl flex gap-5 align-middle items-center relative">
									<IoCart className="icon" />{" "}
									<span className="text ">{content}</span>
								</motion.button>
							</div>
						</div>
					</div>
				</Reveal>
			</section>
		</>
	);
}
