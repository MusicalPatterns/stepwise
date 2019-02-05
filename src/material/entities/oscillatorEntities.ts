import { Entity, NoteSpec, TimbreNameEnum } from '@musical-patterns/compiler'
import { DictionaryOf } from '@musical-patterns/utilities'
import { buildParts } from '../parts'

const buildOscillatorEntities: () => DictionaryOf<Entity> =
    (): DictionaryOf<Entity> => {
        const {
            backbonePart,
            fivePerPart,
            mainDescentContinuationPart,
            mainDescentPart,
            ninePerPart,
            sevenPerPart,
            threePerPart,
        }: DictionaryOf<NoteSpec[]> = buildParts()

        const mainDescentOscillatorEntity: Entity = {
            noteSpecs: mainDescentPart,
            timbreName: TimbreNameEnum.DISSONANT_2,
        }

        const mainDescentContinuationOscillatorEntity: Entity = {
            noteSpecs: mainDescentContinuationPart,
            timbreName: TimbreNameEnum.TB303_SQUARE,
        }

        const threePerOscillatorEntity: Entity = {
            noteSpecs: threePerPart,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const fivePerOscillatorEntity: Entity = {
            noteSpecs: fivePerPart,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const sevenPerOscillatorEntity: Entity = {
            noteSpecs: sevenPerPart,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const ninePerOscillatorEntity: Entity = {
            noteSpecs: ninePerPart,
            timbreName: TimbreNameEnum.SQUARE,
        }

        const backboneOscillatorEntity: Entity = {
            noteSpecs: backbonePart,
            timbreName: TimbreNameEnum.DISSONANT_PIANO,
        }

        return {
            backboneOscillatorEntity,
            fivePerOscillatorEntity,
            mainDescentContinuationOscillatorEntity,
            mainDescentOscillatorEntity,
            ninePerOscillatorEntity,
            sevenPerOscillatorEntity,
            threePerOscillatorEntity,
        }
    }

export {
    buildOscillatorEntities,
}