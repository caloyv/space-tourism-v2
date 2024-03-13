const PageHeading = ({ num, text, className }) => {
    return (
        <div className={`w-full md:text-left md:mt-10 xl:pl-[10.40625rem] font-barlow-con ${className ? className : ""}`}>
            <p className="mb-8 md:mb-[3.75rem] md:text-xl xl:text-[1.75rem] md:tracking-[0.21125rem] xl:tracking-[0.295rem]">
                <span className="text-white/[.25] mr-3 md:mr-5">{num}</span>{text}
            </p>
        </div>
    );
}; 

export default PageHeading;
