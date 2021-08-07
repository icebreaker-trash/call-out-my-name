import container from './container'
import TYPES from '@/types'
import type { ThrowableWeapon, Warrior, Weapon } from '@/interfaces'

const ninja = container.get<Warrior>(TYPES.Warrior)

const fight = ninja.fight()
const sneak = ninja.sneak()
console.log(fight, sneak)
