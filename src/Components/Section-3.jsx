import React from "react";

import Snack from "../assets/Snack.png";
import DogSnack from "../assets/Dodsnack.png";

export default function Section3() {
	return (
		<section>
			<div className="flex flex-col items-center justify-center">
				<div className="md:w-[570px] md:h-[570px]">
					<img
						src={DogSnack}
						alt="Happy Dog Bites"
						className="md:w-[570px] md:h-[570px]"
					/>
				</div>
				<div className="flex flex-col items-start justify-start gap-4.5">
					<h2 className="font-semibold text-[40px] leading-[120%] tracking-[0.25px] text-[#161723] ">
						Improve overall gastrointestinal health for better nutrient
						absorption
					</h2>
					<p className="font-normal text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] ">
						Through rigorous scientific studies and consultations with
						veterinarians, we have created a breakthrough formula exclusively
						tailored to combat the health challenges prevalent in dogs. A
						staggering 91% of our customers have reported significant
						improvements in their dogs' health after incorporating our product
						into their diet.
					</p>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-col items-start justify-start gap-4.5">
					<h2 className="font-semibold text-[40px] leading-[120%] tracking-[0.25px] text-[#161723] ">
						Prebiotics nourish the beneficial gut bacteria, supporting digestive
						health
					</h2>
					<p className="font-normal text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] ">
						Our dog food formula contains carefully selected prebiotics that
						work in harmony with the gut microbiota, providing the necessary
						nutrients for the growth and maintenance of beneficial bacteria,
						ultimately supporting digestive health.
					</p>
				</div>
				<div className="md:w-[570px] md:h-[570px]">
					<img
						src={Snack}
						alt="Happy Dog Bites"
						className="md:w-[570px] md:h-[570px]"
					/>
				</div>
			</div>
		</section>
	);
}
