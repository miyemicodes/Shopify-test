import React from "react";

import DogSnack from "../assets/Dog-snack.png";

export default function Section2() {
	return (
		<section className="py-20 grid grid-cols-1 md:grid-cols-[auto_auto]  items-center justify-center gap-7.5 bg-[#F8F8F8]">
			<div>
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

				<div>
					<h3 className="font-semibold text-[19px] leading-[150%] tracking-[0.5px] text-[#161723]">
						Key Points:
					</h3>

					<ul>
						<li className="">
							<span>97%</span>
							<p>
								Dogs choose our dog food over leading brands because of its real
								functional ingredients and delicious flavor.
							</p>
						</li>

						<li className="">
							<span>84%</span>
							<p>
								Our dog food provides superior nutrition and a patented
								probiotic for optimal nutrient absorption.
							</p>
						</li>

						<li className="">
							<span>92%</span>
							<p>
								Our dog food's high protein and fat digestibility contribute to
								ideal stool quality.
							</p>
						</li>
					</ul>
				</div>

				<p className="bg-[#EE6F4B] px-[40px] py-[12px] rounded-md font-semibold text-[16px] leading-[150%] tracking-[0.5px] text-[#FFFFFF]">
					Give your furry friend the gift of wholesome nutrition
				</p>
			</div>

			<div className="md:w-[570px] md:h-[570px]">
				<img
					src={DogSnack}
					alt="Happy Dog Bites"
					className="md:w-[570px] md:h-[570px]"
				/>
			</div>
		</section>
	);
}
