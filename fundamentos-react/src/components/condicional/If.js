const If = params => {
    const elseChild = params.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = params.children.filter(child => {
        return child !== elseChild
    }) 
    
    if (params.test) {
        return ifChildren
    } else if (elseChild) {
        return elseChild
    } else {
        return false
    }
}

export default If

export const Else = params => params.children;