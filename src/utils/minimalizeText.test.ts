import minimalizeText from '@/utils/minimalizeText'

test('Delete spaces and minimalize capital letters and remove accents', () => {
  expect(minimalizeText('Gra ADEZ ZDASd éèê')).toBe('graadezzdasdeee')
})
