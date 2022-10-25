import React from "react";
import Image from "next/image";
import htmlImg from "../public/assets/skills/html.png";
import cssImg from "../public/assets/skills/css.png";
import jsImg from "../public/assets/skills/j5.png";
import nodeImg from "../public/assets/skills/node.png";
import firebaseImg from "../public/assets/skills/firebase.png";
import mongoImg from "../public/assets/skills/mongo.png";
import nextImg from "../public/assets/skills/nextjs-2.png";
import reactImg from "../public/assets/skills/react.png";
import tailwindImg from "../public/assets/skills/tailwind.png";
import githubImg from "../public/assets/skills/github1.png";

const Skills = () => {
	return (
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Skills
				</p>
				<h2 className="py-4">What I Can Do</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={htmlImg} width="64px" height="64px" alt="" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={cssImg} width="64px" height="64px" alt="" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={jsImg} width="64px" height="64px" alt="" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Javascript</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={nodeImg} width="64px" height="64px" alt="" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Node</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={firebaseImg} width="64px" height="64px" alt="" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Firebase</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={mongoImg} width="64px" height="64px" alt="" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Mongodb</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={nextImg} width="64px" height="64px" alt="" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Nextjs</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={reactImg} width="64px" height="64px" alt="" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>React</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={tailwindImg} width="64px" height="64px" alt="" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Tailwind</h3>
							</div>
						</div>
					</div>
					<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
						<div className="grid grid-cols-2 gap-4 justify-center items-center">
							<div className="m-auto">
								<Image src={githubImg} width="64px" height="64px" alt="" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Github</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
