import expect from 'expect'
import app from '../scripts/app.js'

describe('app.js', () =>{
    it('app', () =>{
        expect(app('hoge')).toBe('hoge!!!')
    })
})
