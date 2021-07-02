class ApiExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    callApi = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: json.title
                })
            })
    }

    componentDidMount() {
        this.callApi()
    }

    render() {
        return (
            <div>
                <p>{this.state.data ? this.state.data : '데이터를 불러오는 중입니다!'}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <ApiExample />,
    document.getElementById('root')
)

