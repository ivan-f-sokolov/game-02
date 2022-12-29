import { prisma } from "."
export interface reqData {
  name: string
}

export const _getCollision = async (reqData: reqData) => {
  try {
    const res = await prisma.map.findFirst({
      where: {
        name: reqData.name,
      },
    })
    return res
  } catch (err) {
    return err
  }
}
