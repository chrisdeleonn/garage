import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
	return (
		<div id="main" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						Stellar software builder.
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, my name is <span className="text-[#5651e5]">Chris</span>
					</h1>
					<h1 className="py-2 text-gray-700">A Software engineer</h1>
					<p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
						I am a Software engineer specializing in full-stack development.
						That means I can build front-end, back-end, and dev-ops. Basically,
						a unicorn, ya know? 🤓
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<a
							href="https://www.linkedin.com/in/chrisdeleonn/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaLinkedin />
							</div>
						</a>
						<a
							href="https://github.com/chrisdeleonn"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaGithub />
							</div>
						</a>
						<a href="cdizzel@ymail.com" target="_blank" rel="noreferrer">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<AiOutlineMail />
							</div>
						</a>

						<a
							href="../assets/Chris_DeLeon_Resume_2022_0.pdf"
							target="_blank"
							rel="noreferrer"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<BsFillPersonLinesFill />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Main;
