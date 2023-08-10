import Space from "../Space";

import "./FloorPlan.css";

const Colors = {
    Kitchen: "#e39827",
    Bathroom: "#1e6726",
    Bedroom: "#124754",
    LivingRoom: "#c5ac87",

    Oven: "#c54545",
    Sink: "#542718",
}

export default function FloorPlan() {
    return (
        <div className="FloorPlan">
            <Space type="Bedroom" number={1} color={Colors.Bedroom} />
            <Space type="Kitchen" color={Colors.Kitchen} >
                <Space type="Oven" color={Colors.Oven} />
                <Space type="Sink" color={Colors.Sink} />
            </Space>
            <Space type="Bath" prefix="Full" color={Colors.Bathroom} />
            <Space type="Bedroom" number={2} color={Colors.Bedroom} />
            <Space type="Living Room" color={Colors.LivingRoom} />
            <Space type="Bath" prefix="Half" color={Colors.Bathroom} />
            <Space type="Bedroom" number={3} color={Colors.Bedroom} />
        </div>
    );

}