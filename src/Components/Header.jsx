import React from "react";

import Food1 from "../assets/food-1.png";
import PetFood from "../assets/pet-food.png";
import PetBowl from "../assets/pet-bowl.png";
import HeaderFood from "../assets/Header-food.png";
import VetFood from "../assets/vet-1.png";

export default function Header() {
	return (
		<header className="py-10 px-2 flex flex-col items-center justify-center gap-12 md:py-20 lg:px-40 ">
			<h1 className="font-semibold text-[25px] md:text-[40px] leading-[120%] tracking-[0.25px] text-center text-[#161723]">
				What makes us different makes them stronger
			</h1>

			<div className="grid items-center justify-center gap-7.5 grid-cols-1 md:grid-cols-[auto_auto_auto] ">
				<ul className="flex flex-col items-start gap-10">
					<li className="flex items-start justify-start gap-6 ">
						<img
							src={Food1}
							alt="A picture of food"
						/>

						<div className="flex flex-col gap-2">
							<h3 className="font-semibold text-[20px] leading-[150%] tracking-[0.5px] text-[#161723] ">
								Real Food
							</h3>
							<p className=" text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] ">
								Wholesome recipes for dogs with real meat and veggies.
							</p>
						</div>
					</li>

					<li className="flex items-start justify-start gap-6 ">
						<img
							src={PetBowl}
							alt="A picture of food"
						/>
						<div className="flex flex-col gap-2">
							<h3 className="font-semibold text-[20px] leading-[150%] tracking-[0.5px] text-[#161723] ">
								Premium Ingredient
							</h3>
							<p className=" text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] ">
								Elevating pet care with unmatched safety and quality.
							</p>
						</div>
					</li>
				</ul>

				<div className="flex items-center justify-center ">
					<img
						src={HeaderFood}
						alt="A picture of food"
						className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] shrink-0"
					/>
				</div>

				<ul className="flex flex-col items-start gap-10">
					<li className="flex items-start justify-start gap-6 ">
						<img
							src={PetFood}
							alt="A picture of food"
						/>
						<div className="flex flex-col gap-2">
							<h3 className="font-semibold text-[20px] leading-[150%] tracking-[0.5px] text-[#161723] ">
								Made Fresh
							</h3>
							<p className="font-normal text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] ">
								We prioritize maintaining the integrity of whole foods and
								nutrition.
							</p>
						</div>
					</li>

					<li className="flex items-start justify-start gap-6 ">
						<img
							src={VetFood}
							alt="A picture of food"
						/>
						<div className="flex flex-col gap-2">
							<h3 className="font-semibold text-[20px] leading-[150%] tracking-[0.5px] text-[#161723] ">
								Vet Developed
							</h3>
							<p className=" text-[16px] leading-[150%] tracking-[0.5px] text-[#424153] ">
								We raise the bar for dog nutrition, surpassing industry
								expectations.
							</p>
						</div>
					</li>
				</ul>
			</div>

			<div>
				<div>
					<p>Get your dog's healthy meal today!</p>
				</div>
				<div>
					<div>
						<img src="" />
					</div>
					<ul>
						<li>
							<img src="" />
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
