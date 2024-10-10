import {makeInstaller} from "@leexan-element/utils";
import components from "./components.ts";
import "@leexan-element/theme/index.css"

const installer=makeInstaller(components)
export * from '@leexan-element/components'
export default installer