import React from "react";

import DogSnack from "../assets/Dog-snack.png";

export default function Section2() {
	return (
		<section className="py-20 px-2 md:py-12 lg:py-20 flex flex-col lg:flex-row  items-center justify-center gap-5 lg:gap-7.5 bg-[#F8F8F8] md:px-20 lg:px-28">
			<div className="flex-1 flex flex-col items-center justify-center md:gap-3 lg:gap-5 xl:gap-12">
				<div className="flex flex-col items-start justify-start gap-4.5">
					<h2 className="font-semibold md:text-[25px] lg:text-[30px] xl:text-[40px] leading-[120%] tracking-[0.25px] text-[#161723] ">
						Nutrition is the foundation for longer, healthier lives in dogs.
					</h2>
					<p className="font-normal text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] ">
						Invest in your dog's future with our scientifically formulated
						superfood-powered supplements. Give them the nutrition they deserve
						and watch them thrive with vitality, energy, and the joy of a
						longer, healthier life.
					</p>
				</div>

				<div className="mb-[16px]">
					<h3 className="font-semibold text-[19px] leading-[150%] tracking-[0.5px] text-[#161723] mb-[5px]  lg:mb-[10px] xl:mb-[16px]">
						Key Points:
					</h3>

					<ul className="flex flex-col items-start justify-start gap-[12px] divide-y divide-[#E3E3E8]">
						<li className="flex items-start justify-center gap-12 ">
							<span className="font-bold text-[33px] leading-[150%] tracking-[0.5px] text-[#EE6F4B]">
								97%
							</span>
							<p className="font-normal text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] pb-2">
								Dogs choose our dog food over leading brands because of its real
								functional ingredients and delicious flavor.
							</p>
						</li>

						<li className="flex items-start justify-center gap-12">
							<span className="font-bold text-[33px] leading-[150%] tracking-[0.5px] text-[#EE6F4B]">
								84%
							</span>
							<p className="font-normal text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] pb-2">
								Our dog food provides superior nutrition and a patented
								probiotic for optimal nutrient absorption.
							</p>
						</li>

						<li className="flex items-start justify-center gap-12 pb-2">
							<span className="font-bold text-[33px] leading-[150%] tracking-[0.5px] text-[#EE6F4B]">
								92%
							</span>
							<p className="font-normal text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] ">
								Our dog food's high protein and fat digestibility contribute to
								ideal stool quality.
							</p>
						</li>
					</ul>
				</div>

				<p className="w-full bg-[#EE6F4B] px-[40px] py-[12px] rounded-md font-semibold text-[16px] leading-[150%] tracking-[0.5px] text-[#FFFFFF] text-center">
					Give your furry friend the gift of wholesome nutrition
				</p>
			</div>

			<div className="flex-1 md:h-[480px] lg:w-[570px] lg:h-[570px] flex items-center justify-center ">
				<img
					src={DogSnack}
					alt="Happy Dog Bites"
					className="md:h-[480px] lg:w-[570px] lg:h-[570px]"
				/>
			</div>
		</section>
	);
}
