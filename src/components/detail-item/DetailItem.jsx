import "./DetailItem.css";

const DetailItem = (props) => {
    return (
        <div className="detail-item">
            <p className="detail-label">{props.label}</p>
            <p className="detail-value">{props.value}</p>
        </div>
    );
};

export default DetailItem;
