import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';

function App(){
  const refDashboard = useRef(null);
  const scrollView = (ref) => ref.current?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  const Header = () => {
    function NavTab(props){
      return(
        <li className='py-3 px-5 mx-5 mr-20 hidden md:block text-lg text-emerald-500 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-green-500 hover:text-white transition duration-500 ease-in-out cursor-pointer'>{props.label}</li>
      );
    }
    function MenuTab(props){
      return(
        <li className='py-3 px-5 mx-5 mr-20 block md:hidden text-lg text-emerald-500 font-semibold rounded-lg hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-green-500 hover:text-white transition duration-500 ease-in-out cursor-pointer'>{props.label}</li>
      );
    }
    return (
      <nav className='w-full h-20 bg-slate-50 sticky top-0'>
          <ul className='flex justify-start items-center w-1/2 h-full float-left'>
            <li className='py-3 px-5 ml-6 md:ml-16 text-4xl text-emerald-500 cursor-pointer' style={{fontFamily: 'Mr Dafoe'}}>MyResume</li>
          </ul>
          <ul className='flex justify-end items-center w-1/2 h-full float-right'>
            <NavTab label='Trang Chủ'/>
            <NavTab label='Về tôi'/>
            <NavTab label='Liên Hệ'/>
            <MenuTab label='Menu'/>
          </ul>
      </nav>
    );
  }
  const Wallpaper = () => {
    const title = "Hãy tạo một lý lịch đẹp";
    const content = "MyResume là một công cụ dùng để tạo sơ yếu lý lịch một cách tự động, dựa trên bộ khung có sẵn gồm những thông tin bạn đã nhập. Với các chức năng xem trước lý lịch, xây dựng lý lịch và tải lý lịch trong vòng vài phút.";
    return(
      <div className='h-screen w-full bg-cover bg-center relative' style={{backgroundImage: `url(img/wallpapaper.jpg)`}}>
        <Header/>
        <div className='flex justify-start items-center w-5/6 md:w-3/6 h-full ml-10 md:ml-40'>
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
    const refPreview = useRef(null);
    const [colorstate,setColor] = useState('emerald');
    const [tab,setTab] = useState('');

    var educationList = [];
    const [edulistState,setEducationList] = useState(educationList);
    var aboutmeList = {
      fullname: 'John Doe',
      role: 'Full Stack Web Developer',
      phone: '+84932528310',
      email: 'johndoe@gmail.com',
      address: 'Ho Chi Minh City, Vietnam'
    };
    const [aboutState,setAbout] = useState(aboutmeList);
    var skillsList = ['ReactJS','NodeJS','TailwindCSS','Javascript','HTML','CSS'];
    const [skillsListState,setSkillsList] = useState(skillsList);
    const [profileState, setProfileState] = useState('');
    var workList = [];
    const [worklistState,setWorkList] = useState(workList);
    var projectList = [];
    const [projectlistState,setProjectList] = useState(projectList);
    
    function ColorSelect(props){
      function changeColor(color){
          setColor(color);
      }
      return(
        <li className={`w-12 h-12 mx-2 rounded-full bg-${props.color}-400 cursor-pointer`} onClick={()=>changeColor(props.color)}></li>
      );
    }
    function InputTab(props){
      function changeTab(id){
        setTab(id);
      }
      return(
        <li onClick={()=>changeTab(props.id)} className='py-3 px-5 text-center truncate text-lg text-emerald-500 font-semibold hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-green-500 hover:text-white transition duration-500 ease-in-out cursor-pointer'>{props.label}</li>
      );
    }
    function AboutTab(){
      const [fullname,setFullName] = useState('John Doe');
      const [role,setRole] = useState('Full Stack Web Developer');
      const [phone,setPhone] = useState('+84932528310');
      const [email,setEmail] = useState('johndoe@gmail.com');
      const [address,setAddress] = useState('Ho Chi Minh City, Vietnam');

      const handleFullnameChange = (e) => setFullName(e.target.value);
      const handleRoleChange = (e) => setRole(e.target.value);
      const handlePhoneChange = (e) => setPhone(e.target.value);
      const handleEmailChange = (e) => setEmail(e.target.value);
      const handleAddressChange = (e) => setAddress(e.target.value);
      function pushAboutMe(){
        var object = {
          fullname: fullname,
          role: role,
          phone: phone,
          email: email,
          address: address
        }
        setAbout(object);
      }
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
        <button onClick={pushAboutMe} className='w-52 px-4 py-3 mb-8 border-2 border-emerald-500 bg-white text-emerald-500 text-xl font-semibold rounded-lg hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-green-500 hover:text-white transition duration-500 ease-in-out cursor-pointer'>Cập nhật</button>
        </>
      );
    }
    
    
    function EducationTab(){   
      const [major,setMajor] = useState('');
      const [school,setSchool] = useState('');
      const [datefrom,setDateFrom] = useState('');
      const [dateto,setDateTo] = useState('');  
      const pushEducationList = (e) => {
        if(major === '' || school ==='' || datefrom ==='' || dateto ==='') {
          e.preventDefault();
          alert('Hãy nhập đầy đủ thông tin');
        } 
        else {
          var object = {
            major: major,
            school: school,
            datefrom: datefrom,
            dateto: dateto
          }
          educationList = edulistState;
          setEducationList([...educationList,object]);
        }       
      }
      const removeEducation = (condition) => {
        const filtered = edulistState.filter(item => {
          return item.school !== condition;
        })
        setEducationList(filtered);
      }
      const handleMajorChange = (e) => setMajor(e.target.value);
      const handleSchoolChange = (e) => setSchool(e.target.value);
      const handleDateFromChange = (e) => setDateFrom(e.target.value);
      const handleDateToChange = (e) => setDateTo(e.target.value);
      
      return(
          <>
          <form>
          <div className='grid grid-cols-1 mt-2 mb-4'>
            <div className='w-11/12 h-full'>
              <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Bằng cấp:</label>
              <input type={'text'} onChange={handleMajorChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập đầy đủ họ và tên'></input>
            </div>
            <div className='w-11/12 h-full mt-4'>
              <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Trường:</label>
              <input type={'text'} onChange={handleSchoolChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập vị trí ứng tuyển'></input>
            </div>
            <div className='w-11/12 h-full mt-4 grid grid-cols-2 gap-5'>
              <div className='w-full h-fit'>
                <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Từ năm:</label>
                <input type={'text'} onChange={handleDateFromChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập số điện thoại'></input>
              </div>
              <div className='w-full h-fit'>
                <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Tới năm:</label>
                <input type={'text'} onChange={handleDateToChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập email'></input>
              </div>
            </div>
          </div>
          <div className='h-fit w-full my-4 inline-block'>
          {edulistState.length!==0 ? edulistState.map(items => {
            return(
              <>
              <span className='px-3 py-2 w-fit border mx-2 hover:bg-emerald-300 hover:bg-opacity-50 transition duration-300 ease-in-out border-emerald-400 rounded-lg float-left cursor-pointer'>{items.school} <span onClick={()=>removeEducation(items.school)} className='hover:text-red-500'>&#10005;</span></span>
              </>
            );         
          }):<p></p>}
          </div>
          <div className='grid grid-cols-2 mt-2'>
            {edulistState.length<2 ? <button onClick={pushEducationList} className='w-52 px-4 py-3 mb-8 border-2 border-emerald-500 float-left bg-white text-emerald-500 text-xl font-semibold rounded-lg hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-green-500 hover:text-white transition duration-500 ease-in-out cursor-pointer'>Thêm</button>
            : <p></p>}
          </div>
          </form>
          </>
        );
    }

    function SkillsTab(){   
      const [skills,setSkills] = useState('');
      const pushSkillsList = (e) => {
        if(skills === '') {
          e.preventDefault();
          alert('Hãy nhập đầy đủ thông tin');
        } 
        else {
          var object = [skills]
          skillsList = skillsListState;
          setSkillsList([...skillsList,object]);
        }       
      }
      const removeSkill = (skill) => {
        const filtered = skillsListState.filter(item => {
          return item !== skill;
        })
        setSkillsList(filtered);
      }
      const handleSkillsChange = (e) => setSkills(e.target.value);
      
      return(
          <>
          <form>
          <div className='grid grid-cols-1 mt-2 mb-4'>
            <div className='w-11/12 h-full'>
              <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Kỹ năng:</label>
              <input type={'text'} onChange={handleSkillsChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập kỹ năng'></input>
            </div>
          </div>
          <div className='h-fit w-full inline-block'>
          {skillsListState.length!==0 ? skillsListState.map(items => {
            return(
              <>
              <span className='px-3 py-2 mt-5 w-fit border mx-2 hover:bg-emerald-300 hover:bg-opacity-50 transition duration-300 ease-in-out border-emerald-400 rounded-lg float-left cursor-pointer'>{items} <span onClick={()=>removeSkill(items)} className='hover:text-red-500'>&#10005;</span></span>
              </>
            );         
          }):<p></p>}
          </div>
          <div className='grid grid-cols-2 w-full mt-6'>
            {skillsListState.length<21 ? <button onClick={pushSkillsList} className='w-52 px-4 py-3 mb-8 border-2 border-emerald-500 float-left bg-white text-emerald-500 text-xl font-semibold rounded-lg hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-green-500 hover:text-white transition duration-500 ease-in-out cursor-pointer'>Thêm</button>
            : <p></p>}
          </div>
          </form>
          </>
        );
    }

    function ProfileTab(){   
      const [profile,setProfile] = useState('');
      const pushProfile = (e) => {
        if(profile === '') {
          e.preventDefault();
          alert('Hãy nhập đầy đủ thông tin');
        } 
        else {
          setProfileState(profile);
        }       
      }
      const handleProfileChange = (e) => setProfile(e.target.value);
      
      return(
          <>
          <form>
          <div className='grid grid-cols-1 mt-2 mb-2'>
            <div className='w-11/12 h-full'>
              <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Giới thiệu bản thân:</label>
              <textarea onChange={handleProfileChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập giới thiệu bản thân'></textarea>
            </div>
          </div>
          <div className='grid grid-cols-2 w-full mt-6'>
            {edulistState.length<2 ? <button onClick={pushProfile} className='w-52 px-4 py-3 mb-8 border-2 border-emerald-500 float-left bg-white text-emerald-500 text-xl font-semibold rounded-lg hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-green-500 hover:text-white transition duration-500 ease-in-out cursor-pointer'>Cập nhật</button>
            : <p></p>}
          </div>
          </form>
          </>
        );
    }
    
    function WorkTab(){   
      const [position,setPosition] = useState('');
      const [company,setCompany] = useState('');
      const [employmentType,setEmploymentType] = useState('Full-time');
      const [datefrom,setDateFrom] = useState('');
      const [dateto,setDateTo] = useState('');  
      const [description, setDescription] = useState('');
      const pushEducationList = (e) => {
        if(position === '' || company ==='' || employmentType ==='' || datefrom ==='' || dateto ==='' || description ==='') {
          e.preventDefault();
          alert('Hãy nhập đầy đủ thông tin');
        } 
        else {
          var object = {
            position: position,
            company: company,
            employmentType: employmentType,
            datefrom: datefrom,
            dateto: dateto,
            description: description
          }
          workList = worklistState;
          setWorkList([...workList,object]);
        }       
      }
      const removeWork = (condition) => {
        const filtered = worklistState.filter(item => {
          return item.company !== condition;
        })
        setWorkList(filtered);
      }
      const handlePositionChange = (e) => setPosition(e.target.value);
      const handleCompanyChange = (e) => setCompany(e.target.value);
      const handleEmploymentTypeChange = (e) => setEmploymentType(e.target.value);
      const handleDateFromChange = (e) => setDateFrom(e.target.value);
      const handleDateToChange = (e) => setDateTo(e.target.value);
      const handleDescriptionChange = (e) => setDescription(e.target.value);
      
      return(
          <>
          <form>
          <div className='grid grid-cols-1 mt-2 mb-4'>
            <div className='w-11/12 h-full'>
              <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Vị trí:</label>
              <input type={'text'} onChange={handlePositionChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập vị trí công việc'></input>
            </div>
            <div className='w-11/12 h-full mt-4 grid grid-cols-2 gap-5'>
              <div className='w-11/12 h-full'>
                <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Công ty:</label>
                <input type={'text'} onChange={handleCompanyChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập công ty'></input>
              </div>
              <div className='w-11/12 h-full'>
                <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Loại tuyển dụng:</label>
                <select onChange={handleEmploymentTypeChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out'>
                  <option value={'Full-time'}>Full-time</option>
                  <option value={'Part-time'}>Part-time</option>
                  <option value={'Internship'}>Internship</option>
                  <option value={'Freelance'}>Freelance</option>
                </select>
              </div>
            </div>
            <div className='w-11/12 h-full mt-4 grid grid-cols-2 gap-5'>
              <div className='w-full h-fit'>
                <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Từ năm:</label>
                <input type={'text'} onChange={handleDateFromChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập thời gian'></input>
              </div>
              <div className='w-full h-fit'>
                <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Tới năm:</label>
                <input type={'text'} onChange={handleDateToChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập thời gian'></input>
              </div>
            </div>
            <div className='w-11/12 h-full mt-4'>
              <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Chú thích:</label>
              <textarea onChange={handleDescriptionChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập chú thích'></textarea>
            </div>
          </div>
          <div className='h-fit w-full mb-2 inline-block'>
          {worklistState.length!==0 ? worklistState.map(items => {
            return(
              <>
              <span className='px-3 py-2 w-fit border mx-2 hover:bg-emerald-300 hover:bg-opacity-50 transition duration-300 ease-in-out border-emerald-400 rounded-lg float-left cursor-pointer'>{items.company} <span onClick={()=>removeWork(items.company)} className='hover:text-red-500'>&#10005;</span></span>
              </>
            );         
          }):<p></p>}
          </div>
          <div className='grid grid-cols-2 mt-2'>
            {worklistState.length<5 ? <button onClick={pushEducationList} className='w-52 px-4 py-3 mb-8 border-2 border-emerald-500 float-left bg-white text-emerald-500 text-xl font-semibold rounded-lg hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-green-500 hover:text-white transition duration-500 ease-in-out cursor-pointer'>Thêm</button>
            : <p></p>}
          </div>
          </form>
          </>
        );
    }

    function ProjectTab(){   
      const [projectName,setProjectName] = useState('');
      const [projectURL,setProjectURL] = useState('');
      const [description,setDescription] = useState('');

      const pushEducationList = (e) => {
        if(projectName === '' || projectURL ==='' || description ==='') {
          e.preventDefault();
          alert('Hãy nhập đầy đủ thông tin');
        } 
        else {
          var object = {
            projectName: projectName,
            projectURL: projectURL,
            description: description,
          }
          projectList = projectlistState;
          setProjectList([...projectList,object]);
        }       
      }
      const removeWork = (condition) => {
        const filtered = projectlistState.filter(item => {
          return item.projectName !== condition;
        })
        setProjectList(filtered);
      }
      const handleProjectNameChange = (e) => setProjectName(e.target.value);
      const handleProjectURLChange = (e) => setProjectURL(e.target.value);
      const handleDescriptionChange = (e) => setDescription(e.target.value);
      
      return(
          <>
          <form>
          <div className='grid grid-cols-1 mt-2 mb-4'>
            <div className='w-11/12 h-full'>
              <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Tên dự án:</label>
              <input type={'text'} onChange={handleProjectNameChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập vị trí công việc'></input>
            </div>
            <div className='w-11/12 h-full mt-4'>
              <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>URL:</label>
              <input type={'text'} onChange={handleProjectURLChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập công ty'></input>
            </div>
            <div className='w-11/12 h-full mt-4'>
              <label className='text-emerald-500 text-lg font-semibold text-center mt-10'>Chú thích:</label>
              <textarea onChange={handleDescriptionChange} className='px-3 py-3 mt-2 bg-slate-100 hover:bg-slate-200 rounded-lg w-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transitionn duration-300 ease-in-out' placeholder='Nhập chú thích'></textarea>
            </div>
          </div>
          <div className='h-fit w-full mb-2 inline-block'>
          {projectlistState.length!==0 ? projectlistState.map(items => {
            return(
              <>
              <span className='px-3 py-2 w-fit border mx-2 hover:bg-emerald-300 hover:bg-opacity-50 transition duration-300 ease-in-out border-emerald-400 rounded-lg float-left cursor-pointer'>{items.projectName} <span onClick={()=>removeWork(items.projectName)} className='hover:text-red-500'>&#10005;</span></span>
              </>
            );         
          }):<p></p>}
          </div>
          <div className='grid grid-cols-2 mt-2'>
            {projectlistState.length<4 ? <button onClick={pushEducationList} className='w-52 px-4 py-3 mb-8 border-2 border-emerald-500 float-left bg-white text-emerald-500 text-xl font-semibold rounded-lg hover:bg-gradient-to-r hover:from-teal-500 hover:via-emerald-500 hover:to-green-500 hover:text-white transition duration-500 ease-in-out cursor-pointer'>Thêm</button>
            : <p></p>}
          </div>
          </form>
          </>
        );
    }
    
    function PreviewResume(){   
      return(
        <div className='w-full h-fit mx-auto' ref={refPreview}>
          <div className='w-full h-full'>
            <div className={`w-4/12 h-full float-left bg-${colorstate}-400 pb-20`}>              
                <div className='w-full h-fit'>
                  <div className='w-32 h-32 bg-white mx-auto mt-5 rounded-full'></div>
                  <h2 className='text-4xl font-bold mt-2 text-center'>{aboutState.fullname}</h2>
                  <p className='text-md font-semibold mt-2 text-center'>{aboutState.role}</p>
                </div>
                <div className='ml-5'>
                  <h2 className='text-xl font-bold mt-5'>LIÊN HỆ</h2>
                    <p className='mt-1'>{aboutState.phone}</p>
                    <p className='mt-1'>{aboutState.email}</p>
                    <p className='mt-1'>{aboutState.address}</p>
                  <h2 className='text-xl font-bold mt-7'>HỌC VẤN</h2>
                    {edulistState.length!==0 ? edulistState.map(items => {
                      return(
                        <>
                        <p className='text-lg mt-2'>{items.major}</p>
                        <p>{items.school}</p>
                        <p className='text-start'>{items.datefrom}-{items.dateto}</p>
                        </>
                      );         
                    }):<p></p>}
                    {/* <p className='mt-1' ref={refEducation}></p> */}
                  <h2 className='text-xl font-bold mt-7'>KỸ NĂNG</h2>
                  <ul className='mt-2'>               
                    {skillsListState.length!==0 ? skillsListState.map(items => {
                      return(
                        <>
                        <li>{items}</li>
                        </>
                      );         
                    }):<p>Thêm kỹ năng</p>}
                  </ul>
                </div>
            </div>
            <div className='w-7/12 ml-7 h-fit float-left'>
              <p className='text-xl font-bold mt-5'>HỒ SƠ</p>
              <p>{profileState.length !== 0 ? profileState : 'Thêm giới thiệu bản thân'}</p>
              <p className='text-xl font-bold mt-7 mb-1'>KINH NGHIỆM LÀM VIỆC</p>
                {worklistState.length!==0 ? worklistState.map(items => {
                  return(
                    <>
                    <p className='text-lg mt-2 font-semibold'>{items.position}</p>
                    <p className='text-sm'>{items.company} - {items.employmentType}</p>
                    <p className='text-sm text-start'><i>{items.datefrom} - {items.dateto}</i></p>
                    <p className='text-sm'>{items.description}</p>
                    </>
                  );         
                }):<p>Thêm kinh nghiệm làm việc</p>}               
              <p className='text-xl font-bold mt-7'>DỰ ÁN</p>
              {projectlistState.length!==0 ? projectlistState.map(items => {
                  return(
                    <>
                    <p className='text-lg mt-2 font-semibold'>{items.projectName}</p>
                    <p className='text-sm'>{items.projectURL}</p>
                    <p className='text-sm'>{items.description}</p>
                    </>
                  );         
                }):<p>Thêm dự án đã làm</p>}
            </div>
          </div>
        </div>
      );
    }

    return(
      <div className='w-full h-fit bg-slate-50 inline-block relative' ref={refDashboard}>
        <div className='container h-screen w-11/12 mx-auto relative'>
          <h2 className='text-emerald-500 text-4xl text-center mt-10'>Trình xây dựng lý lịch</h2>
          <div className='w-full h-16 mx-auto mt-7'>
            <ul className='flex justify-start items-center w-full md:w-1/2 h-full float-left'>
              <ColorSelect color="emerald"/>
              <ColorSelect color="cyan"/>
              <ColorSelect color="purple"/>
              <ColorSelect color="rose"/>
              <ColorSelect color="orange"/>
              <ColorSelect color="pink"/>
              <ColorSelect color="gray"/>
            </ul>
            <div className='flex justify-end items-center my-3 md:my-0 w-full md:w-1/2 h-full float-right'>
            <button className='w-full md:w-52 px-4 py-3 text-white text-xl font-semibold rounded-lg bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 transition duration-500 ease-in-out cursor-pointer'>Tải về</button>
            </div>
          </div>
          <div className='w-full h-fit mt-8'>
            <div className='w-full md:w-5/12 h-fit float-left bg-white shadow-lg shadow-gray-400 rounded-lg'>
              <div className='w-full h-full'>
                <nav className='w-full h-fit'>
                  <ul className='grid grid-cols-3 border-b-2 border-emerald-500'>
                    <InputTab label='Về tôi' id='about'/>
                    <InputTab label='Học vấn' id='education'/>
                    <InputTab label='Kỹ năng' id='skills'/>
                    <InputTab label='Hồ sơ' id='profile'/>
                    <InputTab label='Kinh nghiệm' id='work'/>
                    <InputTab label='Dự án' id='projects'/>
                  </ul>
                </nav>
                <div className='container w-11/12 mx-auto mt-5'>
                  {tab === 'about' ? <AboutTab/> :
                  tab === 'education' ? <EducationTab/> :
                  tab === 'skills' ? <SkillsTab/> : 
                  tab === 'profile' ? <ProfileTab/> : 
                  tab === 'work' ? <WorkTab/> : 
                  tab === 'projects' ? <ProjectTab/> : <AboutTab/>}
                </div>
              </div>
            </div>
            <div className='container w-full md:w-7/12 float-left mb-20'>
              <div className='w-full mt-16 md:mt-0 md:w-11/12 h-fit float-right bg-white shadow-lg shadow-gray-400 rounded-lg'>
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

