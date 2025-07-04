import { SpruceSchemas } from '@sprucelabs/spruce-core-schemas'
import '#spruce/schemas/schemas.types'

const theme: SpruceSchemas.HeartwoodViewControllers.v2021_02_11.ThemeProps = {
    /**
     ************************************
     * Background
     ************************************
     */
    color1: '#ffffff',
    color1Inverse: '#417d65',
    color1InverseGradient: 'linear-gradient(147deg, #000000 0%, #434343 74%)',

    /**
     ************************************
     * Cards
     ************************************
     */
    color2: '#c8c5c6',
    color2Transparent: 'rgba(255,255,255,0.8)',
    color2Inverse: '#281e20',
    color2InverseTransparent: 'rgba(0,0,0,0.7)',

    /**
     ************************************
     * Headers
     ************************************
     */
    color3: 'white',
    color3Compliment: '#c8c5c6',
    color3Inverse: '#202523',

    /**
     ************************************
     * Buttons
     ************************************
     */
    color4: '#c8c5c6',
    color4Inverse: '#5b5a5f',
    color4Compliment: '#d5d4da',
    color4InverseCompliment: '#6b6b6b',

    /**
     ************************************
     * Control bar
     ************************************
     */
    controlBar: {
        backgroundColor: '#282828',
        foregroundColor: '#ffffff',
    },

    /**
     ************************************
     * Tool belt
     ************************************
     */
    toolBeltColor2: '#282728',

    /**
     ************************************
     * Errors
     ************************************
     */
    errorColor1: '#fff',
    errorColor1Inverse: '#FF3326',
}

export default theme
