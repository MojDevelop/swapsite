
function Head() {
    return (
        <div className={"glasses flex relative justify-between sm:p-5 py-3 px-1 rounded-br-3xl rounded-tl-3xl items-center" +
            " text-white z-50 " +
            "backdrop-2xl bg-[#718F94] w-full sm:my-5 my-3"}>
            <span className={"flex text-lg sm:px-10 px-3"}>Space X Swap</span>
            <div className={"flex justify-center items-center gap-2 sm:px-10 px-3"}>
                <a href="https://t.me/spacexswap" target="_self" rel="noopener noreferrer">
                    <img className={"size-10 bg-sky-300 rounded-full"} src="/images/telegram.png" alt="telegram"/>
                </a>
                <a href="https://x.com/tapswapai" target="_self" rel="noopener noreferrer">
                    <img className={"size-10 bg-black rounded-full"} src="/images/twitter.png" alt="twitter"/>
                </a>
            </div>
        </div>
    );
}

export default Head;
