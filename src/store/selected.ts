import type { StateCreator } from "zustand"

type State = {}

type Action = {}

export type SelectedState = State & Action

export const createSelectedStore: StateCreator<State> = (set) => ({})
