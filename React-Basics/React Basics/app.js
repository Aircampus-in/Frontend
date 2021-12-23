const heading = "to our website"

// const btn = <button>Sign up</button>
const header = <header>
    <h1 className="header">This is the heading</h1>
    <button>Sign up {heading}</button>
</header>

ReactDOM.render(
    header,
    document.getElementById('root')
)