import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App(){
  const refDashboard = useRef(null);
  const scrollView = (ref) => ref.current?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  const Header = () => {
    function NavTab(props){
      return(
        <li className='py-3 px-5 mx-5 mr-20 text-lg text-emerald-500 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-green-500 hover:text-white transition duration-500 ease-in-out cursor-pointer'>{props.label}</li>
      );
    }
    return (
      <nav className='w-full h-20 bg-slate-50 sticky top-0'>
          <ul className='flex justify-start items-center w-1/2 h-full float-left'>
            <li className='py-3 px-5 ml-16 text-4xl text-emerald-500 cursor-pointer' style={{fontFamily: 'Mr Dafoe'}}>MyResume</li>
          </ul>
          <ul className='flex justify-end items-center w-1/2 h-full float-right'>
            <NavTab label='Trang Chủ'/>
            <NavTab label='Về tôi'/>
            <NavTab label='Liên Hệ'/>
          </ul>
      </nav>
    );
  }
  const Wallpaper = () => {
    const title = "Hãy tạo một lý lịch đẹp";
    const content = "MyResume là một công cụ dùng để tạo sơ yếu lý lịch một cách tự động, dựa trên bộ khung có sẵn gồm những thông tin bạn đã nhập. Với các chức năng xem trước lý lịch, xây dựng lý lịch và tải lý lịch trong vòng vài phút.";
    return(
      <div className='h-screen w-full bg-cover bg-center relative' style={{backgroundImage: `url(/img/wallpapaper.jpg)`}}>
        <Header/>
        <div className='flex justify-start items-center w-3/6 h-full ml-40'>
          <div className='grid grid-cols-1'>
            <h2 className='text-emerald-100 text-5xl'>{title}</h2>
            <p className='text-white text-xl mt-6'>{content}</p>
            <button onClick={()=>scrollView(refDashboard)} className='w-52 px-4 py-3 mt-6 bg-white text-emerald-500 text-xl font-semibold rounded-lg hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-green-500 hover:text-white transition duration-500 ease-in-out cursor-pointer'>Tạo lý lịch ngay</button>
          </div>
        </div>
      </div>
    );
  }
  const Dashboard = () => {
    const refFullname = useRef(null);
    const handleFullnameChange = (e) => e.target.value === '' ?  refFullname.current.innerHTML = 'John Doe' : refFullname.current.innerHTML = e.target.value;
    const refRole = useRef(null);
    const handleRoleChange = (e) => e.target.value === '' ?  refRole.current.innerHTML = 'Full Stack Web Developer' : refRole.current.innerHTML = e.target.value;
    const refPhone = useRef(null);
    const handlePhoneChange = (e) => e.target.value === '' ?  refPhone.current.innerHTML = '+84932528310' : refPhone.current.innerHTML = e.target.value;
    const refEmail = useRef(null);
    const handleEmailChange = (e) => e.target.value === '' ?  refEmail.current.innerHTML = 'johndoe@gmail.com' : refEmail.current.innerHTML = e.target.value;
    const refAddress = useRef(null);
    const handleAddressChange = (e) => e.target.value === '' ?  refAddress.current.innerHTML = 'Ho Chi Minh City, Vietnam' : refAddress.current.innerHTML = e.target.value;
    const refColor = useRef(null);
    function changeColor(color,ref){
        ref.current.removeAttribute('class');
        ref.current.classList.add(`w-4/12`);
        ref.current.classList.add(`h-full`);
        ref.current.classList.add(`float-left`);
        ref.current.classList.add(`bg-${color}-400`);
    }
    var educationList = [
      {
      major: 'Kỹ thuật phần mềm',
      school: 'Đại học Sài gòn',
      datefrom: '2019',
      dateto: '2023'
      },
    ];
    const [edulistState,setEducationList] = useState(educationList);
    
    function ColorSelect(props){
      return(
        <li className={`w-12 h-12 mx-2 rounded-full bg-${props.color}-400 cursor-pointer`} onClick={()=>changeColor(props.color,refColor)}></li>
      );
    }
    function InputTab(props){
      return(
        <li className='py-3 px-5 text-center truncate text-lg text-emerald-500 font-semibold hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-green-500 hover:text-white transition duration-500 ease-in-out cursor-pointer'>{props.label}</li>
      );
    }
    function AboutTab(){
      return(
        <>
        <button className='w-full h-full text-emerald-500 font-semibold py-2 border-2 border-emerald-500 hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-green-500 hover:text-white transition duration-500 rounded-lg'>Upload Image</button>
        <div className='grid grid-cols-2 mt-2 mb-8'>
          <div className='w-11/12 h-full mt-4'>
            <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Họ và tên:</label>
            <input type={'text'} onChange={handleFullnameChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập đầy đủ họ và tên'></input>
          </div>
          <div className='w-11/12 h-full mt-4'>
            <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Vị trí:</label>
            <input type={'text'} onChange={handleRoleChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập vị trí ứng tuyển'></input>
          </div>
          <div className='w-11/12 h-full mt-4'>
            <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Số điện thoại:</label>
            <input type={'text'} onChange={handlePhoneChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập số điện thoại'></input>
          </div>
          <div className='w-11/12 h-full mt-4'>
            <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Email:</label>
            <input type={'text'} onChange={handleEmailChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập email'></input>
          </div>
          <div className='w-11/12 h-full mt-4'>
            <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Địa chỉ:</label>
            <input type={'text'} onChange={handleAddressChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập địa chỉ'></input>
          </div>
        </div>
        </>
      );
    }
    function pushEducationList(){
      setEducationList([...edulistState,
        {
          major: 'Kỹ thuật phần mềm',
          school: 'Đại học Sài Gòn',
          datefrom: '2019',
          dateto: '2023'
        },
      ]);
    }     
    const refMajor = useRef(null);
    function handleMajorChange(index){
      educationList = edulistState;
      educationList[index].major = refMajor.current.value;
      setEducationList(educationList);
      console.log(edulistState);
    }
    const refSchool = useRef(null);
    function handleSchoolChange(index){
      educationList = edulistState;
      educationList[index].school = refSchool.current.value;
      setEducationList(educationList);
      console.log(edulistState);
    }
    const refDateFrom = useRef(null);
    function handleDateFromChange(index){
      educationList = edulistState;
      educationList[index].datefrom = refDateFrom.current.value;
      setEducationList(educationList);
      console.log(edulistState);
    }
    const refDateTo = useRef(null);
    function handleDateToChange(index){
      educationList = edulistState;
      educationList[index].dateto = refDateTo.current.value;
      setEducationList(educationList);
      console.log(edulistState);
    }
    function EducationTab(){     
      // function EducationList(){
      //   return(
      //     educationList.map(items => {
      //       return(
      //         <>
      //         <p className='text-lg mt-2'>{items.major}</p>
      //         <p>{items.school}</p>
      //         <p className='text-start'>{items.datefrom}-{items.dateto}</p>
      //         </>
      //       );         
      //     })
      //   );     
      // }
      let index = -1;
      return(
        edulistState.map(items => {
          index++;
          return(
          <>
          <hr></hr>
          <div className='grid grid-cols-1 mt-2 mb-8'>
            <p>{index}</p>
            <div className='w-11/12 h-full'>
              <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Bằng cấp:</label>
              <input type={'text'} ref={refMajor} onChange={()=>handleMajorChange(index)} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập đầy đủ họ và tên'></input>
            </div>
            <div className='w-11/12 h-full mt-4'>
              <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Trường:</label>
              <input type={'text'} ref={refSchool} onChange={()=>handleSchoolChange(index)} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập vị trí ứng tuyển'></input>
            </div>
            <div className='w-11/12 h-full mt-4 grid grid-cols-2 gap-5'>
              <div className='w-full h-fit'>
                <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Từ năm:</label>
                <input type={'text'} ref={refDateFrom} onChange={()=>handleDateFromChange(index)} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập số điện thoại'></input>
              </div>
              <div className='w-full h-fit'>
                <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Tới năm:</label>
                <input type={'text'} ref={refDateTo} onChange={()=>handleDateToChange(index)} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập email'></input>
              </div>
          </div>
          </div>
          <button onClick={pushEducationList} className='w-52 px-4 py-3 mt-6 bg-white text-emerald-500 text-xl font-semibold rounded-lg hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-green-500 hover:text-white transition duration-500 ease-in-out cursor-pointer'>Thêm</button>
          </>
          )})
        );
    }
    function PreviewResume(){   
      return(
        <div className='w-full h-fit mx-auto'>
          <div className='w-full h-full'>
            <div className='w-4/12 h-full float-left bg-emerald-400' ref={refColor}>              
                <div className='w-full h-fit'>
                  <div className='w-32 h-32 bg-white mx-auto mt-5 rounded-full'></div>
                  <h2 className='text-4xl font-bold mt-2 text-center' ref={refFullname}>John Doe</h2>
                  <p className='text-md font-semibold mt-2 text-center' ref={refRole}>Full Stack Web Developer</p>
                </div>
                <div className='ml-5'>
                  <h2 className='text-xl font-bold mt-5'>LIÊN HỆ</h2>
                    <p className='mt-1' ref={refPhone}>+84932528310</p>
                    <p className='mt-1' ref={refEmail}>johndoe@gmail.com</p>
                    <p className='mt-1' ref={refAddress}>Ho Chi Minh City, Vietnam</p>
                  <h2 className='text-xl font-bold mt-7'>HỌC VẤN</h2>
                    {/* <p className='text-lg mt-2' ref={refMajor}>Kỹ thuật phần mềm</p>
                    <p ref={refSchool}>Đại học Sài Gòn</p>
                    <p className='text-start'><font ref={refDateFrom}>2019</font>-<font ref={refDateTo}>2023</font></p> */}
                    {edulistState.map(items => {
                      return(
                        <>
                        <p className='text-lg mt-2'>{items.major}</p>
                        <p>{items.school}</p>
                        <p className='text-start'>{items.datefrom}-{items.dateto}</p>
                        </>
                      );         
                    })}
                    {/* <p className='mt-1' ref={refEducation}></p> */}
                  <h2 className='text-xl font-bold mt-7'>KỸ NĂNG</h2>
                  <ul className='mt-2'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>TailwindCSS</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
            </div>
            <div className='w-7/12 ml-7 h-fit float-left'>
              <p className='text-xl font-bold mt-5'>HỒ SƠ</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p className='text-xl font-bold mt-7'>KINH NGHIỆM LÀM VIỆC</p>
              <p className='text-xl font-bold mt-7'>DỰ ÁN</p>
            </div>
          </div>
        </div>
      );
    }
    setInterval(PreviewResume,5000);
    return(
      <div className='w-full h-fit bg-slate-50 inline-block' ref={refDashboard}>
        <div className='container w-11/12 mx-auto relative'>
          <h2 className='text-emerald-500 text-4xl text-center mt-10'>Trình xây dựng lý lịch</h2>
          <div className='w-full h-16 mx-auto mt-7'>
            <ul className='flex justify-start items-center w-1/2 h-full float-left'>
              <ColorSelect color="emerald"/>
              <ColorSelect color="cyan"/>
              <ColorSelect color="purple"/>
              <ColorSelect color="rose"/>
              <ColorSelect color="orange"/>
              <ColorSelect color="pink"/>
              <ColorSelect color="gray"/>
            </ul>
            <div className='flex justify-end items-center w-1/2 h-full float-right'>
            <button className='w-52 px-4 py-3 text-white text-xl font-semibold rounded-lg bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 transition duration-500 ease-in-out cursor-pointer'>Tải về</button>
            </div>
          </div>
          <div className='w-full h-fit mt-8 absolute'>
            <div className='w-5/12 h-fit float-left bg-white shadow-lg shadow-gray-400 rounded-lg'>
              <div className='w-full h-full'>
                <nav className='w-full h-fit'>
                  <ul className='grid grid-cols-5 border-b-2 border-emerald-500'>
                    <InputTab label='Về tôi'/>
                    <InputTab label='Học vấn'/>
                    <InputTab label='Kỹ năng'/>
                    <InputTab label='Kinh nghiệm'/>
                    <InputTab label='Dự án'/>
                  </ul>
                </nav>
                <div className='container w-11/12 mx-auto mt-5'>
                  <EducationTab/>
                </div>
              </div>
            </div>
            <div className='container w-7/12 float-left'>
              <div className='w-11/12 h-fit float-right bg-white shadow-lg shadow-gray-400 rounded-lg'>
                <PreviewResume/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return(
  <>
  <Wallpaper/>
  <Dashboard/>
  </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

