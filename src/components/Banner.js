export const Banner = () => {
    return (
        <div className="container mx-auto py-2 md:py-1 px-4 md:px-3">
            <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-black-200 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
                        <video src="/videos/food1.mp4" autoPlay loop muted style={{width: "100%", height: "100%"}} />
                    </div>
                    <div className="md:w-4/16 lg:w-5/1 xl:w-4/12 2xl:w-3/12 bg-black-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">        
                        <video src="/videos/food3.mp4" autoPlay loop muted style={{width: "100%", height: "100%"}} />
                    </div>
                <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-black-50 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">        
                        <video src="/videos/food2.mp4" autoPlay loop muted style={{width: "100%", height: "100%"}} />
                </div>
            </div>
        </div>
    );
}
