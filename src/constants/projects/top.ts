import { ProjectType } from "."
import other from "./other"
import python from "./python"
import website from "./website"

let itens = [website[0], website[1], website[2], python[0], other[0]]

let itens_with_id: ProjectType[] = []

for (let i = 0; i < itens.length; i++) {
  if (itens[i]) {
    itens_with_id.push({ ...itens[i], id: i })
  }
}

const top: ProjectType[] = itens_with_id

export default top
