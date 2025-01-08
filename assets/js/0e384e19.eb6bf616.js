"use strict";(self.webpackChunksurtiapp_docusaurus=self.webpackChunksurtiapp_docusaurus||[]).push([[3976],{2053:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"intro","title":"Primeros Pasos","description":"Esta es la documentacion de los eventos de analitica para Google Analytics 4 y Clevertap de  Surtiapp en su version App y Web.","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/surtiapp-tracking-documentation/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Eventos","permalink":"/surtiapp-tracking-documentation/docs/category/eventos"}}');var i=r(4848),n=r(8453);const t={sidebar_position:1},c="Primeros Pasos",l={},o=[{value:"ID y Propiedades del Usuario",id:"id-y-propiedades-del-usuario",level:3},{value:"Propiedades / parametros del Usuario",id:"propiedades--parametros-del-usuario",level:3}];function h(e){const d={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.header,{children:(0,i.jsx)(d.h1,{id:"primeros-pasos",children:"Primeros Pasos"})}),"\n",(0,i.jsxs)(d.p,{children:["Esta es la documentacion de los eventos de analitica para Google Analytics 4 y Clevertap de  ",(0,i.jsx)(d.strong,{children:"Surtiapp"})," en su version App y Web."]}),"\n",(0,i.jsx)(d.h3,{id:"id-y-propiedades-del-usuario",children:"ID y Propiedades del Usuario"}),"\n",(0,i.jsx)(d.p,{children:"El usuario al iniciar sesion en la App, se debe llamar el metodo setUserID que nos permite definir no solo el ID de ese usuario ( llamandolo desde el Backend ), sino ademas unas propiedades - parametros de ese usuario y que heredan todos los eventos que el haga en esa sesion. Las Propiedades - parametros del Usuario para diferenciarlas de las de los eventos, las vamos a manejar en Mayuscula al incio y en Camel"}),"\n",(0,i.jsx)(d.h3,{id:"propiedades--parametros-del-usuario",children:"Propiedades / parametros del Usuario"}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"Nombre"}),(0,i.jsx)(d.th,{children:"Tipo"}),(0,i.jsx)(d.th,{children:"Obligatorio"}),(0,i.jsx)(d.th,{children:"Ejemplo"}),(0,i.jsx)(d.th,{children:"Descripcion"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"UserID"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"number"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:"4237423"}),(0,i.jsx)(d.td,{children:"ID de identificacion del Usuario"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"SiteId"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"number"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:"45"}),(0,i.jsx)(d.td,{children:"ID del centro de distribucion"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"SiteName"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"string"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:"bogota_salitre"}),(0,i.jsx)(d.td,{children:"Nombre del centro de distribucion"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"CustomerCluster"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"string"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.strong,{children:"Por Definir"})}),(0,i.jsx)(d.td,{children:"Cluster al que pertenece el Cliente"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"CustomerIdentification"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"number"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.strong,{children:"Por Definir"})}),(0,i.jsx)(d.td,{children:"Identificacion del Cliente"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"ClevertapIdentity"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"string"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.strong,{children:"Por Definir"})}),(0,i.jsx)(d.td,{children:"Id del Cliente en Clevertap"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"CustomerUsername"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"string"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:"diego345"}),(0,i.jsx)(d.td,{children:"Username del Cliente"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"CustomerName"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"string"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:"Diego Torres"}),(0,i.jsx)(d.td,{children:"Nombre del cliente"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"InstallationId"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"number"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:"42"}),(0,i.jsx)(d.td,{children:"Id de la instalacion"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"CustomerEmail"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"string"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.a,{href:"mailto:diego345@gmail.com",children:"diego345@gmail.com"})}),(0,i.jsx)(d.td,{children:"Correo del Usuario"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"CustomerPhone"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"number"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:"3115862088"}),(0,i.jsx)(d.td,{children:"Numero de celular del usuario"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"CustomerAddress"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"string"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:"Cra 81B # 7D - 56"}),(0,i.jsx)(d.td,{children:"Direccion del Usuario"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"CustomerCity"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"string"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:"bogota"}),(0,i.jsx)(d.td,{children:"Ciudad del Usuario"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"CustomerStateName"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"string"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:"bogota_dc"}),(0,i.jsx)(d.td,{children:"Departamento del usuario"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"CustomerLatitude"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"string"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:"-76.945435"}),(0,i.jsx)(d.td,{children:"Latitud de la ubicacion del usuario"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"CustomerLongitude"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"string"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:"23.565646"}),(0,i.jsx)(d.td,{children:"Longitud de la ubicacion del usuario"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"UserType"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"string"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.strong,{children:"Por Definir"})}),(0,i.jsx)(d.td,{children:"Tipo de Usuario"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"CreatedAt"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"date"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:"2025-01-03"}),(0,i.jsx)(d.td,{children:"Fecha de creacion del usuario"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"BirthDate"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"date"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:"1988-06-23"}),(0,i.jsx)(d.td,{children:"Fecha de nacimiento del usuario"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"ClevertapMsgPush"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"boolean"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})}),(0,i.jsx)(d.td,{children:"Autorizacion envios Push"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"ClevertapMsgEmail"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"boolean"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})}),(0,i.jsx)(d.td,{children:"Autorizacion envios email"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"ClevertapMsgSms"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"boolean"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})}),(0,i.jsx)(d.td,{children:"Autorizacion envios SMS"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"ClevertapMsgWhatsapp"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"boolean"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})}),(0,i.jsx)(d.td,{children:"Autorizacion envios Whatsapp"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"ClevertapDndPhone"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"boolean"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.strong,{children:"Por Definir"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.strong,{children:"Por Definir"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"ClevertapDndEmail"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"boolean"})}),(0,i.jsx)(d.td,{children:"Si"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.strong,{children:"Por Definir"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.strong,{children:"Por Definir"})})]})]})]})]})}function x(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,d,r)=>{r.d(d,{R:()=>t,x:()=>c});var s=r(6540);const i={},n=s.createContext(i);function t(e){const d=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(n.Provider,{value:d},e.children)}}}]);