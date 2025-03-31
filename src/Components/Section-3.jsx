import React from "react";

import DogSnack from "../assets/Dog-snack.png";

export default function Section3() {
	return (
		<section>
			<div className="flex items-center justify-center">
				<div className="md:w-[570px] md:h-[570px]">
					<img
						src={DogSnack}
						alt="Happy Dog Bites"
						className="md:w-[570px] md:h-[570px]"
					/>
				</div>
				<div className="flex flex-col items-start justify-start gap-4.5">
					<h2 className="font-semibold text-[40px] leading-[120%] tracking-[0.25px] text-[#161723] ">
						Nutrition is the foundation for longer, healthier lives in dogs.
					</h2>
					<p className="font-normal text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] ">
						Invest in your dog's future with our scientifically formulated
						superfood-powered supplements. Give them the nutrition they deserve
						and watch them thrive with vitality, energy, and the joy of a
						longer, healthier life.
					</p>
				</div>
      </div>
      
			<div className="flex items-center justify-center">
				<div className="flex flex-col items-start justify-start gap-4.5">
					<h2 className="font-semibold text-[40px] leading-[120%] tracking-[0.25px] text-[#161723] ">
						Nutrition is the foundation for longer, healthier lives in dogs.
					</h2>
					<p className="font-normal text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] ">
						Invest in your dog's future with our scientifically formulated
						superfood-powered supplements. Give them the nutrition they deserve
						and watch them thrive with vitality, energy, and the joy of a
						longer, healthier life.
					</p>
				</div>
				<div className="md:w-[570px] md:h-[570px]">
					<img
						src={DogSnack}
						alt="Happy Dog Bites"
						className="md:w-[570px] md:h-[570px]"
					/>
				</div>
			</div>
		</section>
	);
}
