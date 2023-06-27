import { scalarType } from "nexus";
import { NotImplementedError } from "../../errors";


export const DateScalar = scalarType({
    name: 'Date',
    asNexusMethod: 'date',
    description: 'Date custom scalar type',
    parseValue(_) {
        throw new NotImplementedError("praseValue for date scalar it's not supported yet")
    },
    serialize(value) {
        return value
    },
    parseLiteral(__dirname) {
        throw new NotImplementedError("parseLiteral for date scalar it's not supported yet")
    },
  })