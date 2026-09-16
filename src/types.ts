export type Tone='ok'|'warn'|'bad'|'neutral';
export type Agent={id:string;name:string;role:string;status:'running'|'idle'|'degraded'|'offline';task:string;model:string;tokens:string;duration:string;cpu:number;memory:number};
export type Event={seq:number;time:string;agent:string;type:'thought'|'tool'|'file'|'system'|'error'|'approval';title:string;detail:string;duration?:string;tone?:Tone};
export type Snapshot={agents:Agent[];events:Event[];services:{name:string,status:Tone,latency:string,detail:string}[];sandboxes:{name:string,status:Tone,cpu:number,memory:number,uptime:string}[];schedules:{name:string,next:string,status:Tone}[];metrics:{runs:number;tools:number;errors:number;cost:string};cursor:number;asOf:number};
