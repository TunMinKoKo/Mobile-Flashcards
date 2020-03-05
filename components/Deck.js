import React, { Component } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import styled from 'styled-components/native'

const DeckBtn = styled.TouchableOpacity`
  width:350px;
  height:150px;
  border : 1px solid #F2DFD7;
  justify-content: center;
  align-items: center;
  background-color:#F2DFD7;
  border-radius:10px;
  box-shadow: 10px 5px 5px black;
  margin:50px;
`

const TitleText = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #34435E;
`

const CardsText = styled.Text`
  margin-top: 7px;
  font-size: 14px;
  font-weight: bold;
  color: #B88E8D;
`

class Deck extends Component {
    state = {
        bounceValue: new Animated.Value(1)
    }

    onPress = () => {
        const { bounceValue } = this.state
        const { navigate } = this.props.navigation
        const { deck } = this.props
        const title = deck.title

        Animated.sequence([
            Animated.timing(bounceValue, { duration: 200, toValue: 1.5}),
            Animated.spring(bounceValue, {toValue: 1, friction: 4})
        ]).start()

        setTimeout(() => {
            navigate('DeckDetail', {
                title,
            })
        }, 350)
    }

    render() {
        const { bounceValue } = this.state
        const { deck, numberOfCards } = this.props

        return (
            <Animated.View style={[styles.container, {transform: [{scale: bounceValue}]}]}>
                <DeckBtn
                    onPress={this.onPress}
                >
                    <TitleText>{deck.title}</TitleText>
                    <CardsText>{numberOfCards} {numberOfCards === 1 ? 'card' : 'cards'}</CardsText>
                </DeckBtn>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

function mapStateToProps (decks, { title }) {
    const deck = decks[title] ? decks[title] : null
    const numberOfCards = deck ? deck.questions.length : 0
    return {
        deck,
        numberOfCards,
    }
}

export default withNavigation(connect(mapStateToProps)(Deck))
