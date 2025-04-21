"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Verifying() {
	const router = useRouter();

	useEffect(() => {
		// Set a timer to redirect after 2 seconds
		const timer = setTimeout(() => {
			router.push("/wam_calculator");
		}, 5000);

		// Cleanup timer on component unmount
		return () => clearTimeout(timer);
	}, [router]);

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="text-center">
				<DotLottieReact
					src="loading-animation.lottie"
					className="mx-auto mb-4 w-[250px] h-[250px]"
					loop
					autoplay
				/>
				<p className="text-lg font-semibold text-gray-700">Verifying...</p>
			</div>
		</div>
	);
}
