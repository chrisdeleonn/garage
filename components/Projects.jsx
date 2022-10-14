import React from "react";
import rx7Img from "../public/assets/projects/rx7.jpeg";
import cayman718Img from "../public/assets/projects/cayman718.jpeg";
import mx5Img from "../public/assets/projects/og_miata.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="=max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Projects
				</p>
				<h2 className="py-4">What I've Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem title="RX7" bgImg={rx7Img} projectUrl="/rx7" />
					<ProjectItem
						title="Cayman 718"
						bgImg={cayman718Img}
						projectUrl="/cayman718"
					/>
					<ProjectItem title="MX5" bgImg={mx5Img} projectUrl="/mx5" />
				</div>
			</div>
		</div>
	);
};

export default Projects;
