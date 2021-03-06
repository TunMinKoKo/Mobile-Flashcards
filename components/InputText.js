import React from 'react'
import { TextInput } from 'react-native'

export default function InputText ({ value, onChangeText, id, ...rest }) {
    return (
        <TextInput
            id={id}
            value={value}
            onChangeText={(value) => onChangeText(id, value)}
            {...rest}
        />
    )
}
