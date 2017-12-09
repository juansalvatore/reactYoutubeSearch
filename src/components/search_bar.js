import React, { Component } from 'react'

// class-based component (The component needs the ability to be aware of itsalf)
// more inteligent component
class SearchBar extends Component {
    // STATE => one for each component
    // forces children to re-render
    // we need to initialize 
    

    constructor(props) {

        super(props)

        this.state = { term: '' }
    }

    // methods on a react components
    render() {
        return (
            <div className="search-bar">
                <input 
                // controlled component
                value={this.state.term}
                onChange={ event => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }    
}

export default SearchBar