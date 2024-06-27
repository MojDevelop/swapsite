// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavigationHandler } from "./NavigationHandler";

const Head = () => {
    return (
        <NavigationHandler>
            {/* eslint-disable-next-line no-unused-vars */}
            {({ loading, handleIconClick }) => (
                <div className={"glasses flex relative justify-between font-serif sm:p-5 py-3 px-1 rounded-br-3xl rounded-tl-3xl " +
                    "items-center" +
                    " text-white z-50 " +
                    "backdrop-2xl bg-[#718F94] w-full sm:my-5 my-3"}>
                    <span className={"flex text-lg sm:px-10 px-3"}>Space X Swap</span>
                    <div className={"flex justify-center items-center gap-2 sm:px-10 px-3"}>
                        <a onClick={() => handleIconClick("https://t.me/spacexswap")}>
                            <img className={"size-10 bg-sky-300 rounded-full cursor-pointer"} src="/images/telegram.png"
                                 alt="telegram"/>
                        </a>
                        <a onClick={() => handleIconClick("https://x.com/tapswapai")}>
                            <img className={"size-10 bg-black rounded-full cursor-pointer"} src="/images/twitter.png"
                                 alt="twitter"/>
                        </a>
                    </div>
                </div>
            )}
        </NavigationHandler>
    );
};

export default Head;
