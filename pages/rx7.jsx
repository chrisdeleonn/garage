import React from "react";
import Image from "next/image";
import rx7Img from "../public/assets/projects/rx7.jpeg";

const rx7 = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:w-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] vg-black/80 z-10">
					<Image src={rx7Img} alt="" />
					<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-white z-10 p-2">
						<h2 className="py-2">RX-7</h2>
						<h3>Nextjs / Tailwind / GraphQL</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default rx7;
