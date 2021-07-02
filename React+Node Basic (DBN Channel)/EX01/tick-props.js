function Clock(props) {
    return (
        <h3>
            현재 시각은 [{props.date.toLocaleTimeString()}] 입니다.
        </h3>
    )
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    )
}

setInterval(tick, 1000)