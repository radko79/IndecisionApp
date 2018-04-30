class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    };

    handleToggleVisibility() {
        console.log('toggleVisibility');
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    };

    render() {
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide text' : 'Show text'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p> I am hidden! </p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// console.log('app is running');

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility app</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide button' : 'Show button'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Some text</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();