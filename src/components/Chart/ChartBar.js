import "./ChartBar.css";

const ChartBar = (props) => {
    let barFillHeight = "0%";

    console.log('hello', props.maxValue)
    if (props.maxValue > 0) {
        // integer between 0 and 100 for what height should be of bar
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
    }

    return (
        // props.value...
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;
