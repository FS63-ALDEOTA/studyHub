
const SummaryCards = ({ title, subtitle, icon: Icon, colorBgIcon, colorIcon }) => {
 

return (
    <div className="p-6 border border-[#CCC3D84D] rounded-xl flex items-center w-full h-30 shadow-[0px_1px_2px_0px_#0000000D]">

        <div
            className="h-12 w-10.5 rounded-xl flex items-center justify-center mr-3"
            style={{ backgroundColor: colorBgIcon }}
        >
            <Icon color={colorIcon} />
        </div>

        <div>
            <h1 className="font-inter text-[16px] text-[#4A4455] font-normal leading-6 tracking-[0.8px] uppercase w-10">
                {title}
            </h1>

            <h2 className="font-inter font-bold text-[16px] text-[#111C2D]">
                {subtitle}
            </h2>
        </div>

    </div>
)
}

export default SummaryCards