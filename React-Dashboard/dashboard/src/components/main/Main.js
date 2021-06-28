import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Chart";

const Main = () => {
    return (
        <main>
            <div className="main-container">
                <div className="main-title">
                    <img src={hello} alt="hello"/>
                    <div className="main-greeting">
                        <h1>Hello Codersbite</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>

                <div className="main-cards">
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Number of Subscribers</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Times of Watching</p>
                            <span className="font-blod text-title">2467</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-video-camera fa-2x text-yellow"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Number of Videos</p>
                            <span className="font-blod text-title">340</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Number of Likes</p>
                            <span className="font-blod text-title">645</span>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts-left">
                        <div className="charts-left-title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Cupertino, California, USA</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart/>
                    </div>

                    <div className="charts-right">
                        <div className="charts-right-title">
                            <div>
                                <h1>Stats Reports</h1>
                                <p>Cupertino, California, USA</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        
                        <div className="charts-right-cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>$75,300</p>
                            </div>
                            <div className="card2">
                                <h1>Sales</h1>
                                <p>$124,200</p>
                            </div>
                            <div className="card3">
                                <h1>Users</h1>
                                <p>3900</p>
                            </div>
                            <div className="card4">
                                <h1>Orders</h1>
                                <p>1881</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Main;