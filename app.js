function WelcomeFunc({name,children}){
    
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
    </div>
}

class Welcome extends React.Component {

    render(){
        return <div>
        <h1>Bonjour {this.props.name}</h1>
        <p>
            {this.props.children}
        </p>
    </div>
    }
}

class Clock extends React.Component
{
/* Pas très utilse lorsqu'un utilisateur regarede, il faut rendre ça dynamique -> il faut faire un constructor */
    constructor (props) {
        super(props)
        this.state = {date: new Date()}
        this.timer = null
    }    

    componentDidMount () {
        this.timer = window.setInterval(this.tick.bind(this),1000)
    }

    componentwillUnmount (){
        window.clearInterval(this.timer)
    }

    tick (){
        this.setState((state, props)=> {date : new Date()}
        )
    }

    render () {
        return <div>
            Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }
}

class Incrementer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            n: props.start,
            timer: null}
        }
    
     
    componentDidMount(){
        this.play()
    }

    componentwillUnmount(){
        window.clearInterval(this.state.timer)
    }

    inc(){
       this.setState((state,props) => ({n: state.n + props.step}))
    }

    pause(e){
        window.clearInterval(this.state.timer)
        this.setState({
            timer:null
        })
    }
    
    play(e){
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(this.inc.bind(this), 1000)
        })
    }

    toggle(){
        return this.state.timer ? this.pause() : this.play()            
    }

    label(){
        return this.state.timer ? 'Pause' : 'Lecture'
    }

    render() {
        return <div>
            Valeur : {this.state.n}
            <button onClick={this.toggle.bind(this)}>{this.label()}</button>
        </div>
    }
}



Incrementer.defaultProps = {
    start: 0,
    step: 1,
    
}

function Home(){
    return <div>
        <Welcome name ="Dorothée" />
        <Welcome name="Jean" />
        <Clock />
        <Incrementer />
    </div>
}

ReactDOM.render(<Home/>, document.querySelector('#app'))