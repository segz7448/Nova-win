import type {Snapshot} from '../types';
const now=Date.now();
export const demo:Snapshot={asOf:now,cursor:18429,metrics:{runs:12,tools:847,errors:2,cost:'$2.41'},agents:[
{id:'orchestrator',name:'NOVA Orchestrator',role:'primary',status:'running',task:'Reconcile deployment state',model:'Qwen3 32B',tokens:'42.8k',duration:'18m 24s',cpu:38,memory:62},
{id:'research-07',name:'Research 07',role:'worker',status:'running',task:'Compare provider latency',model:'Qwen3 4B',tokens:'18.3k',duration:'7m 12s',cpu:71,memory:44},
{id:'builder-03',name:'Builder 03',role:'worker',status:'idle',task:'Waiting for task graph',model:'Qwen3 32B',tokens:'9.1k',duration:'2m 03s',cpu:3,memory:21},
{id:'watchdog',name:'Watchdog',role:'system',status:'degraded',task:'Sandbox health sweep',model:'Rules',tokens:'—',duration:'continuous',cpu:12,memory:17}],events:[
{seq:18429,time:'05:26:48',agent:'orchestrator',type:'tool',title:'docker.inspect',detail:'Inspected 6 running containers',duration:'124ms',tone:'ok'},
{seq:18428,time:'05:26:47',agent:'research-07',type:'file',title:'Artifact created',detail:'provider-latency-report.json · 184 KB',duration:'32ms'},
{seq:18427,time:'05:26:45',agent:'orchestrator',type:'thought',title:'Planning next action',detail:'Deployment health is stable. Verifying two stale workers before advancing.'},
{seq:18426,time:'05:26:42',agent:'watchdog',type:'error',title:'Readiness probe slow',detail:'sandbox-builder-03 responded in 2.4s (threshold 2s)',tone:'warn'},
{seq:18425,time:'05:26:39',agent:'research-07',type:'tool',title:'http.fetch',detail:'GET /admin/status · 200 OK',duration:'284ms',tone:'ok'},
{seq:18424,time:'05:26:32',agent:'orchestrator',type:'approval',title:'Approval waiting',detail:'Production publish is paused pending operator approval',tone:'warn'},
{seq:18423,time:'05:26:29',agent:'builder-03',type:'system',title:'Run complete',detail:'Build graph completed: 48/48 checks passed',tone:'ok'}],services:[
{name:'Backend API',status:'ok',latency:'28 ms',detail:'v0.1.0 · :8080'}, {name:'Inference gateway',status:'ok',latency:'412 ms',detail:'2 models loaded'}, {name:'Docker engine',status:'ok',latency:'9 ms',detail:'6 / 6 healthy'}, {name:'Event stream',status:'warn',latency:'2.4 s',detail:'1 delayed consumer'}],sandboxes:[
{name:'nova-primary',status:'ok',cpu:38,memory:62,uptime:'14d 06h'}, {name:'research-07',status:'ok',cpu:71,memory:44,uptime:'07h 42m'}, {name:'builder-03',status:'warn',cpu:3,memory:21,uptime:'02h 18m'}],schedules:[{name:'Heartbeat sweep',next:'in 38s',status:'ok'},{name:'Memory compaction',next:'in 12m',status:'ok'},{name:'Weekly report',next:'Sun 09:00',status:'neutral'}]};
