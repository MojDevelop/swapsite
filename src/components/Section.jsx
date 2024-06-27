// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavigationHandler } from './NavigationHandler';

function Section() {
    return (
        <NavigationHandler>
            {/* eslint-disable-next-line no-unused-vars */}
            {({ loading, handleIconClick }) => (
                <div
                    className={"glass flex relative  flex-col rounded-xl shadow-lg xl:p-20 lg:p-10 md:p-7" +
                        " sm:p-5 p-3 gap-2 z-50 " +
                        "rounded-3xl text-center text-zinc-400"}
                >
                    <p className="mt-3 pb-7 sm:text-md text-sm px-3 text-gray-300">
                        {"Are you ready to transform your taps into financial gains? Join us in the app, where every tap " +
                            "contributes to profit-sharing and endless excitement! Let's tap into success together!"}
                    </p>
                    <div>
                        <button
                            className={"justify-center mb-4 text-gray-300 items-center font-serif w-[186px] px-5 py-4 rounded-full " +
                                "no-underline bg-gradient-to-r from-purple-600 to-orange-400 cursor-pointer font-bold"}
                            onClick={() => handleIconClick("https://t.me/spacexswap")}
                        >
                            Join TapSwap
                        </button>
                    </div>
                </div>
            )}
        </NavigationHandler>
    );
}

export default Section;
