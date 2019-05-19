class Prices extends React.Component{
    state = {
        currency : "USD"
    }
    render(){
        let list = '';
        if(this.state.currency === 'USD'){
            list = <ul className="list-group">
            <li className="list-group-item">
                Bitcoin rate for {this.props.bpi.USD.description} 
                :  <span className="badge-primary">{this.props.bpi.USD.code}</span>
                : <strong>{this.props.bpi.USD.rate}</strong>
            </li>
        </ul>
        } else if(this.state.currency === 'GBP'){
            list =   <ul className="list-group">
            <li className="list-group-item">
                Bitcoin rate for {this.props.bpi.GBP.description} 
                :  <span className="badge-primary">{this.props.bpi.GBP.code}</span>
                : <strong>{this.props.bpi.GBP.rate}</strong>
            </li>
        </ul>
        } else if(this.state.currency === 'EUR'){
            list =  <ul className="list-group">
            <li className="list-group-item">
                Bitcoin rate for {this.props.bpi.EUR.description} 
                :  <span className="badge-primary">{this.props.bpi.EUR.code}</span>
                : <strong>{this.props.bpi.EUR.rate}</strong>
            </li>
        </ul>
        }
        return(
            <div>
                {list}
                <br></br>
                <select className="form-control" onChange={(e) => this.setState({currency : e.target.value})}>
                    <option value= "USD">USD</option>
                    <option value= "GBP">GBP</option>
                    <option value= "EUR">EUR</option>/>
                </select> 
            </div>
        )
    }
}

export default Prices;