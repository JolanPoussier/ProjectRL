import starGenerator from './starGenerator'

// Configure Jest Snapshot Testing
expect.addSnapshotSerializer({
  print(val) {
    return String(val)
  },
  test(val) {
    return typeof val === 'string'
  },
})

describe('starGenerator', () => {
  it('renders stars correctly', () => {
    const stars = starGenerator({ star: 3 })
    const starOutput = stars.map(starElement => (starElement.key ? starElement.key.toString() : null))

    // Use Jest Snapshot Testing to capture and compare snapshots
    expect(starOutput).toMatchSnapshot()
  })

  it('generates no stars for a count of 0', () => {
    const starCount = 0
    const stars = starGenerator({ star: starCount })

    // Assert that no stars were generated
    expect(stars.length).toBe(0)
  })
})
