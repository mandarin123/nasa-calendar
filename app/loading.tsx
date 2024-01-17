const Loading = () => {
    return (
        <div className="items-center justify-center h-screen grid grid-rows-1 grid-flow-col gap-4">
            <div
                className="h-40 w-40 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div>
            <span className="font-roboto text-2xl">Cargando calendario</span>
        </div>
    )
};

export default Loading;