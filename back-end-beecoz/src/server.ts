// src/server.ts
import express from 'express'
import cors from 'cors'
import { routes } from './routes/routes'

const app = express()

app.use(express.json())
app.use(cors())

// log simples p/ ver se a req chegou
app.use((req, _res, next) => { console.log(req.method, req.url); next(); })

app.get('/health', (_req, res) => res.json({ ok: true }))

app.use(routes)

const PORT = Number(process.env.PORT ?? 8080)
const HOST = process.env.HOST ?? '0.0.0.0'     // << importante
app.listen(PORT, HOST, () => console.log(`API on http://${HOST}:${PORT}`))