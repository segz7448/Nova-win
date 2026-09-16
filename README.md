# NOVA Monitor for Windows

A read-only desktop observability console for [NOVA AUTOMATON](https://github.com/segz7448/Nova-bot). It is built for visibility, not conversation or control.

## What it shows

- Agents, runs, tasks, event timeline and tool activity
- Logs, artifacts, models and inference status
- Backend services, sandboxes, health and resource use
- Failures, approvals waiting, schedules and history
- Live connection state with explicit reconnecting, offline and stale states

The interface has no chat composer and sends no agent commands. Displayed payloads pass through client-side credential redaction.

## Current Nova-bot contract

Nova-bot already exposes a protected read-only `GET /admin/status` endpoint using `x-admin-key`. It contains spend, agent budget use, exec/payment failures and sandbox health. NOVA Monitor consumes that endpoint without modifying Nova-bot. Nova-bot's `event_stream`, `tool_calls`, `task_graph`, `metric_snapshots`, `scheduled_jobs`, `agents`, `sub_agents`, `agent_processes`, `sandboxes`, `exec_log`, `usage_log`, `plan_approvals`, and `model_registry` stores are the source contract for the richer stream.

The current app launches in an honest demo-stream state until a production Nova-bot telemetry bridge is available. It never labels demo data as live. To point a web development build at the existing status route:

```html
<script>window.__NOVA_CONFIG__={baseUrl:'https://your-nova-host',adminKey:'session-only-key',demo:false}</script>
```

Do not hardcode the admin key in a build. A production connection should use a short-lived, read-only monitor credential issued by a local bridge. The bridge should publish immutable, monotonically sequenced events and snapshots over TLS WebSocket/SSE, support resume from the last cursor, bounded buffers and snapshot fallback, and apply server-side redaction. That bridge belongs in Nova-bot and is intentionally not added here without separate approval.

## Development

```bash
npm ci
npm test
npm run typecheck
npm run dev
npm run test:ui
```

## Windows builds

GitHub Actions builds two unsigned, signing-ready x64 artifacts:

- `NOVA-Monitor-1.0.0-x64.exe` - NSIS installer
- `NOVA-Monitor-Portable-1.0.0-x64.exe` - portable executable

The app itself has no Nova-bot runtime dependency. Live monitoring requires network access to the configured Nova-bot read-only endpoint. Code-signing can be enabled later with a Windows certificate secret; unsigned builds may trigger SmartScreen.
