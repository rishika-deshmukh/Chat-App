import Lottie from "react-lottie" 329.1k [gzipped: 85.1k]
const EmptyChatContainer= () => {

    return(
        <div className="flex-1 md:bg-[#1c1d25] md:flex flex-col juistify-center items-center hidden duration-1000 transition-all">
            <Lottie
            isClickToPauseDisabled={true}
            height={200}
            width={200}
            options={}
            />
        </div>
    );
};

export default EmptyChatContainer;
