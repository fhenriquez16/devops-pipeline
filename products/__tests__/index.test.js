import supertest from 'supertest'
import app from '../src/app'

describe('Index route', () => {
	it('should return an empty object', async () => {
		const res = await supertest(app).get('/products')

		expect(res.statusCode).toEqual(200)
	})
}) 
