// export default function Page() {
//     return (
//         <div className="overflow-hidden xl:px-5 px-0">

//     <main>
//       <section className="mt-5">
//         <div className="container flex flex-col items-center xl:block bg-white rounded-[20px] overflow-hidden pt-12 xl:pt-[60px] px-[51px] pb-[103px] relative z-[1]">
//           <img src="./assets/images/settings-icon.svg" alt="" className="w-[71px] nokia:w-[95px] sm:w-[152px] xl:w-[103px] 3xl:w-[169px] absolute right-[-14px] nokia:right-[-19px] sm:right-[-31px] xl:right-[-51px] 3xl:right-[-65px] top-[371px] nokia:top-[495px] sm:top-[792px] xl:top-[109px] 3xl:top-[47px] z-[-1]"/>
//           <img src="./assets/images/settings-icon-gray.svg" alt="" className="hidden 3xl:block w-[73px] absolute right-[636px] top-[60px] z-[-1]"/>
//           <img src="./assets/images/settings-icon-gray.svg" alt="" className="w-[22px] nokia:w-[29px] sm:w-[48px] absolute right-[45px] nokia:right-[60px] sm:right-[97px] xl:right-[406px] 3xl:right-[560px] bottom-[110px] nokia:bottom-[146px] sm:bottom-[234px] xl:bottom-[102px] 3xl:bottom-[219px] z-[-1]"/>
//           <img src="./assets/images/settings-icon.svg" alt="" className="w-[44px] nokia:w-[59px] sm:w-[95px] 3xl:w-[90px] absolute left-[-11px] nokia:left-[-15px] sm:left-[-24px] xl:left-auto xl:right-[595px] 3xl:right-[679px] top-[154px] nokia:top-[205px] sm:top-[329px] xl:top-auto xl:bottom-[-25px] 3xl:bottom-[78px] z-[-1]"/>
//           <img src="./assets/images/msg-icon.svg" alt="" className="w-[64px] nokia:w-[86px] sm:w-[138px] 3xl:w-auto absolute left-[19px] nokia:left-9 sm:left-[58px] xl:left-auto xl:right-[257px] 3xl:right-[356px] bottom-[181px] nokia:bottom-[252px] sm:bottom-[404px] xl:bottom-auto xl:top-[55px] 3xl:top-[113px] z-[-1]"/>
//           <img src="./assets/images/home-robot.png" alt="" className="min-w-[321px] nokia:min-w-[428px] sm:min-w-[685px] w-[321px] nokia:w-[428px] sm:w-[685px] xl:w-[549px] 3xl:w-[840px] absolute translate-x-1/2 xl:translate-x-0 right-1/2 xl:right-[-119px] 3xl:right-[-167px] bottom-[-61px] nokia:bottom-[-82.5px] sm:bottom-[-132px] xl:bottom-[-37px] 3xl:bottom-[-212px] z-[-1]"/>
//           <h2 className="order-1 text-[25px] nokia:text-[30px] sm:text-[50px] xl:text-[55px] 3xl:text-[64px] leading-[120%] font-IgraSans uppercase mb-[22px] nokia:mb-[19px] sm:mb-[29px] xl:mb-[34px] 3xl:mb-16 text-center xl:text-start"><span className="inline text-purple">Техническая сборка <br> автоворонки</span> в соцсетях <br> и мессенджерах за 72 часа </h2>
//           <ul className="order-3 flex flex-col xl:flex-row  items-stretch gap-[17px] nokia:gap-[22px] sm:gap-[28px] 3xl:gap-[34px] mb-[247px] nokia:mb-[356px] sm:mb-[571px] xl:mb-[46px] 3xl:mb-[52px]">
//             <li className="w-[194px] nokia:w-[260px] sm:w-[415px] xl:w-[318px] 3xl:w-[386px] flex flex-col items-start gap-2 nokia:gap-[10px] sm:gap-[13px] 3xl:gap-4 bg-[rgba(243,243,243,0.5)] rounded-[16px] nokia:rounded-[21px] xl:rounded-[26px] 3xl:rounded-[32px] pt-2 nokia:pt-[10px] sm:pt-[13px] 3xl:pt-[16px] pr-[22px] 3xl:pr-[60px] pb-[23px] nokia:pb-8 sm:pb-[37px] 3xl:pb-[45px] pl-[23px] nokia:pl-[30px] sm:pl-[37px] 3xl:pl-[46px]">
//               <img src="./assets/images/home-icon-1.svg" alt="" className="w-[23px] nokia:w-[31px] sm:w-[38px] 3xl:w-auto"/>
//               <p className="font-Manrope text-[12px] nokia:text-[16px] sm:text-[25px] xl:text-[19px] 3xl:text-[24px] font-bold leading-[120%] uppercase">интеграции любой сложности</p>
//             </li>
//             <li className="w-[194px] nokia:w-[260px] sm:w-[415px] xl:w-[290px] 3xl:w-[386px] flex flex-col items-start gap-2 nokia:gap-[10px] sm:gap-[13px] 3xl:gap-4 bg-[rgba(243,243,243,0.5)] rounded-[16px] nokia:rounded-[21px] xl:rounded-[26px] 3xl:rounded-[32px] pt-2 nokia:pt-[10px] sm:pt-[13px] 3xl:pt-[16px] pr-[22px] 3xl:pr-[60px] pb-[23px] nokia:pb-8 sm:pb-[37px] 3xl:pb-[45px] pl-[23px] nokia:pl-[30px] sm:pl-[37px] 3xl:pl-[46px]">
//               <img src="./assets/images/home-icon-1.svg" alt="" className="w-[23px] nokia:w-[31px] sm:w-[38px] 3xl:w-auto"/>
//               <p className="font-Manrope text-[12px] nokia:text-[16px] sm:text-[25px] xl:text-[19px] 3xl:text-[24px] font-bold leading-[120%] uppercase">Соблюдение <br> сроков</p>
//             </li>
//             <li className="w-[194px] nokia:w-[260px] sm:w-[415px] xl:w-[318px] 3xl:w-[386px] flex flex-col items-start gap-2 nokia:gap-[10px] sm:gap-[13px] 3xl:gap-4 bg-[rgba(243,243,243,0.5)] rounded-[16px] nokia:rounded-[21px] xl:rounded-[26px] 3xl:rounded-[32px] pt-2 nokia:pt-[10px] sm:pt-[13px] 3xl:pt-[16px] pr-[22px] 3xl:pr-[60px] pb-[23px] nokia:pb-8 sm:pb-[37px] 3xl:pb-[45px] pl-[23px] nokia:pl-[30px] sm:pl-[37px] 3xl:pl-[46px]">
//               <img src="./assets/images/home-icon-1.svg" alt="" className="w-[23px] nokia:w-[31px] sm:w-[38px] 3xl:w-auto"/>
//               <p className="font-Manrope text-[12px] nokia:text-[16px] sm:text-[25px] xl:text-[19px] 3xl:text-[24px] font-bold leading-[120%] uppercase">во всех соцсетях <br> и мессенджерах</p>
//             </li>
//           </ul>
//           <a href="#" className="order-2 btn_green mb-[18px] nokia:mb-[33px] xl:mb-0">
//             <span>оставить заявку</span>
//             <img src="./assets/images/arrow-right.svg" alt=""/>
//           </a>
//         </div>
//       </section>

//       <section className="mt-5 hidden lg:block">
//         <div className="container">
//           <h2 className="font-IgraSans text-[48px] 3xl:text-[64px] leading-[120%] font-normal uppercase mb-12 3xl:mb-[65px]">что могут <span className="text-purple">чат-боты:</span></h2>
//           <ul className="grid grid-cols-3 gap-[43px_33px] 3xl:gap-[43px_45px]">
//             <li>
//               <a href="#" className="flex flex-col items-start justify-between min-h-[482px] 3xl:min-h-[647px] bg-bg-color rounded-[38px] 3xl:rounded-[50px] p-[45px] 3xl:p-[61.5px] font-Manrope">
//                 <img src="./assets/images/can-icon-1.svg" alt="" className="w-[49px] 3xl:w-auto"/>
//                 <span className="flex flex-col items-start">
//                   <span className="text-[18px] 3xl:text-[25px] leading-[120%] font-medium text-secondary mb-[5px] 3xl:mb-[7px] block">01</span>
//                   <span className="block text-[24px] 3xl:text-[34px] leading-[120%] font-bold uppercase mb-[24px] 3xl:mb-[33px]">Прогреть вашу аудиторию:</span>
//                   <span className="block h-[1.4px] w-full bg-secondary mb-[24px] 3xl:mb-[33px]"></span>
//                   <span className="text-[16px] 3xl:text-[22px] font-normal text-secondary leading-[120%]">Видео, текст, текст + картинка, аудио. Если человек ничего не делает, то бот отправит напоминание</span>
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex flex-col items-start justify-between min-h-[482px] 3xl:min-h-[647px] bg-bg-color rounded-[38px] 3xl:rounded-[50px] p-[45px] 3xl:p-[61.5px] font-Manrope">
//                 <img src="./assets/images/can-icon-2.svg" alt="" className="w-[49px] 3xl:w-auto"/>
//                 <span className="flex flex-col items-start">
//                   <span className="text-[18px] 3xl:text-[25px] leading-[120%] font-medium text-secondary mb-[5px] 3xl:mb-[7px] block">02</span>
//                   <span className="block text-[24px] 3xl:text-[34px] leading-[120%] font-bold uppercase mb-[24px] 3xl:mb-[33px]">консультирование:</span>
//                   <span className="block h-[1.4px] w-full bg-secondary mb-[24px] 3xl:mb-[33px]"></span>
//                   <span className="text-[16px] 3xl:text-[22px] font-normal text-secondary leading-[120%]">Они работают 24/7 и помогают вашей аудитории с ответами на часто задаваемые вопросы и не только</span>
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex flex-col items-start justify-between min-h-[482px] 3xl:min-h-[647px] bg-bg-color rounded-[38px] 3xl:rounded-[50px] p-[45px] 3xl:p-[61.5px] font-Manrope">
//                 <img src="./assets/images/can-icon-3.svg" alt="" className="w-[49px] 3xl:w-auto"/>
//                 <span className="flex flex-col items-start">
//                   <span className="text-[18px] 3xl:text-[25px] leading-[120%] font-medium text-secondary mb-[5px] 3xl:mb-[7px] block">03</span>
//                   <span className="block text-[24px] 3xl:text-[34px] leading-[120%] font-bold uppercase mb-[24px] 3xl:mb-[33px]">Рассылки:</span>
//                   <span className="block h-[1.4px] w-full bg-secondary mb-[24px] 3xl:mb-[33px]"></span>
//                   <span className="text-[16px] 3xl:text-[22px] font-normal text-secondary leading-[120%]">Попав в вашего чат-бота мы можем дальше взаимодействовать со всей базой</span>
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex flex-col items-start justify-between min-h-[482px] 3xl:min-h-[647px] bg-bg-color rounded-[38px] 3xl:rounded-[50px] p-[45px] 3xl:p-[61.5px] font-Manrope">
//                 <img src="./assets/images/can-icon-4.svg" alt="" className="w-[49px] 3xl:w-auto"/>
//                 <span className="flex flex-col items-start">
//                   <span className="text-[18px] 3xl:text-[25px] leading-[120%] font-medium text-secondary mb-[5px] 3xl:mb-[7px] block">04</span>
//                   <span className="block text-[24px] 3xl:text-[34px] leading-[120%] font-bold uppercase mb-[24px] 3xl:mb-[33px]">продажи:</span>
//                   <span className="block h-[1.4px] w-full bg-secondary mb-[24px] 3xl:mb-[33px]"></span>
//                   <span className="text-[16px] 3xl:text-[22px] font-normal text-secondary leading-[120%]">Видео, текст, текст + картинка, аудио. Если человек ничего не делает, то бот отправит напоминание</span>
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex flex-col items-start justify-between min-h-[482px] 3xl:min-h-[647px] bg-bg-color rounded-[38px] 3xl:rounded-[50px] p-[45px] 3xl:p-[61.5px] font-Manrope">
//                 <img src="./assets/images/can-icon-5.svg" alt="" className="w-[49px] 3xl:w-auto"/>
//                 <span className="flex flex-col items-start">
//                   <span className="text-[18px] 3xl:text-[25px] leading-[120%] font-medium text-secondary mb-[5px] 3xl:mb-[7px] block">05</span>
//                   <span className="block text-[24px] 3xl:text-[34px] leading-[120%] font-bold uppercase mb-[24px] 3xl:mb-[33px]">опросы:</span>
//                   <span className="block h-[1.4px] w-full bg-secondary mb-[24px] 3xl:mb-[33px]"></span>
//                   <span className="text-[16px] 3xl:text-[22px] font-normal text-secondary leading-[120%]">Сегментируем базу на части и каждой отправляем персонализированные предложение</span>
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex flex-col items-start justify-between min-h-[482px] 3xl:min-h-[647px] bg-bg-color rounded-[38px] 3xl:rounded-[50px] p-[45px] 3xl:p-[61.5px] font-Manrope">
//                 <img src="./assets/images/can-icon-6.svg" alt="" className="w-[49px] 3xl:w-auto"/>
//                 <span className="flex flex-col items-start">
//                   <span className="text-[18px] 3xl:text-[25px] leading-[120%] font-medium text-secondary mb-[5px] 3xl:mb-[7px] block">06</span>
//                   <span className="block text-[24px] 3xl:text-[34px] leading-[120%] font-bold uppercase mb-[24px] 3xl:mb-[33px]">интеграции:</span>
//                   <span className="block h-[1.4px] w-full bg-secondary mb-[24px] 3xl:mb-[33px]"></span>
//                   <span className="text-[16px] 3xl:text-[22px] font-normal text-secondary leading-[120%]">Чат-боты могут регистрировать учеников в LMS системах, принимать платежи, переносить данные в гугл-таблицу</span>
//                 </span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <section className="mt-5">
//         <div className="container rounded-[20px] !p-[39px_40px_36px] nokia:!p-[53px_55px_48px] sm:!p-[82px_88px] xl:!pl-[36px] xl:pr-[36px] 3xl:!pl-[48px] 3xl:!pr-[48px] overflow-hidden !bg-black-dark text-white font-Manrope relative z-[1]">
//           <img src="./assets/images/level-bg.png" alt="" className="absolute left-0 top-0 w-full h-full object-cover z-[-1]"/>
//           <h2 className="text-center font-normal text-[25px] nokia:text-[29px] sm:text-[48px] laptop:text-[64px] leading-[120%] font-IgraSans mb-[-5px] nokia:mb-[9px] sm:mb-[17px] xl:mb-[6.7px] laptop:mb-[9px] uppercase">Выведем вaши воронки <br> <span className="text-green">нa новый уровень</span></h2>
//           <p className="text-[10px] nokia:text-[14px] sm:text-[22px] laptop:text-3xl text-center font-normal mb-[21px] nokia:mb-[39px] sm:mb-[62px] xl:mb-[66px] laptop:mb-[88px]">За 5 лет работы были сделаны все возможные сценарии: </p>
//           <ul className="flex flex-wrap gap-[13px] nokia:gap-[18px] sm:gap-[29px] xl:gap-[26px] 3xl:gap-9 uppercase font-Manrope border border-border-line border-solid rounded-[12px] nokia:rounded-[16px] sm:rounded-[25px] xl:rounded-[23.83px] 3xl:rounded-[32px] p-[12px] nokia:p-[16px] sm:p-[25px] xl:p-6 3xl:p-8 bg-[rgba(35,34,37,0.5)]">
//             <li className="flex items-center gap-[12px] nokia:gap-[18px] sm:gap-[26px] 3xl:gap-9 w-full xl:w-[calc(100%_-_790px)] 3xl:w-[calc(100%_-_1062px)] p-[18px] nokia:p-[23px] sm:px-[35px] sm:p-9 3xl:p-12 bg-grey-dark rounded-[11.91px] 3xl:rounded-2xl">
//               <img src="./assets/images/level-icon-1.svg" alt="" className="flex-shrink-0 w-[21px] nokia:w-[28px] sm:w-[45px] xl:w-[41px] 3xl:w-[56px]"/>
//               <p className="text-[9px] nokia:text-[12px] sm:text-[19px] xl:text-[17px] 3xl:text-[24px] leading-[120%] font-bold">Клуб с ежемесячной подпиской и автосписанием средств</p>
//             </li>
//             <li className="flex items-center gap-[12px] nokia:gap-[18px] sm:gap-[26px] 3xl:gap-9 w-full xl:w-[356px] 3xl:w-[479px] p-[18px] nokia:p-[23px] sm:px-[35px] sm:p-9 3xl:p-12 bg-grey-dark rounded-[11.91px] 3xl:rounded-2xl">
//               <img src="./assets/images/level-icon-2.svg" alt="" className="flex-shrink-0 w-[21px] nokia:w-[28px] sm:w-[45px] xl:w-[41px] 3xl:w-[56px]"/>
//               <p className="text-[9px] nokia:text-[12px] sm:text-[19px] xl:text-[17px] 3xl:text-[24px] leading-[120%] font-bold">Реферальная программа (в ТГ, ВК)</p>
//             </li>
//             <li className="flex items-center gap-[12px] nokia:gap-[18px] sm:gap-[26px] 3xl:gap-9 w-full xl:w-[380px] 3xl:w-[511px] p-[18px] nokia:p-[23px] sm:px-[35px] sm:p-9 3xl:p-12 bg-grey-dark rounded-[11.91px] 3xl:rounded-2xl">
//               <img src="./assets/images/level-icon-3.svg" alt="" className="flex-shrink-0 w-[21px] nokia:w-[28px] sm:w-[45px] xl:w-[41px] 3xl:w-[56px]"/>
//               <p className="text-[9px] nokia:text-[12px] sm:text-[19px] xl:text-[17px] 3xl:text-[24px] leading-[120%] font-bold">Автовебинарная воронка</p>
//             </li>
//             <li className="flex items-center gap-[12px] nokia:gap-[18px] sm:gap-[26px] 3xl:gap-9 w-full xl:w-[402px] 3xl:w-[541px] p-[18px] nokia:p-[23px] sm:px-[35px] sm:p-9 3xl:p-12 bg-grey-dark rounded-[11.91px] 3xl:rounded-2xl">
//               <img src="./assets/images/level-icon-4.svg" alt="" className="flex-shrink-0 w-[21px] nokia:w-[28px] sm:w-[45px] xl:w-[41px] 3xl:w-[56px]"/>
//               <p className="text-[9px] nokia:text-[12px] sm:text-[19px] xl:text-[17px] 3xl:text-[24px] leading-[120%] font-bold">Воронки для живого вебинара</p>
//             </li>
//             <li className="flex items-center gap-[12px] nokia:gap-[18px] sm:gap-[26px] 3xl:gap-9 w-full xl:w-[calc(100%_-_428px)] 3xl:w-[calc(100%_-_577px)] p-[18px] nokia:p-[23px] sm:px-[35px] sm:p-9 3xl:p-12 bg-grey-dark rounded-[11.91px] 3xl:rounded-2xl">
//               <img src="./assets/images/level-icon-5.svg" alt="" className="flex-shrink-0 w-[21px] nokia:w-[28px] sm:w-[45px] xl:w-[41px] 3xl:w-[56px]"/>
//               <p className="text-[9px] nokia:text-[12px] sm:text-[19px] xl:text-[17px] 3xl:text-[24px] leading-[120%] font-bold">Интеграции с гугл-таблицами, CRM системами, платёжными системами в том числе зарубежными</p>
//             </li>
//             <li className="flex items-center gap-[12px] nokia:gap-[18px] sm:gap-[26px] 3xl:gap-9 w-full xl:w-[577px] 3xl:w-[776px] p-[18px] nokia:p-[23px] sm:px-[35px] sm:p-9 3xl:p-12 bg-grey-dark rounded-[11.91px] 3xl:rounded-2xl">
//               <img src="./assets/images/level-icon-6.svg" alt="" className="flex-shrink-0 w-[21px] nokia:w-[28px] sm:w-[45px] xl:w-[41px] 3xl:w-[56px]"/>
//               <p className="text-[9px] nokia:text-[12px] sm:text-[19px] xl:text-[17px] 3xl:text-[24px] leading-[120%] font-bold">Чат-бот для Seller’ов на маркетплейсах для сбора отзывов</p>
//             </li>
//             <li className="flex items-center gap-[12px] nokia:gap-[18px] sm:gap-[26px] 3xl:gap-9 w-full xl:w-[calc(100%_-_603px)] 3xl:w-[calc(100%_-_812px)] p-[18px] nokia:p-[23px] sm:px-[35px] sm:p-9 3xl:p-12 bg-grey-dark rounded-[11.91px] 3xl:rounded-2xl">
//               <img src="./assets/images/level-icon-7.svg" alt="" className="flex-shrink-0 w-[21px] nokia:w-[28px] sm:w-[45px] xl:w-[41px] 3xl:w-[56px]"/>
//               <p className="text-[9px] nokia:text-[12px] sm:text-[19px] xl:text-[17px] 3xl:text-[24px] leading-[120%] font-bold">Воронки со множеством дожимов и элементами геймификации и много пр.</p>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <section className="mt-5">
//         <div className="container font-Manrope !p-[34px_23px] phone:!p-[38px_31px] table:!p-[51px]">
//           <div className="flex flex-col xl:flex-row items-stretch gap-[10px] phone:gap-[13px] table:gap-[20px] xl:gap-[22px] 3xl:gap-[30px] mb-3 phone:mb-[15px] table:mb-[24px] xl:mb-[22px] 3xl:mb-[30px]">
//             <div className="w-full xl:w-[607px] 3xl:w-[816px] bg-green rounded-[7px] phone:rounded-[9px] table:rounded-[14px] 3xl:rounded-[20px] p-[32px_24px_33px] phone:p-[43px_41px_46px_33px] table:p-[70px_52px_75px] xl:px-[52px] 3xl:px-[71px] flex flex-col justify-center">
//               <h2 className="font-IgraSans font-normal text-[23px] phone:text-[29px] table:text-[48px] 3xl:text-[64px] leading-[120%] uppercase mb-[4px] phone:mb-[7px] table:mb-3 3xl:mb-4">С нaми вы будете в курсе всех новинок</h2>
//               <p className="text-[12px] phone:text-[16px] table:text-[26px] 3xl:text-[36px] leading-[120%]">и узнаете новый функционал</p>
//             </div>
//             <div className="w-full xl:w-[calc(100%_-_629px)] 3xl:w-[calc(100%_-_846px)]">
//               <div className="mb-[15px] table:mb-[25px] xl:mb-[22px] 3xl:mb-[30px] relative z-[1] p-[25px_26px_24px_111px] table:p-[40px_42px_40px_178px] xl:pt-[42px] 3xl:pt-[57px] xl:pr-[43px] 3xl:pr-[59px] xl:pb-[36px] 3xl:pb-[49px] xl:pl-[186px] 3xl:pl-[250px] bg-bg-color rounded-[9px] table:rounded-[14px] 3xl:rounded-[20px]">
//                 <img src="./assets/images/with-us-card-1.png" alt="" className="absolute w-[73px] table:w-[118px] xl:w-[122px] 3xl:w-[165px] bottom-0 left-[17px] table:left-7 xl:left-10"/>
//                 <div>
//                   <h3 className="text-[16px] table:text-[24px] xl:text-[29px] 3xl:text-[40px] font-semibold leading-[120%] mb-[7px] 3xl:mb-[10px]">В инстаграм боты могут:</h3>
//                   <p className="text-[10px] table:text-[16px] xl:text-[18px] 3xl:text-[25px] font-normal leading-[120%] color-[#0B0A0A]">Отправлять голосовое, видео, карусель</p>
//                 </div>
//               </div>
//               <div className="relative z-[1] p-[25px_26px_29px_111px] table:p-[40px_42px_48px_178px] xl:pt-[42px] 3xl:pt-[57px] xl:pr-[43px] 3xl:pr-[59px] xl:pb-[40px] 3xl:pb-[49px] xl:pl-[186px] 3xl:pl-[250px] bg-bg-color rounded-[9px] table:rounded-[14px] 3xl:rounded-[20px]">
//                 <img src="./assets/images/with-us-card-2.png" alt="" className="absolute w-[59px] table:w-[95px] xl:w-[99px] 3xl:w-[133px] bottom-1/2 left-7 table:left-[47px] 3xl:left-[64px] translate-y-1/2">
//                 <div>
//                   <h3 className="text-[16px] table:text-[24px] xl:text-[29px] 3xl:text-[40px] font-semibold leading-[120%] mb-[7px] 3xl:mb-[10px]">во вконтакте бот может:</h3>
//                   <p className="text-[10px] table:text-[16px] xl:text-[18px] 3xl:text-[25px] font-normal leading-[120%] color-[#0B0A0A]">Создать пост на стене подписчиков с вашим текстом и картинкой (гиф-анимация, как это происходит)</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col xl:flex-row items-stretch gap-3 phone:gap-4 table:gap-[27px] xl:gap-[21px] 3xl:gap-[30px]">
//             <div className="w-full xl:w-[calc(100%_-_506px)] 3xl:w-[calc(100%_-_681px)] flex flex-row-reverse xl:flex-row items-center gap-[10px] phone:gap-[14px] table:gap-[22px] xl:gap-[43px] 3xl:gap-[58px] bg-bg-color rounded-[7px] phone:rounded-[9px] table:rounded-[14px] 3xl:rounded-[20px] p-[12px_12px_15px_15px] phone:p-[16px_16px_20px_20px] table:p-[26px_27px_32px_33px] xl:py-[44px] 3xl:py-[29px] xl:pl-[41px] 3xl:pl-[68px] xl:pr-[58px] 3xl:pr-[79px]">
//               <img src="./assets/images/with-us-card-3.png" alt="" className="w-[93px] phone:w-[125px] table:w-[200px] xl:w-[241px] 3xl:w-[324px] shrink-0">
//               <div className="w-full">
//                 <h3 className="text-[12px] phone:text-[16px] table:text-[27px] xl:text-[29px] 3xl:text-[40px] uppercase font-semibold leading-[120%] mb-[3px] phone:mb-[4px] table:mb-[7px] 3xl:mb-[10px]">Вы можете подключить нейрость для общения <br> и продаж клиентам:</h3>
//                 <p className="text-[7px] phone:text-[10px] table:text-[16px] xl:text-[18px] 3xl:text-[25px] font-normal leading-[120%] color-[#0B0A0A]">Как только появилась эта возможность <br> в 2023 году мы реализовали для бренда одежды CHUKCHA </p>
//               </div>
//             </div>
//             <div className="w-full xl:w-[485px] 3xl:w-[652px] bg-green rounded-[7px] phone:rounded-[9px] table:rounded-[14px] 3xl:rounded-[20px] p-[19px_16px] phone:p-[25px_22px] table:p-[41px_36px] xl:p-[49px_79px_54px] 3xl:p-[67px] flex justify-center flex-col items-start xl:items-stretch">
//               <p className="w-full max-w-full 3xl:max-w-[438px] text-[12px] phone:text-[16px] table:text-[27px] xl:text-[18px] 3xl:text-[25px] leading-[120%] mb-[16px] table:mb-[20px] xl:mb-[14px]">
//                 <span className="uppercase xl:capitalize"><span className="inline font-semibold">Мы даже можем сделать аналог ХОМЯКА в Телеграм</span> на WebApp для вас.</span>
//                 <span className="block xl:inline text-[7.5px] phone:text-[10px] table:text-[16px] leading-[120%] xl:text-inherit pt-[4px] table:pt-[7px] xl:pt-0">С вас - сценарий, дизайн, <br className="xl:hidden"> а реализация за нами</span></p>
//               <a href="#" className="btn_purple whitespace-nowrap !pl-[21px] table:!pl-[33px] w-[203px] table:w-[325px] xl:w-auto">
//                 <span className="text-[10px] table:text-[16px] 3xl:text-[24px]">хочу аналог хомяка</span>
//                 <img src="./assets/images/arrow-right-gray.svg" alt="">
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mt-5">
//         <div className="container !bg-black-dark text-white relative z-[1] !py-[42px] phone:!py-[60px] table:!py-[96px] lg:!py-[88px] 2xl:!py-[119px] rounded-[20px] overflow-hidden">
//           <img src="./assets/images/working-bg.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
//           <h2 className="text-[25px] phone:text-[29px] table:text-[47px] lg:text-[42px] 2xl:text-[56px] leading-[120%] font-normal text-center font-IgraSans uppercase mb-[21px] phone:mb-[23px] table:mb-[38px] lg:mb-[43px] 2xl:mb-[59px]">этапы <br className="lg:hidden"> работы с нaми:</h2>
//           <ul className="max-w-[297px] phone:max-w-[396px] table:max-w-[635px] lg:max-w-[1107px] 2xl:max-w-[1489px] mx-auto flex flex-wrap items-stretch gap-[10px] phone:gap-[13px] table:gap-[22px] 2xl:gap-[30px] mb-[20px] phone:mb-[22px] table:mb-10 2xl:mb-[56px]">
//             <li className="w-full lg:w-[calc(100%_-_581px)] 2xl:w-[calc(100%_-_782px)] rounded-[10px] phone:rounded-[14px] table:rounded-[22px] 2xl:rounded-[30px] bg-[rgba(242,242,242,0.14)] min-h-[67.5px] phone:min-h-[90px] table:min-h-[144px] 2xl:min-h-[194px] relative z-[1] flex items-center p-[15px_4px_15px_70px] phone:p-[24px_5px_24px_94px] table:p-[20px_8px_20px_151px] 2xl:p-[51px] 2xl:pl-[203px]">
//               <img src="./assets/images/working-icon-1.svg" alt="" className="absolute w-[64px] phone:w-[86px] table:w-[138px] 2xl:w-auto top-[3.8px] phone:top-[5px] table:top-[8px] 2xl:top-[11px] left-[2px] phone:left-[3px] table:left-[4.5px] 2xl:left-[6px] z-[-1]">
//               <div className="text-[11px] phone:text-[14px] table:text-[23px] 2xl:text-[31px] leading-[120%]">
//                 <h3 className="font-bold">Созвон для знакомства</h3>
//                 <p className="font-normal">и обсуждения целей проекта</p>
//               </div>
//             </li>
//             <li className="w-full lg:w-[559px] 2xl:w-[752px] rounded-[10px] phone:rounded-[14px] table:rounded-[22px] 2xl:rounded-[30px] bg-[rgba(242,242,242,0.14)] min-h-[67.5px] phone:min-h-[90px] table:min-h-[144px] 2xl:min-h-[194px] relative z-[1] flex items-center p-[15px_4px_15px_70px] phone:p-[24px_5px_24px_94px] table:p-[20px_8px_20px_151px] 2xl:p-[51px] 2xl:pl-[203px]">
//               <img src="./assets/images/working-icon-2.svg" alt="" className="absolute w-[58px] phone:w-[79px] table:w-[125px] 2xl:w-auto top-1/2 left-[10px] phone:left-[13px] table:left-[21px] 2xl:left-[29px] -translate-y-1/2 z-[-1]">
//               <div className="text-[11px] phone:text-[14px] table:text-[23px] 2xl:text-[31px] leading-[120%]">
//                 <h3 className="font-bold">Создание сценария бота</h3>
//                 <p className="font-normal">и его утверждение</p>
//               </div>
//             </li>
//             <li className="w-full lg:w-[calc(100%_-_543px)] 2xl:w-[calc(100%_-_731px)] rounded-[10px] phone:rounded-[14px] table:rounded-[22px] 2xl:rounded-[30px] bg-[rgba(242,242,242,0.14)] min-h-[67.5px] phone:min-h-[90px] table:min-h-[144px] 2xl:min-h-[194px] relative z-[1] flex items-center p-[15px_4px_15px_70px] phone:p-[24px_5px_24px_94px] table:p-[20px_8px_20px_151px] 2xl:p-[51px] 2xl:pl-[203px]">
//               <img src="./assets/images/working-icon-3.svg" alt="" className="absolute w-[59px] phone:w-[79px] table:w-[127px] 2xl:w-auto top-1/2 left-[10px] phone:left-[13px] table:left-[21px] 2xl:left-[29px] -translate-y-1/2 z-[-1]">
//               <div className="text-[11px] phone:text-[14px] table:text-[23px] 2xl:text-[31px] leading-[120%]"> 
//                 <h3 className="font-bold">Заключение договора:</h3>
//                 <p className="font-normal">прописываем наши обязанности</p>
//               </div>
//             </li>
//             <li className="w-full lg:w-[521px] 2xl:w-[701px] rounded-[10px] phone:rounded-[14px] table:rounded-[22px] 2xl:rounded-[30px] bg-[rgba(242,242,242,0.14)] min-h-[67.5px] phone:min-h-[90px] table:min-h-[144px] 2xl:min-h-[194px] relative z-[1] flex items-center p-[15px_4px_15px_70px] phone:p-[24px_5px_24px_94px] table:p-[20px_8px_20px_151px] 2xl:p-[51px] 2xl:pl-[203px]">
//               <img src="./assets/images/working-icon-4.svg" alt="" className="absolute w-[47px] phone:w-[62px] table:w-[100px] 2xl:w-auto top-1/2 left-[10px] phone:left-[13px] table:left-[21px] 2xl:left-[29px] -translate-y-1/2 z-[-1]">
//               <div className="text-[11px] phone:text-[14px] table:text-[23px] 2xl:text-[31px] leading-[120%]">
//                 <h3 className="font-bold">Техническая сборка</h3>
//                 <p className="font-normal">и тестирование воронки</p>
//               </div>
//             </li>
//             <li className="w-full lg:w-[calc(100%_-_472px)] 2xl:w-[calc(100%_-_636px)] rounded-[10px] phone:rounded-[14px] table:rounded-[22px] 2xl:rounded-[30px] bg-[rgba(242,242,242,0.14)] min-h-[67.5px] phone:min-h-[90px] table:min-h-[144px] 2xl:min-h-[194px] relative z-[1] flex items-center p-[15px_4px_15px_70px] phone:p-[24px_5px_24px_94px] table:p-[20px_8px_20px_151px] 2xl:p-[51px] 2xl:pl-[203px]">
//               <img src="./assets/images/working-icon-5.svg" alt="" className="absolute w-[55px] phone:w-[73px] table:w-[100px] 2xl:w-auto top-1/2 left-[10px] phone:left-[13px] table:left-[21px] 2xl:left-[29px] -translate-y-1/2 z-[-1]">
//               <div className="text-[11px] phone:text-[14px] table:text-[23px] 2xl:text-[31px] leading-[120%]"> 
//                 <h3 className="font-bold">Аналитика воронок конкурентов:</h3>
//                 <p className="font-normal">упаковка, тексты, техничка, анализ ЦА</p>
//               </div>
//             </li>
//             <li className="w-full lg:w-[450px] 2xl:w-[606px] rounded-[10px] phone:rounded-[14px] table:rounded-[22px] 2xl:rounded-[30px] bg-[rgba(242,242,242,0.14)] min-h-[67.5px] phone:min-h-[90px] table:min-h-[144px] 2xl:min-h-[194px] relative z-[1] flex items-center p-[15px_4px_15px_70px] phone:p-[24px_5px_24px_94px] table:p-[20px_8px_20px_151px] 2xl:p-[51px] 2xl:pl-[203px]">
//               <img src="./assets/images/working-icon-6.svg" alt="" className="absolute w-[68px] phone:w-[91px] table:w-[147px] 2xl:w-auto top-[2px] phone:top-[3px] table:top-[4px] 2xl:top-[6px] left-[10px] phone:left-[13px] table:left-[21px] 2xl:left-[29px] z-[-1]">
//               <div className="text-[11px] phone:text-[14px] table:text-[23px] 2xl:text-[31px] leading-[120%]">
//                 <h3 className="font-bold">Передача доступов</h3>
//                 <p className="font-normal">и сопровождение*</p>
//               </div>
//             </li>
//           </ul>
//           <p className="text-center text-[10px] table:text-[17px] 2xl:text-[23px] font-light leading-[120%]">
//             *При сопровождении мы проводим аналитику бота <br>
//             и на основе цифр будем докручивать слабые места
//           </p>
//         </div>
//       </section>

//       <section className="mt-5">
//         <div className="container">
//           <h2 className="text-center font-IgraSans font-normal text-[30px] phone:text-[40px] table:text-[64px] xl:text-[47px] 2xl:text-[64px] leading-[120%] text-purple uppercase mb-[22px] phone:mb-[29px] table:mb-[47px] 2xl:mb-[64px]">Что вы получите, работая с нaми:</h2>
//           <ul className="max-w-[261px] phone:max-w-[348px] table:max-w-[558px] xl:max-w-full mx-auto grid grid-cols-1 xl:grid-cols-3 gap-[9px] phone:gap-5 xl:gap-[43px_33px] 3xl:gap-[43px_45px]">
//             <li>
//               <a href="#" className="flex flex-col items-start justify-end min-h-[156px] phone:min-h-[208px] table:min-h-[334px] xl:min-h-[482px] 3xl:min-h-[647px] bg-bg-color rounded-[16px] phone:rounded-[21px] table:rounded-[38px] 3xl:rounded-[50px] p-[23px_20px] phone:p-[32px_26px] table:p-[45px] 3xl:p-[61.5px] font-Manrope">
//                 <span className="flex flex-col items-start">
//                   <span className="text-[8px] phone:text-[10px] table:text-[18px] 3xl:text-[25px] leading-[120%] font-medium text-secondary mb-[2px] phone:mb-[3px] table:mb-[5px] 3xl:mb-[7px] block">01</span>
//                   <span className="block text-[10px] phone:text-[14px] table:text-[24px] 3xl:text-[34px] leading-[120%] font-bold uppercase mb-[10px] phone:mb-[14px] table:mb-[24px] 3xl:mb-[33px]">опыт и насмотренность</span>
//                   <span className="block h-[0.46px] phone:h-[0.61px] table:h-[1.4px] w-full bg-secondary mb-[2px] phone:mb-[3px] table:mb-[24px] 3xl:mb-[33px]"></span>
//                   <span className="text-[7px] phone:text-[10px] table:text-[16px] 3xl:text-[22px] font-normal text-secondary leading-[120%]">Мы работаем с разными нишами и видим, кто как выстраивает воронки</span>
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex flex-col items-start justify-end min-h-[156px] phone:min-h-[208px] table:min-h-[334px] xl:min-h-[482px] 3xl:min-h-[647px] bg-bg-color rounded-[16px] phone:rounded-[21px] table:rounded-[38px] 3xl:rounded-[50px] p-[23px_20px] phone:p-[32px_26px] table:p-[45px] 3xl:p-[61.5px] font-Manrope">
//                 <span className="flex flex-col items-start">
//                   <span className="text-[8px] phone:text-[10px] table:text-[18px] 3xl:text-[25px] leading-[120%] font-medium text-secondary mb-[2px] phone:mb-[3px] table:mb-[5px] 3xl:mb-[7px] block">02</span>
//                   <span className="block text-[10px] phone:text-[14px] table:text-[24px] 3xl:text-[34px] leading-[120%] font-bold uppercase mb-[10px] phone:mb-[14px] table:mb-[24px] 3xl:mb-[33px]">Команду профессионалов</span>
//                   <span className="block h-[0.46px] phone:h-[0.61px] table:h-[1.4px] w-full bg-secondary mb-[2px] phone:mb-[3px] table:mb-[24px] 3xl:mb-[33px]"></span>
//                   <span className="text-[7px] phone:text-[10px] table:text-[16px] 3xl:text-[22px] font-normal text-secondary leading-[120%]">Мы увлечены своей работой и постоянно в ней развиваемся. </span>
//                 </span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex flex-col items-start justify-end min-h-[156px] phone:min-h-[208px] table:min-h-[334px] xl:min-h-[482px] 3xl:min-h-[647px] bg-bg-color rounded-[16px] phone:rounded-[21px] table:rounded-[38px] 3xl:rounded-[50px] p-[23px_20px] phone:p-[32px_26px] table:p-[45px] 3xl:p-[61.5px] font-Manrope">
//                 <span className="flex flex-col items-start">
//                   <span className="text-[8px] phone:text-[10px] table:text-[18px] 3xl:text-[25px] leading-[120%] font-medium text-secondary mb-[2px] phone:mb-[3px] table:mb-[5px] 3xl:mb-[7px] block">03</span>
//                   <span className="block text-[10px] phone:text-[14px] table:text-[24px] 3xl:text-[34px] leading-[120%] font-bold uppercase mb-[10px] phone:mb-[14px] table:mb-[24px] 3xl:mb-[33px]">Снижение затрат</span>
//                   <span className="block h-[0.46px] phone:h-[0.61px] table:h-[1.4px] w-full bg-secondary mb-[2px] phone:mb-[3px] table:mb-[24px] 3xl:mb-[33px]"></span>
//                   <span className="text-[7px] phone:text-[10px] table:text-[16px] 3xl:text-[22px] font-normal text-secondary leading-[120%]">Освободим менеджеров от рутины, настроим приём платежей и т.д</span>
//                 </span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <section className="mt-5">
//         <div className="container font-Manrope">
//           <div className="mb-[64px]">
//             <h1 className="font-IgraSans font-normal 2xl:text-[64px] xl:text-[48px] lg:text-[47px] sm:text-[29px] text-[22px] 2xl:leading-[76px] xl:leading-[57px] lg:leading-[56px] sm:leading-[35px] leading-[26px] text-pink uppercase lg:mb-[64px] md:mb-[48px] mb-[16px]">
//               отзывы
//             </h1>
//             <div className="flex justify-end mb-4 gap-4">
//               <button className="bluesales-button-prev">
//                 <svg width="56" height="20" viewBox="0 0 56 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42358 18.4297L0.994405 10.0005L9.42359 1.57133L10.3617 2.50944L3.53397 9.33716L55 9.33716L55 10.6638L3.53397 10.6638L10.3617 17.4916L9.42358 18.4297Z" fill="#525050"/>
//                 </svg>
//               </button>
//               <div className="bluesales-pagination whitespace-nowrap font-Manrope font-medium text-[18px] leading-[21.6px] text-grey-dark max-w-min"></div>
//               <button className="bluesales-button-next">
//                 <svg width="56" height="20" viewBox="0 0 56 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5764 19L55.0056 10.5708L46.5764 2.14164L45.6383 3.07975L52.466 9.90747L0.999999 9.90747L0.999999 11.2342L52.466 11.2342L45.6383 18.0619L46.5764 19Z" fill="#525050"/>
//                 </svg>
//               </button>
//             </div>
//             <div className="swiper bluesalesSwiper">
//               <div className="swiper-wrapper">
//                 <div className="swiper-slide">
//                   <img className="w-full" src="./assets/images/slider_one.png" alt="">
//                 </div>
//                 <div className="swiper-slide">
//                   <img className="w-full" src="./assets/images/slider_one.png" alt="">
//                 </div>
//                 <div className="swiper-slide">
//                   <img className="w-full" src="./assets/images/slider_one.png" alt="">
//                 </div>
//                 <div className="swiper-slide">
//                   <img className="w-full" src="./assets/images/slider_one.png" alt="">
//                 </div>
//                 <div className="swiper-slide">
//                   <img className="w-full" src="./assets/images/slider_one.png" alt="">
//                 </div>
//                 <div className="swiper-slide">
//                   <img className="w-full" src="./assets/images/slider_one.png" alt="">
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div className="flex justify-end mb-4 gap-4">
//               <button className="bluesalestwo-button-prev">
//                 <svg width="56" height="20" viewBox="0 0 56 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42358 18.4297L0.994405 10.0005L9.42359 1.57133L10.3617 2.50944L3.53397 9.33716L55 9.33716L55 10.6638L3.53397 10.6638L10.3617 17.4916L9.42358 18.4297Z" fill="#525050"/>
//                 </svg>
//               </button>
//               <div className="bluesalestwo-pagination whitespace-nowrap font-Manrope font-medium text-[18px] leading-[21.6px] text-grey-dark max-w-min"></div>
//               <button className="bluesalestwo-button-next">
//                 <svg width="56" height="20" viewBox="0 0 56 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5764 19L55.0056 10.5708L46.5764 2.14164L45.6383 3.07975L52.466 9.90747L0.999999 9.90747L0.999999 11.2342L52.466 11.2342L45.6383 18.0619L46.5764 19Z" fill="#525050"/>
//                 </svg>
//               </button>
//             </div>
//             <div className="swiper bluesalestwoSwiper">
//               <div className="swiper-wrapper">
//                 <div className="swiper-slide">
//                   <div className="sm:rounded-[35px] rounded-[4px] md:p-12 p-5 bg-comment-bg">
//                     <h6 className="font-Onest font-medium sm:mb-[40px mb-[12px] 2xl:text-[28px] xl:text-[24px] lg:text-[28px] sm:text-[20px] text-[18px] 2xl:leading-[29.4px] xl:leading-[25px] lg:leading-[33px] sm:leading-[16px] leading-[18px]">
//                       Быстро, чётко, доходчиво
//                     </h6>
//                     <p className="md:mb-[40px] mb-[12px] font-Onest font-normal text-secondary 2xl:text-[18px] xl:text-[16px] lg:text-[20px] sm:text-[16px] text-[14px] 2xl:leading-[21px] xl:leading-[19px] lg:leading-[27px] sm:leading-[21px] leading-[18px]">
//                       Неоднократно обращалась к Никите по технической части Вк: сенлер, автопилот, игрофикация. Всегда очень довольна результатом. Очень терпеливо отвечает на кучу вопросов. Объясняет быстро, чётко и доходчиво. Когда нужно выполняет сам, так же быстро и с учётом всех моих пожеланий. Всегда на связи.
//                     </p>
//                     <div className="flex items-center gap-[24px] md:pt-[40px] pt-[24px] border-t border-black">
//                       <img className="w-[50px] h-[50px] rounded-full" src="./assets/images/comment_user.png" alt="">
//                       <div>
//                         <h6 className="font-Onest font-medium 2xl:text-[20px] 2xl:leading-[24px] xl:text-[20px] lg:text-[20px] sm:text-[18px] text-[16px] xl:leading-[27px] lg:leading-[27px] sm:leading-[18px] leading-[16px] text-black-dark uppercase">
//                           додо пицца
//                         </h6>
//                         <span className="font-Onest font-normal 2xl:text-[18px] xl:text-[18px] lg:text-[14px] sm:text-[16px] text-[14px] 2xl:leading-[21px] xl:leading-[21px] lg:leading-[16px] sm:leading-[21px] leading-[18px] text-secondary">
//                           Елена Попова
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="sm:rounded-[35px] rounded-[4px] md:p-12 p-5 bg-comment-bg">
//                     <h6 className="font-Onest font-medium sm:mb-[40px mb-[12px] 2xl:text-[28px] xl:text-[24px] lg:text-[28px] sm:text-[20px] text-[18px] 2xl:leading-[29.4px] xl:leading-[25px] lg:leading-[33px] sm:leading-[16px] leading-[18px]">
//                       Быстро, чётко, доходчиво
//                     </h6>
//                     <p className="md:mb-[40px] mb-[12px] font-Onest font-normal text-secondary 2xl:text-[18px] xl:text-[16px] lg:text-[20px] sm:text-[16px] text-[14px] 2xl:leading-[21px] xl:leading-[19px] lg:leading-[27px] sm:leading-[21px] leading-[18px]">
//                       Неоднократно обращалась к Никите по технической части Вк: сенлер, автопилот, игрофикация. Всегда очень довольна результатом. Очень терпеливо отвечает на кучу вопросов. Объясняет быстро, чётко и доходчиво. Когда нужно выполняет сам, так же быстро и с учётом всех моих пожеланий. Всегда на связи.
//                     </p>
//                     <div className="flex items-center gap-[24px] md:pt-[40px] pt-[24px] border-t border-black">
//                       <img className="w-[50px] h-[50px] rounded-full" src="./assets/images/comment_user.png" alt="">
//                       <div>
//                         <h6 className="font-Onest font-medium 2xl:text-[20px] 2xl:leading-[24px] xl:text-[20px] lg:text-[20px] sm:text-[18px] text-[16px] xl:leading-[27px] lg:leading-[27px] sm:leading-[18px] leading-[16px] text-black-dark uppercase">
//                           додо пицца
//                         </h6>
//                         <span className="font-Onest font-normal 2xl:text-[18px] xl:text-[18px] lg:text-[14px] sm:text-[16px] text-[14px] 2xl:leading-[21px] xl:leading-[21px] lg:leading-[16px] sm:leading-[21px] leading-[18px] text-secondary">
//                           Елена Попова
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="sm:rounded-[35px] rounded-[4px] md:p-12 p-5 bg-comment-bg">
//                     <h6 className="font-Onest font-medium sm:mb-[40px mb-[12px] 2xl:text-[28px] xl:text-[24px] lg:text-[28px] sm:text-[20px] text-[18px] 2xl:leading-[29.4px] xl:leading-[25px] lg:leading-[33px] sm:leading-[16px] leading-[18px]">
//                       Быстро, чётко, доходчиво
//                     </h6>
//                     <p className="md:mb-[40px] mb-[12px] font-Onest font-normal text-secondary 2xl:text-[18px] xl:text-[16px] lg:text-[20px] sm:text-[16px] text-[14px] 2xl:leading-[21px] xl:leading-[19px] lg:leading-[27px] sm:leading-[21px] leading-[18px]">
//                       Неоднократно обращалась к Никите по технической части Вк: сенлер, автопилот, игрофикация. Всегда очень довольна результатом. Очень терпеливо отвечает на кучу вопросов. Объясняет быстро, чётко и доходчиво. Когда нужно выполняет сам, так же быстро и с учётом всех моих пожеланий. Всегда на связи.
//                     </p>
//                     <div className="flex items-center gap-[24px] md:pt-[40px] pt-[24px] border-t border-black">
//                       <img className="w-[50px] h-[50px] rounded-full" src="./assets/images/comment_user.png" alt="">
//                       <div>
//                         <h6 className="font-Onest font-medium 2xl:text-[20px] 2xl:leading-[24px] xl:text-[20px] lg:text-[20px] sm:text-[18px] text-[16px] xl:leading-[27px] lg:leading-[27px] sm:leading-[18px] leading-[16px] text-black-dark uppercase">
//                           додо пицца
//                         </h6>
//                         <span className="font-Onest font-normal 2xl:text-[18px] xl:text-[18px] lg:text-[14px] sm:text-[16px] text-[14px] 2xl:leading-[21px] xl:leading-[21px] lg:leading-[16px] sm:leading-[21px] leading-[18px] text-secondary">
//                           Елена Попова
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="sm:rounded-[35px] rounded-[4px] md:p-12 p-5 bg-comment-bg">
//                     <h6 className="font-Onest font-medium sm:mb-[40px mb-[12px] 2xl:text-[28px] xl:text-[24px] lg:text-[28px] sm:text-[20px] text-[18px] 2xl:leading-[29.4px] xl:leading-[25px] lg:leading-[33px] sm:leading-[16px] leading-[18px]">
//                       Быстро, чётко, доходчиво
//                     </h6>
//                     <p className="md:mb-[40px] mb-[12px] font-Onest font-normal text-secondary 2xl:text-[18px] xl:text-[16px] lg:text-[20px] sm:text-[16px] text-[14px] 2xl:leading-[21px] xl:leading-[19px] lg:leading-[27px] sm:leading-[21px] leading-[18px]">
//                       Неоднократно обращалась к Никите по технической части Вк: сенлер, автопилот, игрофикация. Всегда очень довольна результатом. Очень терпеливо отвечает на кучу вопросов. Объясняет быстро, чётко и доходчиво. Когда нужно выполняет сам, так же быстро и с учётом всех моих пожеланий. Всегда на связи.
//                     </p>
//                     <div className="flex items-center gap-[24px] md:pt-[40px] pt-[24px] border-t border-black">
//                       <img className="w-[50px] h-[50px] rounded-full" src="./assets/images/comment_user.png" alt="">
//                       <div>
//                         <h6 className="font-Onest font-medium 2xl:text-[20px] 2xl:leading-[24px] xl:text-[20px] lg:text-[20px] sm:text-[18px] text-[16px] xl:leading-[27px] lg:leading-[27px] sm:leading-[18px] leading-[16px] text-black-dark uppercase">
//                           додо пицца
//                         </h6>
//                         <span className="font-Onest font-normal 2xl:text-[18px] xl:text-[18px] lg:text-[14px] sm:text-[16px] text-[14px] 2xl:leading-[21px] xl:leading-[21px] lg:leading-[16px] sm:leading-[21px] leading-[18px] text-secondary">
//                           Елена Попова
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="swiper-slide">
//                   <div className="sm:rounded-[35px] rounded-[4px] md:p-12 p-5 bg-comment-bg">
//                     <h6 className="font-Onest font-medium sm:mb-[40px mb-[12px] 2xl:text-[28px] xl:text-[24px] lg:text-[28px] sm:text-[20px] text-[18px] 2xl:leading-[29.4px] xl:leading-[25px] lg:leading-[33px] sm:leading-[16px] leading-[18px]">
//                       Быстро, чётко, доходчиво
//                     </h6>
//                     <p className="md:mb-[40px] mb-[12px] font-Onest font-normal text-secondary 2xl:text-[18px] xl:text-[16px] lg:text-[20px] sm:text-[16px] text-[14px] 2xl:leading-[21px] xl:leading-[19px] lg:leading-[27px] sm:leading-[21px] leading-[18px]">
//                       Неоднократно обращалась к Никите по технической части Вк: сенлер, автопилот, игрофикация. Всегда очень довольна результатом. Очень терпеливо отвечает на кучу вопросов. Объясняет быстро, чётко и доходчиво. Когда нужно выполняет сам, так же быстро и с учётом всех моих пожеланий. Всегда на связи.
//                     </p>
//                     <div className="flex items-center gap-[24px] md:pt-[40px] pt-[24px] border-t border-black">
//                       <img className="w-[50px] h-[50px] rounded-full" src="./assets/images/comment_user.png" alt="">
//                       <div>
//                         <h6 className="font-Onest font-medium 2xl:text-[20px] 2xl:leading-[24px] xl:text-[20px] lg:text-[20px] sm:text-[18px] text-[16px] xl:leading-[27px] lg:leading-[27px] sm:leading-[18px] leading-[16px] text-black-dark uppercase">
//                           додо пицца
//                         </h6>
//                         <span className="font-Onest font-normal 2xl:text-[18px] xl:text-[18px] lg:text-[14px] sm:text-[16px] text-[14px] 2xl:leading-[21px] xl:leading-[21px] lg:leading-[16px] sm:leading-[21px] leading-[18px] text-secondary">
//                           Елена Попова
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="mt-5 hidden xl:block">
//         <div className="container font-Manrope">
//           <h2 className="font-IgraSans text-[65px] leading-[90px] font-normal uppercase text-purple mb-16">кейсы:</h2>
//           <ul className="grid grid-cols-2 gap-9">
//             <li className="group h-[350px] flex flex-col justify-between items-start p-12 bg-comment-bg rounded-[36px] transition-[0.2s] duration-[ease] ease-[all] hover:bg-green">
//               <div>
//                 <h3 className="font-bold text-2xl leading-[120%] mb-3">Новая школа</h3>
//                 <p>Автоматизируем CRM систему BlueSales для ЕГЭ школы</p>
//               </div>
//               <a href="#" className="btn_purple !hidden group-hover:!inline-flex">
//                 <span>обсудить проект</span>
//                 <img src="./assets/images/arrow-right-gray.svg" alt="">
//               </a>
//             </li>
//             <li className="group h-[350px] flex flex-col justify-between items-start p-12 bg-comment-bg rounded-[36px] transition-[0.2s] duration-[ease] ease-[all] hover:bg-green">
//               <div>
//                 <h3 className="font-bold text-2xl leading-[120%] mb-3">Chukcha — Бренд одежды</h3>
//                 <p>Рассылки: ВК, ТГ, email. СМС. Постоянная работа с базой, проведения геймификаций а также автоматизация amoCRM и работа с репутацией бренда: ORM</p>
//               </div>
//               <a href="#" className="btn_purple !hidden group-hover:!inline-flex">
//                 <span>обсудить проект</span>
//                 <img src="./assets/images/arrow-right-gray.svg" alt="">
//               </a>
//             </li>
//             <li className="group h-[350px] flex flex-col justify-between items-start p-12 bg-comment-bg rounded-[36px] transition-[0.2s] duration-[ease] ease-[all] hover:bg-green">
//               <div>
//                 <h3 className="font-bold text-2xl leading-[120%] mb-3">Автоматизация ЕГЭ школы «Дайбобру»</h3>
//                 <p>Проведение геймификаций, постоянная работа с базой, исследование аудитории, создание реферальной системы и не только</p>
//               </div>
//               <a href="#" className="btn_purple !hidden group-hover:!inline-flex">
//                 <span>обсудить проект</span>
//                 <img src="./assets/images/arrow-right-gray.svg" alt="">
//               </a>
//             </li>
//             <li className="group h-[350px] flex flex-col justify-between items-start p-12 bg-comment-bg rounded-[36px] transition-[0.2s] duration-[ease] ease-[all] hover:bg-green">
//               <div>
//                 <h3 className="font-bold text-2xl leading-[120%] mb-3">Клуб по подписке для эксперта по WildBerries</h3>
//                 <p>3 тарифа: на 1/3/6 месяцев. Настроен приём платежей и уведомление администратора, а также автоматическое одобрение в каналы и удаление в случае отсутствия оплаты</p>
//               </div>
//               <a href="#" className="btn_purple !hidden group-hover:!inline-flex">
//                 <span>обсудить проект</span>
//                 <img src="./assets/images/arrow-right-gray.svg" alt="">
//               </a>
//             </li>
//             <li className="group h-[350px] flex flex-col justify-between items-start p-12 bg-comment-bg rounded-[36px] transition-[0.2s] duration-[ease] ease-[all] hover:bg-green">
//               <div>
//                 <h3 className="font-bold text-2xl leading-[120%] mb-3">Запуск блогера с обучением по «Я. Дзен»</h3>
//                 <p>Техническая + маркетинговая часть Нашли блогера, договорились, что с него обучение, а с нас всё остальное и сделали запуск на 500к+</p>
//               </div>
//               <a href="#" className="btn_purple !hidden group-hover:!inline-flex">
//                 <span>обсудить проект</span>
//                 <img src="./assets/images/arrow-right-gray.svg" alt="">
//               </a>
//             </li>
//             <li className="group h-[350px] flex flex-col justify-between items-start p-12 bg-comment-bg rounded-[36px] transition-[0.2s] duration-[ease] ease-[all] hover:bg-green">
//               <div>
//                 <h3 className="font-bold text-2xl leading-[120%] mb-3">Запуск сертификации с сервисом Senler</h3>
//                 <p>В момент блокировки популярной соц. сети предложил основателю сделать курс, в итоге сделали лучше в 2 раза результат, чем они сам годом ранее</p>
//               </div>
//               <a href="#" className="btn_purple !hidden group-hover:!inline-flex">
//                 <span>обсудить проект</span>
//                 <img src="./assets/images/arrow-right-gray.svg" alt="">
//               </a>
//             </li>
//             <li className="group h-[350px] flex flex-col justify-between items-start p-12 bg-comment-bg rounded-[36px] transition-[0.2s] duration-[ease] ease-[all] hover:bg-green">
//               <div>
//                 <h3 className="font-bold text-2xl leading-[120%] mb-3">Автоматизация для ЕГЭ школы «СОТКА»</h3>
//                 <p>Автоматический сбор отзывов и перенос их в гугл-таблицу для проведения конкурса, а также чат-бот для беседы ВК</p>
//               </div>
//               <a href="#" className="btn_purple !hidden group-hover:!inline-flex">
//                 <span>обсудить проект</span>
//                 <img src="./assets/images/arrow-right-gray.svg" alt="">
//               </a>
//             </li>
//             <li className="group h-[350px] flex flex-col justify-between items-start p-12 bg-comment-bg rounded-[36px] transition-[0.2s] duration-[ease] ease-[all] hover:bg-green">
//               <div>
//                 <h3 className="font-bold text-2xl leading-[120%] mb-3">в этом месте может оказаться твой проект</h3>
//                 <p>тут предложение на 2-3 строчки</p>
//               </div>
//               <a href="#" className="btn_purple !hidden group-hover:!inline-flex">
//                 <span>обсудить проект</span>
//                 <img src="./assets/images/arrow-right-gray.svg" alt="">
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <section>
//         <div className="contact_container bg-bg-color">
//           <div className="flex items-start 2xl:gap-[42px] gap-5 xl:flex-row flex-col">
//             <div className="2xl:max-w-[921px] xl:max-w-[628px] w-full">
//               <h3 className="font-IgraSans font-normal 2xl:text-[63px] 2xl:leading-[67.2px] xl:text-[56px] text-[28px] lg:text-[48px] sm:text-[36px] flex-wrap xl:leading-[58px] lg:leading-[50px] sm:leading-[37px] leading-[29.9px] text-black md:mb-8 sm:mb-6 mb-4 uppercase">
//                 <span className="text-pink">Остались вопросы?</span> Нужн<span>a</span> ли CRM, оставьте заявку с главной страницы?
//               </h3>
//               <p className="font-Onest font-normal text-black 2xl:text-2xl xl:text-20px md:text-[20px] sm:text-[18px] text-[16px]
//               2xl:leading-[32.4px] xl:leading-[27px] md:leading-[27px] sm:leading-[23.4px] leading-[21.6px] md:mb-12 mb-6">
//               Оставьте заявку на бесплатную консультацию, расскажите про свой проект и за 30 минут определимся нужно ли вам это или нет
//               </p>
//               <div className="rounded-[20px] bg-white 2xl:p-6 sm:p-5 p-0 2xl:max-w-[704px] xl:max-w-[628px]">
//                 <h6 className="font-Onest font-medium 2xl:mb-[36px] xl:mb-[24px] lg:mb-[36px] mb-[16px] 2xl:text-[28px] xl:text-[24px] lg:text-[28px] sm:text-[20px] text-[18px] 2xl:leading-[29.4px] xl:leading-[25px] lg:leading-[33px] sm:leading-[16px] leading-[18px]">
//                   ГДЕ С ВАМИ СВЯЗАТЬСЯ?
//                 </h6>
//                 <form action="#">
//                   <div className="flex gap-5 sm:flex-row flex-col">
//                     <div className="p-8 sm:h-auto h-[88px] rounded-[999px] sm:w-[50%] w-full border-bluesales border-[1px] flex items-center justify-center gap-6">
//                       <svg className="flex-shrink-0" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7.12 10.79C8.56 13.62 10.88 15.93 13.71 17.38L15.91 15.18C16.18 14.91 16.58 14.82 16.93 14.94C18.05 15.31 19.26 15.51 20.5 15.51C21.05 15.51 21.5 15.96 21.5 16.51V20C21.5 20.55 21.05 21 20.5 21C11.11 21 3.5 13.39 3.5 4C3.5 3.45 3.95 3 4.5 3H8C8.55 3 9 3.45 9 4C9 5.25 9.2 6.45 9.57 7.57C9.68 7.92 9.6 8.31 9.32 8.59L7.12 10.79Z" fill="#0B0A0A"/>
//                       </svg>
//                       <input type="text" placeholder="Позвонить" className="max-w-[150px] font-Onest font-normal text-black-dark 2xl:text-2xl xl:text-20px md:text-[20px] sm:text-[18px] text-[16px] focus:outline-none
//                       2xl:leading-[32.4px] xl:leading-[27px] md:leading-[27px] sm:leading-[23.4px] leading-[21.6px] placeholder:text-black-dark uppercase">
//                     </div>
//                     <div className="p-8 sm:h-auto h-[88px] rounded-[999px] sm:w-[50%] w-full border-bluesales border-[1px] flex items-center justify-center gap-6">
//                       <svg className="flex-shrink-0" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0094 5.85828C18.2101 5.77105 18.4297 5.74097 18.6454 5.77116C18.8612 5.80135 19.0651 5.89071 19.2361 6.02994C19.407 6.16918 19.5387 6.35319 19.6174 6.56284C19.6962 6.77248 19.7191 7.00008 19.6837 7.22196L17.8421 18.7596C17.6635 19.8725 16.4812 20.5107 15.4931 19.9564C14.6664 19.4926 13.4387 18.778 12.3344 18.0325C11.7823 17.6593 10.0909 16.4641 10.2988 15.6137C10.4774 14.8866 13.3194 12.1542 14.9433 10.5297C15.5807 9.89146 15.2901 9.52328 14.5373 10.1104C12.6681 11.568 9.66703 13.7846 8.67478 14.4086C7.79945 14.9587 7.34311 15.0527 6.79746 14.9587C5.80196 14.7876 4.87872 14.5226 4.1252 14.1997C3.10696 13.7636 3.15649 12.3177 4.12439 11.8967L18.0094 5.85828Z" fill="#0B0A0A"/>
//                       </svg>
//                       <input type="text" placeholder="Написать" className="uppercase max-w-[150px] font-Onest font-normal text-black-dark 2xl:text-2xl xl:text-20px md:text-[20px] sm:text-[18px] text-[16px] focus:outline-none
//                       2xl:leading-[32.4px] xl:leading-[27px] md:leading-[27px] sm:leading-[23.4px] leading-[21.6px] placeholder:text-black-dark">
//                     </div>
//                   </div>
//                   <input type="text" placeholder="Placeholder" className="sm:h-auto h-[88px] mt-[20px] p-8 rounded-[999px] w-full border-bluesales border-[1px] font-Onest font-normal text-black-dark 2xl:text-2xl xl:text-20px md:text-[20px] sm:text-[18px] text-[16px] focus:outline-none
//                   2xl:leading-[32.4px] xl:leading-[27px] md:leading-[27px] sm:leading-[23.4px] leading-[21.6px] placeholder:text-black-light uppercase">
//                   <button type="submit" className="font-Onest rounded-[150px] font-normal text-black bg-green p-8 2xl:text-2xl xl:text-20px md:text-[20px] sm:text-[18px] text-[16px] 2xl:leading-[32.4px] xl:leading-[27px] md:leading-[27px] sm:leading-[23.4px] leading-[21.6px] 2xl:mt-9 mt-[20px] w-full">
//                     ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
//                   </button>
//                 </form>
//               </div>
//             </div>
//             <div className="2xl:max-w-[777px] w-full">
//               <img className="2xl:max-w-[777px] xl:max-w-[634px] w-full 2xl:rounded-[35px] md:rounded-[20px] rounded-[4px]" src="./assets/images/contact.png" alt=""/>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   </div>
//     )
// }