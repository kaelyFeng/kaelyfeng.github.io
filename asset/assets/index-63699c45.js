import{j as e,L as l,l as a,a as d}from"./index-6392e540.js";import{t as r,a as i}from"./index-fee950f2.js";const h=()=>e.jsxs("div",{className:"layout teacher",children:[e.jsx("div",{className:"teacher-ad",children:e.jsx("div",{className:"layout-container teacher-ad-container",children:e.jsxs("div",{className:"teacher-ad-content",children:[e.jsx("div",{className:"teacher-ad-bold",children:"集合专业的创客教育师资队伍"}),e.jsx("div",{className:"teacher-ad-bold",children:"提供专业的师资培训"})]})})}),e.jsxs("div",{className:"layout-container",children:[e.jsxs("div",{className:"teacher-links",children:[e.jsxs("dl",{className:"teacher-links-list1",children:[e.jsx("dt",{children:"申请师资"}),e.jsxs("dd",{children:["学校缺少创客教师，这里",e.jsx(l,{to:a.teacher.apply.url,children:a.teacher.apply.text})]})]}),e.jsxs("dl",{className:"teacher-links-list2",children:[e.jsx("dt",{children:"我要支援"}),e.jsxs("dd",{children:["乡镇创客教育",e.jsx(l,{to:a.teacher.job.online.url,children:a.teacher.job.online.text})]})]}),e.jsxs("dl",{className:"teacher-links-list3",children:[e.jsx("dt",{children:"我要支援"}),e.jsxs("dd",{children:["乡镇小学创客教师职位",e.jsx(l,{to:a.teacher.job.offline.url,children:a.teacher.job.offline.text})]})]})]}),e.jsxs("div",{className:"teacher-needs",children:[e.jsxs("div",{className:"teacher-needs-title",children:[e.jsx("div",{className:"new",children:"最新师资需求"}),e.jsx("div",{className:"more",children:e.jsx(l,{to:a.teacher.needs.url,children:"更多>>"})})]}),d.map(r,(s,c)=>c<6&&e.jsx("div",{className:"teacher-needs-new1 teacher-needs-teacher",children:e.jsxs("dl",{className:`${(c+1)%3!==0?"teacher-needs-divider":""}`,children:[e.jsx("dt",{className:`bg-${s.color}`,children:s.school}),e.jsx("dd",{className:"title",children:e.jsxs(l,{to:a.teacher.job.url,children:["需要创客教师",s.needCount]})}),e.jsxs("dd",{children:["工作职责: ",s.task]}),e.jsx("dd",{className:"time",children:s.time})]})},`job_${c}`))]}),e.jsxs("div",{className:"teacher-needs",children:[e.jsxs("div",{className:"teacher-needs-title",children:[e.jsx("div",{className:"new",children:"最新培训机会"}),e.jsx("div",{className:"more",children:e.jsx(l,{to:a.teacher.training.url,children:"更多>>"})})]}),d.map(i,(s,c)=>c<8&&e.jsx("div",{className:"teacher-needs-new2 teacher-needs-training",children:e.jsxs("dl",{className:`${(c+1)%4!==0?"teacher-needs-divider":""}`,children:[e.jsx("dt",{className:`bg-new${s.img}`,children:e.jsx(l,{to:"#",children:s.title})}),e.jsx("dd",{children:s.content}),e.jsx("dd",{className:"time",children:s.time})]})},`training_${c}`))]})]})]});export{h as default};
