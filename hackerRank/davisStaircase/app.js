const countSteps = (steps, memory={}) {
    if (steps < 0) return 0
    if (steps === 1) return 1
    if (steps === 2) return 2
    if (steps === 3) return 4
    return (memory[steps] = 
        countSteps(steps - 1, memory) +
        countSteps(steps - 2, memory) +
        countSteps(steps - 3, memory))
}