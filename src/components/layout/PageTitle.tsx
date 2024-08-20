type PageTitleProps = {
    title: string;
    subtitle?: string;
};

export function PageTitle({ title, subtitle }: PageTitleProps) {
    return (
        <>
            {title && subtitle &&
                <div className="text-23 uppercase">
                    <h1 className="text-32">{title}</h1>
                    <h2 className=" text-primary-dark text-16 font-light">{subtitle}</h2>
                </div>
            }
            {title && !subtitle &&
                <div className="text-26 font-medium">
                    <h1>{title}</h1>
                </div>
            }
        </>
    )
}