class Clock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        };
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <h3>
                현재 시각은 [{this.state.date.toLocaleTimeString()}] 입니다.
            </h3>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)