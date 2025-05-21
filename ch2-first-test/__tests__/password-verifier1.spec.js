import {verifyPassword} from "../password-verifier0";

describe("verifyPassword", ()=>{
    test('Получение правила, возвращает ошибку', ()=>{
        const fakeRule = input =>({
           passed:false, reason: 'фальшивая причина'
        })

        const errors =verifyPassword('любое значение', [fakeRule])
        expect(errors[0]).toContain('фальшивая причина')
    })
})
