import { create } from "zustand"

import { createSelectedStore } from "./selected"
import type { SelectedState } from "./selected"

export const useGlobalStore = create<SelectedState>((...a) => ({
  ...createSelectedStore(...a),
}))
