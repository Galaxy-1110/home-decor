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

export default function Productdetails({ params }) {
	const product = data.find((product) => product.id == params.productId);
	return (
		<>
			<Nav />
			<section className="min-h-screen pt-28 p-8 flex flex-col gap-16">
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

				<div className="flex flex-col md:flex-row gap-7">
					<div className="">
						<img
							src={`/${product.image}`}
							alt={product.name}
							className="object-cover"
						/>
					</div>
					<div className="flex-1 flex flex-col gap-6 ">
						<h1 className="text-3xl font-bold">{product.name}</h1>
						<p className="text-lg">{product.description}</p>
						<div className="flex gap-4">
							<Badge>${product.price}</Badge>
							<Badge variant={"secondary"}>{product.category}</Badge>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
