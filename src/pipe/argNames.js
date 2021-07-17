const argNames = acorn.parse(f).body[0].params.map(x => x.name);

export default argNames