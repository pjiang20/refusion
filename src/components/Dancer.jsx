import CircleIcon from "./CircleIcon";

const Dancer = ({color}) => (
    <div className="dancer-main">
        <CircleIcon color={color}>1</CircleIcon>
        <p>Dancer Name</p>
    </div>
);

export default Dancer;