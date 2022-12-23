import React from "react";
import Link from "next/link";
import Image from "next/image";
import houseImg from "../public/assets/house_me.JPG";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">The story starts here...</p>
					<p>
						I am originally from Dallas, Texas. In 2021, at the age of 29, I
						traveled to Boca Raton for a coding bootcamp. I stayed and ended up
						getting a software job right after. I tried my hand at a privately
						held fintech company, but things did not work out. I then decided to
						try technical recruiting, since I already had the technical
						knowledge. It was more salesy than I had imagined. Currently, I am
						playing beach volleyball and doing IT, hardware, and software
						consulting. My interests include edm music, jdm cars, obviously
						beach volleyball, rollerblading, roadtrips, weight lifting, and
						healthy eating habits.
					</p>
					<Link href="/#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer">
							Check out some of my favorite cars
						</p>
					</Link>
				</div>
				<div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify center p-4 hover:scale-105 ease-in duration-300">
					<Image className="rounded-xl" src={houseImg} alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
