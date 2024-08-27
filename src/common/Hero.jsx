import React from "react";

export default function Hero() {
    return (
        <div className="w-[100%] grid grid-cols-[40%_auto]">
            <div className="left bg-[url('https://staging.adiyogitechnology.com/sushmagroup/assets/aa3adfea8ebb38b3b1b10f40dabc929a-BGc6J0a9.png')] bg-cover bg-center">
                <div className="flex flex-col gap-5 justify-center p px-10 border py-35">
                    <h1 className="text-[50px] font-bold text-white py-20 pr-8">WE MAKE HOMES THAT UNDERSTAND YOU</h1>
                    <button className="bg-transparent text-[30px] border rounded-[20px] uppercase">See all products</button>
                    <video className="h-full w-full rounded-lg" autoPlay muted playsInline>
                        <source src="https://staging.adiyogitechnology.com/sushmagroup/videos/sushmamaintour.mp4" type="video/mp4" />
                    </video>
                </div>

            </div>

            <div className="h-[750px] w-auto">
                <video className="h-full w-full rounded-lg object-cover" autoPlay muted playsInline>
                    <source src="https://staging.adiyogitechnology.com/sushmagroup/videos/suahmatour.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
}
