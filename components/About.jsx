import React from "react";

const About = () => {
	return (
		<div className="w-full md:h-screen p-2 items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">// The story starts here...</p>
					<p>
						Originally from Dallas, Texas. In 2021, I traveled to Boca Raton,
						Florida for a Software engineer bootcamp. A month later, I landed my
						first job at a local fintech company. I switched roles as a
						technical recruiter for a little bit. And now I'm back in
						engineering again 💻 Welcome!
					</p>
					<p className="py-2 text-gray-600 underline cursor-pointer">
						Check out some of my latest projects
					</p>
				</div>
				<div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify center p-4 hover:scale-105 ease-in duration-300">
					<img className="rounded-xl" src="/../assets/house_me.jpg" alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
