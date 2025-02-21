/// <reference types = "cypress" />

it('Equality', () => {
    const a = 1

    expect(a).eq(1)
    expect(a, 'Deveria ser 1').eq(1)
    expect(a).eq(1)
    expect('a').not.eq('b')
})

it('Truthy', () => {
    const a = true
    const b = null
    let c;

    expect(a).true
    expect(true).true
    expect(b).null
    expect(c).undefined
})

it('Object equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).eq(obj)
    expect(obj).deep.eq({ a: 1, b: 2 })
    expect(obj).eql({ a: 1, b: 2 })
    expect(obj).include({ a: 1 })
    expect(obj).property('b')
    expect(obj).property('b', 2)
    expect(obj).not.empty
    expect({}).empty
})

it('Arrays', () => {
    const arr = [1, 2, 3]

    expect(arr).have.members([1, 2, 3])
    expect(arr).include.members([1, 3])
    expect(arr).not.empty
    expect([]).empty
})

it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).a('number')
    expect(str).a('string')
    expect({}).a('object')
    expect([]).a('array')
})

it('String', () => {
    const str = 'String de teste'

    expect(str).eq('String de teste')
    expect(str).length(15)
    expect(str).contains('de')
    expect(str).match(/de/) //conter 'de'
    expect(str).match(/^String/) //começar com 'String'
    expect(str).match(/teste$/) //terminar com 'teste'
    expect(str).match(/.{15}/)
    expect(str).match(/\w+/) //existem apenas letras
    expect(str).match(/\D+/) //não existem numeros
})

it('Numbers', () => {
    const number = 4
    const floatNumber = 5.2134

    expect(number).eq(4)
    expect(number).above(3)
    expect(number).below(5)
    expect(floatNumber).eq(5.2134)
    expect(floatNumber).closeTo(5.2, 0.1) //proximo de, com precisão de
    expect(floatNumber).above(5)
    expect(floatNumber).below(5.3)
})