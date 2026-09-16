const rules=[/(bearer\s+)[a-z0-9._~+/=-]+/gi,/(authorization|api[-_ ]?key|token|secret|password)(\s*[:=]\s*)([^\s,;]+)/gi,/\b(?:ghp|github_pat)_[a-z0-9_]+\b/gi];
export function redact(value:string){return rules.reduce((v,r)=>v.replace(r,(_m,p1='',p2='')=>`${p1}${p2}[REDACTED]`),value)}
