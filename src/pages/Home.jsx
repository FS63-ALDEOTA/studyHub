import SummaryCards from "../components/SummaryCards"
import { infos } from "./infos"

const Home = () => {
    return (
        <div>
            <h1>Página inicial</h1>

            <div className="flex gap-4">
                {infos.map((info) => (
                    <SummaryCards
                        key={info.title}
                        title={info.title}
                        subtitle={info.subtitle}
                        icon={info.icon}
                        colorBgIcon={info.colorBgIcon}
                        colorIcon={info.colorIcon}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
