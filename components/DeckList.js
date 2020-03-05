import React, { Component } from 'react'
import { connect } from 'react-redux'
import Deck from './Deck'
import { getDecks } from '../utils/api'
import { addDecks } from '../actions'
import { AppLoading } from 'expo'
import { ScrollView } from 'react-native';

class DeckList extends Component {
    state = {
        ready: false,
    }

    componentDidMount() {
        const { addDecks } = this.props

        //fetch decks from AsyncStorage
        getDecks()
            .then((decks) =>
                //add decks to Redux store
                addDecks(JSON.parse(decks)))
            .then(() => this.setState({
                ready: true,
            }))
    }

    render() {
        const { ready } = this.state
        const { decks } = this.props

        if (ready === false) {
            return <AppLoading />
        }

        return (
                <ScrollView style={{backgroundColor:'#34435E'}}>
                    {Object.keys(decks).map((deck) => (
                        <Deck
                            key={deck}
                            title={deck}
                        />
                    ))}
                </ScrollView>
        )
    }
}

function mapStateToProps (decks) {
    return {
        decks,
    }
}

export default connect(mapStateToProps, { addDecks })(DeckList)
