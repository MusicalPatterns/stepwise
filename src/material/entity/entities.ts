import { Entity, MaterializeEntities } from '@musical-patterns/material'
import { computeOscillatorEntities } from './oscillatorEntities'
import { computeSampleEntities } from './sampleEntities'
import { OscillatorEntities, SampleEntities } from './types'

const materializeEntities: MaterializeEntities =
    (): Entity[] => {
        const sampleEntities: SampleEntities = computeSampleEntities()
        const oscillatorEntities: OscillatorEntities = computeOscillatorEntities()

        return [
            oscillatorEntities.alpha,
            oscillatorEntities.beta,
            oscillatorEntities.workout,
            oscillatorEntities.threePer,
            oscillatorEntities.fivePer,
            oscillatorEntities.sevenPer,
            oscillatorEntities.ninePer,
            sampleEntities.hihat,
            sampleEntities.snare,
            sampleEntities.kick,
        ]
    }

export {
    materializeEntities,
}
