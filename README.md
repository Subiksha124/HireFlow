# HireFlow

AI-powered recruitment assistant for recruiters (AI Agent Hackathon 2026).

HireFlow helps recruiters write job descriptions, extract requirements, review resume evidence, and generate interview questions. **The recruiter always makes the final decision.** The system never auto-hires or auto-rejects candidates.

## Product rules

- Be evidence-based. If a skill is missing from a resume, say that it was **not found in the submitted information**, not that the candidate “does not have” that skill.
- Do not invent suitability percentages.
- Custom Node.js agents and tools only. No LangChain / LangGraph / CrewAI unless we explicitly add them later.
- RAG is not part of the first version.

## Tech stack

- **Frontend:** React, Vite, React Router, Axios, Tailwind CSS
- **Backend:** Node.js, Express, JWT, bcrypt, Multer, PDF parsing
- **Database:** MongoDB + Mongoose
- **AI:** Google Gemini API, custom agents + orchestrator

## Current status

**Phase 0 — project scaffold only.**  
Folders, package files, and env examples exist. Authentication, database connection, APIs, agents, and tools are not built yet.

## Folder structure

```
HireFlow/
├── client/                 React (Vite) app
├── server/                 Express API, agents, tools
├── uploads/                Local resume files (gitignored contents)
├── .gitignore
├── .env.example
└── README.md
```

See the architecture notes in this README’s “Folders” section for what each `server/` and `client/src/` directory is for.

## Setup (Phase 0)

You need Node.js installed.

```bash
cd client
npm install

cd ../server
npm install
```

Copy env examples when you start later phases:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

On Windows PowerShell:

```powershell
Copy-Item client\.env.example client\.env
Copy-Item server\.env.example server\.env
```

## Verify the scaffold

```bash
cd client
npm install
npm run dev
```

The Vite app should start (default http://localhost:5173) and show **HireFlow**.

```bash
cd server
npm install
npm start
```

You should see:

`HireFlow server scaffold is in place. Application features are not implemented yet.`

## Folders (intent)

### client/src

| Folder | Purpose |
| --- | --- |
| `components/` | Reusable UI (forms, evidence table, question list) |
| `pages/` | Route screens (login, jobs, candidate detail) |
| `services/` | Axios calls to the Express API |
| `context/` | React context (auth later) |

### server

| Folder | Purpose |
| --- | --- |
| `config/` | Env, Mongo, Gemini client setup |
| `middleware/` | Auth, uploads, errors |
| `models/` | Mongoose schemas |
| `routes/` | HTTP paths only |
| `controllers/` | Request/response handling |
| `services/` | Business rules; start workflows |
| `agents/` | Job Analysis, Screening, Interview agents |
| `agents/orchestrator/` | Workflow state and next-step decisions |
| `tools/` | PDF parse, DB retrieval, Gemini I/O helpers |
| `prompts/` | Gemini prompt templates |
| `utils/` | JSON parsing, evidence-language checks |
| `uploads/` (repo root) | Saved resume PDFs |

## Planned development order

0. Scaffold (this phase)  
1. Auth + MongoDB  
2. Job CRUD (no AI)  
3. Gemini JSON helper  
4. Job Analysis Agent  
5. Resume upload + PDF parser  
6. Candidate Screening Agent  
7. Orchestrator + workflow state  
8. Interview Agent  
9. Recruiter decision  
10. Frontend screens for the demo path  

## License

Student hackathon project.
