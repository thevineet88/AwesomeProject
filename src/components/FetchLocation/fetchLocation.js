import React from 'react'

import { Button,Text } from 'native-base'

const fetchLocation = (props) => {
return(
    <Button rounded onPress={props.onGetLocation}>
        <Text>Get Location</Text>
    </Button>
)
}

export default fetchLocation