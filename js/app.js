document.addEventListener('alpine:init',()=>{
const PL=['#2a78d6','#eb6834','#eda100','#1baf7a','#e87ba4','#6250d6','#e34948','#008300'],PD=['#3987e5','#d95926','#c98500','#199e70','#d55181','#9085e9','#e66767','#008300'],OP=[1,.78,.6,.46];
const norm=a=>{const s=a.reduce((x,y)=>x+y,0)||24;return a.map(x=>x*24/s)};
const arc=(a0,a1,R,r,pad)=>{a0+=pad;a1-=pad;const lg=a1-a0>Math.PI?1:0,X=(a,q)=>(150+q*Math.sin(a)).toFixed(2),Y=(a,q)=>(150-q*Math.cos(a)).toFixed(2);return `M${X(a0,R)} ${Y(a0,R)}A${R} ${R} 0 ${lg} 1 ${X(a1,R)} ${Y(a1,R)}L${X(a1,r)} ${Y(a1,r)}A${r} ${r} 0 ${lg} 0 ${X(a0,r)} ${Y(a0,r)}Z`};
Alpine.data('atlas',()=>({
root:window.ATLAS,stack:[],sel:-1,q:'',tab:'overview',all:[],
dark:matchMedia('(prefers-color-scheme: dark)').matches,
C5:['#6250d6','#2a78d6','#eb6834','#1baf7a','#e87ba4'],
N5:['Sleep','Work or study','Chores and commute','Meals and family','Leisure and screens'],
init(){
const calc=n=>{if(n.c){n.v=n.c.reduce((s,k)=>s+calc(k),0);n.h=[0,1,2,3,4].map(j=>n.c.reduce((s,k)=>s+k.v*k.h[j],0)/n.v)}else n.h=norm(window.HOURS[n.n]||[7.5,8,3,2,3.5]);n.p=window.PROFILES[n.n]||null;return n.v};
const mark=(n,i)=>{n.ci=i;(n.c||[]).forEach(k=>mark(k,i))};
const flat=(n,p)=>{this.all.push({n,p});(n.c||[]).forEach(k=>flat(k,[...p,k]))};
calc(this.root);this.root.c.forEach((k,i)=>mark(k,i));flat(this.root,[this.root]);
this.stack=[this.root];document.documentElement.dataset.theme=this.dark?'dark':'light';
this.$nextTick(()=>this.replay())},
get cur(){return this.stack[this.stack.length-1]},
get kids(){return this.cur.c},
get tg(){return this.sel>=0?this.kids[this.sel]:this.cur},
get leafCount(){return this.all.filter(x=>!x.n.c).length},
get profileCount(){return Object.keys(window.PROFILES).length},
get emoji(){const p=this.sel>=0?[...this.stack,this.tg]:this.stack;for(let i=p.length-1;i>=0;i--)if(window.EMOJI[p[i].n])return window.EMOJI[p[i].n];return '🌍'},
color(k,i){const P=this.dark?PD:PL;return this.stack.length===1?{f:P[i],o:1}:{f:P[k.ci],o:OP[i%4]}},
get paths(){let a=0;return this.kids.map((k,i)=>{const s=k.v/this.cur.v*Math.PI*2,c=this.color(k,i),d=arc(a,a+s,i===this.sel?143:135,78,s<.03?0:.008);a+=s;return `<path class="slice" data-i="${i}" d="${d}" style="fill:${c.f};fill-opacity:${c.o}"/>`}).join('')},
get rows(){const q=this.q.trim().toLowerCase();
if(q)return this.all.filter(x=>x.p.length>1&&(x.n.n+' '+x.n.d).toLowerCase().includes(q)).map(x=>({id:x.n.n,n:x.n.n,sub:x.p.slice(1,-1).map(y=>y.n).join(', ')||'Top level',v:x.n.v,pct:'',p:x.p}));
return this.kids.map((k,i)=>({id:k.n,n:k.n,sub:k.c?'Open group':'',v:k.v,pct:this.pc(k.v/this.cur.v*100),i,f:this.color(k,i).f,o:this.color(k,i).o,on:i===this.sel}))},
fmt(v){return v>=1000?(v/1000).toFixed(2)+' billion':Math.round(v).toLocaleString()+' million'},
sh(v){return v>=1000?(v/1000).toFixed(2)+'B':Math.round(v)+'M'},
pc(p){return p<10?p.toFixed(1)+'%':Math.round(p)+'%'},
fh(x){return (Math.round(x*10)/10)+'h'},
replay(){const el=this.$refs.donut;if(!el)return;el.classList.remove('swirl');void el.getBoundingClientRect();el.classList.add('swirl')},
pick(i){if(this.sel===i&&this.kids[i].c)this.zoom();else this.sel=i},
pickSvg(e){const i=e.target.dataset.i;if(i!==undefined)this.pick(+i)},
zoom(){this.stack.push(this.kids[this.sel>=0?this.sel:0]);this.sel=-1;this.tab='overview';this.replay()},
back(){this.stack.pop();this.sel=-1;this.replay()},
go(p){this.stack=p.slice(0,-1);const last=p[p.length-1];this.sel=this.cur.c.findIndex(k=>k.n===last.n);this.q='';this.replay()},
rowClick(r){r.p?this.go(r.p):this.pick(r.i)},
random(){const l=this.all.filter(x=>!x.n.c);this.go(l[Math.floor(Math.random()*l.length)].p)},
toggle(){this.dark=!this.dark;document.documentElement.dataset.theme=this.dark?'dark':'light'}
}))});
