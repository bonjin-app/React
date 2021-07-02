class EventHandling extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isToggleOn: true
        }

        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        // handleClick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
        console.log('이벤트 처리')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <EventHandling />,
    document.getElementById('root')
)