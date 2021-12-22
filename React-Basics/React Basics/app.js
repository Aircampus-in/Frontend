const heading = React.createElement(
    'h1',
    {class: 'title'},
    'This is the Heading'
)

const btn = React.createElement(
    'button',
    null,
    'Sign up'
)

const header = React.createElement(
    'header',
    null,
    heading, btn
)

ReactDOM.render(
    header,
    document.getElementById('root')
)